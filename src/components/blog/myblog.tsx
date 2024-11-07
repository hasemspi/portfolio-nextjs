import Image from "next/image";
import Link from "next/link";
import lasstestBlog from "@/actions/createblog";
const MyBlog = () => {

  return (
    <div>

      <section className="py-12 style={{ backgroundColor: 'var(--background)' }}">

        <div className="flex flex-col justify-center items-center mx-4 mb-10">
          <h2 className="text-4xl font-bold text-center">
            My Blog
          </h2>
          <p className="mt-4 px-4 md:px-20 text-lg md:text-xl font-semibold text-center">
          My blog shares valuable insights, tips, and solutions for common web development challenges. I provide reliable, easy-to-follow advice to help developers create efficient and effective websites and applications.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lasstestBlog
      .sort((a, b) => Number(b.id) - Number(a.id))
      .slice(0, 4) // Select only the latest 3 posts
      .map((lattestblog) => (

      <div key={lattestblog.id} className="relative group p-4 pb-10 rounded-lg border border-gray-200 overflow-hidden transform transition-transform hover:scale-105">
        <div className="rounded-lg flex mb-4">
          {lattestblog.image ? (
            <Image
              src={lattestblog.image}
              alt={lattestblog.title}
              className="rounded-lg w-full h-auto sm:w-[200px] sm:h-[200px] object-cover"
            />
          ) : (
            <span className="text-gray-500">Image Not Found</span>
          )}
        </div>

        {/* First Line: Category and Date */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {/* Author Profile Image */}
              <Image
                src={lattestblog.image}
                alt={lattestblog.author_name}
                className="w-5 h-5 rounded-full object-cover mr-2"
              />
            {/* Author Name */}
            <Link href="#" className="text-sm text-gray-500">{lattestblog.author_name}</Link>
          </div>
          <span className="text-sm text-gray-500">
            {lattestblog.publish_date}
          </span>
        </div>

        {/* Second Line: Post Title */}
        <h3 className="text-sm font-semibold mb-2">
          <Link href={`/blog/${lattestblog.id}`} className="text-blue-500 hover:underline">
            {lattestblog.title}
          </Link>
        </h3>

        {/* Third Line: Total Likes and Read More Link */}
        <div className="flex justify-between items-center">
          <Link href="#" className="text-sm text-gray-500">{lattestblog.total_likes} Likes</Link>
          <Link href={`/blog/${lattestblog.id}`}
            className="text-blue-500 hover:underline group-hover:translate-x-2 transition-transform duration-300"
          >
            Read More
          </Link>
        </div>
      </div>

    // <div
    //   key={lattestblog.id}
    //   className="relative group p-4 pb-10 rounded-lg border border-gray-200 overflow-hidden transform transition-transform hover:scale-105"
    // >
    //   <div className="rounded-lg flex mb-4">
    //     {lattestblog.image ? (
    //       <Image
    //         src={lattestblog.image}
    //         alt={lattestblog.title}
    //         className="rounded-lg w-full h-auto sm:w-[200px] sm:h-[200px] object-cover"
    //       />
    //     ) : (
    //       <span className="text-gray-500">Image Not Found</span>
    //     )}
    //   </div>
    //   <h3 className="text-xl font-semibold mb-2">
    //     <Link href={`/blog/${lattestblog.id}`} className="text-blue-500 hover:underline">
    //       {lattestblog.title}
    //     </Link>
    //   </h3>
    //   <p className="text-left mb-4">
    //     {lattestblog.description.length > 170
    //       ? lattestblog.description.slice(0, 60) + "..."
    //       : lattestblog.description}
    //   </p>
    //   <Link
    //     href={`/blog/${lattestblog.id}`}
    //     className="absolute bottom-6 left-6 text-blue-500 group-hover:translate-x-2 transition-transform duration-300"
    //   >
    //     Read More
    //   </Link>
    // </div>
       ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default MyBlog;