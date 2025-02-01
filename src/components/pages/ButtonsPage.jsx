import { SimpleButton } from "../ui/Buttons"


export const ButtonsPage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center '>

      <section className='p-2'>
        <h1 className="text-3xl">Buttons</h1>
      </section>      

      <section className="BUTTONS w-full p-3 bg-yellow-100">
        <SimpleButton />
      </section>
    </div>
  )
}
