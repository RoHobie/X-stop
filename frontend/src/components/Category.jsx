import React from "react";

const Category = ({ item }) => {
  return (
    <div className="h-48 md:h-80 relative outline-4  overflow-hidden transition duration-300">
      <img
        src={item.src}
        alt={item.title}
        className={`
            w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-125 transition duration-200`}
      />
      <p className={`${item.text} absolute top-3 left-2 font-poppins font-bold text-black text-2xl`}>
        {item.title}
      </p>
    </div>
  );
};

export default Category;
