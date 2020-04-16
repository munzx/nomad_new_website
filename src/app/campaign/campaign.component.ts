import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  userInfo: any = {
    signupType: "member",
    fullName: "",
    country: "",
    email: "",
    instagramID: "",
    purpose: "",
    interesets: {},
    otherIntersets: "",
    question: "",
    link: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
