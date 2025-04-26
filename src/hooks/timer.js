import { useEffect, useRef, useState } from "react";

const useTimer = ( timeInSeconds ) => {


  const [timer, setTimer] = useState(timeInSeconds * 1000);
  const timerControl = useRef(null);  // Referencia para el control del temporizado

  useEffect(() => {

    // Timer para el tiempo de la notificación
    timerControl.current =  createTimer(timeInSeconds * 1000, setTimer)

    return () => timerControl.current.stop()

  }, [timeInSeconds])

  const splitTimer = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    //if seconds are greater than 60, add 1 minute and show 00 in the seconds field.
    return `${ (minutes + (Math.round(seconds).toString().includes('60') ? 1 : 0)).toString().padStart(1, '0')}:${(Math.round(seconds).toString().includes('60') ? '00' : Math.round(seconds).toString().padStart(2, '0'))}`;
  };

  const reset = () => {
    timerControl.current?.stop()
    setTimer(timeInSeconds * 1000)
    timerControl.current = createTimer(timeInSeconds * 1000, setTimer)
  }

  return {
    timer,
    reset: () => reset(),
    splitTimer: (timer) => splitTimer(timer),
    pauseTimer: () => timerControl.current?.pause(),
    resumeTimer: () => timerControl.current?.resume(),
  }
}

export default useTimer;

/**
 * Crea un temporizador que se encarga de llamar a una función de
 * callback con el tiempo restante cada 20ms, y que se detiene
 * automáticamente cuando el tiempo restante es de 0ms.
 *
 * @param {number} duration - Tiempo total del temporizador en ms
 * @param {function} callback - Función que se llama cada 20ms con el
 *                              tiempo restante como parámetro
 *
 * @returns {object} - Objeto con tres métodos: pause, resume y stop.
 *                    pause: pausa el temporizador.
 *                    resume: reanuda el temporizador.
 *                    stop: detiene completamente el temporizador.
 */

const createTimer = (duration, callback) => {
  let interval = null;
  let remainingTime = duration;
  let paused = false;
  let startTime = Date.now();
  let endTime = startTime + duration;

  const start = () => {
    interval = setInterval(() => {
      if (!paused) {
        const now = Date.now();
        remainingTime = Math.max(endTime - now, 0);
        callback(remainingTime);

        if (remainingTime <= 0) {
          clearInterval(interval);
        }
      }
    },  20);
  };

  const pause = () => {
    if (!paused) {
      paused = true;
      clearInterval(interval);
      remainingTime = endTime - Date.now();
    }
  };

  const resume = () => {
    if (paused) {
      paused = false;
      startTime = Date.now();
      endTime = startTime + remainingTime;
      start();
    }
  };

  const stop = () => clearInterval(interval);

  start(); // Inicia el temporizador al llamar a la función

  return { pause, resume, stop };
}