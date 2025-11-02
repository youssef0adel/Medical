import Hero from "../../components/Hero/Hero";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import Features from "../../components/Features/Features";
import Experience from "../../components/Experience/Experience";
import Navtabs from "../../components/Navtabs/Navtabs";
import Apply from "../../components/Apply/Apply";
import Mabout from "../../components/Mabout/Mabout";
import Appointment from "../../components/Appointment/Appointment";
import Reviews from "../../components/Reviews/Reviews";
import Logo from "../../components/Logo/Logo";
const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <ServicesCard />
        <Features />
        <Experience />
        <Navtabs />
        <Apply />
        <Mabout />
        <Appointment />
        <Reviews />
        <Logo />
      </main>
    </>
  );
};

export default Home;
