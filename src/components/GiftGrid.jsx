import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGifs(category);
    console.log( {images, isLoading});    

    return (
        <>
            <h3>{category}</h3>           
            {
                isLoading && (<h2>cargando...</h2>)
            }
            
            

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GiftGridItem 
                            key = {image.id}
                            {...image}
                        />
                    ))
                }
                
            </div> 
        </>
    )
}
