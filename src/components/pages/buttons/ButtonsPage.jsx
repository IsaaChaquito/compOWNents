import CodeBlock from '../../CodeBlock';
import { SubSection } from './SubSection';
import { Buttons } from './Buttons';
import { HeartIcon } from '../../../assets/icons';

import Button from '../../ui/Buttons/Button';

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

export const ButtonsPage = () => {

  return (
    <div className='w-full h-full flex flex-col relative '>

      <section className='TITLE p-2'>
        <h1 className="text-3xl">Buttons</h1>
      </section>   
      

      <SubSection subTitle='Classics' description='You can try different classic types:' showConsole={true}>
        <Buttons types={regularTypes} />
        <CodeBlock>
          {regularTypes
            .map(
              (type) =>
                `<Button variant='${type}' title='${type.split(' ')[0]}' />`
            )
            .join("\n")}
        </CodeBlock>

        <span>
          As you can see the first string in <code className='font-bold'>type</code> prop is the color and the second string corresponds to the size of the button. 
        </span>
      </SubSection>

      <SubSection subTitle='Disabled' description='You can disable buttons with the disabled prop:' >
        <Buttons types={regularTypes} disabled={true} />
        <CodeBlock>
          {regularTypes
            .map(
              (type) =>
                `<Button variant='${type}' title='${type.split(' ')[0]}' disabled={true} />`
            )
            .join("\n")}
        </CodeBlock>
      </SubSection>

      <SubSection subTitle='Sizes' description='You can try different sizes:'>
        <Buttons types={sizeTypes} />
        <CodeBlock>
          {sizeTypes
            .map(
              (type) =>
                `<Button variant='${type}' title='${type.split(' ')[0]}' />`
            )
            .join("\n")}
        </CodeBlock>
      </SubSection>

      <SubSection subTitle='Outlined' description='You can try different outlined types:'>
        <Buttons types={outlinedTypes} />
        <CodeBlock>
          {outlinedTypes
            .map(
              (type) =>
                `<Button variant='${type}' title='${type.split(' ')[0]}' />`
            )
            .join("\n")}
        </CodeBlock>
      </SubSection>

      <SubSection subTitle='Solid' description='Solid styles:'>
        <div className='flex gap-2'>
          <Button 
            variant='solid md' 
            title='Button' 
            className='w-full' 
          />

        <Button
          variant="md text-#c33872 bg-black" // Clases para el builder
          // text="Enviar formulario"
          className=' hover:!text-red-600 w-full rounded-full'
          // icon={{ position: 'right', content: () => <span>🚀</span> }}
          icon={{ position: 'right', content: () => <HeartIcon /> }}
          disabled={false} // Disabled depende del input
          isLoading={false}
          onClick={() => console.log('clicked button2')}
          tooltip="Haz clic para enviar"
        />
      <Button
        variant="md bg-orange text-white "
        text="Procesando"
        isLoading={true}
        disabled={true}
      />
        </div>
          <CodeBlock>
            {`<Button variant='md' title='Button' className='bg-indigo-700 hover:bg-indigo-800 text-white' />`}
        </CodeBlock>
      </SubSection>

      <SubSection subTitle='Custom styles' description='You can customize the styles:'>
        {/* <Buttons types={customTypes} styles='bg-indigo-700 hover:bg-indigo-800 text-white' /> */}
        <div className='flex gap-2'>
          <Button 
            variant='md' 
            title='Button' 
            className='bg-indigo-700 hover:bg-indigo-800 text-white' 
          />

          <Button 
            variant='md' 
            title='Button' 
            className='rounded-full bg-orange-500 hover:bg-orange-700 text-white w-full' 
          />

          <Button 
            variant='md' 
            title='Button' 
            className='bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 hover:text-white rounded-tr-2xl rounded-bl-2xl' 
          />
        </div>

        <CodeBlock>
          {
            
          
            `<Button variant='md' title='Button' className='bg-indigo-700 hover:bg-indigo-800 text-white' />\n<Button variant='md' title='Button' className='w-full rounded-full bg-orange-500 hover:bg-orange-700 text-white' />\n<Button variant='md' title='Button' className='bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 hover:text-white rounded-tr-2xl rounded-bl-2xl' />`
          }
        </CodeBlock>

        <SubSection description='You can also add a specific css class or classes for specific results:'>
          <div>
            <Button 
              variant='xxl' 
              title='Button' 
              className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white box !px-12' 
            />
          </div>

          <CodeBlock>
            {
              `<Button variant='md' title='Button' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white box !px-12' />`
            }
          </CodeBlock>
        </SubSection>

      </SubSection>

    </div>
  )
}
