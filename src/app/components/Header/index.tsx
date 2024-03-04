import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { RiInstagramFill } from 'react-icons/ri'
import { chillion } from '../root/fonts'
import Switch from '../root/Switch'

export function Header() {
  return (
    <header className="h-fit w-full">
      <div className="grid w-full grid-cols-3 px-16 py-8">
        <div className="align-center font-montserrat flex justify-start">
          <Switch />
        </div>
        <div className="align-center flex justify-center text-2xl text-white">
          <div className=" flex justify-between gap-16">
            <a href="#">
              <RiInstagramFill className="size-10"></RiInstagramFill>
            </a>
            <a href="#">
              <IoLogoWhatsapp className="size-10"></IoLogoWhatsapp>
            </a>
            <a href="#">
              <IoMdMail className="size-10"></IoMdMail>
            </a>
          </div>
        </div>
        <div className="align-center flex justify-end text-2xl text-white">
          <span className="text-base	 opacity-80">
            Belo Horizonte, Minas Gerais BR
          </span>
        </div>
      </div>
      <div className=" grid w-full grid-cols-2 px-20 py-8">
        <div className="align-center font-montserrat flex  justify-start">
          <h1
            className={`${chillion.className} cursor-pointer text-5xl text-white hover:animate-pulse	`}
          >
            Artemis
          </h1>
        </div>
        <div className="grid grid-flow-col-dense">
          <div className="group cursor-pointer">
            <a className="text-2xl font-medium	text-white group-hover:animate-pulse">
              Bem-Vindo
            </a>
          </div>

          <div className="group cursor-pointer">
            <a className="text-2xl font-medium	text-white group-hover:animate-pulse">
              Sistemas
            </a>
          </div>

          <div className="group cursor-pointer">
            <a className="text-2xl font-medium	text-white group-hover:animate-pulse">
              Missão
            </a>
          </div>

          <div className="group cursor-pointer">
            <a className="text-2xl font-medium	text-white group-hover:animate-pulse">
              Futuro
            </a>
          </div>

          <div className="group cursor-pointer">
            <a className="text-2xl font-medium	text-white group-hover:animate-pulse">
              Fundadores
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
