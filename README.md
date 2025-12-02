# DATARESEAUX

Site web d'entreprise pour DATARESEAUX, spécialisée dans les réseaux électriques (courant fort/faible).

## 📋 Description

DATARESEAUX est une application web complète comprenant :
- Un **frontend React** pour l'interface utilisateur
- Un **backend Node.js/Express** avec API REST
- Une base de données **MySQL** pour la persistance des données

## 🛠️ Technologies

### Frontend
- React 18
- React Router DOM
- Axios
- Material-UI (MUI)
- CSS Modules

### Backend
- Node.js
- Express.js
- MySQL2 avec connection pooling
- Multer (gestion des uploads)
- Helmet (sécurité HTTP)
- Express Rate Limit (protection contre les attaques)
- Express Validator (validation des données)

## 📦 Installation

### Prérequis
- Node.js >= 18.0.0
- MySQL >= 8.0
- npm ou yarn

### 1. Cloner le repository
```bash
git clone https://github.com/OmarElkhali/DATARESEAUX.git
cd DATARESEAUX
```

### 2. Configuration du Backend

```bash
cd backend
npm install
```

Créer un fichier `.env` basé sur `.env.example`:
```bash
cp .env.example .env
```

Configurer les variables d'environnement dans `.env`:
```env
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_NAME=datareseauxdb
PORT=5000
NODE_ENV=development
SESSION_SECRET=votre_secret_key
AUTH_PORT=3001
```

### 3. Configuration de la Base de Données

Importer le schéma de base de données:
```bash
mysql -u root -p < datareseauxdb.sql
```

### 4. Configuration du Frontend

```bash
cd frontend
npm install
```

Créer un fichier `.env` basé sur `.env.example`:
```bash
cp .env.example .env
```

Variables d'environnement frontend:
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_AUTH_URL=http://localhost:3001
```

## 🚀 Démarrage

### Backend
```bash
cd backend

# Serveur API principal (port 5000)
npm start

# Serveur d'authentification (port 3001)
npm run start:auth

# Mode développement avec rechargement automatique
npm run dev
```

### Frontend
```bash
cd frontend
npm start
```

L'application sera disponible sur:
- Frontend: http://localhost:3000
- API Backend: http://localhost:5000
- Auth Server: http://localhost:3001

## 📁 Structure du Projet

```
DATARESEAUX/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js        # Configuration de la base de données
│   │   ├── controllers/
│   │   │   └── referenceController.js
│   │   ├── models/
│   │   │   └── Reference.js
│   │   ├── routes/
│   │   │   ├── index.js
│   │   │   └── referenceRoutes.js
│   │   ├── middleware/
│   │   │   ├── errorHandler.js    # Gestion centralisée des erreurs
│   │   │   ├── validation.js      # Validation des entrées
│   │   │   └── upload.js          # Configuration Multer
│   │   ├── utils/
│   │   │   └── helpers.js
│   │   ├── app.js                 # Serveur API principal
│   │   └── server.js              # Serveur d'authentification
│   ├── uploads/                   # Fichiers uploadés
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── shared/
│   │   │   │   ├── ErrorBoundary/
│   │   │   │   ├── LoadingSpinner/
│   │   │   │   └── ServiceSection/
│   │   │   └── ... (autres composants)
│   │   ├── services/
│   │   │   └── api.js             # Service API centralisé
│   │   ├── assets/
│   │   └── App.js
│   ├── .env.example
│   └── package.json
├── datareseauxdb.sql              # Schéma de base de données
└── README.md
```

## 🔌 API Endpoints

### Références
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/references/all` | Récupérer toutes les références |
| GET | `/api/references/all?category=industrie` | Filtrer par catégorie |
| POST | `/api/references/add` | Ajouter une référence |
| DELETE | `/api/references/delete/:id` | Supprimer une référence |

### Authentification
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| POST | `/login` | Connexion utilisateur |
| GET | `/checkAuth` | Vérifier l'authentification |
| POST | `/logout` | Déconnexion |

### Health Check
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/health` | Vérifier l'état du serveur |

## 🔒 Sécurité

Le projet implémente plusieurs mesures de sécurité :
- **Helmet** : Headers HTTP sécurisés
- **Rate Limiting** : Protection contre les attaques par force brute
- **Validation des entrées** : express-validator
- **Variables d'environnement** : Pas de secrets dans le code
- **Session sécurisée** : Configuration httpOnly et secure cookies

## 🧪 Tests

```bash
# Frontend
cd frontend
npm test

# Backend (à implémenter)
cd backend
npm test
```

## 📝 Scripts Disponibles

### Backend
- `npm start` - Démarrer le serveur API
- `npm run start:auth` - Démarrer le serveur d'authentification
- `npm run dev` - Mode développement avec nodemon

### Frontend
- `npm start` - Démarrer en développement
- `npm run build` - Build de production
- `npm test` - Lancer les tests
- `npm run deploy` - Déployer sur GitHub Pages

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 👥 Auteurs

- **Omar Elkhali** - [OmarElkhali](https://github.com/OmarElkhali)
