// MyButton.jsx
import { useEffect, useMemo } from 'react';
import ButtonBuilder2 from './ButtonBuilder';
import { LoaderDefaultIcon } from '../../../assets/icons';
import useTimer from '../../../hooks/timer';

const Button = ({
  variant = 'md',           // Ejemplo: 'primary color-#ffffff'
  className = '',         // Clases adicionales
  text = 'Click me',      // Texto del botón
  icon = null,            // { position: 'left'|'right', content: 'url'|<Component> }
  type = 'button',        // Tipo de botón
  disabled = false,       // Estado deshabilitado
  isLoading = false,      // Estado de carga
  loadingText = 'Loading',
  loadingIcon = { content: () => <LoaderDefaultIcon className='animate-spin h-5 w-5 text-white' />, position: 'left' }   ,      // Icono de carga},
  onClick,                // Evento click
  tooltip,                // Tooltip para accesibilidad
  timed                   // { time: number, decrease: boolean, progressColor: boolean, onEnd: () => void }
}) => {

  const { timer, splitTimer } = useTimer(timed?.time);

  const btnClasses = variant.trim().split(' ').filter(Boolean);

  const builderState = useMemo(() => {
    const builder = new ButtonBuilder2();
    btnClasses.forEach((btnClass) => {
      const [method, arg] = btnClass.split('-');
      if (builder[method]) {
        arg ? builder[method](arg) : builder[method]();
      } else {
        console.warn(`Método desconocido en ButtonBuilder: ${method}`);
      }
    });
    return builder.build();
  }, [variant]);

  const IconComponent = icon?.content;
  const IconLoading = loadingIcon?.content;

  useEffect(() => {
    if (timer === 0) { timed?.onEnd?.() }
  }, [timer])

  return (
    <button
      onClick={() => !disabled && !isLoading && onClick?.()} // Evita clics si está disabled o loading} // Evita clics si está disabled o loading
      className={`${className} ${builderState?.classes || ''} ${icon ? ' flex items-center gap-2' : ''} ${
        disabled ? 'pointer-events-none opacity-50 select-none' : ''
      } ${isLoading ? 'pointer-events-none' : ''}`}
      style={builderState?.styles || {}}
      type={type}
      title={tooltip}
    >

      { timed &&
        <div 
          style={{ 
            transform: `scaleX(${timed?.decrease ? (timer / (timed?.time * 1000)) : (1 - (timer / (timed?.time * 1000)))})`, 
            transformOrigin: 'left',
            width: '100%' // Cambiar de 0% a 100%
          }}
          className={`absolute h-full transition-all duration-20 ease-linear left-0 top-0 z-0 ${timed?.progressColor || 'bg-black'}`} 
        />
      }

      {isLoading ? 
        loadingIcon ? (
          <span className="flex items-center gap-1 z-10">
            {loadingIcon?.position === 'left' && (
              <span>
                {typeof IconLoading === 'function' ? (
                  <IconLoading />
                ) : (
                  <img src={IconLoading} alt="iconLoading" className="h-5 w-5" />
                )}
              </span>
            )}
            {loadingText}
            {loadingIcon?.position === 'right' && (
              <span className='z-10'>

                {typeof IconLoading === 'function' ? (
                  <IconLoading />
                ) : (
                  <img src={IconLoading} alt="icon" className="h-5 w-5" />
                )}
              </span>
            )}
          </span>
        ) 
        : <LoaderDefaultIcon className='animate-spin h-5 w-5 text-white z-10' /> 
        : (
        <span className="flex items-center gap-1 z-10">
          {icon?.position === 'left' && (
            <span>
              {typeof IconComponent === 'function' ? (
                <IconComponent />
              ) : (
                <img src={IconComponent} alt="icon" className="h-5 w-5" />
              )}
            </span>
          )}
          <span className='z-10'>
            {text} {timed && '(' + splitTimer(timer/1000) + ')'} 
          </span>
          {icon?.position === 'right' && (
            <span>
              {typeof IconComponent === 'function' ? (
                <IconComponent />
              ) : (
                <img src={IconComponent} alt="icon" className="h-5 w-5" />
              )}
            </span>
          )}
        </span>
      )}

    </button>
  );
};

export default Button