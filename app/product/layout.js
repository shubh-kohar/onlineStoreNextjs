import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default ProductLayout;
