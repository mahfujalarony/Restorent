import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
   
        <div>
          <h2 className="text-xl font-semibold mb-4">🍽️ Kacchi Dain</h2>
          <p className="text-sm text-gray-400">
            Fresh taste, cozy place. We serve quality food with love and care.
          </p>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4">⏰ Opening Hours</h3>
          <ul className="text-sm text-gray-400">
            <li>Monday - Friday: 10:00 AM - 10:00 PM</li>
            <li>Saturday - Sunday: 11:00 AM - 11:30 PM</li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-4">📞 Contact Us</h3>
          <ul className="text-sm text-gray-400">
            <li>Phone: +880 1784 343983</li>
            <li>Email: mahfujalamrony07@gmail.com</li>
            <li>Address: 123 Main Street, Kishoreganj</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Kacchi Dain. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
