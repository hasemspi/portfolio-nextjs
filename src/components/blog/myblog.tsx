import Image from "next/image";
import digitalservice from "../../asset/image/portfolio/2.jpg";
import webdevelopment from "../../asset/image/myservice/service-2.svg";
import wpicon from "../../asset/image/myservice/icons8wordpress.png";
import uiuxdesign from "../../asset/image/myservice/4.png";
import Link from "next/link";
const MyBlog = () => {

    const servicesData = [
        {
          id: 1,
          image: digitalservice, // Path to the image if available
          title: "Digital Marketing",
          description: "Continue indulged speaking the was horrible for domestic position. Seeing get rather."
        },
        {
          id: 2,
          image: webdevelopment, // Path to the image if available
          title: "Web Development",
          description: "Continue indulged speaking the was horrible for domestic position. Seeing get rather."
        },
        {
          id: 3,
          image: uiuxdesign, // Path to the image if available
          title: "UI/UX Design",
          description: "Continue indulged speaking the was horrible for domestic position. Seeing get rather."
        },
        {
          id: 4,
          image: wpicon, // Path to the image if available
          title: "WP Development",
          description: "Continue indulged speaking the was horrible for domestic position. Seeing get rather."
        }
      ];

    return (
        <div>
<section className="py-12 style={{ backgroundColor: 'var(--background)' }}">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center">My Blog</h2>
        <p className="mt-4 px-20 pb-10 md:px-20 text-lg md:text-xl font-semibold text-center">
                    We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative group p-4 pb-10  rounded-lg border border-gray-200 overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="rounded-lg flex mb-4">
                {service.image ? (
                  <Image 
                  src={service.image}
                   alt={service.title} 
                    className="rounded-lg w-full h-auto sm:w-[200px] sm:h-[200px] object-cover"
                   
                    
                     />
                ) : (
                  <span className="text-gray-500">Image Not Found</span>
                )}
              </div>
              <h3 className="text-xl font-semibold  mb-2">
                
              <Link href="#" className="text-blue-500 hover:underline">
                {service.title}
                </Link>
                </h3>
                <p className="text-left mb-4">{service.description}</p>
                <Link href="#" className="absolute bottom-6left-6 text-blue-500 group-hover:translate-x-2 transition-transform duration-300">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
</section>
        </div>
    );
};

export default MyBlog;