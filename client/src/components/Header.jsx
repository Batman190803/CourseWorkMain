import React from 'react';
import './Header.css';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
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
                    <span onClick={()=>navigate('/')}>Головна</span>
                </li>
                <li>
                    <span onClick={()=>navigate('/gallery')}>Галерея</span>
                </li>
                <li>
                    <span onClick={()=>navigate('/news')}>Новини</span>
                </li>
                <li>
                    <span onClick={()=>navigate('/about')}>Контакти</span>
                </li>
            </ul>
        </div>
        </>
    );
};

export default Header;