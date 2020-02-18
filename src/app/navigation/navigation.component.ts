import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebook = faFacebook;

  
  status = false;
  navEndSub = new Subscription();

  constructor(private router:Router) { }

  ngOnInit() {
    this.navEndSub = this.router.events
    .pipe(filter(e=>e instanceof NavigationEnd))
    .subscribe(e=>this.status = false); 
  }



  toggleMenu(){
    this.status = !this.status;
  }


  OnDestroy(){
    this.navEndSub.unsubscribe();
  }


}
