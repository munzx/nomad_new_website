import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faPlayCircle = faPlayCircle;
  

  ngOnInit() {}

}