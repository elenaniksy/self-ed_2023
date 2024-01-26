import { SideBar } from 'widgets/SideBar';
import { NavBar } from 'widgets/NavBar';
import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from 'app/providers/Router';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])} id="app">
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
