

import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-blue-300'>
      {/* title */}
      <h1 className='text-3xl p-3 '>compOWNents</h1> 

      <section className='flex gap-2 self-end p-2'>
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
      </section>

    </div>
  )
}
