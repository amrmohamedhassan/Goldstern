//Imports
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

//Pages
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";

//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element= {<Home />} />
      <Route path="/about" element= {<About />} />
    </Route>
  )
)

//Main_Function
function App() {
  return (
    <div className="app">
    <RouterProvider router={router} />        
    </div>
  );
}

export default App; 
