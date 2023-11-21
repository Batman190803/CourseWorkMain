import React from 'react';
import './Gallery.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Gallery(props) {
    return (
        <>
            <Header/>
            <div className={'gallery'}>
                <img src={require(`../../assets/img/${1}.jpg`)}/>
                <img src={require(`../../assets/img/${2}.jpg`)}/>
                <img src={require(`../../assets/img/${3}.jpg`)}/>
                <img src={require(`../../assets/img/${4}.jpg`)}/>
                <img src={require(`../../assets/img/${5}.jpg`)}/>
                <img src={require(`../../assets/img/${6}.jpg`)}/>
                <img src={require(`../../assets/img/${7}.jpg`)}/>
                <img src={require(`../../assets/img/${8}.jpg`)}/>
                <img src={require(`../../assets/img/${9}.jpg`)}/>
                <img src={require(`../../assets/img/${10}.jpg`)}/>
            </div>
            <Footer/>
        </>
    );
}

export default Gallery;