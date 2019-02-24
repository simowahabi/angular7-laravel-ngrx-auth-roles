import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdminGuard } from "../../guard/admin.guard";

export const routes: Routes = [

    {
		path:'admin',
		children:[
			{path:'profil',component:AdminComponent},
		],canActivate:[AdminGuard]
	
}


]

export class AdminRoute { }