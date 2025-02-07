
import Button  from '../ui/Buttons'

export const sizeTypes = [
  'black xs',
  'black sm',
  'black md',
  'black lg',
  'black xl',
  'black xxl',
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

        <section className="REGULAR-TYPES w-full p-3">
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl'>Classics</h1>
            <span>You can try different classic types:</span>
          </div>
          
          <div className="flex gap-2 items-end my-10 mb-5 flex-wrap">
            {
              regularTypes.map( (type, i) => {
                return(
                  <Button 
                    key={i}
                    onClick={handleClick}
                    className={`shadow-zero!`}
                    type={type}
                    title={type.split(' ')[0]}
                    disabled={true}
                  />
                )
              })
            }
            </div>
          </section>  

      <section className="SIZES w-full p-3 ">
        <div className='flex flex-col gap-2'>
            <h1 className='text-3xl'>Sizes</h1>
            <span>You can try different sizes:</span>
          </div>
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

      <section className="OUTLINED-TYPES w-full p-3 ">
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl'>Outlined</h1>
            <span>You can try different outlined types:</span>
          </div>
        <div className="flex gap-2 items-end my-2 mb-5 flex-wrap">
          {
            outlinedTypes.map( (type, i) => {
              return(
                <Button 
                  key={i}
                  onClick={handleClick}
                  className={``}
                  type={type}
                  title={type.split(' ')[0]}
                  disabled={true}
                />
              )
            })
          }
        </div>
      </section>

    </div>
  )
}
