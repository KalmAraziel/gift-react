import { useState, useEffect } from "react";
import { obtenerGif } from "../helpers/getGifts";

export const useFetchGifs = (categoria) => {
    
    const [state, setState] = useState({ data: [], loading: true });

    useEffect(() => {
        obtenerGif(categoria).then( imgs => {
            setState(
                { 
                    data: imgs,
                    loading: false 
                }   
            );
        });
    }, [ categoria ])

    return state;
};