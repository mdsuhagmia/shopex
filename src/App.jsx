import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./components/root/RootLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound"
import Blog from "./pages/Blog"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ProductDetails from "./components/ProductDetails"
import Cart from "./pages/Cart"
import { ToastContainer } from "react-toastify"
import CheckOut from "./pages/CheckOut"

let routing = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/products/:id" element={<ProductDetails/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<CheckOut />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/aboutus" element={<AboutUs />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Route>
    <Route path="*" element={<NotFound />}></Route>
  </>
))

function App() {
  
  return (
    <div>
      <RouterProvider router={routing}></RouterProvider>
      <ToastContainer />
    </div>
  )
}

export default App
