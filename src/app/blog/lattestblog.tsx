import Link from "next/link";
import Image from "next/image"; // Importing Image from Next.js
import lattestdata from '@/actions/lattestblog';

const Lattestblog = () => {
    return (
        <>
            <div className="card-body shadow-xl">
                {lattestdata.map((blogitem) => (
                    <div key={blogitem.id} className="flex items-center">
                        <figure className="w-auto">
                            <div className="avatar">
                                <div className="w-14 rounded">
                                    {blogitem.image ? (
                                        <Image
                                            src={blogitem.image}
                                            alt={blogitem.title}
                                            width={500} // Adjust width based on your image's original size
                                            height={500} // Maintain the aspect ratio or adjust as needed
                                            className="w-full h-full object-cover" // Ensure the image covers the full area
                                        />
                                    ) : (
                                        <span className="text-gray-500">Image Not Found</span>
                                    )}
                                </div>
                            </div>
                        </figure>
                        <div className="px-2 py-0">
                            <p className="text-xs items-start">
                                <Link href={`/lattestblog/${blogitem.id}`}>
                                    {blogitem.title}
                                </Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Lattestblog;
