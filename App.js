import React, { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "A high-end smartphone with amazing features and top-notch performance.",
    price: "$1399",
    image: "https://tse4.mm.bing.net/th?id=OIP.iybtnI2ypCtm4PjWSUishgHaFP&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Laptop",
    description: "A powerful laptop suitable for gaming and professional work.",
    price: "$5699",
    image: "https://tse3.mm.bing.net/th?id=OIP.xeeIN3RatdJQRJd3NWJ1hAHaFs&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling headphones for an immersive audio experience.",
    price: "$999",
    image: "https://tse3.mm.bing.net/th?id=OIP.VKQ__hT5n6GNtqYvzlItVgHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "A sleek smartwatch with fitness tracking and connectivity features.",
    price: "$1699",
    image: "https://tse1.mm.bing.net/th?id=OIP.Ky0UffmBuKsnHn7e3dt9nwHaD1&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    name: "Camera",
    description: "A DSLR camera for capturing professional-grade photos.",
    price: "$7299",
    image: "https://tse4.mm.bing.net/th?id=OIP._rqJeMEVHhuyWCsE8WF0gAHaEK&pid=Api&P=0&h=180",
  },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce Store</h1>
      </header>
      <div className="container">
        <div className="products">
          <h2>Products</h2>
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: selectedProduct?.id === product.id ? "#1976d2" : "#fff",
                color: selectedProduct?.id === product.id ? "#fff" : "#000",
                cursor: "pointer",
                width: "350px",
                height: "100px",
                boxSizing: "border-box",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "60px",
                  height: "60px",
                  marginRight: "10px",
                  borderRadius: "50%",
                }}
              />
              <div>
                <strong>{product.name}</strong>
                <p>{product.price}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="details">
          <h2>Details</h2>
          {selectedProduct ? (
            <>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={{
                  width: "400px",
                  height: "300px",
                  marginBottom: "20px",
                }}
              />
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.description}</p>
              <h4>Price: {selectedProduct.price}</h4>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </>
          ) : (
            <p>Select a product to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;