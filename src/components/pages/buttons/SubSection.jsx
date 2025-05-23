


export const SubSection = ({ id, subTitle, description, children }) => {
  return (
    <section id={id} className="w-full p-3 mb-5 flex flex-col">

      <div className='flex flex-col gap-2'>
        { subTitle && <h1 className='text-3xl font-medium'> {subTitle} </h1> }
        {  description && <span> {description} </span> }
      </div>
      
      <div className="w-full flex flex-col gap-x-2 gap-y-4 my-8 mb-5 ">
          {children}
      </div>

    </section>
  )
}
