import react from "react";
import Experience from "../Components/Experience/Experience";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";
function HomePage() {
      return(
            <>
            <Navbar />
            <Header />
            <Experience />
            <Projects />
            </>
      );
}

export default HomePage;