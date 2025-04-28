import { HeartIcon, LoaderCircular } from '../../assets/icons'
import Button from '../../components/ui/Buttons/Button'
import Input from '../../components/ui/Inputs/Input'

export const HomePage = () => {


  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl">Galería de</h2>
      <h1 className="text-3xl">compOWNents</h1>
      <div className="flex gap-4 mt-4">
        <Button palette="primary" size="lg">
          Botón
        </Button>
        <Input placeholder="Ingrese su nombre" />
      </div>
      <div className="flex gap-4 mt-4">
        <HeartIcon className="w-8 h-8" />
        <LoaderCircular className="w-8 h-8" />
      </div>
    </div>
  )
}
