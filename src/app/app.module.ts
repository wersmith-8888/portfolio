import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { TestimonialQuoteComponent } from './testimonial-quote/testimonial-quote.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './views/home/home.component';
import { CaseStudiesComponent } from './views/case-studies/case-studies.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';
import { ResumeComponent } from './views/resume/resume.component';
import { ContactComponent } from './views/contact/contact.component';
import { PageSubheadComponent } from './page-subhead/page-subhead.component';
import { UserPersonaDevelopmentComponent } from './views/user-persona-development/user-persona-development.component';
import { PortfolioItemHeaderComponent } from './portfolio-item-header/portfolio-item-header.component';
import { NgMaterialRedesignComponent } from './views/ng-material-redesign/ng-material-redesign.component';
import { SalesPlanningToolComponent } from './views/sales-planning-tool/sales-planning-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoSectionComponent,
    PageHeaderComponent,
    TestimonialQuoteComponent,
    NavigationComponent,
    HomeComponent,
    CaseStudiesComponent,
    TestimonialsComponent,
    ResumeComponent,
    ContactComponent,
    PageSubheadComponent,
    UserPersonaDevelopmentComponent,
    PortfolioItemHeaderComponent,
    NgMaterialRedesignComponent,
    SalesPlanningToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
