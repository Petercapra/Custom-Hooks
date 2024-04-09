

import React, { useEffect, useState } from 'react'


const localCache = {};

export const useFetch = ( url ) => {
  
  
    const [State, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    useEffect(() => {
    
        getFetch();

    }, [url] )

    const setLoading = () => {
        setState({data: null,
            isLoading: true,
            hasError: false,
            error: null,
        });
    }


    const getFetch = async() => {

        if (localCache[url]){
            setState({
            data: localCache[url],
         isLoading: false,
         hasError: false,
            error: null,
            });
            return;
        }

    
        setLoading();
       const resp = await fetch(url);

       await new Promise ( resolve => setTimeout(resolve, 1000 ))
       //si la respuesta falla por x motivo
       if (!resp.ok){
        setState({
            data: null,
            isLoading: false,
            hasError: true,
            error: {
                code: resp.status,
                message: resp.statusText,
            }
        })
        return;
       }

       //si la respuesta es buena
       const data = await resp.json();
       setState({
        data:data,
        isLoading: false,
        hasError: false,
        error:null,
       })

       localCache[url] = data;
    
    }
    
  
    return{
        data: State.data,
        isLoading: State.isLoading,
        hasError: State.hasError,
    };
};
