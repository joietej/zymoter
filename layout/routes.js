const routes = [
    { name : 'Home', path : '/' },
    { name : 'Products', path : '/products' , sub : [
        { name : 'New', path : '/new' },
        { name : 'Deals', path : '/deals'},
        { name : 'Top', path : '/top' }
    ]},
    { name : 'Categories', path : '/categories' , sub : [
        { name : 'Vitamins', path : '/vitamins' },
        { name : 'Detox', path : '/detox' },
        { name : 'Oils', path : '/oils' }
    ]},
    { name : 'User', path : '/user' , sub : [
        { name : 'Account', path : '/account' },
        { name : 'Orders', path : '/orders' },
        { name : 'Payment', path : '/payment' }
    ]}
];

export default routes;
