const Recent = () => {
  const newsData = [
    {
      image: '/images/nn1.webp',
      alt: 'Food Plate News',
      date: '23 Dec, 2020',
      title: 'Addition When Food Plate Becomes Art',
      description:
        'Discover how our chefs transform simple ingredients into culinary masterpieces that delight the senses.',
      category: 'Culinary Arts',
    },
    {
      image: '/images/nn2.webp',
      alt: 'Restaurant Ambiance News',
      date: '15 Jan, 2021',
      title: 'Creating the Perfect Dining Ambiance',
      description:
        'Learn about the art of setting the mood with lighting, music, and decor for an unforgettable dining experience.',
      category: 'Dining Experience',
    },
    {
      image: '/images/nn3.webp',
      alt: 'New Menu News',
      date: '10 Feb, 2021',
      title: 'Introducing Our New Seasonal Menu',
      description:
        'Explore our latest menu featuring fresh, seasonal ingredients crafted into delicious dishes.',
      category: 'Menu Update',
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center py-12 md:py-20 bg-gray-50">
      <div className="text-center mb-12">
        <h3 className="text-red-500 text-lg font-semibold uppercase tracking-wide">
          Our New Blog News
        </h3>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
          Our Recent News
        </h1>
      </div>

 
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl w-full px-6">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden w-full md:w-1/3"
          >
            <img
              src={news.image}
              alt={news.alt}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm uppercase">{news.date}</p>
              <p className="text-red-500 text-sm font-semibold mt-1">
                {news.category}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-gray-800">
                {news.title}
              </h2>
              <p className="mt-2 text-gray-600 text-base leading-relaxed">
                {news.description}
              </p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recent;
