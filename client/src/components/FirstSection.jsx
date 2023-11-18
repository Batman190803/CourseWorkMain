import React, {useEffect, useState} from 'react';
import Slider from "./Slider";
import axios from "axios";

const FirstSection = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const onToggleLoading = () => setIsLoading(!isLoading)

    const fetchData = async () => {
        setNews((await axios.get('http://localhost:1488/api/news')).data)
    }

    useEffect(() => {
        fetchData().then(onToggleLoading)
    }, [])
    return (
        <div className={'w-screen h-screen bg-purple-300'}>
            {isLoading ? "Loading..." : <Slider images={news}/>}
        </div>
    );
};

export default FirstSection;