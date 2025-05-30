const Artisan = require ('../models/artisans');

exports.getAll = async (req, res, next) => {
    

    try {

        let artisans = await Artisan.findAll();

        if (artisans) {

            return res.status(200).json(artisans);
        }
        return res.status(404).json('artisans_not_found');

    } catch (error) {

        return res.status(501).json('error');

    }
};