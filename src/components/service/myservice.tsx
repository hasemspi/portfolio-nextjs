import Image from "next/image";
import servicesData from '@/actions/createservice'; 
import Link from "next/link";

const Myservice = () => {

  return (
    <div>
      <section className="py-12 style={{ backgroundColor: 'var(--background)' }}">

        <div className="flex flex-col justify-center items-center mx-4 mb-10">
          <h2 className="text-4xl font-bold text-center">
            My Quality Services
          </h2>
          <p className="mt-4 px-4 md:px-20 text-lg md:text-xl font-semibold text-center">
          I deliver outstanding services in Next.js, React, WordPress, MySQL, PHP, HTML, CSS, and Joomla. My work ensures user-friendly, efficient, and responsive websites with dependable front-end and back-end support
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                <h2 className="text-xl font-semibold mb-2 text-blue-500">
              <Link href={`/service/${service.id}`}>
                {service.title}
              </Link>
            </h2>
            <p className="text-left mb-4">{service.description}</p>
            <Link href={`/service/${service.id}`} className="absolute bottom-6 left-6 text-blue-500 group-hover:translate-x-2 transition-transform duration-300">
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

export default Myservice;