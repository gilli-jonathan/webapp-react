import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./Layout/DefaultLayout"
import Home from "./pages/Home"
import Info from "./pages/Info"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<Info />} />
          </Route >
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
