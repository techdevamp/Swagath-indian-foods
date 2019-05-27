import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_guards';
import { LoginComponent } from 'src/app/_components/login/login.component';
import { RegisterUserComponent } from 'src/app/_components/register-user/register-user.component';
import { ListUserComponent } from 'src/app/_components/list-user/list-user.component';
import { EditUserComponent } from 'src/app/_components/edit-user/edit-user.component';
import { UserDetailsComponent } from 'src/app/_components/user-details/user-details.component';

const routes: Routes = [

{
  path: 'register',
  component:  RegisterUserComponent
},
{
  path: 'list-user',
  component: ListUserComponent
},
{
  path: 'edit-user',
  component: EditUserComponent
},
{
  path: 'add-userDetails',
  component: UserDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
