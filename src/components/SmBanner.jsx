import React from "react";

const SmBanner = () => {
  return (
    <section className="smBanner-container">
      <div className="smBanner-box">
        <div className="smBanner-blur">
          <h4>crazy deals</h4>
          <h2>Buy 1 get 1 Free</h2>
          <span>The best classic dress is on sale at Bucki</span>
          <button className="white">Learn More</button>
        </div>
      </div>
      <div className="smBanner-box smBanner-box2">
        <div className="smBanner-blur">
          <h4>spring/summer</h4>
          <h2>Upcomming Season</h2>
          <span>The best classic dress is on sale at Bucki</span>
          <button className="white">Collection</button>
        </div>
      </div>
    </section>
  );
};

export default SmBanner;
