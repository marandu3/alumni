import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { About } from './pages/about/about';
import { Contacts } from './pages/contacts/contacts';
import { Notfound } from './pages/notfound/notfound';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [
    {
        path:'',
        component: Homepage
    },
    {
        path:'what-we-do',
        component: About
    },
    {
        path:'contacts',
        component: Contacts
    },
    {
        path:'login',
        component: Login
    },
    {
        path:'register',
        component: Register
    },
    {
        path:'**',
        component: Notfound
    }
];
