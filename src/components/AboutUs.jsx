import Carousel from "./Carousel"


const AboutUs = () => {
    return (
        <>

            <div id='about' className="flex justify-center  lg:w-full lg:h-full" >
                <div className="absolute font-semibold m-5 text-center">
                    <h3 className='text-2xl p-2'>About Us</h3>
                    <h4 className='text-lg mb-2 font-bold'>Welcome to Coffee Shop!</h4>
                    <p className="text-sm font-semibold lg:w-128">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum tempora quos deleniti, aliquam numquam illum laborum consequuntur aut possimus tempore inventore ipsam alias sed sapiente beatae obcaecati dignissimos! Ad, tenetur.</p>
                    <button className="bg-[#42D5C0]  hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded m-1 mt-4">Read More</button>
                    
                </div>


                <img className='w-full h-screen object-cover' src="/coffee-pattern.jpg" alt="" />

                

                
                    
                




            </div>

            <div className="w-full flex items-center justify-center mt-[-300px] md:mt-[-300px]">
                    <Carousel />
            </div>




        </>

    )
}

export default AboutUs