import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-nomad-video',
  templateUrl: './nomad-video.component.html',
  styleUrls: ['./nomad-video.component.css']
})
export class NomadVideoComponent implements OnInit {
  @ViewChild('player') player;
  public videoIsPlaying = false;

  //safeSrc: SafeResourceUrl;
  constructor() { 
    //this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");
  }

  ngAfterViewInit() {
    const doc = (<any>window).document;
    const playerApiScript = doc.createElement('script');
    playerApiScript.type = 'text/javascript';
    playerApiScript.src = 'https://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApiScript);
}

  ngOnInit() {
    (<any>window).onYouTubeIframeAPIReady = () => {
      this.player = new (<any>window).YT.Player('ytPlayer', {
        height: '500px',
        width: '100%',
        videoId: 'hdTFc39GlK8',
        playerVars: { 'autoplay': 0, 'rel': 0, 'controls': 0 , 'loop': 1, 'fs': 0, 'disablekb': 1, 'modestbranding': 1, 'showinfo': 0},
        events: {
          'onReady': (event) => {
            console.log('Player is ready');
          },
          'onStateChange': (event) => {
            console.log('Bism Allah, video has started')
          }
        }
      });
    };
  }

  startVideo(){
    if(this.videoIsPlaying){
      this.player.pauseVideo();
    } else {
      this.player.playVideo();
    }
    
    this.videoIsPlaying = !this.videoIsPlaying;
    //console.log(this.homeVideo);
    // console.log(this.video.nativeElement.value);
    //this.video.nativeElement.value.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  }

}
