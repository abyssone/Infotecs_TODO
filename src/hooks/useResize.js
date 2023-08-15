import {useState} from "react";

// Задает ширину элемента от левого края родителя
// до положения курсора внутри родителя
const useResize = function(startWidth) {

const [isActive, setActive] = useState(false);
const [width, setWidth] = useState(startWidth);

function resize(e) {
    const newW = e.clientX;
    setWidth(newW);    
}

    return [isActive, setActive, width, resize];
}


export default useResize;