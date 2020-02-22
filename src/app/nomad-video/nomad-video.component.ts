import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nomad-video',
  templateUrl: './nomad-video.component.html',
  styleUrls: ['./nomad-video.component.css']
})
export class NomadVideoComponent implements OnInit {
  faPlayCircle = faPlayCircle;
  @ViewChild('player') player;
  public videoIsPlaying = false;

  constructor() { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  startVideo(){
    if(this.videoIsPlaying){
      this.player.pauseVideo();
    } else {
      this.player.playVideo();
    }
    
    this.videoIsPlaying = !this.videoIsPlaying;
  }

}
