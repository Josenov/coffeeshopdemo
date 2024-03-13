

import { useEffect, useState } from 'react';

const Products = () => {

    const [data, setData] = useState("");
    const getData = async () => {
        const resp = await fetch('https://api.sampleapis.com/coffee/hot');
        const json = await resp.json();
        setData(json);

    }

    useEffect(() => {
        getData();

    }, []);

    console.log(data)

    const coffees = data



    return (
        <div id='products' className='flex flex-wrap justify-center shadow-md'>
            <img className='w-full h-screen object-cover' src="/coffee-pattern.jpg" alt="" />
            <p className='absolute mt-10 text-3xl font-bold flex items-center justify-center '>Our Products!</p>
            
            {
                coffees?.length > 0 ?
                    coffees?.map((coffee, index) => {

                        if( index === 0){
                            return null
                        }

                        return (
                            <div key={index} >
                                
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                
                                    <img className="w-full" src={coffee.image} />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{coffee.title}</div>
                                        <p className="text-gray-700 text-base">
                                            {coffee.description}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block text-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 p-4">Ingredients: {coffee.ingredients}</span>
                                        
                                    </div>
                                </div>
                            </div>

                        )

                    }) : <div> <h2>No se en encontraron resultados</h2></div>
                    
                    
            }

        </div>
    )




}

export default Products