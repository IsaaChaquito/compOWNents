import Button from '../../ui/Buttons/Button';

export const Buttons = ({ types, styles = '', disabled = false }) => {

  const handleClick = ( type ) => {
    console.log('clicked ' + type);
  }
  
  return (
    <div className='flex gap-2 w-auto items-end flex-wrap'>
      {
        types.map( (type, i) => {
          return(
            <Button
              key={i}
              onClick={() => handleClick(type)}
              className={styles}
              variant={type}
              text={type.split(' ')[0]}
              disabled={disabled}
            />
          )
        })
      }
    </div>
  )
}
