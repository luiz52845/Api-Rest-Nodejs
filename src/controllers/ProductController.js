const moogose = require('mongoose');


const Product = moogose.model('Product');


module.exports = {

  // metodo para listagem de todos 
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },

  // metodo para ver detalhes
  async show(req, res) {
    const product = await Product.findById(req.params.id)

    return res.json(product)
  },
  /*
    // metodo para criação
    async store(req, res) {
      const product = await Product.create(req.body);
  
      return res.json(product);
    },
    */
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  },

  //metodo para inserir varios dados no banco
  async teste() {

    const product = await Product.create(req.body);


  },

  async store(req, res) {

    for (var i = 0; i < 9; i++) {
      const product = await Product.create(req.body);


    }

  },



}