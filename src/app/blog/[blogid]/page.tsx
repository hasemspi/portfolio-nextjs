import initialWorksData from '@/actions/createblog';
import Image from 'next/image';
import Catagory from '../catagory';
import Lattestblog from '../lattestblog';
import Link from 'next/link';

interface ProjectParams {
    blogid: string;
}

const ProjectDetails = async ({ params }: { params: Promise<ProjectParams> }) => {
    const { blogid } = await params;

    // Find the bloginfo that matches the bloginfoId
    const bloginfo = initialWorksData.find(bloginfo => bloginfo.id.toString() === blogid);

    // If the bloginfo is not found, handle it accordingly
    if (!bloginfo) {
        return <div>bloginfo not found.</div>;
    }

    return (
        <>
        <div className='container mx-auto'>
            <section className="py-12" style={{ backgroundColor: 'var(--background)' }}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-9">
                        <h1 className="text-3xl font-bold mb-4">{bloginfo.title}</h1>
                        {bloginfo.image && (
                            <Image
                                src={bloginfo.image.src || bloginfo.image}
                                alt={bloginfo.title}
                                className="rounded-lg mb-4 w-full h-[350px] object-cover"
                                width={700} // Set a default width for the image
                                height={350} // Set a fixed height for the image
                            />
                        )}
                        <div className="flex items-center justify-start mb-2">
                            <div className="flex items-start mr-5">
                                {/* Author Profile Image */}
                                <Image
                                    src={bloginfo.image}
                                    alt={bloginfo.author_name}
                                    className="w-5 h-5 rounded-full object-cover mr-2"
                                />
                                {/* Author Name */}
                                <Link href="#" className="text-sm text-blue-500">{bloginfo.author_name}</Link>
                            </div>
                            <span className="text-sm text-blue-500 mr-5">
                                {(bloginfo.publish_date)}
                            </span>
                            <Link href="#" className="text-sm text-blue-500">{bloginfo.total_likes} Likes</Link>
                        </div>
                        <p className="text-lg">{bloginfo.description}</p>
                    </div>
                    {/* Right section */}
                    <div className="col-span-12 md:col-span-3">
                        <Catagory />
                        <Lattestblog />
                    </div>
                </div>
            </section>
        </div>
        </>


    );
};

export default ProjectDetails;
