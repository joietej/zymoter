import { Home32, Product32, Account32, Categories32 } from "@carbon/icons-react";

const routes = [
    { name : 'Home', icon: Home32, path : '/' },
    { name : 'Products', path : '/products' , icon: Product32 ,sub : [
        { name : 'New', path : '/new' },
        { name : 'Deals', path : '/deals'},
        { name : 'Top', path : '/top' }
    ]},
    { name : 'Categories', path : '/categories' ,icon: Categories32 ,sub : [
        { name : 'Vitamins', path : '/vitamins' },
        { name : 'Detox', path : '/detox' },
        { name : 'Oils', path : '/oils' }
    ]},
    { name : 'User', path : '/user' ,icon: Account32, sub : [
        { name : 'Account', path : '/account' },
        { name : 'Orders', path : '/orders' },
        { name : 'Payment', path : '/payment' }
    ]}
];

export default routes;
