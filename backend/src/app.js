const express = require('express');
const multer = require('multer');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { corsOrigin, dbConfig } = require('./config');

// Création et configuration de l'application Express
const app = express();
const PORT = Number.parseInt(process.env.API_PORT, 10) || 5000;
const allowedCategories = new Set(['infrastructure', 'industrie']);
const allowedMimeTypes = new Set(['image/jpeg', 'image/png', 'image/webp']);
const MAX_UPLOAD_SIZE = 5 * 1024 * 1024;
const INVALID_FILE_TYPE_MESSAGE = 'Invalid file type. Only JPEG, PNG, and WebP images are allowed.';

app.disable('x-powered-by');
app.use(cors({
  origin: corsOrigin,
  credentials: true
}));
app.use(bodyParser.json({ limit: '1mb' }));
app.use('/uploads', express.static('uploads'));

const db = mysql.createConnection(dbConfig);

db.connect(err => {
  if (err) {
    console.error('Erreur de connexion: ' + err.stack);
    process.exit(1);
  }
  console.log('Connecté à la base de données avec l\'id ' + db.threadId);
});

// Configuration de Multer pour le téléchargement des fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: MAX_UPLOAD_SIZE
  },
  fileFilter: (req, file, cb) => {
    if (allowedMimeTypes.has(file.mimetype)) {
      cb(null, true);
      return;
    }
    cb(new Error(INVALID_FILE_TYPE_MESSAGE));
  }
});

// Modèle de référence
const Reference = function(reference) {
  this.logo_path = reference.logo_path;
  this.category = reference.category;
};

Reference.create = (newReference, result) => {
  db.query("INSERT INTO company_references SET ?", newReference, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newReference });
  });
};

Reference.getAll = result => {
  db.query("SELECT * FROM company_references", (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Reference.remove = (id, result) => {
  db.query("DELETE FROM company_references WHERE id = ?", id, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
};

// Contrôleur de référence
const referenceController = {
  addReference: (req, res) => {
    if (!req.file) {
      return res.status(400).send({ message: 'Logo file is required' });
    }
    const category = req.body.category;
    if (!allowedCategories.has(category)) {
      return res.status(400).send({ message: 'Invalid category' });
    }
    const logoPath = req.file.path;
    const newReference = new Reference({ logo_path: logoPath, category });

    Reference.create(newReference, (err, data) => {
      if (err) res.status(500).send({ message: err.message });
      else res.send(data);
    });
  },

  getAllReferences: (req, res) => {
    const category = req.query.category;  // Récupérer la catégorie à partir des paramètres de la requête
    if (category) {
      db.query("SELECT * FROM company_references WHERE category = ?", [category], (err, result) => {
        if (err) {
          res.status(500).send({ message: err.message });
          return;
        }
        res.send(result);
      });
    } else {
      Reference.getAll((err, data) => {
        if (err) res.status(500).send({ message: err.message });
        else res.send(data);
      });
    }
  },

  deleteReference: (req, res) => {
    const id = Number.parseInt(req.params.id, 10);
    if (Number.isNaN(id) || id <= 0) {
      return res.status(400).send({ message: 'Invalid reference id' });
    }

    Reference.remove(id, (err, data) => {
      if (err) res.status(500).send({ message: err.message });
      else res.send({ message: 'Reference was deleted successfully' });
    });
  }
};


// Routes
app.post('/api/references/add', upload.single('logo'), referenceController.addReference);
app.get('/api/references/all', referenceController.getAllReferences);
app.delete('/api/references/delete/:id', referenceController.deleteReference);

app.use((err, req, res, next) => {
  if (err.message === INVALID_FILE_TYPE_MESSAGE) {
    return res.status(400).send({ message: INVALID_FILE_TYPE_MESSAGE });
  }
  if (err instanceof multer.MulterError) {
    const message = err.code === 'LIMIT_FILE_SIZE'
      ? 'File too large. Max size is 5MB.'
      : 'Invalid upload request.';
    return res.status(400).send({ message });
  }
  console.error('Unhandled error:', err.message);
  return res.status(500).send({ message: 'Internal server error' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
