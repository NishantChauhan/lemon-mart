import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'
import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'
import { ProfileComponent } from './profile/profile.component'
import { UserRoutingModule } from './user-routing.module'

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProfileComponent,
    LogoutComponent,
    NavigationMenuComponent,
    LoginComponent,
  ],
  exports: [NavigationMenuComponent, LoginComponent],
})
export class UserModule {}
