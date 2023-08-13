import {useState, useEffect} from "react";

const useLocalStorage = function(initiadValue, key) {
    const [value, setValue] = useState(getValue());

    function getValue() {
        const storage = localStorage.getItem(key);

        if(storage) {
            return JSON.parse(storage);
        }
        return initiadValue;
    }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}
export default useLocalStorage;