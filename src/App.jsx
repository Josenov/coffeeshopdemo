import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Products from "./components/Products"
import SideNav from "./components/SideNav"


function App() {
 
  return (
    <>
      <div className="overflow-hidden">
      <SideNav/>
      <Main/>
      <AboutUs/>
      <Products/>
      <Contact/>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
