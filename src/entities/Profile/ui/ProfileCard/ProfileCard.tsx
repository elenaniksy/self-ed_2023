import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppSelector } from 'app/providers/StoreProvider';
import { ETextTheme, Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import {
    getProfileIsLoading,
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import {
    getProfileData,
} from '../../model/selectors/getProfileData/getProfileData';
import {
    getProfileError,
} from '../../model/selectors/getProfileError/getProfileError';
import cls from './ProfileCard.module.scss';

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<IProfileCardProps> = ({ className }) => {
    const { t } = useTranslation('profile');
    const data = useAppSelector(getProfileData);
    const error = useAppSelector(getProfileError);
    const isLoading = useAppSelector(getProfileIsLoading);

    const dispatch = useAppDispatch();

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            {data && (
                <div className={cls.data}>
                    <div className={cls.row}>
                        <Text
                            theme={ETextTheme.INFO}
                            className={cls.text}
                            text={`${t('Ваше имя')}:`}
                        />
                        <Input
                            value={data?.first}
                        />
                    </div>

                    <div className={cls.row}>
                        <Text
                            theme={ETextTheme.INFO}
                            className={cls.text}
                            text={`${t('Ваша фамилия')}:`}
                        />
                        <Input
                            value={data?.lastname}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
