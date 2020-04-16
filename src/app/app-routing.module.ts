import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SectorsComponent } from './sectors/sectors.component';
import { DetailsComponent as SectorsDetailsComponent } from './sectors/details/details.component';
import { DetailsComponent as AboutDetailsComponent } from './about/details/details.component';
import { DetailsComponent as PressDetailsComponent } from './press/details/details.component';
import { DetailsComponent as EventsDetailsComponent } from './events/details/details.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { PressComponent } from './press/press.component';
import { PartnersComponent } from './partners/partners.component';
import { CommunityComponent } from './community/community.component';
import { ProgramsComponent } from './programs/programs.component';
import { CampaignComponent } from './campaign/campaign.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "about/details", component: AboutDetailsComponent},
  {path: "sectors", component: SectorsComponent},
  {path: "sectors/details/:sector", component: SectorsDetailsComponent},
  {path: "programs", component: ProgramsComponent},
  {path: "community", component: CommunityComponent},
  {path: "signup", component: SignupComponent},
  {path: "contactus", component: ContactusComponent},
  {path: "events", component: EventsComponent},
  {path: "events/details/:event", component: EventsDetailsComponent},
  {path: "press", component: PressComponent},
  {path: "press/details/:article", component: PressDetailsComponent},
  {path: "partners", component: PartnersComponent},
  {path: "campaign", component: CampaignComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'top', anchorScrolling: 'enabled',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
