import MySkillsPage from "@/components/home/mySkills";
import ProfileHome from "@/components/home/profile";
import StatsSection from "@/components/home/statsSection";
import Myservice from "@/components/service/myservice";
import Portfolio from "@/components/service/portfolio";

export default function Home() {
  return (
    <div className="container mx-auto">
<ProfileHome/>
<StatsSection/>
<MySkillsPage/>
<Myservice/>
<Portfolio/>
    </div>
  );
}
