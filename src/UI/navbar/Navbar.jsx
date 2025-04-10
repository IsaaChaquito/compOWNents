import { Link } from "react-router"

export const Navbar = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center shadow p-4'>

      <Link to="/home">
        <h1 className='TITLE text-3xl py-3'>
            compOWNents
        </h1> 
      </Link>  

      {/* <section className='flex gap-2 self-end p-2'>
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
      </section> */}

    </div>
  )
}

export default Navbar
