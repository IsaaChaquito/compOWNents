
import Button  from '../ui/Buttons'

export const sizeTypes = [
  'black xs',
  'black sm',
  'black md',
  'white lg',
  'white xl',
  'white xxl',
]

export const regularTypes = [
  'primary md',
  'secondary md',
  'success md',
  'warning md',
  'danger md',
  'black md',
  'white md',
]

export const outlinedTypes = [
  'primary-out md',
  'secondary-out md',
  'success-out md',
  'warning-out md',
  'danger-out md',
  'black-out md',
]

export const ButtonsPage = () => {



  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div className='w-full h-full flex flex-col items-center overflow-x-hidden'>

      <section className='TITLE p-2'>
        <h1 className="text-3xl">Buttons</h1>
      </section>    

            <section className="REGULAR-TYPES w-full p-3 bg-yellow-100">
        {/* <div className="flex gap-x-2"> */}
          <span>You can try different types like:    
            {/* <code className='ml-2 font-bold text-blue-500/80'>
              primary | secondary | success | warning | danger | black
            </code> */}
          </span>
          <div className="flex gap-2 items-end my-2 mb-5 flex-wrap">

            {
              regularTypes.map( (type, i) => {
                return(
                  <Button 
                    key={i}
                    onClick={handleClick}
                    className={`shadow-zero!`}
                    type={type}
                    title={type.split(' ')[0]}
                  />
                )
              })
            }

          </div>
      </section>  

      <section className="SIZES w-full p-3 bg-yellow-100">
        {/* <div className="flex gap-x-2"> */}
          <span>You can try different sizes like:    
            {/* <code className='ml-2 font-bold text-blue-500/80'>
              xs | sm | md | lg | xl | xxl
            </code> */}
          </span>
          <div className="flex gap-2 items-end my-2 mb-5 flex-wrap">

            {
              sizeTypes.map( (type, i) => {
                return(
                  <Button 
                    key={i}
                    onClick={handleClick}
                    className={`shadow-zero!`}
                    type={type}
                    title={type.split(' ')[1]}
                  >
                    <pre>  {type.split(' ')[1]}  </pre>
                  </Button>
                )
              })
            }

          </div>
      </section>

      <section className="OUTLINED-TYPES w-full p-3 bg-yellow-100">
        {/* <div className="flex gap-x-2"> */}
          <span>You can try different types like:    
            {/* <code className='ml-2 font-bold text-blue-500/80 text-'>
              primary-out | secondary-out | success-out | warning-out | danger-out | black-out
            </code> */}
          </span>
          <div className="flex gap-2 items-end my-2 mb-5 flex-wrap">

            {
              outlinedTypes.map( (type, i) => {
                return(
                  <Button 
                    key={i}
                    onClick={handleClick}
                    className={`shadow-zero!`}
                    type={type}
                    title={type.split(' ')[0]}
                  />
                )
              })
            }

          </div>
      </section>
    </div>
  )
}
