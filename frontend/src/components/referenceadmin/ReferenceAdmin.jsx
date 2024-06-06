import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, TextField, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Snackbar, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './ReferenceAdmin.css';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: 1400,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: 24,
  },
  toolbar: {
    minHeight: 64,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  button: {
    marginTop: 10,
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const ReferenceAdmin = () => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [references, setReferences] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [selectedCategory, setSelectedCategory] = useState('infrastructure');

  const fetchReferences = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/references/all?category=${selectedCategory}`);
      setReferences(res.data);
    } catch (error) {
      console.error('Error fetching references:', error);
    }
  };

  useEffect(() => {
    fetchReferences();
  }, [selectedCategory]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('logo', file);
    formData.append('category', selectedCategory);
    try {
      await axios.post('http://localhost:5000/api/references/add', formData);
      fetchReferences();
      setSnackbarMessage('Référence ajoutée avec succès');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error adding reference:', error);
      setSnackbarMessage('Erreur lors de l\'ajout de la référence');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/references/delete/${id}`);
      fetchReferences();
      setSnackbarMessage('Référence supprimée avec succès');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error deleting reference:', error);
      setSnackbarMessage('Erreur lors de la suppression de la référence');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Admin Panel
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={drawerOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div>
            <List>
              <ListItem button>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="References" />
              </ListItem>
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Container>
            <Typography variant="h4" gutterBottom>
              Ajouter une Référence
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="file"
                    onChange={handleFileChange}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="Catégorie"
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    fullWidth
                    variant="outlined"
                  >
                    <MenuItem value="infrastructure">Infrastructure</MenuItem>
                    <MenuItem value="industrie">Industrie</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Ajouter
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Grid container spacing={4} style={{ marginTop: '20px' }}>
              {references.map((ref) => (
                <Grid item key={ref.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={`http://localhost:5000/${ref.logo_path}`}
                      title="Reference Logo"
                      component="img"
                      onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = 'http://localhost:5000/images/placeholder.png';
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {ref.name}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleDelete(ref.id)}
                        style={{ marginRight: '10px' }}
                      >
                        Supprimer
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default ReferenceAdmin;
