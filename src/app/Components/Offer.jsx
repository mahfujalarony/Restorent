"use client"
import { useState } from 'react';

export default function Offer() {
  const [activeCategory, setActiveCategory] = useState('Special');


  const menuItems = {
    Special: [
      { price: '$25', title: 'Grilled Salmon', description: 'Fresh salmon with herbs and lemon butter', image: '/picture/i1.jpg' },
      { price: '$22', title: 'Beef Wellington', description: 'Tender beef wrapped in puff pastry', image: '/picture/i2.jpg'  },
      { price: '$18', title: 'Truffle Pasta', description: 'Homemade pasta with truffle cream sauce', image: '/picture/i3.jpg'  },
    ],
    Lunch: [
      { price: '$15', title: 'Chicken Caesar Salad', description: 'Grilled chicken with romaine lettuce and parmesan', image: '/picture/i4.jpg'  },
      { price: '$17', title: 'Gourmet Burger', description: 'Angus beef with caramelized onions and aioli',image: '/picture/i5.jpg' },
      { price: '$14', title: 'Veggie Wrap', description: 'Fresh vegetables with hummus in a whole grain wrap', image: '/picture/i6.jpg'  },
    ],
    Breakfast: [
      { price: '$12', title: 'Avocado Toast', description: 'Sourdough toast with avocado and poached eggs',image: '/picture/i7.jpg'  },
      { price: '$10', title: 'French Toast', description: 'Brioche bread with maple syrup and berries', image: '/picture/i8.jpg'  },
      { price: '$14', title: 'Eggs Benedict', description: 'English muffin with poached eggs and hollandaise', image: '/picture/i9.jpg'  },
    ],
    Dinner: [
      { price: '$28', title: 'Filet Mignon', description: 'Premium cut steak with red wine reduction', image: '/picture/i10.jpg'  },
      { price: '$24', title: 'Lobster Risotto', description: 'Creamy risotto with fresh lobster meat', image: '/picture/i11.jpg'  },
      { price: '$22', title: 'Rack of Lamb', description: 'Herb-crusted lamb with mint sauce', image: '/picture/i12.jpg'  },
    ],
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen py-16 px-4 flex flex-col items-center bg-slate-50">
      <p className="text-red-500 font-medium mb-2 text-lg">Our Offered Menu</p>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 max-w-2xl">Some Trendy And Popular Courses Offered</h1>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-10">
        {Object.keys(menuItems).map((category) => (
          <button 
            key={category}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category 
                ? 'bg-red-500 text-white font-medium' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Menu Items */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems[activeCategory].map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-lg group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-red-500 text-white font-bold px-3 py-1 rounded-full">
                  {item.price}
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 h-48 flex flex-col">
                <h2 className="text-gray-800 dark:text-white text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <button className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




