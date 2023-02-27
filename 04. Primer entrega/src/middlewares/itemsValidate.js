const ItemsValidate = (title, description, code, stock, category, price) => {
  try {
    if (!title || !description || !code || !stock || !category || !price) return true;
    else if (price < 0) return true;
    else if (stock < 0) return true;
    else return false;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = ItemsValidate;
