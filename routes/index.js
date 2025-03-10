const express = require('express');
const path = require('path');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/dashboard', userController.isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '../views/dashboard.html'));
});

router.get('/documents', userController.isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '../views/documents.html'));
});

router.get('/contacts', userController.isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contacts.html'));
});

router.get('/chat', userController.isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '../views/chat.html'));
});

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/logout', userController.logout);

module.exports = router;