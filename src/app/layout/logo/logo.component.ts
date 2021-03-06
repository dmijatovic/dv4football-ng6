import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() logo={
    //link to website
    url:<string>"",
    //link to logo image
    uri:<string>"",
    //background-size: cover | contain | auto etc.
    fill:<string>"cover"
  }
  //fillClass="cover"
  constructor() { }
  ngOnInit() {

  }

}
