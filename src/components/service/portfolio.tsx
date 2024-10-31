"use client";
import { useState } from 'react';
import Image from 'next/image'; 
import uiuxdesign from "../../asset/image/myservice/wordrepss.png";
import digitalservice from "../../asset/image/myservice/1.png";
import webdevelopment from "../../asset/image/myservice/service-2.svg";

// Define the interface for a work item
interface WorkItem {
    id: number;
    category: string;
    title: string;
    alt: string;
    link: string;
    caption: string;
    image?: string; // Make this optional
}

// Define the initial works data
const initialWorksData: WorkItem[] = [
    {
        id: 1,
        category: 'art',
        title: 'Project Management Illustration',
        alt: 'Project Management Illustration',
        link: '#',
        caption: 'Project Management Illustration',
        image: uiuxdesign.src // Use the imported variable directly
    },
    {
        id: 2,
        category: 'creative design',
        title: 'Guest App Walkthrough Screens',
        alt: 'Guest App Walkthrough Screens',
        link: '#workDialog',
        caption: 'Guest App Walkthrough Screens',
        image: digitalservice.src
    },
    {
        id: 3,
        category: 'creative design',
        title: 'Guest App Walkthrough Screens',
        alt: 'Guest App Walkthrough Screens',
        link: '#workDialog',
        caption: 'Guest App Walkthrough Screens',
        image: webdevelopment.src
    },
    {
        id: 4,
        category: 'branding',
        title: 'Delivery App Wireframe',
        alt: 'Delivery App Wireframe',
        link: 'https://www.youtube.com/watch?v=qf9z4ulfmYw',
        caption: 'Delivery App Wireframe',
        image: '/assets/images/resources/works/3.svg'
    },
    {
        id: 5,
        category: 'creative',
        title: 'Onboarding Motivation',
        alt: 'Onboarding Motivation',
        link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/240233494&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        caption: 'Onboarding Motivation',
        image: '/assets/images/resources/works/4.svg'
    }
    
];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [displayedWorks, setDisplayedWorks] = useState<WorkItem[]>(initialWorksData);

    const categories = ['All', 'art', 'creative design', 'branding', 'creative', 'art branding'];

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        
        if (category === 'All') {
            setDisplayedWorks(initialWorksData);
        } else {
            setDisplayedWorks(initialWorksData.filter(work => work.category === category));
        }
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center mx-4 my-10">
                <h2 className="text-4xl md:text-6xl font-bold text-center">
                    Recent Works
                </h2>
                <p className="mt-4 px-4 md:px-20 text-lg md:text-xl font-semibold text-center">
                    We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                </p>
            </div>
            <section id="works" className="relative py-5 w-full">
                <div className="container xl:max-w-[67.5rem] lg:max-w-[57.5rem] md:max-w-[57.5rem] sm:max-w-[33.75rem] mx-auto px-[.9375rem]">

                    <div className="portWrap w-full">
                        <ul className="portFilter gap-y-3 gap-x-5 md:gap-7 flex justify-center mb-0 md:mb-[.9375rem]">
                            {categories.map(category => (
                                <li 
                                    key={category} 
                                    className={`font-bold cursor-pointer ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </li>
                            ))}
                        </ul>
                        <div className="portInner w-full md:isolation-auto">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {displayedWorks.map((work) => (
                            <div key={work.id} className="relative group p-4 pb-10 rounded-lg border border-gray-200 overflow-hidden transform transition-transform hover:scale-105">
                            <div className="rounded-lg flex items-center justify-center mb-4">
                                <Image 
                                className="rounded-lg w-full" 
                                src={work.image ?? '/path/to/default/image.png'} // Use a fallback image if undefined
                                alt={work.alt} 
                                width={80} 
                                height={80} 
                                />
                            </div>
                            <span className="bg-primary text-[14px] py-[3px] px-[10px] rounded-b-[.9375rem] left-5 absolute -top-[1.875rem] group-hover:top-0 opacity-0 group-hover:opacity-100 z-10">
                                {work.category}
                            </span>
                            <h3 className="text-xl font-semibold mb-2 translate-y-[1.875rem] group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                                {work.title}
                            </h3>
                            <a className="absolute bottom-6 left-6 text-blue-500 group-hover:translate-x-2 transition-transform duration-300" href={work.link} title={work.caption}>
                                <i className="icon-magnifier-add"></i>
                            </a>
                            </div>
                        ))}
                        </div>

                            <div className="mt-10 block text-center w-full">
                                <button className="bg-primary inline-block relative rounded-full text-base font-bold leading-none overflow-hidden py-3 px-8">
                                    Load more
                                </button>
                                <p className="noMorePosts text-[#dedeea]">{displayedWorks.length === 0 ? 'No works found in this category' : ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
