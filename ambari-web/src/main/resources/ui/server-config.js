const express = require('express');
const path = require('path');

module.exports = function(app) {
  // Serve static files for latest
  app.use('/latest', express.static(path.join(__dirname, 'latest/dist')));

  // Serve static files for classic
  app.use('/classic', express.static(path.join(__dirname, 'classic')));

  // Root route handler - serve index.html for root path
  app.get('/', (req, res) => {
    // Check if the request has a hash
    const hasHash = req.url.includes('#');
    
    if (hasHash) {
      // If hash is #/login, redirect to classic login
      if (req.url.includes('#/login')) {
        res.redirect('/classic/#/login');
      } else {
        // For other hash routes, redirect to classic with the hash
        res.redirect('/classic' + req.url);
      }
    } else {
      // No hash, serve the React app
      res.redirect('/latest');
    }
  });

  // Handle /latest route
  app.get('/latest/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'latest/dist/index.html'));
  });

  // Handle /classic route
  app.get('/classic/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'classic/index.html'));
  });

  // Fallback handler
  app.use((req, res, next) => {
    if (req.url.startsWith('/latest')) {
      res.sendFile(path.join(__dirname, 'latest/dist/index.html'));
    } else if (req.url.startsWith('/classic')) {
      res.sendFile(path.join(__dirname, 'classic/index.html'));
    } else {
      // For any other routes without /latest or /classic prefix
      res.redirect('/latest');
    }
  });
}; 