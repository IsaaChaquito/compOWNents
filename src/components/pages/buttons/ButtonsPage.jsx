import CodeBlock from '../../CodeBlock';
import { SubSection } from './SubSection';
import { Buttons } from './Buttons';
import { HeartIcon, LoaderCircular } from '../../../assets/icons';

import Button from '../../ui/Buttons/Button';
import { useState } from 'react';

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

export const navigationItems = [
  {
    id: 1,
    name: 'Classics',
    link: '#classics',
  },
  {
    id: 2,
    name: 'Disabled',
    link: '#disabled',
  },
  {
    id: 3,
    name: 'Sizes',
    link: '#sizes',
  },
  {
    id: 4,
    name: 'Outlined',
    link: '#outlined',
  },
  {
    id: 5,
    name: 'Solid',
    link: '#solid',
  },
  {
    id: 6,
    name: 'Custom',
    link: '#custom',
  },
  {
    id: 7,
    name: 'Custom classes',
    link: '#custom-classes',
  },
  {
    id: 8,
    name: 'Loading state',
    link: '#loading-state',
  },
  {
    id: 9,
    name: 'Timed button',
    link: '#timed-button',
  },
  {
    id: 10,
    name: 'Neon glow master mega epic 3000',
    link: '#neon-glow',
  },
]

export const ButtonsPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const handleLoading = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, Math.floor(Math.random() * 4000) + 1000)
  }

  // const [activeItem, setActiveItem] = useState(1);

  return (
    <div className='w-full flex'>
      <div className='w-full px-4 h-full flex flex-col relative '>

        <section className='TITLE p-2'>
          <h1 className="text-3xl">Buttons</h1>
        </section>   
        

        <SubSection id='classics' subTitle='Classics' description='You can try different classic types:' showConsole={true}>
          <Buttons types={regularTypes} />
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

        <SubSection id='disabled' subTitle='Disabled' description='You can disable buttons with the disabled prop:' >
          <Buttons types={regularTypes} disabled={true} />
          <CodeBlock>
            {regularTypes
              .map(
                (type) =>
                  `<Button variant='${type}' text='${type.split(' ')[0]}' disabled={true} />`
              )
              .join("\n")}
          </CodeBlock>
        </SubSection>

        <SubSection id='sizes' subTitle='Sizes' description='You can try different sizes:'>
          <Buttons types={sizeTypes} />
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
          <Buttons types={outlinedTypes} />
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
            />

          </div>
            <CodeBlock>
              {`<Button variant='solid md' text='Button' />`}
          </CodeBlock>
        </SubSection>

        <SubSection id='custom-styles' subTitle='Custom styles' description='You can customize the styles:'>
          <div className='flex gap-2'>
            <Button 
              variant='md' 
              text='Button' 
              className='bg-indigo-700 hover:bg-indigo-800 text-white' 
            />

            <Button 
              variant='md' 
              text='Button' 
              className='rounded-full bg-orange-500 hover:bg-orange-700 text-white w-full' 
            />

            <Button 
              variant='md' 
              text='Button' 
              className='bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 hover:text-white rounded-tr-2xl rounded-bl-2xl' 
            />

            <Button
              variant="md text-#ffc0cb  bg-black" // Clases para el builder
              // text="Enviar formulario"
              className=' hover:!text-red-600 w-full rounded-full'
              // icon={{ position: 'right', content: () => <span>🚀</span> }}
              icon={{ position: 'right', content: () => <HeartIcon className=' text-red-600' /> }}
              onClick={() => console.log('clicked button2')}
            />
          </div>

          <CodeBlock>
            {
              
            
              `<Button variant='md' text='Button' className='bg-indigo-700 hover:bg-indigo-800 text-white' />\n<Button variant='md' text='Button' className='w-full rounded-full bg-orange-500 hover:bg-orange-700 text-white' />\n<Button variant='md' text='Button' className='bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 hover:text-white rounded-tr-2xl rounded-bl-2xl' />\n<Button variant='md text-#ffc0cb  bg-black' className=' hover:!text-red-600 w-full rounded-full' 
          icon={{ 
            position: 'right', 
            content: () => <HeartIcon className=' text-red-600' /> 
          }} 
          onClick={() => console.log('clicked me!')}  
  />`
            }
          </CodeBlock>
        </SubSection>

        <SubSection id='custom-classes' subTitle='Custom classes' description='You can also add a specific css class or classes for specific results:'>
            <div>
              <Button 
                variant='xxl' 
                text='Button' 
                className='box bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white !px-12' 
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
              className='w-full'
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
      </div>

      {/* <aside className="bg-gray-100 p-4 w-[var(--drawer-width)] sticky top-0 right-0 h-[calc(var(--drawer-height)_+_var(--drawer-width))] overflow-y-auto">
        <h2 className='font-bold text-sm'>Viewing</h2>
          <ul className='px-4 *:py-1 relative'>
            <RightHandIcon 
              style={{
                transform: `translateY(${32 * (activeItem - 1)}px)`,
              }}
              className='w-6.5 h-6.5 absolute top-1 -left-2.5 duration-300 ease-in-out text-indigo-500' 
            />

            {navigationItems.map((item) => (
              <li 
                className={`p-2 overflow-hidden text-ellipsis whitespace-nowrap duration-300 ease-in-out ${activeItem === item.id ? 'bg-indigo-500/10 rounded-md' : ''}`} 
                key={item.id}
                title={item.name}
              >
                <a 
                  href={item.link}
                  onClick={() => setActiveItem(item.id)}
                  className={` ${activeItem === item.id ? 'text-indigo-500/100 ' : ''}`}
                >
                  {item.name}
                </a>
              </li>
            ))}

          </ul>
      </aside> */}

    </div>
  )
}
