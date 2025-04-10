// MyButton.jsx
import { useMemo } from 'react';
import ButtonBuilder2 from './ButtonBuilder';
import { LoaderDefaultIcon } from '../../../assets/icons';

const Button = ({
  variant = '',           // Ejemplo: 'primary color-#ffffff'
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
}) => {

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

  return (
    <button
      onClick={() => !disabled && !isLoading && onClick?.()} // Evita clics si está disabled o loading
      className={`${className} ${builderState?.classes || ''} ${icon ? ' flex items-center gap-2' : ''} ${
        disabled ? 'pointer-events-none opacity-50 select-none' : ''
      } ${isLoading ? 'pointer-events-none' : ''}`}
      style={builderState?.styles || {}}
      type={type}
      title={tooltip}
    >
      {isLoading ? 
        loadingIcon ? (
          <span className="flex items-center gap-1">
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
              <span>

                {typeof IconLoading === 'function' ? (
                  <IconLoading />
                ) : (
                  <img src={IconLoading} alt="icon" className="h-5 w-5" />
                )}
              </span>
            )}
          </span>
        ) 
        : <LoaderDefaultIcon className='animate-spin h-5 w-5 text-white' /> 
        : (
        <span className="flex items-center gap-1">
          {icon?.position === 'left' && (
            <span>
              {typeof IconComponent === 'function' ? (
                <IconComponent />
              ) : (
                <img src={IconComponent} alt="icon" className="h-5 w-5" />
              )}
            </span>
          )}
          {text}
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
}

export default Button