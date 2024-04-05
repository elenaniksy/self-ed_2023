import { SideBar } from 'widgets/SideBar';
import { NavBar } from 'widgets/NavBar';
import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from 'app/providers/Router';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useNavigate } from 'react-router-dom';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
