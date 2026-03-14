import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { BenefitsPage } from "./pages/BenefitsPage"
import { TestimonialsPage } from "./pages/TestimonialsPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="benefits" element={<BenefitsPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
