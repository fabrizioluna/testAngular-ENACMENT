import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, HomeRoutingModule],
  declarations: [HomeComponent, HomeScreenComponent, LoginScreenComponent],
})
export class HomeModule {}
