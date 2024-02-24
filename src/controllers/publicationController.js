const Publication = require('../models/publication')

const getAllPublications = async (req, res) => {
    try{

        const publications = await Publication.findAll();
        res.json(publications)
    } catch(error){
        res.status(500).json({message: error.message})
    };
}

const getPublicationById = async (req, res) => {
    const idpub = req.parms.idpub;
    try{

        const publication = await Publication.findByPk(idpub);
        if(publication){
        res.json(publication)
        } else {
            res.status(404).json({message:"publication not found"});
        }
    } catch(error){
        res.status(500).json({message: error.message})
    };
}


const createPublication = async(req, res) => {
    try{
        const publication = await Publication.create(req.body);
        res.status(201).json(publication);
    } catch(error){
        res.status(500).json({error: error.message})
    }
}


const updtaePublicationById = async (req, res) => {
    const idpub = req.parms.idpub;
    try{

        const publication = await Publication.findByPk(idpub);
        if(publication){
            await publication.update(req.body)
        res.json(publication)
        } else {
            res.status(404).json({message:"publication not found"});
        }
    } catch(error){
        res.status(500).json({message: error.message})
    };
}

const  deletePublication = async (req, res) => {
    const idpub = req.parms.idpub
    try{

    const publication = await Publication.findByPk(idpub);
        if(publication){
            await publication.destroy()
        res.json({message:'publication delete'})
        } else {
            res.status(404).json({message:"publication not found"});
        }
    } catch(error){
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getAllPublications,
    getPublicationById,
    createPublication,
    updtaePublicationById,
    deletePublication
}