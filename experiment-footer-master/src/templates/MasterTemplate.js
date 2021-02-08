import React from "react";
import "./MasterTemplate.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

const MasterTemplate = (props) => {
  return (
    <div className="MasterTemplate">
      <Header />
      <Content>
        <h1>Hello</h1>
      </Content>
      <Footer />
    </div>
  );
};

export default MasterTemplate;
