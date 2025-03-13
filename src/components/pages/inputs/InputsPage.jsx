import CodeBlock from '../../CodeBlock';
import { SubSection } from './SubSection';
import Input from '../../ui/Inputs/Input';



export const InputsPage = () => {

  return (
    <div className='w-fulll h-full flex flex-col items-center overflow-x-hidden'>

      <section className='TITLE p-2'>
        <h1 className="text-3xl">Inputs</h1>
      </section>    

      <SubSection subTitle='Classic' description='You can try different classic types:'>

        <Input />

        <CodeBlock>

        </CodeBlock>

        <span>
          As you can see the first string in <code className='font-bold'>type</code> prop is the color and the second string corresponds to the size of the button. 
        </span>
      </SubSection>


    </div>
  )
}


export default InputsPage
