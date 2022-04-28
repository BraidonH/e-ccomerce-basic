import React from "react";

const DirectoryComponent = ({ key, url, category }) => {
  return (
    <div key={key} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${url})`,
        }}
      />
      <div className="category-body-container">
        <h2>{category}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryComponent;
