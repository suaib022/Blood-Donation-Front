
import { Helmet } from 'react-helmet';
import banner from '../assets/Screenshot (14).jpg'

const HomePage = () => {
    return (
        <div className=''>
            <Helmet><title>Home</title></Helmet>
            <img className=' max-h-96 w-full' src={banner} alt="" />
        </div>
    );
};

export default HomePage;