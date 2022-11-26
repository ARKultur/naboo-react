import './style.css';
import m from 'mithril';

import HomeView from './views/Home';
import LandingView from './views/LandingView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import NotFoundView from "./views/NotFound";
import MaintenanceView from "./views/Maintenance";

m.route.prefix ="";


m.route(
    document.body,
    '/', {
    '/': LandingView,
    '/home': HomeView,
    '/login': LoginView,
    '/register': RegisterView,
    '/maintenance': MaintenanceView,
    '/:404': NotFoundView
},
);


