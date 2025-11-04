import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { KeyCapabilities } from "@/components/key-capabilities"
import { KeyApplications } from "@/components/key-applications"
import { UseCases } from "@/components/use-cases"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <KeyCapabilities />
      <KeyApplications />
      <UseCases />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
