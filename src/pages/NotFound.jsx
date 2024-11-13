import React from 'react'
import { FaExclamationTriangle as Icon } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className='text-center '>
        <div className='flex justify-center'>
          <Icon className='text-red-700 mt-60  text-4xl block' />
        </div>
        <h1 className='mt-4 text-lg text-red-700'>page not found</h1>
        <Link to={'/'}>
        <button type="button" className="mt-4 ml-2 pl-9 pr-9  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          go home
        </button>
        </Link>
      </div>

    </>
  )
}

export default NotFound
