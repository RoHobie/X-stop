import jersey from "../assets/Category/Jersey.jpg";
import gym from "../assets/Category/Gym.jpg";
import shoes from "../assets/Category/Shoes.jpg";
import sports from "../assets/Category/Sports.jpg";
import Category from "../components/Category";

const Cateogries = () => {
  const categoryArray = [
    { id: 1, src: jersey, title: "Jerseys & Apparel",text:"text-fuchsia-500" },
    { id: 2, src: gym, title: "Gym Equipment",text:"text-red-500" },
    { id: 3, src: shoes, title: "Sports Shoes",text:"text-blue-500" },
    { id: 4, src: sports, title: "Sport Equipment",text:"text-yellow-500" },
  ];

  return (
    <>
      <h1 className="font-montserrat sm:text-4xl font-bold uppercase italic mb-5 md:mb-10">
        Shop By Category
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {categoryArray.map((item) => (
          <Category key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Cateogries;
