

import { Link } from 'react-router-dom';
import logoImage from '../../../assets/images/recipe.png';

const Logos = () => {
    return <Link to='/'><img className='hidden md:block' src={logoImage} width={100} height={'100'} alt="" /></Link>
};

export default Logos;


// export default logo;