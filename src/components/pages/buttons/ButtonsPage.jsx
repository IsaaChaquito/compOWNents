import CodeBlock from '../../CodeBlock';
import { SubSection } from './SubSection';
import { Buttons } from './Buttons';
import { HeartIcon, LoaderCircular } from '../../../assets/icons';

import Button from '../../ui/Buttons/Button';
import { useEffect, useState } from 'react';
import { useProvider } from '../../../context/useProvider';
import useTimer from '../../../hooks/timer';
import { TableProps } from '../../TableProps';

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

export const customTypes = [
  'Button md',
]

export const sections = [
  {
    id: 1,
    name: 'Classics',
    link: 'classics',
  },
  {
    id: 2,
    name: 'Disabled',
    link: 'disabled',
  },
  {
    id:   3,
    name: 'Pressable',
    link: 'pressable',
  },
  {
    id:   4,
    name: 'Sizes',
    link: 'sizes',
  },
  {
    id:   5,
    name: 'Outlined',
    link: 'outlined',
  },
  {
    id:     6,
    name: 'Solid',
    link: 'solid',
  },
  {
    id:     7,
    name: 'Custom styles',
    link: 'custom-styles',
  },
  {
    id:     8,
    name: 'Custom classes',
    link: 'custom-classes',
  },
  {
    id:     9,
    name: 'Loading state',
    link: 'loading-state',
  },
  {
    id:     10,
    name: 'Timed button',
    link: 'timed-button',
  },
  // {
  //   id:     11,
  //   name: 'Neon glow master mega epic 3000',
  //   link: 'neon-glow',
  // },
]

export const ButtonsPage = () => {

  const { state, dispatch } = useProvider()
  const [isLoading, setIsLoading] = useState(false);
  // const [timed, setTimed] = useState(10);
  const time = 10
  const timer1 = useTimer(10)
  const timer2 = useTimer(10)
  const [scrollY, setScrollY] = useState(window.scrollY);
  
    useEffect(() => {
      dispatch({ type: 'rightSidebar/SET_SECTIONS', payload: sections })
      dispatch({ type: 'rightSidebar/SET_ACTIVE_SECTION', payload: 1 })
    }, [state?.rightSidebar?.sections])

  const handleLoading = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, Math.floor(Math.random() * 4000) + 1000)
    onClickButton('Loading...')
  }

  const onClickButton = ( msg ) => {
    dispatch({ type: 'console/SET_TEXT', payload: msg })
  }


  const resetTime = () => {
    timer2.resetTimer(time)
    dispatch({ type: 'console/SET_TEXT', payload: 'reset timer' })
    // setTimed(1)
    // setTimeout(() => {
    //   setTimed(10)
    // }, 0)
  }

  useEffect(() => {
    // console.log('scrollY', scrollY);
    setScrollY(window.scrollY)
    addEventListener('scroll', () => setScrollY(window.scrollY));

    return () => removeEventListener('scroll', () => setScrollY(window.scrollY));
  }, [scrollY])

  

  return (
    <div className='w-full flex'>
      <div className='w-full px-4 h-full flex flex-col relative '>

        <section className='TITLE p-2 flex flex-col gap-y-5'>
          <h1 className="text-4xl font-semibold">Buttons</h1>
        </section>   

        {/* <SubSection id='usage' subTitle='Prop variant Documentation' >
          <TableProps 
            headers={['Prop', 'Type', 'Default', 'Description']}
            props={[
              { 
                prop: 'variant', 
                type: 'string', 
                arguments: [
                  'primary', 
                  'secondary', 
                  'success', 
                  'warning', 
                  'danger', 
                  'black', 
                  'white'
                ], 
                description: 'A preset of default colors' 
              },
              { 
                prop: 'variants', 
                type: 'string', 
                arguments: 'none', 
                description: 'Can set the color, size, some features like outlined or solid variants, ' 
              },
            ]}
            // tableCaption='Prop: variant'
          />
        </SubSection> */}

        <div className='TABLE-PROPS p-2 flex flex-col gap-y-5 my-10'>
          
          <h1 className='text-2xl font-medium'>
            Prop: <code className='px-1 bg-gray-800 text-gray-300 rounded'>variant</code>
          </h1>

          <TableProps 
            tableHeaders={['Category', 'Options', 'Description']}
            tableContent={
              [
                {
                  category: 'Colors',
                  options: 'primary, secondary, success, warning, danger, black, white',
                  description: 'A preset of default colors'
                },
                {
                  category: 'Sizes',
                  options: 'xs, sm, md, lg, xl',
                  description: 'A preset of default sizes'
                },
                {
                  category: 'Features',
                  options: 'outlined, solid',
                  description: 'Can set the color, size, some features like outlined or solid variants, '
                },
              ]
            }
            // tableCaption='Prop: variant'
          />
          <p className='my-2'>You only need to put the options into variant prop in the same string. For example:
            <code className='mx-1 p-1 bg-gray-800 text-gray-300 rounded'>variant='primary md pressable'</code>.
          </p>
          
        </div>

        <SubSection id='classics' subTitle='Classics' description='You can try different classic types:' showConsole={true}>

          <Buttons types={regularTypes} onClickButton={onClickButton} />
          <CodeBlock>
            {regularTypes
              .map(
                (type) =>
                  `<Button variant='${type}' text='${type.split(' ')[0]}' />`
              )
              .join("\n")}
          </CodeBlock>

          <span>
            As you can see the first string in <code className='font-bold'>type</code> prop is the color and the second string corresponds to the size of the button. 
          </span>
        </SubSection>

        <SubSection id='disabled' subTitle='Disabled' description='You can disable a button with the disabled prop:' >
          <div className='flex gap-2'>
            <Button variant='primary md' text='Primary' disabled={true} />
          </div>
          <CodeBlock>
            {`<Button variant='primary md' text='Primary' disabled={true} />`}
          </CodeBlock>
        </SubSection>

        <SubSection id='pressable' subTitle='Pressable' description='You can add pressable variant effect to a button' >
          <div className='flex gap-2'>
            <Button variant='primary md pressable' text='Pressable' onClick={() => onClickButton('clicked: primary md pressable')} />
          </div>
          <CodeBlock>
            {`<Button variant='primary md pressable' text='Primary' />`}
          </CodeBlock>
        </SubSection>

        <SubSection id='sizes' subTitle='Sizes' description='You can try different sizes:'>
          <Buttons types={sizeTypes} onClickButton={onClickButton} />
          <CodeBlock>
            {sizeTypes
              .map(
                (type) =>
                  `<Button variant='${type}' text='${type.split(' ')[0]}' />`
              )
              .join("\n")}
          </CodeBlock>
        </SubSection>

        <SubSection id='outlined' subTitle='Outlined' description='You can try different outlined types:'>
          <Buttons types={outlinedTypes} onClickButton={onClickButton} />
          <CodeBlock>
            {outlinedTypes
              .map(
                (type) =>
                  `<Button variant='${type}' text='${type.split(' ')[0]}' />`
              )
              .join("\n")}
          </CodeBlock>
        </SubSection>

        <SubSection id='solid' subTitle='Solid' description='Solid styles:'>
          <div className='flex gap-2'>
            <Button 
              variant='solid md' 
              text='Button' 
              onClick={() => onClickButton('clicked: solid md')}
            />

          </div>
            <CodeBlock>
              {`<Button variant='solid md' text='Button' />`}
          </CodeBlock>
        </SubSection>

        <SubSection id='custom-styles' subTitle='Custom styles' description='You can customize the styles:'>
          <div className='flex gap-2'>
            <Button 
              variant='md pressable' 
              text='Button #1' 
              className='bg-indigo-700 hover:bg-indigo-800 text-white' 
              onClick={() => onClickButton('clicked custom #1')}
            />

            <Button 
              variant='md pressable' 
              text='Button #2' 
              onClick={() => onClickButton('clicked custom #2')}
              className='rounded-full bg-orange-500 hover:bg-orange-700 text-white w-full' 
            />

            <Button 
              variant='md pressable' 
              text='Button #3' 
              onClick={() => onClickButton('clicked custom #3')}
              className='bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 hover:text-white rounded-tr-2xl rounded-bl-2xl' 
            />

            <Button
              variant="md text-#ffc0cb  bg-black pressable" // Clases para el builder
              // text="Enviar formulario"
              className=' hover:!text-red-600 w-full rounded-full'
              // icon={{ position: 'right', content: () => <span>🚀</span> }}
              icon={{ position: 'right', content: () => <HeartIcon className=' text-red-600' /> }}
              text='Click me #4'
              onClick={() => onClickButton('clicked custom #4')}

            />
          </div>

          <CodeBlock>
            {
              
            
              `<Button variant='md pressable' text='Button #1' className='bg-indigo-700 hover:bg-indigo-800 text-white' onClick={() => onClickButton('clicked custom #1')} />\n<Button variant='md pressable' text='Button #2' className='w-full rounded-full bg-orange-500 hover:bg-orange-700 text-white' onClick={() => onClickButton('clicked custom #2')} />\n<Button variant='md pressable' text='Button #3' className='bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 hover:text-white rounded-tr-2xl rounded-bl-2xl' onClick={() => onClickButton('clicked custom #3')} />\n<Button variant='md pressable text-#ffc0cb  bg-black' className=' hover:!text-red-600 w-full rounded-full' 
          icon={{ 
            position: 'right', 
            content: () => <HeartIcon className=' text-red-600' /> 
          }} 
          onClick={() => onClickButton('clicked custom #4')}  
  />`
            }
          </CodeBlock>
        </SubSection>

        <SubSection id='custom-classes' subTitle='Custom classes' description='You can also add a specific css class or classes for specific results:'>
            <div>
              <Button 
                variant='xxl pressable' 
                text='Custom classes' 
                className='box bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white !px-20' 
                onClick={() => onClickButton('clicked custom classes')}
              />
            </div>

            <CodeBlock>
              {
                `<Button variant='md' text='Button' className='box bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white !px-12' />`
              }
            </CodeBlock>

            <span>
            In this case we use a custom css class called <code className='font-bold'>box</code> for the left and right button edges. 
          </span>
          </SubSection>

        <SubSection id='loading-state' subTitle='Loading state' description='You can set the loading state with the isLoading prop:'>
          <div className='flex gap-2'>
            <Button
              variant="md primary"
              text="Load data"
              isLoading={isLoading}
              onClick={handleLoading}
            />

          <Button
              variant="md bg-orange text-white"
              className='w-full hover:!bg-orange-400'
              text="Load data"
              isLoading={isLoading}
              loadingIcon={{ content: () => <LoaderCircular className='h-5 w-5 text-white' />, position: 'right' }}
              loadingText="Loading"
              disabled={isLoading}
              onClick={handleLoading}
              tooltip="Haz clic para cargar datos"
            />
          </div>
  <CodeBlock>
    {`<Button
    variant="md primary"
    text="Load data"
    isLoading={isLoading}
    onClick={handleLoading}
/>\n<Button
    variant="md bg-orange text-white"
    className='w-full'
    text="Load data"
    isLoading={isLoading}
    loadingIcon={{ 
      position: 'right', 
      content: () => <LoaderCircular className='h-5 w-5 text-white' /> 
    }}
    loadingText="Loading"
    disabled={isLoading}
    onClick={handleLoading}
    tooltip="Haz clic para cargar datos"
/>`}
  </CodeBlock>
        </SubSection>

        <SubSection id='timed-button' subTitle='Timed button' description='You can set a timer in a button with the timed prop. When the timer counter reaches zero you can trigger some action like redirect or something like that:'>
          <div className='flex gap-2 '>
            <Button
              variant="md pressable"
              className='bg-stone-700 text-white'
              text="Add 5 seconds"
              timed={
                {
                  time: timer1.time,
                  timer: timer1.timer,
                  onEnd: () => dispatch({ type: 'console/SET_TEXT', payload: 'Hello world!' }),
                  timeWithFormat: timer1.timeFormatter(timer1.timer / 1000)
                }
              }
              tooltip={"Haz clic para reiniciar el contador"}
              onClick={() => timer1.addTime(5)}
            />

            <Button
              onClick={() => resetTime()}
              onMouseEnter={() => timer2.pauseTimer()}
              onMouseLeave={() => timer2.resumeTimer()}
              variant="md white pressable"
              className='w-full'
              text="Restart timer"
              timed={
                {
                  time,
                  timer: timer2.timer,
                  progressColor: 'bg-gray-300',
                  decrease: true,
                  onEnd: () => dispatch({ type: 'console/SET_TEXT', payload: 'redirect or something like that!' }),
                  timeWithFormat: timer2.timeFormatter(timer2.timer / 1000)
                }
              }
              tooltip={"Haz clic para reiniciar el contador"}
            />
          </div>
  <CodeBlock>
{`<Button
  variant="md pressable"
  className='bg-stone-700 text-white'
  text="Add 5 seconds"
  timed={
    {
      time: timer1.time,
      timer: timer1.timer,
      onEnd: () => dispatch({ type: 'console/SET_TEXT', payload: 'Hello world!' }),
      timeWithFormat: timer1.timeFormatter(timer1.timer / 1000)
    }
  }
  tooltip={"Haz clic para reiniciar el contador"}
  onClick={() => timer1.addTime(5)}
/>

<Button
  onClick={() => resetTime()}
  onMouseEnter={() => timer2.pauseTimer()}
  onMouseLeave={() => timer2.resumeTimer()}
  variant="md white pressable"
  className='w-full'
  text="Restart timer"
  timed={
    {
      time,
      timer: timer2.timer,
      progressColor: 'bg-gray-300',
      decrease: true,
      onEnd: () => dispatch({ type: 'console/SET_TEXT', payload: 'redirect or something like that!' }),
      timeWithFormat: timer2.timeFormatter(timer2.timer / 1000)
    }
  }
  tooltip={"Haz clic para reiniciar el contador"}
/>`}
  </CodeBlock>
        </SubSection>
      </div>



    </div>
  )
}
