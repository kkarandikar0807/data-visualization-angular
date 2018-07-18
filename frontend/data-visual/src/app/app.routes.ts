import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";

const app: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

export const routes = RouterModule.forRoot(app);
