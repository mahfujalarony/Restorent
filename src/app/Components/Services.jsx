import Image from 'next/image'

const Services = () => {
  const services = [
    {
      title: "Best Chef",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: "/images/shef.png"
    },
    {
      title: "Quality Food",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: "/images/food.png"
    },
    {
      title: "Fast Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: "/images/del.jpg"
    }
  ];

  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <h3 className='text-red-500 font-semibold text-lg'>Services We Offer</h3>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mt-2'>Our Best Services</h1>
      </div>

 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {services.map((service, index) => (
          <div 
            key={index}
            className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center'
          >
            <div className='mb-4 w-20 h-20 flex items-center justify-center'>
              <Image 
                src={service.icon} 
                alt={service.title}
                width={80}
                height={80}
                className='object-contain'
              />
            </div>
            <h2 className='text-xl font-bold text-gray-800 mb-3'>{service.title}</h2>
            <p className='text-gray-600'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services