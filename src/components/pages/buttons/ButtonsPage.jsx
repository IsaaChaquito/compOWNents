import CodeBlock from '../../CodeBlock';
import { SubSection } from './SubSection';
import { Buttons } from './Buttons';
import Button from '../../ui/Buttons';


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
    <div className='w-fit h-full flex flex-col items-center overflow-x-hidden'>

      <section className='TITLE p-2'>
        <h1 className="text-3xl">Buttons</h1>
      </section>    

      <SubSection subTitle='Classics' description='You can try different classic types:'>
        <Buttons types={regularTypes} />
        <CodeBlock>
          {regularTypes
            .map(
              (type) =>
                `<Button type='${type}' title='${type.split(' ')[0]}' />`
            )
            .join("\n")}
        </CodeBlock>
      </SubSection>

      <SubSection subTitle='Disabled' description='You can disable buttons with the disabled prop:'>
        <Buttons types={regularTypes} disabled={true} />
        <CodeBlock>
          {regularTypes
            .map(
              (type) =>
                `<Button type='${type}' title='${type.split(' ')[0]}' disabled={true} />`
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
                `<Button type='${type}' title='${type.split(' ')[0]}' />`
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
                `<Button type='${type}' title='${type.split(' ')[0]}' />`
            )
            .join("\n")}
        </CodeBlock>
      </SubSection>

      <SubSection subTitle='Custom styles' description='You can customize the styles:'>
        {/* <Buttons types={customTypes} styles='bg-indigo-700 hover:bg-indigo-800 text-white' /> */}
        <Button 
          type='md' 
          title='Button' 
          className='bg-indigo-700 hover:bg-indigo-800 text-white' 
        />

<Button 
          type='md' 
          title='Button' 
          className='rounded-full bg-indigo-700 hover:bg-indigo-800 text-white' 
        />

        <Button 
          type='md' 
          title='Button' 
          className='bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 hover:text-white' 
        />

        <CodeBlock>
          {
            
          
            `<Button type='Button md' title='Button' className='bg-indigo-700 hover:bg-indigo-800 text-white' />\n<Button type='Button md' title='Button' className='rounded-full bg-indigo-700 hover:bg-indigo-800 text-white' />\n<Button type='md' title='Button' className='bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 hover:text-white' />`
          }
        </CodeBlock>
      </SubSection>

    </div>
  )
}
