import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SectorsComponent } from './sectors/sectors.component';
import { PressComponent } from './press/press.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { CommunityComponent } from './community/community.component';
import { PartnersComponent } from './partners/partners.component';
import { DetailsComponent as AboutDetailsComponent } from './about/details/details.component';
import { DetailsComponent as SectorsDetailsComponent} from './sectors/details/details.component';
import { DetailsComponent as PressDetailsComponent} from './press/details/details.component';
import { DetailsComponent as EventsDetailsComponent} from './events/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    SectorsComponent,
    PressComponent,
    SignupComponent,
    ContactusComponent,
    EventsComponent,
    CommunityComponent,
    PartnersComponent,
    AboutDetailsComponent,
    SectorsDetailsComponent,
    PressDetailsComponent,
    EventsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
