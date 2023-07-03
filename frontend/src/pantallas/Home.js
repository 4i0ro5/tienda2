import React, { useEffect } from 'react';
import axios from "axios";

function Home(){

    useEffect(()=>{
        axios.get('/')
    })

    return(
        <div>
            <App></App>
        </div>
    )
}
export default Home;

