import React from "react";
import TopMenu from "./TopMenu";
import Header from "./Header";
import PricingBox from "./PricingBox";
import Footer from "./Footer";
import "./pricing.css";

const Pricing = () => {
  return (
    <>
      <TopMenu />
      <Header
        title="Pricing Based on Results"
        description="Industry leading features. No annual contracts. All plans come with a 14 day FREE trial. No credit card required."
      />

      <div className="container">
        <PricingBox />
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
