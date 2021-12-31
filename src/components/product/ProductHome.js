import React, { useState } from "react";
import productListData from "../../productListData";
import ProductListCard from "./ProductListCard";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import "../user/userhome.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductHome = () => {
  const [products, setProducts] = useState(productListData);

  const addProduct = (product) => {
    product.id = products.length + 1;
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialProduct = { id: null, pic: " ", Pname: " " ,price: " "};

  const [currentProduct, setCurrentProduct] = useState(initialProduct);

  const editProduct = (id, product) => {
    setEditing(true);
    setCurrentProduct(product);
  };

  const updateProduct = (newProduct) => {
    setProducts(
      products.map((product) => (product.id === currentProduct.id ? newProduct : product))
    );
    setCurrentProduct(initialProduct);
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>Product Component</h1>
      <div className="row">
        <div className="container">
          {editing ? (
            <div>
              <h2>Edit Product</h2>
              <EditProduct
                currentUser={currentProduct}
                setEditing={setEditing}
                updateProduct={updateProduct}
              />
            </div>
          ) : (
            <div className="container">
              <h2>Add Product</h2>
              <AddProduct addProduct={addProduct} />
            </div>
          )}
        </div>
        <div className="container">
          <h2>View Product</h2>
          <ProductListCard
            products={products}
            deleteProduct={deleteProduct}
            editProduct={editProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductHome;