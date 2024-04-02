import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    TReducersList,
} from 'shared/lib/component/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: TReducersList = {
    profile: profileReducer,
};

function ProfilePage() {
    const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t('Страница пользователя')}
            </div>
        </DynamicModuleLoader>
    );
}

export default ProfilePage;
