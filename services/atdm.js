const Artisan = require ('../models/artisan');

exports.artisansDuMois = async (req, res, next) => {
  try {
    const atdm= await Artisan.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where: { top: 1, },
    });
    res.json(atdm);
      } catch (error) {
    console.error('Erreur dans /artisan :', error);
    res.status(500).json({ error: 'Failed to fetch artisan' });

  }
};