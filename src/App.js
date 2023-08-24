import About from "./components/About"
import Contact from './components/Contact'
import Home from "./components/Home";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Portfolio />
            <Experience />
            <Contact />
            <SocialLinks />
        </div>
    );
}

export default App;