import Hero2 from "../../components/Hero2/Hero2";
import AboutMedical from "../../components/AboutMedical/AboutMedical";
import Experience from "../../components/Experience/Experience";
import Features from "../../components/Features/Features";
import AboutSkills from "../../components/AboutSkills/AboutSkills";
import Reviews from "../../components/Reviews/Reviews";
import Apply from "../../components/Apply/Apply";
const About=()=>{
    return(
        <>
        <main>
            <Hero2 Title={"About Us"}/>
            <AboutMedical/>
            <Experience/>
            <Features/>
            <AboutSkills/>
            <Reviews/>
            <Apply/>
        </main>
        </>
    )
}

export default About;