import React from 'react'

function Cards({item}) {
    
  return (
    <>
        <div className='mr-3 mt-4 my-3 '>
        <div className="card bg-base-100 w-106 shadow-xl hover:scale-105 duration-200 ">
  <figure>
    <img
      src={item.image}
      alt="Shoes"/>
  </figure>
  <div className="card-body dark:bg-black text:black border" >
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer px-3 py-3 badge badge-outline hover:bg-blue-400 hover:text-black duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
    </>
  )
}

export default Cards
