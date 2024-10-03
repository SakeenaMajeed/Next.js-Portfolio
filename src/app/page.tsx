import Hero from "./components/Hero";
import About from "./about/page";
import Project from "./project/page";
import Services from "./services/page";
import Contact from "./contact/page";
import Footer from "./components/Footer";
import Skill from "./skill/page";

export default function Home() {
  return (
    <div>
      <div id="home"><Hero /></div> {/* Home Section */}
      <div id="about"><About /></div>
      <div id="project"><Project /></div>
      <div id="skill"><Skill /></div>
      <div id="services"><Services /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}
