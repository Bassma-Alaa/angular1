import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
shwme:boolean=false
toogletag(){
  this.shwme=!this.shwme.valueOf;
}
}
