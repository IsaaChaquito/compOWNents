import CodeBlock from '../../CodeBlock';
import { SubSection } from './SubSection';
import Input from '../../ui/Inputs/Input';
import { useEffect } from 'react';
import { useProvider } from '../../../context/useProvider';

export const sections = [
  {
    id:   1,
    name: 'Classic',
    link: '#classic',
  },
  {
    id:   2,
    name: 'Disabled',
    link: '#disabled',
  },
  {
    id:   3,
    name: 'Sizes',
    link: '#sizes',
  },
  {
    id:   4,
    name: 'Borderless',
    link: '#borderless',
  },
  {
    id:   5,
    name: 'Floating Placeholder',
    link: '#floating-placeholder',
  }
]

export const InputsPage = () => {

    const { dispatch } = useProvider()

  
    useEffect(() => {
      dispatch({ type: 'rightSidebar/SET_ACTIVE_SECTION', payload: 1 })
      dispatch({ type: 'rightSidebar/SET_SECTIONS', payload: sections })
    }, [])

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
