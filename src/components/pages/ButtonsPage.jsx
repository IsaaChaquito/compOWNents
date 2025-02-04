import { useState } from 'react';
import Button  from '../ui/Buttons'

export const types = [
  'primary xs',
  'primary sm',
  'primary md',
  'primary lg',
  'primary xl',
  'xxl',
]

export const ButtonsPage = () => {



  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div className='w-full h-full flex flex-col items-center overflow-x-hidden'>

      <section className='p-2'>
        <h1 className="text-3xl">Buttons</h1>
      </section>      

      <section className="BUTTONS w-full p-3 bg-yellow-100">
        {/* <div className="flex gap-x-2"> */}
          <span>You can try different sizes like:    
            <code className='ml-2 font-bold'>
              xs, sm, md, lg, xl, xxl
            </code>
          </span>
          <div className="flex gap-2 items-end my-2 flex-wrap">
            
            <Button 
              onClick={handleClick}
              className={`bg-[#5fd5df] text-white `}
              type='md'
              title={'Exotic button'}
            />

            {
              types.map( (type, i) => {
                return(
                  <Button 
                    key={i}
                    onClick={handleClick}
                    className={``}
                    type={type}
                    title={type}
                  />
                )
              })
            }

          </div>

          
        {/* </div> */}

        {/* <Button className={``} title={"md"}>My button</Button> */}
        




        {/* <Button 
          // {...buttonProps}
        > 
          <Button.Text className="text-black">
            {buttonProps.title}
          </Button.Text>
        </Button> */}
      </section>
    </div>
  )
}
