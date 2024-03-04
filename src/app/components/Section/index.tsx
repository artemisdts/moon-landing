import { IoLogoWhatsapp } from 'react-icons/io'
import { chillion } from '../root/fonts'

export function Section() {
  return (
    <section className="z-1 mt-8 flex min-h-[100vh] w-full items-center justify-center space-x-[18%] bg-spaceBoy  bg-cover bg-no-repeat px-24 py-32">
      <aside
        className={`font-black-1 flex h-full max-h-[482px] w-full	max-w-[459px] flex-col space-y-[10%] rounded-[35px] bg-white-50 px-14 py-12 text-6xl`}
      >
        <span className={`${chillion.className}`}>
          <span className="text-blue-label">Mergulhe</span> conosco nesse mundo
          digital.
        </span>
        <a
          href="#"
          className=" group  flex h-14 w-80 items-center justify-center space-x-4 rounded-full bg-blue-label py-4 text-lg text-white-80"
        >
          <IoLogoWhatsapp className="size-7 delay-200 group-hover:animate-bounce	"></IoLogoWhatsapp>
          <span>Fazer um orçamento</span>
        </a>
      </aside>
      <aside className="flex h-full max-h-[462px] w-full max-w-[459px] flex-col text-right text-neutral-100">
        <h4 className="text-lg">SOLUÇÕES DIGITAIS</h4>
        <div className="my-3.5 h-[1px] w-[91px] self-end bg-white"></div>
        <span className="text-lg leading-8	tracking-tight	">
          Unindo expertise técnica e criatividade, a{' '}
          <span className="text-2xl font-semibold">Artemis</span> capacita
          negócios a atingirem novos patamares de sucesso.
        </span>

        <span className="text-lg leading-8	tracking-tight">
          Com{' '}
          <span className="text-2xl">
            inovação, praticidade e muito bom gosto
          </span>
          , fazemos qualquer tipo de Software. E-commerce, LandingPages,
          Aplicativos completos, tudo para que o seu negócio possa prosperar
          ainda mais e{' '}
          <span className="text-2xl font-semibold">continue a crescer</span>.
        </span>
      </aside>
    </section>
  )
}
