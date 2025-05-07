import Image from 'next/image'

const DiscoverTest = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 px-4 py-12 md:px-8 lg:px-12 max-w-7xl mx-auto'>
      <div className='w-full lg:w-1/2 space-y-6'>
        <p className='text-red-500 font-semibold text-lg'>Discover Your Test</p>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
          We Provide Good Food For Your Family!
        </h1>
        <p className='text-gray-600 text-base md:text-lg'>
          Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer.
        </p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
          <div className='flex items-start gap-3'>
            <img 
              src="/images/shef.png" 
              alt="icon" 
              className='w-10 h-10 object-contain'
            />
            <p className='text-gray-600 text-sm md:text-base'>
              Ut enim ad minim veniam, quis nostrud exer.
            </p>
          </div>

          <div className='flex items-start gap-3'>
            <img 
              src="/images/chamos.png" 
              alt="icon" 
              className='w-10 h-10 object-contain'
            />
            <p className='text-gray-600 text-sm md:text-base'>
              Ut enim ad minim veniam, quis nostrud exer.
            </p>
          </div>

          <div className='flex items-start gap-3'>
            <img 
              src="/images/shef.png" 
              alt="icon" 
              className='w-10 h-10 object-contain'
            />
            <p className='text-gray-600 text-sm md:text-base'>
              Ut enim ad minim veniam, quis nostrud exer.
            </p>
          </div>

          <div className='flex items-start gap-3'>
            <img 
              src="/images/food.png" 
              alt="icon" 
              className='w-10 h-10 object-contain'
            />
            <p className='text-gray-600 text-sm md:text-base'>
              Ut enim ad minim veniam, quis nostrud exer.
            </p>
          </div>
        </div>
      </div>
      
      <div className='w-full lg:w-1/2 flex justify-center h-full'>
        <div className='relative w-full h-full min-h-[300px] lg:min-h-[500px]'>
          <Image
            src='/images/bgshef.jpg'
            fill
            alt='chef'
            className='rounded-lg object-cover'
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default DiscoverTest