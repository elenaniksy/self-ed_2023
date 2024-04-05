import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    TReducersList,
} from 'shared/lib/component/DynamicModuleLoader';
import {
    fetchProfileData,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';

const reducers: TReducersList = {
    profile: profileReducer,
};

function ProfilePage() {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [''])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
}

export default ProfilePage;
