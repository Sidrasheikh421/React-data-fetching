import React from 'react'

export const BusinessCard = ({ user }) => {
  return (
    <>
     <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 hover:shadow-xl transition">

      
      <div className="w-20 h-20 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center text-3xl font-bold">
        {user.name.charAt(0)}
      </div>

      
      <h2 className="text-xl font-bold text-purple-800 text-center mt-4">
        {user.name}
      </h2>

      <p className="text-gray-600 text-center mt-3">
        {user.email}
      </p>

      
      <p className="text-gray-700 text-center mt-2 font-semibold">
        {user.company.name}
      </p>

     
      <p className="text-gray-500 text-center mt-2">
        {user.phone}
      </p>

      
      <p className="text-purple-600 text-center mt-2">
        {user.website}
      </p>

     
      <button className="bg-purple-600 text-white px-5 py-2 rounded-lg mt-5 w-full hover:bg-purple-800">
        View Profile
      </button>

    </div>
    </>
  )
}
export default BusinessCard