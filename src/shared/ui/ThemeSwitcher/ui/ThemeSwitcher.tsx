import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import cls from './ThemeSwitcher.module.scss';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className = ''}: ThemeSwitcherProps) => {
    const {theme, toggleTheme, isThemeDark} = useTheme();
    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className, cls[theme]])}
            onClick={toggleTheme}
        >
          {isThemeDark ? <DarkIcon /> : <LightIcon />}
        </Button>     
    );
};