import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { IStateSchema } from 'app/providers/StoreProvider';

export const useAppSelector: TypedUseSelectorHook<IStateSchema> = useSelector;
