import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Gallery from "./pages/Gallery/Gallery";
import News from "./pages/News/News";
import About from "./pages/About/About";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
