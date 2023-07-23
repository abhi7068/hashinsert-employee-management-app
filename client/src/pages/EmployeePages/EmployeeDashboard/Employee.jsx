import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import Edit from './Edit';
import { useEffect } from 'react';
import { auth } from '../../../config/firebase';




const Employee = ({ name, gender, age, email, jobRole }) => {
  
console.log(auth.metaData)

    return (
      <div className='container'>
          <div class="max-w-1024 rounded overflow-hidden shadow-lg relative">
      <img class="w-full" src='./src/assets/pofile_pic.jpg' alt="profile pic"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Name</div>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Gender</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Age</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Role</span>
      </div>
      <NavLink to="/employee/profile/edit">
        <button class='btn absolute bottom-4 right-4'>Edit</button>
      </NavLink>
    </div>
      </div>
    
    );
};


export default Employee;