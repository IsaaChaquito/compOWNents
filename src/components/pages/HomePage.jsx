import Button from "../ui/Buttons/Button"
import { ArrowTopRight } from "../../assets/icons"
import { useNavigate } from "react-router"
import useTimer from "../../hooks/timer";

export const HomePage = () => {

  const navigate = useNavigate();
  const time = 5
  const { timer, timeFormatter, pauseTimer, resumeTimer } = useTimer(time);

  // console.log('timer', timer);
// Get starting in (0:06)
// Get started

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-2xl">Galería de</h2>
      <h1 className="text-3xl">compOWNents</h1>

      <Button 
        onClick={() => navigate('/compownents')}
        onMouseEnter={() => pauseTimer()}
        onMouseLeave={() => resumeTimer()}
        variant="md solid pressable text-white"
        text="Get started"
        className="group hover:!text-white bg-gradient-to-r from-pink-500 to-violet-600"
        icon={{
          position: 'right', 
          content: () => 
            <ArrowTopRight 
            style={{ transform: `scale(${ (1 - (timer / (time * 1000))) + .7 }) ` }}
            className='w-4 h-4 group-hover:rotate-12 duration-300 '
            />
        }}
        timed= {{ 
          time,
          timer,
          // behavior: {
          //   pausable: true,
          //   resumible: true,
          // },
          progressColor: ' bg-black/25 ',
          onEnd: () => navigate('/compownents'),
          timeWithFormat: timeFormatter(timer / 1000)
        }}
      />
    </div>
  )
}

export default HomePage
