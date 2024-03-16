import { useState } from "react"
import {AiOutlineCoffee, AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineShopping} from 'react-icons/ai'


const SideNav = () => {

    const [burguerMenu, setBurguerMenu] = useState(false);

    const handleBurguerMenu = () => {
        setBurguerMenu(!burguerMenu)
        //console.log("state changed")
    }

    





    return (
        <div className="md:flex items-center justify-center">

            <AiOutlineMenu onClick={handleBurguerMenu} className="  fixed top-4 right-4 z-[100] md:hidden size-11 text-[#42D5C0]" />

            
            <div className=" absolute md:flex items-center justify-center mt-[80px]  p-4 gap-6 hidden text-2xl text-white font-thin">
                <a href="#main">Home</a>
                <a href="#about">About</a>
                <a href="#products">Products</a>
                <a href="#contact">Contact</a>
            </div>

            <img className="absolute flex justify-center w-96 h-auto mt-10 md:mt-[400px] " src="https://1000logos.net/wp-content/uploads/2022/09/Stars-Coffee-Logo.png" alt="" />




            

            {
                burguerMenu ?
                    

                    <div className="fixed w-full h-screen flex flex-col items-center justify-center text-xl  z-[99] gap-10 text-white font-bold bg-black/70">
                        
                        <div className="flex  flex-col gap-10">
                        <a onClick={handleBurguerMenu} href="#main" className="flex items-center justify-center">
                            <AiOutlineHome size={30} className="" />
                            <span className="m-2">Home</span>
                        </a>
                        <a onClick={handleBurguerMenu} href="#about" className="flex items-center justify-center">
                            <AiOutlineCoffee size={30} className="" />
                            <span className="m-2">About</span>
                        </a>
                        <a onClick={handleBurguerMenu} href="#products" className="flex items-center justify-center ml-6">
                            <AiOutlineShopping size={30} className="" />
                            <span className="m-2">Products</span>
                        </a>
                        <a onClick={handleBurguerMenu} href="#contact" className="flex items-center justify-center ml-4">
                            <AiOutlineMail size={30} className="" />
                            <span className="m-2">Contact</span>
                        </a>
                        </div>
                    </div>





                    :

                    null


            }



        </div>


    )
}

export default SideNav