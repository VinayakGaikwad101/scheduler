import React from 'react';

const SignupForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/futuristic-metaverse-empty-room-product-display-presentation-abstract-technology-scifi-with-neon-light-3d-background_56104-2314.jpg')" }}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-80 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Registration No.</label>
            <input id="username" name="username" type="text" required className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='20xxBxxxxx'/>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input id="name" name="name" type="text" required className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='John Doe'/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input id="email" name="email" type="email" required className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='20xxbxxxxx@sggs.ac.in' />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" required className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='********'/>
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
