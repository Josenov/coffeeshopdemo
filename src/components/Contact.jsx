import React from 'react'

const Contact = () => {
    return (
        <div className='mt-5' id='contact'>
            
            <div className="container  mx-auto md:px-6">
                
                <section className="md:flex flex-col text-center">
                    <h3 className='md:text-4xl text-2xl p-2 text-center font-semibold mb-4'>Contact Us!</h3>
                    <div
                        className="block  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                        <div className="flex flex-wrap flex-col items-center">
                            <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 ">
                                <div className="h-[500px] w-full mb-7">
                                    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0"
                                        allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className=" shrink-0 grow-0 basis-auto md:w-6/12 xl:w-8/12 flex items-center justify-center">
                                <div className="flex flex-wrap justify-center px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                                    <div className="mb-12 shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                                        <div className="flex  justify-center">
                                            <div className="flex items-center justify-center">
                                                <div className="md:inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                                        stroke="currentColor" className="h-6 w-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="md:ml-6 grow ">
                                                <p className="mb-2 font-bold text-black ">
                                                    Technical support
                                                </p>
                                                <p className="text-neutral-500 ">
                                                    support@example.com
                                                </p>
                                                <p className="text-neutral-500 ">
                                                    +1 234-567-89
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-center">
                                                <div className="md:inline-block rounded-md bg-primary-100 p-4 text-primary ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                                        stroke="currentColor" className="h-6 w-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="md:ml-6 grow ">
                                                <p className="mb-2 font-bold text-black">
                                                    Sales questions
                                                </p>
                                                <p className="text-neutral-500 dark:text-neutral-500">
                                                    sales@example.com
                                                </p>
                                                <p className="text-neutral-500 dark:text-neutral-500">
                                                    +1 234-567-89
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
            
        </div>
    )
}

export default Contact