import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/main/Main.tsx";
import {Projects} from "./layout/projects/Projects.tsx";
import {Technologies} from "./layout/technologies/Technologies.tsx";
import {Experience} from "./layout/experience/Experience.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Technologies/>
            <Experience/>
            <Footer/>
        </div>
    )
}

export default App