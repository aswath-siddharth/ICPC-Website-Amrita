import HowToRegister from "@/app/archive/components/tables/how_register";
import WhyParticipate from "@/app/archive/components/about/why_participate";
import AboutAmrita from "@/app/archive/components/about/amrita_vv";
import AltHero from "@/app/archive/components/hero/alt_hero";
import ExclusivePerks2 from "@/app/archive/components/about/perks_2";
import WhatsICPC from "@/app/archive/components/about/icpc";
import OutreachPartners from "@/app/archive/components/tables/partners";
import Sponsors from "@/app/archive/components/tables/sponsors";

export default function Trial(){
    return(
        <div className="min-h-[100vh]">
            {/* <Hero/> */}
            <AltHero/>
            <WhatsICPC/>
            <WhyParticipate/>
            <ExclusivePerks2/>
            <div className="pt-[8vw] bg-white">
                <HowToRegister/>
                <Sponsors/>
                <OutreachPartners/>
                <AboutAmrita/>
            </div>
        </div>
    )
}