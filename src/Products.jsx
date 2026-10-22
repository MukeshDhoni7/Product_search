
import React, { useEffect, useState } from 'react'

import { RxCross1 } from 'react-icons/rx';


import { FiShoppingCart } from 'react-icons/fi';
import CartItems from './CartItems';


const Products = () => {

  const myProducts = [
    { id: 1, prName: "Oppo A5s", price: 12000, category: "Mobile",quantity:1 },
    { id: 2, prName: "OnePlus Buds", price: 1200, category: "HeadPhone",quantity:1 },
    { id: 3, prName: "Samsung Galaxy S24", price: 45000, category: "Mobile",quantity:1 },
    { id: 4, prName: "Sony WH-1000XM5", price: 25000, category: "HeadPhone",quantity:1 },
    { id: 5, prName: "HP Pavilion Laptop", price: 65000, category: "Laptop",quantity:1 },
    { id: 6, prName: "Nike Running Shoes", price: 3500, category: "Footwear",quantity:1 },
    { id: 7, prName: "Logitech Wireless Mouse", price: 1500, category: "Accessories",quantity:1 },
    { id: 8, prName: "Apple iPad", price: 38000, category: "Tablet",quantity:1 },
    { id: 9, prName: "Levi's Denim Jacket", price: 2800, category: "Clothing" ,quantity:1},
    { id: 10, prName: "Canon EOS Camera", price: 55000, category: "Camera" ,quantity:1}
  ]

  const [search, setSearch] = useState('');

  const [selectCate,setSelectcate] = useState('All');

  const [carts,setCarts] = useState([]);

  const [slide,setSlide] = useState(false);

  const increaseItems = (id) =>
  {
    setCarts(prev => prev.map((ele)=>
    {
     return ele.id ===  id?{...ele,quantity:ele.quantity+1}:ele;
    }))
  }

  const decreaseItems = (id) =>
  {
    setCarts(prev => prev.map((ele)=>
    ele.id===id?{...ele,quantity:ele.quantity-1}:ele).filter(ele => ele.quantity>0))
  }

  const turnSlide = () =>
  {
    setSlide(!slide)
  }

  const filterProducts = myProducts.filter((ele)=>
  {
   const matchedSearch = ele.prName.toLowerCase().includes(search.toLowerCase())

   const matchedCategory = selectCate === 'All' || selectCate === ele.category;

   return matchedSearch && matchedCategory;
})




  const addProductsToCarts = (product) =>
    {
      const oldCartItem = carts.find((ele)=>
        {
          return ele.id === product.id;
        })
        
        if(oldCartItem)
        {
          setCarts(carts.map((ele)=>
          {
            if(ele.id === product.id)
            {
              const newQuantity = ele.quantity+1;
              return {...ele,quantity:newQuantity}
            }
            return ele;
          }))
        }
        else
        {

          setCarts([...carts,product]);
        }

        
        
      }


      useEffect(()=>
      {
        console.log(carts)
        console.log(slide)
      },[carts,slide])

  const categorizedProducts = ["All",...new Set(myProducts.map((ele)=>
  {
    return ele.category
  }))]


  return (
    <div className='min-h-screen bg-slate-100 relative'>
      {/*Headers*/}
      <div className='w-full h-[100px]  bg-black/30  backdrop-blur-[4px] z-10 sticky top-0'>
      <div className='max-w-7xl mx-auto px-8   h-full flex justify-end items-center'>
          <div className="relative flex items-center cursor-pointer" onClick={turnSlide}>
            <FiShoppingCart className='text-2xl stroke-2' />
          <span className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-amber-500 text-white text-xs font-bold flex justify-center items-center z-10'>
            {carts.length}
          </span>
          </div>
      </div>
      </div>
      <div className={`w-full max-w-lg h-full  fixed top-0   right-0 z-50 transition duration-500  bg-black ${slide?'translate-x-0':'translate-x-full'}`} >
        <RxCross1 onClick={turnSlide}  className='text-amber-500 cursor-pointer mt-4 ml-4  text-xl' strokeWidth={1}/>
        <div className='border border-white max-w-md mx-auto mt-15  h-[60%]'>
          <CartItems ourItems = {carts} increase={increaseItems} decrease={decreaseItems}/>
        </div>
      </div>
      <div className='mx-auto max-w-4xl mb-6  text-center mt-10'>
        <h1 className='mb-3 text-3xl tracking-tight text-slate-800 font-extrabold sm:text-4xl'>Welcome to Flipkart</h1>
        <p className='text-slate-500'>Find the products you looking for</p>
      </div>
      <div className='mx-auto max-w-xl mb-10'>
        <input type="text" placeholder='Search products.....' value={search} onChange={(e)=>setSearch(e.target.value)} className='w-full border border-slate-400 py-2 px-4 rounded-2xl shadow-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-400' />
      </div>
      <div className='mx-auto max-w-4xl  border border-slate-400  flex justify-between  gap-x-6 overflow-x-auto  items-center py-6 px-4 ring-1 ring-blue-500'>
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
                 <div className="mt-6 border-t border-slate-100 pt-4 flex justify-between">
                  <div>

                  <p className="text-sm text-slate-500">
                    Price
                  </p>

                  <p className="text-xl font-extrabold text-emerald-600">
                    ₹{ele.price.toLocaleString('en-IN')}
                  </p>
                  </div>
                  <div className='mt-5 bg-green-500  rounded-2xl cursor-pointer text-center hover:ring-1 hover:ring-blue-500 border border-green-400 transition duration-500'>
                    <button className='w-full h-full text-white font-semibold px-4 cursor-pointer' onClick={()=>addProductsToCarts(ele)}>Add</button>
                  </div>
                </div>
              
              </div>
            ))}
          </div>
          ):
          (
            <div className='border border-slate-400 shadow-sm px-4 py-16 text-center mt-6 bg-white rounded-2xl transition duration-300  hover:border-green-200 hover:ring-1 hover:ring-green-500 hover:-translate-y-2'>
              <h1 className='text-4xl text-slate-500 font-serif'>No Products is found</h1>
              <p className='mt-6 text-slate-600'>Try searching with different product name</p>
            </div>
          )}
      </div>
    </div>
  )
}

export default Products
