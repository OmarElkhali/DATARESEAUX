import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, TextField, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Snackbar, Alert, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './ReferenceAdmin.css';
import { referenceService, getImageUrl } from '../../services/api';

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
  const [isLoading, setIsLoading] = useState(false);

  const fetchReferences = async () => {
    setIsLoading(true);
    try {
      const res = await referenceService.getAll(selectedCategory);
      // Handle both old API format (array) and new format (with data property)
      const data = res.data.data || res.data;
      setReferences(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching references:', error);
      setSnackbarMessage('Erreur lors du chargement des références');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReferences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setSnackbarMessage('Veuillez sélectionner un fichier');
      setSnackbarSeverity('warning');
      setSnackbarOpen(true);
      return;
    }

    const formData = new FormData();
    formData.append('logo', file);
    formData.append('category', selectedCategory);
    
    setIsLoading(true);
    try {
      await referenceService.add(formData);
      fetchReferences();
      setFile(null);
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      setSnackbarMessage('Référence ajoutée avec succès');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error adding reference:', error);
      setSnackbarMessage('Erreur lors de l\'ajout de la référence');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer cette référence ?')) {
      return;
    }
    
    setIsLoading(true);
    try {
      await referenceService.delete(id);
      fetchReferences();
      setSnackbarMessage('Référence supprimée avec succès');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error deleting reference:', error);
      setSnackbarMessage('Erreur lors de la suppression de la référence');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
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
                    inputProps={{ accept: 'image/*' }}
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
                  >
                    {isLoading ? 'Chargement...' : 'Ajouter'}
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
                      image={getImageUrl(ref.logo_path)}
                      title="Reference Logo"
                      component="img"
                      onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = '/placeholder.png';
                      }}
                      alt="Logo de référence"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {ref.name || 'Référence'}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleDelete(ref.id)}
                        style={{ marginRight: '10px' }}
                        disabled={isLoading}
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
