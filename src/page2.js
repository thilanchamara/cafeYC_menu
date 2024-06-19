import React from 'react'
import burgerImg from './assets/burger1.jpg'; 
import bubbleTeaImg from './assets/bubbleTea1.png'; 
import icedTeaImg from './assets/icedTea1.jpg'; 
import icedCoffeeImg from './assets/icedCofee1.jpg'; 
import hotBeverageImg from './assets/hotDrink1.jpeg'; 
import sandwichesImg from './assets/sandwich1.jpg'; 
import dessertImg from './assets/dessert1.jpg'; 
import Logo from "./assets/logo.jpg"

const page2 = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4 ">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">MENU</h1>
        <p className="text-lg border-b font-semibold text-red-400">Your resturant name</p>
        <p className="text-sm font-bold">Open Hours: 10am - 9.30pm</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Section title="BURGER" imageUrl={burgerImg} items={[
            { name: "Veg burger", price: 1100 },
            { name: "Chicken Burger", price: 1400 },
            { name: "Beef Burger", price: 1500 },
            { name: "Crispy chicken burger", price: 1500 },
            { name: "Double cheese injection burger", price: 1600 },
            { name: "FAB tower burger", price: 2800 },
            { name: "FAB Tower Injection burger", price: 3000 },
            { name: "All mix tower burger", price: 3500 }
          ]} />

          <Section title="SANDWICHES & SUBMARINES" imageUrl={sandwichesImg} items={[
            { name: "Chicken submarine", price: 1500 },
            { name: "Beef submarine", price: 1800 },
            { name: "Club sandwiches", price: 1500 }
          ]} />

          <Section title="DESSERT" imageUrl={dessertImg} items={[
            { name: "SIZZLIAN BROWNIE WITH ICE CREAM", price: 1400 },
            { name: "Ice cream", price: 1200 },
            { name: "FAB CEYLON Swiss roll", price: 1400 }
          ]} />
          <div className="mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300">
              <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <Section title="BUBBLE TEA" imageUrl={bubbleTeaImg} items={[
            { name: "Vanilla", price: 1100 },
            { name: "Chocolate", price: 1100 },
            { name: "Green tea", price: 1100 },
            { name: "Mocha", price: 1100 },
            { name: "Mango", price: 1100 },
            { name: "Mixed Fruit", price: 1100 }
          ]} />

          <Section title ="ICED TEA" imageUrl={icedTeaImg} items={[
            { name: "Lime iced tea", price: 1000 },
            { name: "Ginger iced tea", price: 1000 },
            { name: "Sparkling Ceylon Peach green tea", price: 1000 },
            { name: "Sparkling Ceylon wild berry tea", price: 1000 }
          ]} />

          <Section title="ICED COFFEE" imageUrl={icedCoffeeImg} items={[
            { name: "Iced coffee", price: 1000 }
          ]} />

          <Section title="HOT BEVERAGE" imageUrl={hotBeverageImg} items={[
            { name: "Hot chocolate", price: 1200 },
            { name: "Pot of coffee", price: 750 },
            { name: "Pot Ceylon tea", price: 750 }
          ]} />

        </div>
      </div>
    </div>
  );
};

const Section = ({ title, imageUrl, items }) => (
  <div className="mb-8">
    <div className="flex items-center mb-4">
      <img src={imageUrl} alt={title} className="w-10 h-10 mr-2" />
      <h2 className="text-2xl  text-red-400">{title}</h2>
    </div>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="flex justify-between border-b py-1">
          <span>{item.name}</span>
          <span>{item.price}</span>
        </li>
      ))}
    </ul>
  </div>
);
  


export default page2