const Artisan = require ('../models/artisans');

exports.getAll = async (req, res, next) => {
    
 try {
    const artisan = await Artisan.findAll({
  attributes: { exclude: ['createdAt', 'updatedAt'] }
});
    res.json(artisan);
  } catch (error) {
    console.error('Erreur dans /artisan :', error);
    res.status(500).json({ error: 'Failed to fetch artisan' });
  }
}; 
