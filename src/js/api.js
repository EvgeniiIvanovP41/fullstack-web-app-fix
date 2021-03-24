/* eslint-disable arrow-body-style */

export async function getAllProducts() {
  try {
    const url = 'http://localhost:80/products';
    const response = await fetch(url);
    const products = await response.json();
    return products;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`http://localhost:80/product/${id}`, {
      method: 'DELETE',
    });
    return response.ok;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function addProduct(product) {
  try {
    const response = await fetch('http://localhost:80/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(product),
    });
    return response.ok;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function editProduct(id, product) {
  try {
    const response = await fetch(`http://localhost:80/product/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(product),
    });
    return response.ok;
  } catch (err) {
    console.log(err);
    return false;
  }
}
