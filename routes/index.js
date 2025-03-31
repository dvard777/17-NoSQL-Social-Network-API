const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Optional: A default route for unknown endpoints
router.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = router;
