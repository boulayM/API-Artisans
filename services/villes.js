const Ville = require ('../models/villes');

exports.getAll = async (req, res, next) => {
    
 try {
    const ville = await Ville.findAll({
  attributes: { exclude: ['createdAt', 'updatedAt'] }
});
    res.json(ville);
  } catch (error) {
    console.error('Erreur dans /artisan :', error);
    res.status(500).json({ error: 'Failed to fetch artisan' });
  }
}; 
