import Hero from '../components/Hero'
import LogoCarousel from '../components/LogoCarousel'
import FocusScrollSection from '../components/FocusScrollSection'
import UseCasesCarousel from '../components/UseCasesCarousel'
import TestimonialSlider from '../components/TestimonialSlider'
import WorkSection from '../components/WorkSection'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <FocusScrollSection />
      <UseCasesCarousel />
      <TestimonialSlider />
      <WorkSection />
      <CTASection />
    </>
  )
}