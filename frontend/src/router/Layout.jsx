import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Layout() {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

    return (
        <>
            <Header />
            <Outlet /> 
            <Footer noMargin={isAuthPage}/>
        </>
    );
}

export default Layout;