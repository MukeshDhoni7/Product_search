
import React, { useState } from 'react'

const Products = () => {

  const myProducts = [
    { id: 1, prName: "Oppo A5s", price: 12000, category: "Mobile" },
    { id: 2, prName: "OnePlus Buds", price: 1200, category: "HeadPhone" },
    { id: 3, prName: "Samsung Galaxy S24", price: 45000, category: "Mobile" },
    { id: 4, prName: "Sony WH-1000XM5", price: 25000, category: "HeadPhone" },
    { id: 5, prName: "HP Pavilion Laptop", price: 65000, category: "Laptop" },
    { id: 6, prName: "Nike Running Shoes", price: 3500, category: "Footwear" },
    { id: 7, prName: "Logitech Wireless Mouse", price: 1500, category: "Accessories" },
    { id: 8, prName: "Apple iPad", price: 38000, category: "Tablet" },
    { id: 9, prName: "Levi's Denim Jacket", price: 2800, category: "Clothing" },
    { id: 10, prName: "Canon EOS Camera", price: 55000, category: "Camera" }
  ]

  const [search, setSearch] = useState('');

  const [selectCate,setSelectcate] = useState('All')

  const filterProducts = myProducts.filter((ele)=>
  {
   const matchedSearch = ele.prName.toLowerCase().includes(search.toLowerCase())

   const matchedCategory = selectCate === 'All' || selectCate === ele.category;

   return matchedSearch && matchedCategory;
})

  const categorizedProducts = ["All",...new Set(myProducts.map((ele)=>
  {
    return ele.category
  }))]

  console.log(categorizedProducts)

  return (
    <div className='min-h-screen bg-slate-100 py-10 px-4 sm:px-8'>
      {/*Headers*/}
      <div className='mx-auto max-w-4xl mb-6  text-center'>
        <h1 className='mb-3 text-3xl tracking-tight text-slate-800 font-extrabold sm:text-4xl'>Welcome to Flipkart</h1>
        <p className='text-slate-500'>Find the products you looking for</p>
      </div>
      <div className='mx-auto max-w-xl mb-10'>
        <input type="text" placeholder='Search products.....' value={search} onChange={(e)=>setSearch(e.target.value)} className='w-full border border-slate-400 py-2 px-4 rounded-2xl shadow-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-400' />
      </div>
      <div className='mx-auto max-w-4xl border-2 flex justify-between  gap-x-6 overflow-x-auto  items-center py-2 px-4'>
        {categorizedProducts.map((ele)=>
        (
          <button className={`font-semibold cursor-pointer font-serif   px-4 rounded-sm  ${ele === selectCate?'bg-black text-white':'bg-blue-600 text-white'}`} key={ele} onClick={()=>setSelectcate(ele)}>{ele}</button>
        ))}
      </div>
      <div className='mx-auto  max-w-6xl'>
        {filterProducts.length > 0  ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 gap-6'>
            {filterProducts.map((ele)=>
            (
              <div key={ele.id} className='min-h-52 flex p-4 flex-col justify-between shadow-sm rounded-2xl border-2  border-slate-400 transition duration-300 hover:-translate-y-1 hover:shadow-lg'>
                <div>
                    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {ele.category}
                  </span>
                    <h2 className="mt-5 text-lg font-bold text-slate-800">
                    {ele.prName}
                  </h2>
                </div>
                 <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm text-slate-500">
                    Price
                  </p>

                  <p className="text-xl font-extrabold text-emerald-600">
                    ₹{ele.price.toLocaleString('en-IN')}
                  </p>
                </div>
              
              </div>
            ))}
          </div>
          ):
          (
            <div className='border border-slate-400 shadow-sm px-4 py-16 text-center bg-white rounded-2xl transition duration-300  hover:border-green-200 hover:ring-1 hover:ring-green-500 hover:-translate-y-2'>
              <h1 className='text-4xl text-slate-500 font-serif'>No Products is found</h1>
              <p className='mt-6 text-slate-600'>Try searching with different product name</p>
            </div>
          )}
      </div>
    </div>
  )
}

export default Products
