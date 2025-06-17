const Artisan = require ('../models/artisan');

exports.getById = async (req, res) => {

const id = req.params.id;

try {
    const artisan = await Artisan.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'], },
    });
    res.json(artisan);
      } catch (error) {
    console.error('Erreur dans /artisan :', error);
    res.status(500).json({ error: 'Failed to fetch artisan' });

  }
};