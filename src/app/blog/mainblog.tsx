import Image from "next/image";
import Link from "next/link";
import blogData from "@/actions/createblog";
import Catagory from "./catagory";
import Lattestblog from "./lattestblog";

const MainBlog = () => {
    return (
        <div>
            <section className="py-12" style={{ backgroundColor: 'var(--background)' }}>
                <div className="flex flex-col justify-center items-start mx-4 mb-10">
                    <h2 className="text-4xl font-bold text-start">My Blog</h2>
                    <p className="mt-4 text-lg md:text-xl font-semibold text-start">
                        We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-9">
                    {blogData.map((blogitem) => (
                        <div key={blogitem.id} className="card shadow grid grid-cols-12 gap-4 mb-6">
<figure className="col-span-12 px-0 py-0 md:col-span-3 w-full h-full">
    {blogitem.image ? (
        <Image
        src={blogitem.image}
        alt={blogitem.title}
        width={500}  // Adjust width based on your image's original size
        height={500} // Maintain the aspect ratio or adjust as needed
        className="w-full h-full object-cover"  // Ensure the image covers the full area
        />
    ) : (
        <span className="text-gray-500">Image Not Found</span>
    )}
    </figure>
    <div className="col-span-12 md:col-span-9 p-5">
      <h3 className="card-title">
        <Link href={`/blog/${blogitem.id}`} className="text-blue-500 hover:underline">
          {blogitem.title}
        </Link>
      </h3>

      {/* First Line: Category and Date */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {/* Author Profile Image */}
            <Image
              src={blogitem.image}
              alt={blogitem.author_name}
              className="w-5 h-5 rounded-full object-cover mr-2"
            />
          {/* Author Name */}
          <Link href="#" className="text-sm text-gray-500">{blogitem.author_name}</Link>
        </div>
        <span className="text-sm text-gray-500">
          {(blogitem.publish_date)}
        </span>
        
      </div>

      <p className="text-left mb-4">
        {blogitem.description.length > 270
          ? blogitem.description.slice(0, 60) + "..."
          : blogitem.description}
      </p>

      {/* Third Line: Total Likes and Read More Link */}
      <div className="flex justify-between items-center">
        <Link href="#" className="text-sm text-gray-500">{blogitem.total_likes} Likes</Link>
        <Link
          href={`/blog/${blogitem.id}`}
          className="text-blue-500 hover:underline group-hover:translate-x-2 transition-transform duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  </div>
))}

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

export default MainBlog;
