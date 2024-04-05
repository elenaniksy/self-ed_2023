export type { IProfileSchema, IProfile } from './model/types/profile';
export { profileReducer, profileActions } from './model/slice/profileSlice';
export { fetchProfileData } from './model/services/fetchProfileData';
export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { ProfileCard } from './ui/ProfileCard/ProfileCard';
