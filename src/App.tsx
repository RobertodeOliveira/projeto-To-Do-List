import { RouterProvider } from 'react-router-dom'
import { routes } from './router/router'


function App() {

  return (
    <div style={{ height: "100%", }}>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
