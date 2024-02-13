import { Component, OnInit } from '@angular/core';
interface item{
  imagesrc:string;
  imagealt:string;
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PORTFOLIOComponent  {
imggs:string[]=[
  './assets/imgs/poert1.png','./assets/imgs/poert2.png','./assets/imgs/poert3.png','./assets/imgs/poert1.png','./assets/imgs/poert2.png','./assets/imgs/poert3.png'
];
  #imgg: any;
openmodal (imgg:HTMLImageElement): void {
  console.log(imgg.src);
}
}

