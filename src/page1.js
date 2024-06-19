import React from 'react'
import appetizerImg from './assets/appetizer1.jpg';
import saladImg from './assets/salad1.jpg';
import soupImg from './assets/soup1.jpg';
import pastaImg from './assets/pasta1.jpeg';
import friedRiceImg from './assets/friedRice1.jpg';
import biriyaniImg from './assets/biriyani1.jpg';
import biriyaniSawanImg from './assets/biriyani1.jpg';


const page1 = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4 ">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold ">MENU</h1>
        <p className="text-lg border-b font-semibold text-red-400 ">Your resturant name</p>
        <p className="text-sm font-bold ">Open Hours: 10am - 9.30pm</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <Section title="APPETIZER" imageUrl={appetizerImg} items={[
            { name: "French fries", price: 1200 },
            { name: "Potato Wedges", price: 1500 },
            { name: "Garlic bread", price: 1200 },
            { name: "Hot battered cuttlefish", price: 1800 },
            { name: "Battered fried Prawns", price: 1800 },
            { name: "Crispy chicken", price: 1800 }
          ]} />

          <Section title="SALAD" imageUrl={saladImg} items={[
            { name: "Green salad", price: 1200 },
            { name: "Mix vegetable salad", price: 1200 },
            { name: "Chicken salad", price: 1500 },
            { name: "Greek salad", price: 1750 },
            { name: "Feta salad", price: 1750 }
          ]} />

          <Section title="SOUP" imageUrl={soupImg} items={[
            { name: "Vegetable soup", price: 900 },
            { name: "Chicken soup", price: 1200 },
            { name: "Beef soup", price: 1500 },
            { name: "Seafood soup", price: 1750 },
            { name: "Seafood Tom-Yum soup", price: 1800 }
          ]} />

          <Section title="PASTA & SPAGHETTI" imageUrl={pastaImg} items={[
            { name: "Double cheese chicken pasta", price: 1300 },
            { name: "Nai-Miris and cheese chicken pasta", price: 1300 },
            { name: "Seafood Pasta", price: 1600 },
            { name: "Mac n’ cheese", price: 1600 },
            { name: "Spaghetti Cabonara", price: 1800 },
            { name: "Spaghetti Bolognese", price: 1800 },
            { name: "Spicy cream seafood spaghetti", price: 2000 }
          ]} />
        </div>

        {/* Right Column */}
        <div>
          <Section title="FRIED RICE" imageUrl={friedRiceImg} items={[
            { name: "Vegetable fried rice", price: 850 },
            { name: "Egg fried rice", price: 950 },
            { name: "Sausage fried rice", price: 1000 },
            { name: "Mix chicken fried rice", price: 1100 },
            { name: "Devil chicken fried rice", price: 1200 },
            { name: "Set menu fried rice", price: 1400 },
            { name: "Prawns fried rice", price: 1400 },
            { name: "Beef fried rice", price: 1400 },
            { name: "Crispy chicken fried rice", price: 1600 },
            { name: "All mix fried rice", price: 1800 },
            { name: "Thai seafood fried rice", price: 2000 },
            { name: "Thai mix fried rice", price: 2200 },
            { name: "Mongolian chicken fried rice", price: 1800 },
            { name: "Mongolian mix rice", price: 2200 },
            { name: "Nasi-Goreng Chicken", price: 1800 },
            { name: "Nasi-Goreng Seafood", price: 2000 },
            { name: "Nasi-Goreng Mix", price: 2200 },
            { name: "Chop-suey Rice Vegetable", price: 1800 },
            { name: "Chop-suey Rice Mix", price: 2500 },
            { name: "FAB CEYLON SIGNATURE fried rice", price: 3400 }
          ]} />

          <Section title="BIRIYANI" imageUrl={biriyaniImg} items={[
            { name: "Chicken biriyani", price: 1500 },
            { name: "Beef biriyani", price: 1800 },
            { name: "Seafood biriyani", price: 2000 },
            { name: "Mutton Biriyani", price: 2400 }
          ]} />

          <Section title="BIRIYANI SAWAN" imageUrl={biriyaniSawanImg} items={[
            { name: "5pacx", price: 7000 }
          ]} />
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, imageUrl, items }) => (
  <div className="mb-8">
    <div className="flex items-center mb-2">
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
  )


export default page1