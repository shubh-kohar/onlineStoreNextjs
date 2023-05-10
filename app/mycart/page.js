import React from 'react'

function MyCart() {
  return (
    <div className='flex items-start px-10 py-5 relative min-h-screen'>
        {/* cart list */}
        <div className="flex-col flex flex-1">
            <h1>No item in the cart</h1>
        </div>

        {/* Grand Total bar */}
        <div className="flex-col flex w-1/3 border sticky top-16 min-h-[400px]">
            <h1 className='p-2 bg-gray-200'>Grand Total</h1>
        </div>
    </div>
  )
}

export default MyCart