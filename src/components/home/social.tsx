
const SocialPage = () => {
    return (
    <div className="flex items-stretch space-x-4 pt-4">
        <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.69V11.24h3.13V8.413c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.795.714-1.795 1.76v2.309h3.587l-.467 3.466h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z"/>
        </svg>

        </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 transition-colors"
      >
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.208 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.225 0zM7.09 20.452H3.542V8.935h3.548v11.517zm-1.774-13.06c-1.145 0-2.066-.926-2.066-2.068 0-1.141.921-2.067 2.066-2.067 1.142 0 2.066.926 2.066 2.067 0 1.142-.924 2.068-2.066 2.068zm15.74 13.06h-3.547v-5.604c0-1.338-.028-3.061-1.867-3.061-1.87 0-2.156 1.46-2.156 2.967v5.698h-3.549V8.935h3.409v1.563h.05c.476-.897 1.636-1.844 3.366-1.844 3.597 0 4.262 2.367 4.262 5.446v6.352z"/>
    </svg>
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 4.557a9.863 9.863 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.924 4.924 0 0 0-8.38 4.485A13.978 13.978 0 0 1 1.671 3.149 4.924 4.924 0 0 0 3.195 9.724a4.904 4.904 0 0 1-2.229-.616v.062a4.924 4.924 0 0 0 3.946 4.827 4.925 4.925 0 0 1-2.224.085 4.926 4.926 0 0 0 4.6 3.417A9.867 9.867 0 0 1 .613 19.54a13.92 13.92 0 0 0 7.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.005-.426-.015-.637A10.025 10.025 0 0 0 24 4.557z"/>
        </svg>
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-800 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.499 6.203a2.946 2.946 0 0 0-2.073-2.073C19.845 3.5 12 3.5 12 3.5s-7.845 0-9.426.63A2.946 2.946 0 0 0 .5 6.203 30.845 30.845 0 0 0 0 12a30.844 30.844 0 0 0 .5 5.797 2.946 2.946 0 0 0 2.074 2.073c1.58.63 9.426.63 9.426.63s7.845 0 9.426-.63a2.946 2.946 0 0 0 2.073-2.073C24 17.843 24 12 24 12s0-5.843-.501-5.797zM9.546 15.568V8.432l6.272 3.568-6.272 3.568z"/>
        </svg>
      </a>
    </div>
    );
};

export default SocialPage;