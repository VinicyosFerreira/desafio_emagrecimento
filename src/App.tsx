import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { CardsSection } from "./components/CardsSection"
import { VideoSection } from "./components/VideoSection"
import { Footer } from "./components/Footer"

const App = () => {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <Hero />
      <CardsSection />
      <VideoSection />
      <Footer />
    </main>
  )
}

export default App
