import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "app/providers/Router";
import { NavBar } from "widgets/NavBar";
import { classNames } from "shared/lib/classNames/classNames";

import './styles/index.scss';

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <AppRouter /> 
        </div>
    )
};

export default App;