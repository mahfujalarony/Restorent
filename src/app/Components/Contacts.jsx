const Contact = () => {
  return (
    <div className="min-h-screen bg-amber-50 font-serif">
      
      <header className="bg-transparent border-b border-gray-200 py-6 text-center">
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight">Contact Us</h1>
        <p className="mt-2 text-lg text-gray-600">We'd love to hear from you</p>
      </header>

    
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
     
          <div className="bg-white p-8 rounded-md shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                className="w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>

          
          <div className="space-y-8">
          
            <div className="bg-white p-8 rounded-md shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <span className="font-medium">Address:</span> Kishoregonj, Bor Bazar, 2340
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> +880 1784 343983
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> mahfujalamrony07@gmail.com
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Hours:</span> Mon-Sun, 11 AM - 10 PM
                </p>
              </div>
            </div>

          
            <div className="rounded-md overflow-hidden shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=kishoregonj&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Restaurant Location"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;