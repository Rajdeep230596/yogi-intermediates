import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { About } from "./pages/About"
import { Board } from "./pages/Board"
import { Bromine } from "./pages/Bromine"
import { Career } from "./pages/Career"
import { Chemistry } from "./pages/Chemistry"
import { Contact } from "./pages/Contact"
import { CoreVolume } from "./pages/CoreVolume"
import { Crams } from "./pages/Crams"
import { Ehs } from "./pages/Ehs"
import { Enquiry } from "./pages/Enquiry"
import { Home } from "./pages/Home"
import { Infrastructure } from "./pages/Infrastructure"
import { Journey } from "./pages/Journey"
import { Manufacturing } from "./pages/Manufacturing"
import { OilGas } from "./pages/OilGas"
import { Products } from "./pages/Products"
import { QaQc } from "./pages/QaQc"
import { Rd } from "./pages/Rd"
import { Reach } from "./pages/Reach"
import { Utilities } from "./pages/Utilities"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/board" element={<Board />} />
          <Route path="/reach" element={<Reach />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/core-volume" element={<CoreVolume />} />
          <Route path="/products/bromine" element={<Bromine />} />
          <Route path="/products/oil-gas" element={<OilGas />} />
          <Route path="/crams" element={<Crams />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/infrastructure/manufacturing" element={<Manufacturing />} />
          <Route path="/infrastructure/chemistry" element={<Chemistry />} />
          <Route path="/infrastructure/qa-qc" element={<QaQc />} />
          <Route path="/infrastructure/utilities" element={<Utilities />} />
          <Route path="/infrastructure/ehs" element={<Ehs />} />
          <Route path="/rd" element={<Rd />} />
          <Route path="/career" element={<Career />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
