const router = require('express').Router();

router.get('/', (req, res) => res.json({ error: 'Datos no encontrados' }));

module.exports = router;