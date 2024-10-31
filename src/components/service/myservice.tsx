import Image from "next/image";
import digitalservice from "../../asset/image/myservice/1.png";
import webdevelopment from "../../asset/image/myservice/service-2.svg";
import wpicon from "../../asset/image/myservice/icons8wordpress.png";
import uiuxdesign from "../../asset/image/myservice/4.png";
const Myservice = () => {

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
        <h2 className="text-4xl font-bold text-center mb-10">My Quality Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative group p-4 pb-10  rounded-lg border border-gray-200 overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="rounded-lg flex items-center justify-center mb-4">
                {service.image ? (
                  <Image 
                  src={service.image}
                   alt={service.title} 
                    className="rounded-lg"
                    width={80}
                    height={80}
                     />
                ) : (
                  <span className="text-gray-500">Image Not Found</span>
                )}
              </div>
              <h3 className="text-xl font-semibold  mb-2">{service.title}</h3>
              <p className="text-left mb-4">{service.description}</p>
              <button className="absolute bottom-6left-6 text-blue-500 group-hover:translate-x-2 transition-transform duration-300">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
</section>
        </div>
    );
};

export default Myservice;