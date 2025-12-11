import { BrowserRouter, Routers, Route } from "react-router-dom"
import DefaultLayout from "./Layout/DefaultLayout"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routers>
          <Route element={<DefaultLayout />} />
        </Routers>

      </BrowserRouter>

    </>
  )
}

export default App
