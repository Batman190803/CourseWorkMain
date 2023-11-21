import React, {useState} from "react";

function Slider({images}) {
    const [currentIndex, setCurrentIndex] = useState(1);

    const nextSlide = () => {
        if(currentIndex<10)
            setCurrentIndex(currentIndex + 1);
        else
            setCurrentIndex(1)
    };

    const prevSlide = () => {
        if(currentIndex>1)
            setCurrentIndex(currentIndex - 1);
        else
            setCurrentIndex(10)
    };

    return (
        <div className={'font-KdamThmorPro'}>
            <div className="p-2 w-full text-center">
                <p className=" text-4xl font-bold text-gray-700">
                    {images[0].date}
                </p>
                <p>{images[0].description}</p>
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
                    src={require(`../assets/img/${currentIndex}.jpg`)}
                    
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
