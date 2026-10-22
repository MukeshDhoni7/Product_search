import React from 'react'

const CartItems = ({ourItems,increase,decrease}) => {


    console.log(ourItems)

  return (
    <div>
        {ourItems.map((ele)=>
        (
            <div className='text-white border-b-2 ' key={ele.id}>
                <div className='flex justify-between p-2 items-center'>
                <div className='flex flex-col gap-2'>
                <h1 className='font-bold font-serif'>{ele.prName}</h1>
                <h1 className='font-bold font-serif'>{`price:${ele.price*ele.quantity}`}</h1>
                </div>
                <div className='flex flex-col justify-center items-center font-bold font-serif'>
                <h1>Quantity</h1>
                <div className='flex w-20 justify-between items-center mt-4'>
                <h1 className='border-2 w-full text-center rounded-l-xl' onClick={()=>decrease(ele.id)}>-</h1>
                <h1 className=' w-full border-2 text-center'>{ele.quantity}</h1>
                <h1 className='w-full border-2 text-center rounded-r-xl cursor-pointer' onClick={()=>increase(ele.id)}>+</h1>
                </div>
                </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CartItems