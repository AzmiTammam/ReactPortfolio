import react from "react";
import Experience from "../Components/Experience/Experience";
import Header from "../Components/Header/Header";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";
import Certificate from "../Components/Certificate/Certificate";
function HomePage() {
      return(
            <>
            <Header />
            <Experience />
            <Projects />
            <Certificate />
            <Footer />
            </>
      );
}

export default HomePage;