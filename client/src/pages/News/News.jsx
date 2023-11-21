import React, {useEffect, useState} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import './News.css';

function News(props) {
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
        <>
            <Header/>
            <div className={'news'}>
                {news.map((newsData, index) => (
                    <div className={'news-data'}>
                        <h1 style={{color:'red'}}>{newsData.title}</h1>
                        <p>{newsData.description}</p>
                        <p>{newsData.date}</p>
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    );
}

export default News;