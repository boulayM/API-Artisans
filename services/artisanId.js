const Artisan = require ('../models/artisan');


exports.getById = async (req, res, next) => {
    
 try {
    const id = req.params.id;
    const artisan = await Artisan.findByPk(id);
    res.json(artisan);
  } catch (error) {
    console.error('Erreur dans /artisan :', error);
    res.status(500).json({ error: 'Failed to fetch artisan' });
  }
}; 
