// MyButton.jsx
import { useMemo } from 'react';
import ButtonBuilder2 from './ButtonBuilder';

const Button = ({
  variant = '',           // Ejemplo: 'primary color-#ffffff'
  className = '',         // Clases adicionales
  text = 'Click me',      // Texto del botón
  icon = null,            // { position: 'left'|'right', content: 'url'|<Component> }
  type = 'button',        // Tipo de botón
  disabled = false,       // Estado deshabilitado
  isLoading = false,      // Estado de carga
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

  return (
    <button
      onClick={() => !disabled && !isLoading && onClick?.()} // Evita clics si está disabled o loading
      className={`${className} ${builderState?.classes || ''} ${icon ? ' flex items-center gap-2' : ''} ${
        disabled ? 'pointer-events-none opacity-50 select-none cursor-not-allowed' : ''
      } ${isLoading ? 'pointer-events-none cursor-not-allowed' : ''}`}
      style={builderState?.styles || {}}
      type={type}
      title={tooltip}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8h-8z"
            />
          </svg>
          Cargando...
        </span>
      ) : (
        <span className="flex items-center gap-1">
          {icon && icon.position === 'left' && (
            <span>
              {typeof IconComponent === 'function' ? (
                <IconComponent />
              ) : (
                <img src={IconComponent} alt="icon" className="h-5 w-5" />
              )}
            </span>
          )}
          {text}
          {icon && icon.position === 'right' && (
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