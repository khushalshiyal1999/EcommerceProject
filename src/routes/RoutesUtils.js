import { CheckOut } from "../containers/checkout/CheckOut";
import { HomePage } from "../containers/homepage/HomePage";

export const PrivateRouteData = [
    { path: '/checkout', element: <CheckOut />, allowedRoles: ['Admin', 'Super Admin', 'User'], title: 'Checkout' },
    { path: '/admin', element: <HomePage />, allowedRoles: ['Admin'], title: 'AdminPage' },
    { path: '/superAdmin', element: <HomePage />, allowedRoles: ['Admin', 'Super Admin'], title: 'SuperAdmin' }
]