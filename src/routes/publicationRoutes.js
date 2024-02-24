const express = require('express');
const router = express.Router();
// Require controller modules.
const publicationController = require('../controllers/publicationController');


router.get('/publication',publicationController.getAllPublications);

router.get('/publication/:idpub', publicationController.getPublicationById);

router.post('/publication', publicationController.createPublication);

router.put('/publication/:idpub', publicationController.updtaePublicationById);

router.delete('/publication/:idpub',  publicationController.deletePublication)

module.exports = router;