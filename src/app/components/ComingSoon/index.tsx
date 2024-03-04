import appLogo from '@/assets/imgs/apps/Artemis.svg'
import Image from 'next/image'
export function ComingSoon() {
  return (
    <section className="mt-[15rem] flex min-h-[120vh]  flex-col items-center px-[14rem]">
      <span className="mb-[8rem] text-5xl text-white">O que vem por ai?</span>
      <div className="flex max-h-[9.375rem] w-full flex-col space-y-4">
        <span className="self-center text-lg text-green-apple">
          EM DESENVOLVIMENTO
        </span>
        <div className=" grid-cols-comingSoon grid content-center rounded-3xl border border-blue-berry	px-14 py-10 text-white">
          <span className="-rotate-90	text-3xl font-semibold">GUSTÔ</span>
          <span className="max-w-[60rem] text-xl	">
            Um aplicativo voltado para restaurantes, com objetivo de tornar mais
            pratico e fácil o atendimento ao cliente...
          </span>
          <Image src={appLogo} alt="Gustô" className="size-[9rem]"></Image>
        </div>
      </div>
    </section>
  )
}
