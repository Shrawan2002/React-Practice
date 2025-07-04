
import {createBrowserRouter,RouterProvider} from "react-router";
import './App.css'
import AppLyout from "./components/Layout/AppLyout";
import Home from "./components/Ui/Home";
import About from "./components/Ui/About";
import  Contact  from "./components/Ui/Contact";

function App() {
  const router  = createBrowserRouter([
    {
      path: "/",
      element: <AppLyout/>,
      children:[
              {
      path: "/",
      element: <Home/>
    },
      {
      path: "/About",
      element: <About/>
    },
      {
      path: "/contact",
      element: <Contact/>
    },
      ]
    }
   
  ])

  return <RouterProvider router={router}/>
}

export default App
