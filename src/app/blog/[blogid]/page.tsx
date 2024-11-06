import initialWorksData from '@/actions/createblog';
import Image from 'next/image';

interface ProjectParams {
    blogid: string;
}

const ProjectDetails = async ({ params }: { params:Promise<ProjectParams>}) => {
    const { blogid } = await params;

    // Find the bloginfo that matches the bloginfoId
    const bloginfo = initialWorksData.find(bloginfo => bloginfo.id.toString() === blogid);

    // If the bloginfo is not found, handle it accordingly
    if (!bloginfo) {
        return <div>bloginfo not found.</div>;
    }

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-3xl font-bold mb-4">{bloginfo.title}</h1>
            {bloginfo.image && (
                <Image 
                    src={bloginfo.image.src || bloginfo.image} 
                    alt={bloginfo.title} 
                    className="rounded-lg mb-4" 
                    width={500} 
                    height={300} 
                />
            )}
            <p className="text-lg">{bloginfo.description}</p>
        </div>
    );
};

export default ProjectDetails;
