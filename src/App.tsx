import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/main/Main.tsx";
import {Projects} from "./layout/projects/Projects.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
        </div>
    )
}

export default App