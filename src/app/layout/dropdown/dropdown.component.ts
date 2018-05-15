import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() matIco = "menu";
  @Input() menuItems = [];
  active:boolean=false;
  constructor() {}

  ngOnInit() {}

  toggleMenu(){
    this.active = !this.active;
  }

}
