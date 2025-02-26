import Button from '../../ui/Buttons'

export const Buttons = ({ types, styles = '', disabled = false }) => {

  const handleClick = ( type ) => {
    console.log('clicked ' + type);
  }
  
  return (
    <>
      {
        types.map( (type, i) => {
          return(
            <Button
              key={i}
              onClick={() => handleClick(type)}
              className={styles}
              type={type}
              title={type.split(' ')[0]}
              disabled={disabled}
            />
          )
        })
      }
    </>
  )
}
