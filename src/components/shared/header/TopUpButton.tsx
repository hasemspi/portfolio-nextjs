// TopUpButton.js
'use client'; 
import Image from 'next/image';
import scroltopIcon from '../../../asset/image/icon/scroll-to.svg';

const TopUpButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    return (
        <button 
        onClick={scrollToTop} 
        className="fixed bottom-5 right-5 bg-blue-500 text-white font-semibold rounded-full shadow hover:bg-blue-600 transition duration-200 flex items-center">
        <Image 
            src={scroltopIcon} 
            width={40} // Adjust width as necessary
            height={40} // Adjust height as necessary
            alt='Scroll to top'
            // className='' // Margin to space it from the text
        />
    </button>
    );
};

export default TopUpButton;
