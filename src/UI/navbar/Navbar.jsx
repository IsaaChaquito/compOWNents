import { Link } from "react-router"
import { Logo } from "../../assets/icons"

export const Navbar = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center shadow p-4'>

      <Link to="/">
        <button 
                
                className='w-full cursor-pointer flex items-center justify-center gap-2'
                
              >
                <div className='DRAWER-TITLE text-xl flex items-center py-1 font-medium '>
                  <span>{'comp'}</span>
                  <Logo className={`'w-20 w-20 `} />
                  <span>{'ents'}</span>
                </div>
              </button> 
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
