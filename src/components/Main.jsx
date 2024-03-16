import { useState } from "react"




const Main = () => {

    const [showText, setShowText] = useState(false);

    const handleReadMore = (event) => {
        event.preventDefault();
        setShowText(!showText)
        //console.log("State Changed")
        
    }



    return (

        <>
        
        <div  id='main' className="flex items-center justify-center text-center  text-white font-thin ">
            <div className=" text-center absolute z-[50] justify-center ">
                <p className="lg:mt-[150px] text-3xl md:w-96">"Sip, Savor, Smile: Where Every Cup Tells a Story!"</p>
                <button onClick={handleReadMore} className="bg-[#42D5C0] hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded mt-5">Read More</button>
            </div>
            <img className="w-full h-screen object-cover object-left " src="https://s1.1zoom.me/big0/892/Coffee_Grain_Wood_planks_564164_1280x720.jpg" alt="" />

            {
                showText ? 
                    <div className="absolute flex flex-col text text-center lg:mt-[100px]">
                        <p className="mt-[350px] text-xl md:w-[600px]">Welcome to our cozy café! Immerse yourself in the tempting aroma of freshly ground coffee and savor delightful moments with every sip. From exquisite espressos to indulgent cappuccinos, our variety of hot beverages awaits you. Join us and let each cup tell a tale of flavor!</p>
                    </div> 

                    : null
            } 
            
            
            
        </div>


        
        
        
        </>
        
    )
}

export default Main