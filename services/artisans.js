const { Op } = require('sequelize');
const Artisan = require ('../models/artisan');

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


exports.getByName = async (req, res, next) => {
    
 try {
    const {nom} = req.params;
    
    const artisan = await Artisan.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where: {nom: {[Op.like]: `%${nom}%`},
    }});
    

    if (artisan) {
            return res.status(200).json(artisan);
        }
        return res.status(404).json('user_not_found');
    } catch (error) {
      console.error('Erreur dans /artisan :', error);
      res.status(500).json({ error: 'Failed to fetch artisan' });
    }
}; 

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