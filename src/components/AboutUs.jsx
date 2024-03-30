import Carousel from "./Carousel"


const AboutUs = () => {
    return (
        <>

            <div id='about' className="flex justify-center  lg:w-full lg:h-screen md:mb-6" >
                <div className="absolute font-semibold m-5 text-center">
                    <h3 className='text-3xl md:text-5xl font-bold p-2'>About Us</h3>
                    
                    <p className="text-sm md:text-xl font-semibold lg:w-[1000px] text-left mt-5">
                    Welcome to Stars Coffee, where every cup tells a story.

Nestled in the heart of New Jersey, our café is more than just a place to grab your morning brew – it's a haven for coffee aficionados and community seekers alike. Established in 2015, we set out with a simple mission: to craft exceptional coffee experiences while fostering a warm and inviting atmosphere for all who walk through our doors.

Our journey began with a passion for sourcing the finest beans from around the world. From the lush highlands of Ethiopia to the misty mountains of Colombia, we've scoured the globe to bring you the most exquisite flavors in every sip. Each batch is carefully roasted to perfection, ensuring that every cup is a testament to our commitment to quality and craftsmanship.




                    </p>
                    
                    
                </div>


                <img className='w-full h-screen md:h-[1500px]  object-cover' src="/coffee-pattern.jpg" alt="" />

                

                
                    
                




            </div>

            <div className="w-full flex items-center justify-center mt-[-150px] md:mt-[-150px]">
                    <Carousel />
            </div>




        </>

    )
}

export default AboutUs