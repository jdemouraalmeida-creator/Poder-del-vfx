import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import ForWhom from '@/components/ForWhom'
import Transformation from '@/components/Transformation'
import WhatYouGet from '@/components/WhatYouGet'
import Projects from '@/components/Projects'
import Bonuses from '@/components/Bonuses'
import Authority from '@/components/Authority'
import Pricing from '@/components/Pricing'
import GuaranteeCTA from '@/components/GuaranteeCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <ForWhom />
      <Transformation />
      <WhatYouGet />
      <Projects />
      <Bonuses />
      <Authority />
      <Pricing />
      <GuaranteeCTA />
    </main>
  )
}
