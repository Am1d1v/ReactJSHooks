import { useState } from "react";

function useLocalStorage(key, initialValue){
    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue));

    const setValue = (value) => {
        // Check if function
        const valueToStorn = value instanceof Function ? value(localStorageValue) : value;

        // Set to state
        setLocalStorageValue(value);

        // Set to local storage
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue){
    const itemFromLocalStorage = localStorage.getItem(key);
    return itemFromLocalStorage ? JSON.parse(itemFromLocalStorage) : initialValue;
}

export default useLocalStorage;