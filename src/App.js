//Imports
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

//Pages
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element= {<Home />} />
      <Route path="/about" element= {<About />} />
      <Route path="/login" element= {<Login />} />
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
