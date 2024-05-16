"use client";
const Category = () => {
  const categoryList = [
    {
      name: "Telefon",
    },
    {
      name: "Telefon",
    },
    {
      name: "Telefon",
    },
    {
      name: "Telefon",
    },
    {
      name: "Telefon",
    },
    {
      name: "Telefon",
    },
  ];
  return (
    <div>
      {categoryList.map((category, index) => (
        <div key={index}>{category.name}</div>
      ))}
    </div>
  );
};

export default Category;
