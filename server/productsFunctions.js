/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars*/

const fs = require('fs');

module.exports.getAllProducts = function getAllProducts(fileJSON) {
  try {
    return JSON.parse(
      fs.readFileSync(fileJSON, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return false;
        }
      })
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports.getProductById = function getProductById(fileJSON, id) {
  try {
    let products = JSON.parse(
      fs.readFileSync(fileJSON, 'utf-8', (err, data) => {
        if (err) {
          console.error(err);
          return false;
        }
      })
    );
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        return products[i];
      }
    }
    return true;
  } catch (err) {
    console.error(err);
  }
};

module.exports.addNewProduct = function addNewProduct(fileJSON, newProduct) {
  let productsList;
  try {
    productsList = JSON.parse(
      fs.readFileSync(fileJSON, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        }
      })
    );
  } catch (err) {
    console.error(err);
  }
  productsList.push(newProduct);
  fs.writeFileSync(fileJSON, JSON.stringify(productsList), (err) => {
    if (err) {
      console.error(err);
    }
  });
};

module.exports.deleteProduct = function deleteProduct(fileJSON, id) {
  try {
    const products = JSON.parse(
      fs.readFileSync(fileJSON, 'utf-8', (err, data) => {
        if (err) {
          console.error(err);
          return false;
        }
      })
    );
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1);
        break;
      }
    }
    fs.writeFileSync(fileJSON, JSON.stringify(products), (err) => {
      if (err) {
        console.error(err);
      }
    });
    return true;
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateProduct = function updateProduct(fileJSON, id, newProduct) {
  let productsList;
  try {
    productsList = JSON.parse(
      fs.readFileSync(fileJSON, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        }
      })
    );
  } catch (err) {
    console.error({ error: 'Caanot read file' });
  }
  let productindex = productsList.findIndex((element, index, array) => {
    if (element.id === id) {
      return true;
    }
  });
  if (productindex !== -1) {
    productsList[productindex] = newProduct;
    fs.writeFileSync(fileJSON, JSON.stringify(productsList), (err) => {
      if (err) {
        console.error(err);
      }
    });
  } else {
    console.error(err);
  }
  productsList[productindex] = newProduct;
  fs.writeFileSync(fileJSON, JSON.stringify(productsList), (err) => {
    if (err) {
      console.error(err);
    }
  });
};
