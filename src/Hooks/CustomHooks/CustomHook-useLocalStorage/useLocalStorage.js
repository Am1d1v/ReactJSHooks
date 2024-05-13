import { useState } from "react";

function useLocalStorage(key, initialValue){
    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue));

    const setValue = (value) => console.log(value);

    return [localStorageValue, setLocalStorageValue];
}

function getLocalStorageValue(key, initialValue){
    const itemFromLocalStorage = localStorage.getItem(key);
    return itemFromLocalStorage ? itemFromLocalStorage : initialValue;
}

export default useLocalStorage;