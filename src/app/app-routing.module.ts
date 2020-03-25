import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Views for Routing */
import { HomeComponent } from './views/home/home.component';
import { CaseStudiesComponent } from './views/case-studies/case-studies.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';
import { ResumeComponent } from './views/resume/resume.component';
import { ContactComponent } from './views/contact/contact.component';
import { UserPersonaDevelopmentComponent } from './views/user-persona-development/user-persona-development.component';
import { NgMaterialRedesignComponent } from './views/ng-material-redesign/ng-material-redesign.component';
import { SalesPlanningToolComponent } from './views/sales-planning-tool/sales-planning-tool.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'caseStudies' , component: CaseStudiesComponent},
  {path: 'testimonials' , component: TestimonialsComponent},
  {path: 'resume' , component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'user-persona-development', component: UserPersonaDevelopmentComponent},
  {path: 'ng-material-redesign', component: NgMaterialRedesignComponent},
  {path: 'sales-planning-tool', component: SalesPlanningToolComponent}
];

/* don't forget to delete "enableTracing" when deploying */
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {
 }
