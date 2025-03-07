

export const SubSection = ({ subTitle, description, children }) => {
  return (
    <section className="w-full p-3 mb-5">

      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-medium'> {subTitle} </h1>
        <span> {description} </span>
      </div>
      
      <div className="flex gap-x-2 gap-y-4 items-end my-8 mb-5 flex-wrap">
          {children}
      </div>

    </section>
  )
}
