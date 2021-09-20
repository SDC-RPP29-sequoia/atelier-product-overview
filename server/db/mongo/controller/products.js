const Product = require('./models/Product.js');
const Style = require('./models/Style.js');
const Rating = require('./models/Rating.js');

const getProducts = async (req, res) => {
  try {
    const productId = req.query.id;
    // add page and count

    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.send('Getting all products');
};

const getProduct = async (req, res) => {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (product === null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.product = product;
  next();
};

const getStyles = async (req, res) => {
  try {
    // find styles by product id
    const style = await Style.find();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getRatings = async (req, res) => {
  try {

  } catch (err) {

  }
};

module.exports = {
  getProducts,
  getProduct,
  getStyles,
  getRatings
};