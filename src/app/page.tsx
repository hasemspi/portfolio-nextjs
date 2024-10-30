import MySkillsPage from "@/components/home/mySkills";
import ProfileHome from "@/components/home/profile";
import StatsSection from "@/components/home/statsSection";

export default function Home() {
  return (
    <div className="container mx-auto">
<ProfileHome/>
<StatsSection/>
<MySkillsPage/>
    </div>
  );
}
