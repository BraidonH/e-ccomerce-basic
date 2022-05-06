import React from "react";
import DirectoryComponent from "../../directory/directory.component";
import categories from "../../category-menu/category-menu";

const Home = () => {
  return (
    <div>
      <div className="categories-container">
        {categories.map(({ title, id, imageUrl }) => (
          <DirectoryComponent key={id} category={title} url={imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Home;
