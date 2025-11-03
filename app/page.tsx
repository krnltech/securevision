import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
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
      <Features />
      <Stats />
      <UseCases />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
