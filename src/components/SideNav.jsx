import { useState } from "react"
import {AiOutlineCoffee, AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineShopping} from 'react-icons/ai'


const SideNav = () => {

    const [burguerMenu, setBurguerMenu] = useState(false);

    const handleBurguerMenu = () => {
        setBurguerMenu(!burguerMenu)
        console.log("state changed")
    }





    return (
        <div>

            <AiOutlineMenu onClick={handleBurguerMenu} className=" overflow-visible fixed top-4 right-4 z-[100] md:hidden size-11 text-gray-400" />

            <img className="absolute w-96 h-auto mt-20" src="https://1000logos.net/wp-content/uploads/2022/09/Stars-Coffee-Logo.png" alt="" />

            <div className=" absolute md:flex items-center justify-center p-4 gap-6 hidden text-2xl text-white font-bold">
                <a href="#main">Home</a>
                <a href="#about">About</a>
                <a href="#pages">Pages</a>
                <a href="#contact">Contact</a>
            </div>



            

            {
                burguerMenu ?
                    

                    <div className="fixed w-full h-screen flex flex-col items-center justify-center text-center text-xl  z-20 gap-10 text-white font-bold bg-black/70">
                        
                        <a onClick={handleBurguerMenu} href="#main" className="flex">
                            <AiOutlineHome size={30} className="flex justify-center w-[95%] " />
                            <span className="pl-2">Home</span>
                        </a>
                        <a onClick={handleBurguerMenu} href="#about" className="flex">
                            <AiOutlineCoffee size={30} className="flex justify-center w-[95%]" />
                            <span className="pl-2">About</span>
                        </a>
                        <a onClick={handleBurguerMenu} href="#products" className="flex">
                            <AiOutlineShopping size={30} className="flex justify-center w-[95%]" />
                            <span className="pl-2">Products</span>
                        </a>
                        <a onClick={handleBurguerMenu} href="#contact" className="flex">
                            <AiOutlineMail size={30} className="flex justify-center w-[95%]" />
                            <span className="pl-2">Contact</span>
                        </a>
                    </div>





                    :

                    null


            }



        </div>


    )
}

export default SideNav