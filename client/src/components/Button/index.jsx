// import React from 'react'

function index({ content }) {
  return (
    <button className="bg-primary-button font-medium px-4 py-2 rounded-md text-lg text-text-color inline-block text-white hover:shadow-primary-button hover:-translate-y-1 transition-shadow transition-transform">
      {content}
    </button>
  );
}

export default index;
