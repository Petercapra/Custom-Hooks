import { useState } from "react";

export const useCounter = ( valorInicial ) => {

const [counter, setcounter] = useState(valorInicial)

const incrementar = () => {
    setcounter(counter + 1);
};

const decrementar = () => {
    setcounter(counter - 1);
};

const resetear = () => {
    setcounter(valorInicial);
};

return {
    counter,
    incrementar,
    decrementar,
    resetear,
}

};