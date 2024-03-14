import Carousel from "./Carousel"


const AboutUs = () => {
    return (
        <>

            <div id='about' >
                <div className="absolute font-semibold m-5 text-center">
                    <h3 className='text-2xl p-2'>About Us</h3>
                    <h4 className='text-lg mb-2'>Welcome to Coffee Shop!</h4>
                    <p className="text-sm font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum tempora quos deleniti, aliquam numquam illum laborum consequuntur aut possimus tempore inventore ipsam alias sed sapiente beatae obcaecati dignissimos! Ad, tenetur.</p>
                    <button className="bg-[#42D5C0]  hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded m-1">Read More</button>
                </div>


                <img className='w-full h-screen object-cover' src="/coffee-pattern.jpg" alt="" />

                <div className='absolute mt-[-380px]'>
                    <Carousel />
                </div>




            </div>




        </>

    )
}

export default AboutUs