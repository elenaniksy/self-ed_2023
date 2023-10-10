import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { classNames } from "./helpers/classNames/classNames";

import './styles/index.scss';
import { useTheme } from "./theme/useTheme";


const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>

            <Suspense fallback={<div>Loading...</ div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />}/>
                    <Route path="/" element={<MainPageAsync />}/>                   
                </Routes>  
            </Suspense>                   
        </div>
    )
}

export default App;