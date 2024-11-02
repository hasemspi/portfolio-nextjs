import Link from "next/link";
const Downloadcv = () => {
  return (
    <Link href="/abulhasemCV.pdf" target="_blank" passHref>
      <button
        className="btn btn-outline mt-4 btn-secondary px-6 py-2 rounded-md border-2 border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white transition-colors"
      >
        Download CV
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 16a1 1 0 01-.707-.293l-5-5a1 1 0 111.414-1.414L11 12.586V4a1 1 0 112 0v8.586l3.293-3.293a1 1 0 111.414 1.414l-5 5A1 1 0 0112 16z"
          />
          <path d="M5 18a1 1 0 100 2h14a1 1 0 100-2H5z" />
        </svg>
      </button>
    </Link>
    // <a href="abulhasemCV.pdf" download="abulhasemCV">Download CV</a>
  );
};

export default Downloadcv;
