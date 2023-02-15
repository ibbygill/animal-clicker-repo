import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import spider from './svg/spider.svg';
import dog from './svg/dog.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import pig from './svg/pig.svg';

import { useState } from 'react';


const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
    pig,
    spider,
};

function AnimalShow({ type }) {

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };
    
    return (
    <div onClick={handleClick}> 
        <img alt="animal" src={svgMap[type]} width="100" length="100" />
        <img 
            alt="heart" 
            src={heart}
            style={{
                width: 10 + 10 * clicks + 'px'
            }}
        />    
    </div>
)}

export default AnimalShow;