"use client";
import { useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import initialWorksData from '@/actions/createproject';

interface WorkItem {
  id: number;
  category: string;
  title: string;
  alt: string;
  link: string;
  caption: string;
  image?: string; // Make this optional
}

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [displayedWorks, setDisplayedWorks] = useState<WorkItem[]>(initialWorksData);

    const categories = ['All', 'Wordpress', 'NextJS', 'PHP', 'Design', 'Digital Marketing'];

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
                <h2 className="text-4xl font-bold text-center">
                    Recent Works
                </h2>
                <p className="mt-4 px-4 md:px-20 text-lg md:text-xl font-semibold text-center">
                    We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                </p>
            </div>
            <section id="works" className="relative py-5 w-full">
  <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="portWrap w-full">
      {/* Category Filter */}
      <ul className="portFilter gap-y-3 gap-x-5 md:gap-7 flex flex-wrap justify-center mb-0 md:mb-4">
        {categories.map((category) => (
          <li
            key={category}
            className={`font-bold cursor-pointer text-sm sm:text-base ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </li>
        ))}
      </ul>

      {/* Portfolio Items */}
      <div className="portInner w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedWorks.map((work) => (
            <div
              key={work.id}
              className="relative group p-4 rounded-lg border border-gray-200 overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="rounded-lg flex items-center justify-center mb-4">
                <Image
                  className="rounded-lg w-full"
                  src={work.image ?? '/path/to/default/image.png'}
                  alt={work.alt}
                  width={80}
                  height={80}
                />
              </div>
              <span className="bg-primary text-sm py-1 px-3 rounded-b-md absolute left-5 top-0 transform -translate-y-6 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10">
                {work.category}
              </span>
              <h3 className="text-lg sm:text-xl text-center font-semibold mb-2">{work.title}</h3>

              <div className="flex justify-center mt-4">
                <div className="flex justify-between w-full max-w-xs space-x-4">
                  <button className="btn btn-outline btn-md px-4 py-2 btn-primary text-sm sm:text-base">Demo Link</button>
                  <Link href={`/project/${work.id}`} className="text-blue-500 group-hover:translate-x-2 transition-transform duration-300">
                    Read More
                  </Link>
                </div>
              </div>

              <a
                className="absolute bottom-4 left-4 group-hover:translate-x-2 transition-transform duration-300"
                href={work.link}
                title={work.caption}
              >
                <i className="icon-magnifier-add"></i>
              </a>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {/* <div className="mt-10 block text-center w-full">
            <Link href="#" className="absolute btn btn-outline btn-md px-4 py-2 btn-primary text-sm sm:text-base">
                Read More
              </Link>
          <p className="noMorePosts text-gray-500 mt-4">
            {displayedWorks.length === 0 ? 'No works found in this category' : ''}
          </p>
        </div> */}
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default Portfolio;
