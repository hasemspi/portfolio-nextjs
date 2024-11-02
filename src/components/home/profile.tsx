import Image from "next/image";
import profileImage from "../../asset/image/abul-hasem.png";
import Downloadcv from "./downloadcv";
import SocialPage from "./social";

const ProfileHome = () => {
    return (
        <>
   <div className="grid grid-cols-1 md:grid-cols-2">
  {/* Text Section */}
  <div className="flex items-start justify-center lg:mt-24 md:mt-24 sm:mt-0 mb-0">
    <div className="text-start md:text-left px-4 pb-0 md:px-0">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
        Full-Stack Web Developer
      </h3>
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 md:mb-4">
        Eng. Abul Hasem
      </h1>
      <p className="text-sm sm:text-base">
      As a Full-Stack Web Developer, I create reliable and scalable web applications that provide smooth user experiences. Skilled in both front-end and back-end development, I turn complex ideas into effective solutions.
      </p>
      <SocialPage/>
      <Downloadcv/>
    </div>
  </div>

  {/* Profile Image Section */}
  <div className="flex items-start justify-center">
    <div className="bg-opacity-50">
      <Image
        src={profileImage}
        alt="Profile Image"
        width={310}
        height={300}
      />
    </div>
  </div>
</div>

    </>
    );
};

export default ProfileHome;