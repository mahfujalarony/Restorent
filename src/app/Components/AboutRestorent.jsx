const AboutRestorent = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-8 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto'>
      <div className='w-full lg:w-1/2 h-full flex justify-center'>
        <img 
          src="/images/about2.png.webp" 
          alt="about" 
          className='w-full max-w-[600px] max-h-[500px] rounded-lg shadow-lg object-cover'
        />
      </div>

  
      <div className='w-full lg:w-1/2 space-y-4'>
        <h3 className='text-red-500 font-semibold text-lg'>About Our Restaurant</h3>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
          We Provide Good Food For Your Family!
        </h1>
        
        <div className='space-y-4 text-gray-600'>
          <p className='text-base md:text-lg'>
            Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer
          </p>
          <p className='text-base md:text-lg'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected our, or randomised words which don't look even slightly believab If you are going to use a passage.
          </p>
        </div>

        <button className='bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 mt-4'>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default AboutRestorent;