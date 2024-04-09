

import React, { useState } from 'react'

export const useForm = ( valorInicial = {}) => {
  
        const [formState, setformState] = useState(valorInicial);
      
    
        const onInputChange = ({target}) => {
                const {name, value} = target;
                setformState({
                    ...formState,
                    [name]:value,
                })
        };
    
        const onResetForm = () => {
            setformState( valorInicial );
    
        }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

    };
}
