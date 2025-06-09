const Spec = require ('../models/specialites');

exports.getAll = async (req, res, next) => {
    
 try {
    const spec = await Spec.findAll({
  attributes: { exclude: ['createdAt', 'updatedAt'] }
});
    res.json(spec);
  } catch (error) {
    console.error('Erreur dans /artisan :', error);
    res.status(500).json({ error: 'Failed to fetch artisan' });
  }
}; 
