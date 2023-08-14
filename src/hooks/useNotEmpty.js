import { useEffect, useState } from "react";


const useNotEmpty = function(initValue) {
    const [value, setValue] = useState(initValue);
    const [isValid, setValid] = useState(false);

    function validate(newValue) {
        if(!newValue || newValue.length === 0) {
            setValid(false);
        } else {
            setValid(true);
        }
        setValue(newValue);
    }

    useEffect(() => {
        validate(value);
    }, [value]);

    return [validate, isValid];
}


export default useNotEmpty;