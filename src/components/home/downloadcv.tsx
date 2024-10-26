import Link from "next/link";

const Downloadcv = () => {
    return (
        <Link
      href="/path/to/your/file.pdf" // Replace with your file path
      download
      className="inline-block px-6 py-2 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded"
    >
      Download
    </Link>
    );
};

export default Downloadcv;