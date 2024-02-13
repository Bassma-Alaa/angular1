import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'home'},
  {path:'footer',component:FooterComponent,title:'FOOTER'},
  {path :'portfolio' , component:PORTFOLIOComponent , title:'PORTFOLIO'},
  {path:'about',component:AboutComponent,title:'ABOUT'},
  {path:'contact',component:ContactComponent,title:'CONTACT'},
  {path:'**',component:NotfoundComponent,title:'NOTFOUND' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

