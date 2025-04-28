import Button from "../ui/Buttons/Button"
import { ArrowTopRight } from "../../assets/icons"
import { useNavigate } from "react-router"
import useTimer from "../../hooks/timer";

export const HomePage = () => {

  const navigate = useNavigate();
  const time = 9
  const { timer } = useTimer(time);

  // console.log('timer', timer);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-2xl">Galería de</h2>
      <h1 className="text-3xl">compOWNents</h1>

      <Button 
        onClick={() => navigate('/compownents')}
        variant="md solid pressable text-white"
        text="Getting started"
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
          time: time,
          progressColor: ' bg-black/60 ',
          onEnd: () => navigate('/compownents')
        }}
      />
    </div>
  )
}

export default HomePage
