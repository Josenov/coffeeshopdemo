import { useState } from "react"
import ReadMoreBtn from "./ReadMoreBtn";




const Main = () => {

    



    return (

        <>

            <div id='main' className="flex items-center justify-center text-center  text-white font-semibold  md:font-semibold">
                <div className=" text-center absolute z-[50] justify-center mt-[200px] md:mt-2">
                    <p className="lg:mt-[280px] text-3xl md:w-96">"Stars Coffee: Where Every Cup Tells a Story!"</p>
                    {/* <button onClick={handleReadMore} className="bg-[#42D5C0] hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded mt-5">Read More</button> */}
                    <div className="md:w-[400px] mt-2 md:mt-[-50px] p-2">
                    <ReadMoreBtn
                        text="Welcome to our cozy café! Immerse yourself in the tempting aroma of freshly ground coffee and savor delightful moments with every sip. From exquisite espressos to indulgent cappuccinos, our variety of hot beverages awaits you. Join us and let each cup tell a tale of flavor!"

                    />
                    </div>
                    
                </div>
                
                <img className="w-full h-screen object-cover object-left" src="https://s1.1zoom.me/big0/892/Coffee_Grain_Wood_planks_564164_1280x720.jpg" alt="" />

                



            </div>





        </>

    )
}

export default Main