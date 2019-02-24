import { Routes } from "@angular/router";
import { UserGuard } from "../../guard/user.guard";
import { UserComponent } from "./user.component";

export const routes: Routes = [

    {
		path:'user',
		children:[
			{path:'profil',component:UserComponent},
		],canActivate:[UserGuard]
	
}


]

export class UserRoute { }