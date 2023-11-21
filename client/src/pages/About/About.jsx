import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './About.css';

function About(props) {
    return (
        <>
            <Header/>
            <div className={'about'}>
                <div className="google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10165.055542432263!2d30.52934897166608!3d50.436185214597366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1700561362933!5m2!1suk!2sua"
                        width="600" height="450" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus aliquam amet aperiam
                        asperiores consequatur cum distinctio dolor dolorem dolores dolorum earum eius eveniet excepturi
                        exercitationem expedita fugiat incidunt ipsum, libero magnam, minus molestiae nam nobis odit
                        perspiciatis, placeat quis quo repellat saepe similique sit tenetur velit voluptas voluptate
                        voluptatem voluptatibus? Consequuntur, minus, neque! Assumenda cum cupiditate esse expedita,
                        fuga mollitia non quisquam quod similique sit temporibus tenetur voluptas voluptatem! Dicta
                        fugit, repellat! Ad animi deleniti enim illo magni numquam, perspiciatis ratione reiciendis
                        repellendus vel? Aliquid assumenda corporis distinctio ducimus ex possimus tenetur voluptatum?
                        Aliquam corporis dolor quisquam vel!0</p>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default About;