import { useState, useEffect } from "react";
import categories from "./category-menu/category-menu";
import DirectoryComponent from "./directory/directory.component.jsx";

const App = () => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <DirectoryComponent key={id} category={title} url={imageUrl} />
      ))}
    </div>
  );
};
export default App;
