import Hero2 from "../../components/Hero2/Hero2";
import ServicesMedical from "../../components/ServicesMedical/ServicesMedical";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import Appointment from "../../components/Appointment/Appointment";
import PackagesMedical from "../../components/PackagesMedical/PackagesMedical";
import Logo from "../../components/Logo/Logo";
const Services=()=>{
    return(
        <>
        <main>
            <Hero2 Title={"Services"}/>
            <ServicesMedical/>
            <ServicesCard/>
            <PackagesMedical/>
            <Appointment/>
            <Logo/>
        </main>
        </>
    )
}

export default Services ;
