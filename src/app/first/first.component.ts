import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['../app.component.css',
  '../appdos.component.css']
})
export class FirstComponent implements OnInit {
 











  producto1:string;
  producto2:string;
  producto3:string;
  producto4:string;
  producto5:string;

  img1:string;
  img2:string;
  img3:string;
  img4:string;
  img5:string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    this.producto1 = 'Chocolate Negro';
    this.producto2 = 'Corazon Chocolate';
    this.producto3 = 'Chocolate Box';
    this.producto4 = 'Chocolate Box Pino';
    this.producto5 = 'Chocolate Barra';

    this.img1 = 's1.PNG';
    this.img2 = 'S2.png';
    this.img3 = 's3.png';
    this.img4 = 's4.png';
    this.img5 = 's5.png';



  }

  ngOnInit(): void {

    $('#autoWidth').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      thumbItem:5,
      slideMargin:0,
      enableDrag: false,
      currentPagerPosition:'left',
      onSliderLoad: function(el: { lightGallery: (arg0: { selector: string; }) => void; }) {
          el.lightGallery({
              selector: '#imageGallery .lslide'
          });
      }   
      });  
      
    

 }
 redirection() {
  window.location.href = "yourpagedomain/login"
}
 
  
}
