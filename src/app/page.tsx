import { AboutUs } from './components/AboutUs'
import { ComingSoon } from './components/ComingSoon'
import { DividerSection } from './components/DividerSection'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { SoftwareList } from './components/SoftwareList'
export default function Home() {
  return (
    <main className="-z-1 relative min-h-[800vh]  items-center justify-between bg-black bg-gradientBG bg-contain bg-top bg-no-repeat">
      <Header />
      <Section />
      <DividerSection />
      <SoftwareList />
      <AboutUs />
      <ComingSoon />
    </main>
  )
}
