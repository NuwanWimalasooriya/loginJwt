import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { CustomerComponent } from './customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    {path: 'customer',component: CustomerComponent},
    {path: '',redirectTo:'home',pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent}

    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);