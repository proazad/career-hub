import { useEffect, useState } from "react";
import Category from "../Category/Category";
const JobCategories = () => {
  const [categries, setCategories] = useState([]);
  useEffect(() => {
    fetch("./data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="container mx-auto my-20">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-extrabold">Job Category List</h2>
        <p className="text-base font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your futur
        </p>
      </div>
      <div className="grid grid-cols-4 gap-10 my-8">
        {categries.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
