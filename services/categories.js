const Categorie = require ('../models/categories');

exports.getAll = async (req, res, next) => {
    
 try {
    const categorie = await Categorie.findAll({
  attributes: { exclude: ['createdAt', 'updatedAt'] }
});
    res.json(categorie);
  } catch (error) {
    console.error('Erreur dans /artisan :', error);
    res.status(500).json({ error: 'Failed to fetch artisan' });
  }
}; 
