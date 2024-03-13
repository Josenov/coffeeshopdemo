import AboutUs from "./components/AboutUs"
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
      <Footer/>
      </div>
      
    </>
  )
}

export default App
