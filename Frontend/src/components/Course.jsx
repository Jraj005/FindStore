import React from 'react'
import Cards from './cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'
function Course() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='dark:bg-black light:bg-white-900 pt-32 item-center justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-blue-300'>here!</span></h1>
                <p className='mt-8'>Welcome to our course section! Explore a wide range of courses 
                tailored to your needs and access our extensive library of books in all categories.
                 Whether you're enhancing skills or pursuing new interests, we provide the resources
                  to support your journey. Dive in, discover, and start learning today! </p>
                <Link to="/">
                    <button className='mt-6 bg-blue-300 text-black px-4 py-2 
                    rounded-md hover:bg-blue-500 duration-300'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    list.map((item)=>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Course
