import { useContext } from 'react';
import avatarImg from '../../assets/images/avatar.jpg';
import { AuthContext } from '../providers/AuthProvider';
const Avatar = () => {
    const {user} = useContext(AuthContext)
    return <img src={user && user.photoURL? user.photoURL : avatarImg} className='rounded-full' alt="profile" width={30} height={30} />
};

export default Avatar;