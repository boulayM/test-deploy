import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Hours from "./pages/Hour";
import Accueil from "./pages/Accueil";



export default function App () {
    return (

        <div className="App">
                <nav className="App-nav">
                    <Link to="/">Accueil</Link>
                    <Link to="/apropos">A propos</Link>
                    <Link to="/contact">Me contacter</Link>
                    <Link to="/hours">Horloge</Link>
                </nav>
            <Routes>
                <Route path="/" element = {<Accueil/>}></Route>
                <Route path="apropos" element = {<Apropos/>}></Route>
                <Route path="contact" element = {<Contact/>}></Route>
                <Route path="hours" element = {<Hours/>}></Route>
            </Routes>
        </div>
    )
}

