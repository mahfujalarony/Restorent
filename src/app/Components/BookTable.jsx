"use client";
import React, { useState } from 'react';

const BookTable = () => {
  const [person, setPerson] = useState('Person 1');
  const [isPersonOpen, setIsPersonOpen] = useState(false);
  const [date, setDate] = useState('');
  const [timeCategory, setTimeCategory] = useState('');
  const [isTimeOpen, setIsTimeOpen] = useState(false);

  const personOptions = ['Person 1', 'Person 2', 'Person 3'];
  const timeCategories = [
    { label: 'Breakfast (8:00 AM - 11:00 AM)', value: 'breakfast' },
    { label: 'Lunch (12:00 PM - 3:00 PM)', value: 'lunch' },
    { label: 'Dinner (6:00 PM - 10:00 PM)', value: 'dinner' },
  ];

  const handlePersonSelect = (option) => {
    setPerson(option);
    setIsPersonOpen(false);
  };

  const handleTimeSelect = (category) => {
    setTimeCategory(category);
    setIsTimeOpen(false);
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/imgs.avif')`,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="flex flex-col items-center text-center pt-12 md:pt-20">
        <h3 className="text-white text-lg font-semibold uppercase tracking-wide">
          About Our Restaurant
        </h3>
        <h1 className="mt-5 text-2xl md:text-4xl font-bold text-white">
          Book A Table
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10 max-w-4xl w-full px-6">

        <div className="relative w-full md:w-1/3">
          <div
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer flex items-center justify-between"
            onClick={() => setIsPersonOpen(!isPersonOpen)}
          >
            <span className="text-gray-700">{person}</span>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isPersonOpen && (
            <div className="absolute top-full left-0 w-full bg-white rounded-lg shadow-md mt-2 z-10">
              {personOptions.map((option) => (
                <div
                  key={option}
                  className="p-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handlePersonSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

    
        <div className="w-full md:w-1/3">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-4 bg-white rounded-lg shadow-md text-gray-700"
          />
        </div>

    
        <div className="relative w-full md:w-1/3">
          <div
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer flex items-center j
            ustify-between"
            onClick={() => setIsTimeOpen(!isTimeOpen)}
          >
            <span className="text-gray-700">
              {timeCategory
                ? timeCategories.find((cat) => cat.value === timeCategory)?.label
                : 'Select Time'}
            </span>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isTimeOpen && (
            <div className="absolute top-full left-0 w-full bg-white rounded-lg shadow-md mt-2 z-10">
              {timeCategories.map((category) => (
                <div
                  key={category.value}
                  className="p-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleTimeSelect(category.value)}
                >
                  {category.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>


      <button className="mt-8 px-8 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition duration-300">
        Book Now
      </button>
    </div>
  );
};

export default BookTable;
