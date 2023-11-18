import React, {useState} from "react";

function Slider({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={'font-KdamThmorPro'}>
            <div className="p-2 w-full text-center">
                <p className=" text-4xl font-bold text-gray-700">
                    {images[currentIndex] ? images[currentIndex].date : null}
                </p>
                <p>{images[currentIndex] ? images[currentIndex].description : null}</p>
            </div>
            <div className="flex justify-between">
                <button
                    className="rounded p-2 bg-gray-400 text-white hover:bg-gray-500 hover:text-black"
                    onClick={prevSlide}
                >
                    Попередній
                </button>
                <img
                    className=" w-1/3 h-3/5"
                    src={`http://localhost:1488/api/news/${images[currentIndex]?.img}`}
                    alt={`Slide ${currentIndex}`}
                />
                <button
                    className="rounded p-2 bg-gray-400 text-white hover:bg-gray-500 hover:text-black"
                    onClick={nextSlide}
                >
                    Наступний
                </button>
            </div>
        </div>
    );
}

export default Slider;
