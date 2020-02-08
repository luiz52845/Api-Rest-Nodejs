const moogose = require('mongoose');


const Product = moogose.model('Product');


module.exports = {
  async index(req, res) {
   const products = await Product.find();

    return res.json(products);
  }
}