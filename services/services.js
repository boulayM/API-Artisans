const Artisan = require ('../models/artisan');


exports.artisansServices = async (req, res, next) => {
  try {
    const aliment= await Artisan.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where: { categorie: 'Services', },
    });
    res.json(aliment);
      } catch (error) {
    console.error('Erreur dans /artisan :', error);
    res.status(500).json({ error: 'Failed to fetch artisan' });

  }
};
