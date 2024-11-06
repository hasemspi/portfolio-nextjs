import initialWorksData from '@/actions/createproject';
import Image from 'next/image';

interface ProjectParams {
    projectid: string;
}

const ProjectDetails = async ({ params }: { params:Promise<ProjectParams>}) => {
    const { projectid } = await params;

    // Find the service that matches the serviceId
    const service = initialWorksData.find(service => service.id.toString() === projectid);

    // If the service is not found, handle it accordingly
    if (!service) {
        return <div>Service not found.</div>;
    }

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
            {service.image && (
                <Image 
                    src={service.image.src || service.image} 
                    alt={service.title} 
                    className="rounded-lg mb-4" 
                    width={500} 
                    height={300} 
                />
            )}
            <p className="text-lg">{service.description}</p>
        </div>
    );
};

export default ProjectDetails;
