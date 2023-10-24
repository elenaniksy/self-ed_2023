import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { useTheme } from 'app/providers/ThemeProvider';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className = '' }: ThemeSwitcherProps) {
    const { toggleTheme, isThemeDark } = useTheme();
    return (
        <Button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {isThemeDark ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
}
