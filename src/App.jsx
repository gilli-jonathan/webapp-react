import { BrowserRouter, Routers, Route } from "react-router-dom"
import DefaultLayout from "./Layout/DefaultLayout"
import Home from "./pages/Home"
import Info from "./pages/Info"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routers>
          <Route element={<DefaultLayout />} />
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Info />} />
        </Routers>
      </BrowserRouter>

    </>
  )
}

export default App
