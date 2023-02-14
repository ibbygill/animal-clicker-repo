import { useState } from 'react';

function App() {
    const handleClick = () => {
        setCount(count + 1);
    };

    const [count, setCount] = useState(0);

    // counter to define user clicks


    return( 
    <div>
        <button onClick={handleClick}> Add Animal</button>
        <div> Number of animals: {count} </div>
    </div>
    );
}

export default App;