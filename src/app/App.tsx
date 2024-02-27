import { SideBar } from 'widgets/SideBar';
import { NavBar } from 'widgets/NavBar';
import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from 'app/providers/Router';
import { useAppDispatch } from 'shared/hooks/store.hook';
import { userActions } from 'entities/User';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
