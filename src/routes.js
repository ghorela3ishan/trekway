import LoginContainer from './components/login/LoginContainer' ;
import DashBoardContainer from './components/dashboard/DashboardContainer';
import ProductsContainer from './components/products/ProductsContainer';

const routes = [
    { 
        exact : true,
        path : '/dashboard',
        component : DashBoardContainer
    },
    { 
        exact : true,
        path : '/products',
        component : ProductsContainer
    },
    { 
        exact : true,
        path : '/',
        component : ProductsContainer
    }
]

export default routes;