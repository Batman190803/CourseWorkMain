import React from 'react';
import 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
    <>
        <div className={'w-screen h-[10vw] bg-purple-700 flex'}>
            <img className={'p-2'} src="Department of _COMPUTER INFORMATION TECHNOLOGIES.png" alt="logo"/>
            <p className={'font-KdamThmorPro text-white text-3xl m-auto font'}>DEPARTMENT OF COMPUTER INFORMATION TECHNOLOGIES</p>
            <img className={'p-2'} src="Емблема_ЗСУ.png" alt="logo"/>
        </div>
        <div>
            <ul className='navigation bg-purple-700'>
                <li>
                    <span>Головна</span>
                </li>
                <li>
                    <span>Галерея</span>
                </li>
                <li>
                    <span>Новини</span>
                </li>
                <li>
                    <span>Контакти</span>
                </li>
            </ul>
        </div>
        </>
    );
};

export default Header;