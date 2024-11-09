import servicesData from '@/actions/createservice'; 
import Catagory from '@/app/blog/catagory';
import Lattestblog from '@/app/blog/lattestblog';
import Image from 'next/image';
import { Metadata } from 'next';

interface ServiceParams {
    serviceid: string;
}

// Dynamic Metadata for SEO

export async function generateMetadata({ params }:  { params: Promise<ServiceParams> }): Promise<Metadata> {
    const { serviceid } = await params;
    console.log(params);
    const service = servicesData.find(service => service.id.toString() === serviceid);

    if (!service) {
        return {
            title: "Blog Not Found",
            description: "This blog does not exist.",
        };
    }

    return {
        title: `${service.title} - My Blog`,
        description: service.description,
        openGraph: {
            title: service.title,
            description: service.description,
            images: service.image.src || service.image,
            type: "article",
            url: `https://yourwebsite.com/service/${serviceid}`,
        },
    };
}



const ServiceDetails = async ({ params }: { params:Promise<ServiceParams>}) => {
    const { serviceid } = await params;

    // Find the service that matches the serviceId
    const service = servicesData.find(service => service.id.toString() === serviceid);

    // If the service is not found, handle it accordingly
    if (!service) {
        return <div>Service not found.</div>;
    }

    return (

        <div className='container mx-auto'>
        <section className="py-12" style={{ backgroundColor: 'var(--background)' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-9">
                    <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
                    {service.image && (
                        <Image
                            src={service.image.src || service.image}
                            alt={service.title}
                            className="rounded-lg mb-4 w-full h-[350px] object-cover"
                            width={700} // Set a default width for the image
                            height={350} // Set a fixed height for the image
                        />
                    )}
                    {/* <div className="flex items-center justify-start mb-2">
                        <div className="flex items-start mr-5">
                            
                            <Image
                                src={service.image}
                                alt={service.author_name}
                                className="w-5 h-5 rounded-full object-cover mr-2"
                            />
                            
                            <Link href="#" className="text-sm text-blue-500">{service.author_name}</Link>
                        </div>
                        <span className="text-sm text-blue-500 mr-5">
                            {(service.publish_date)}
                        </span>
                        <Link href="#" className="text-sm text-blue-500">{service.total_likes} Likes</Link>
                    </div> */}
                    <p className="text-lg">{service.description}</p>
                </div>
                {/* Right section */}
                <div className="col-span-12 md:col-span-3">
                    <Catagory/>
                    <Lattestblog/>
                </div>
            </div>
        </section>
    </div>


    );
};

export default ServiceDetails;
