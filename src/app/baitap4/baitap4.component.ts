import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap4',
  templateUrl: './baitap4.component.html',
  styleUrls: ['./baitap4.component.css']
})
export class Baitap4Component implements OnInit {

  constructor() { }
  visibleImage = true;
  changesStatus(){
    this.visibleImage = !this.visibleImage;
  }
  seachText;
  ListProducts =[
    {
      id:'../assets/image/leaf.jpg',
      Product:'Leaf Rake',
      Code:'GDN-0011',
      Available:'Mar 19, 2016',
      Price:'$19,95',
      StarRating:''
    },
    {
      id:'../assets/image/garden.jpg',
      Product:'Garden Cart',
      Code:'GDN-0023',
      Available:'Mar 18, 2016',
      Price:'$32,99',
      StarRating:' '
    },
    {
      id:'../assets/image/hammer.jpg',
      Product:'Hammer',
      Code:'TBX-0048',
      Available:'May 21, 2016',
      Price:'$8,99',
      StarRating:' '
    },
    {
      id:'../assets/image/saw.jpg',
      Product:'Saw',
      Code:'TBX-0022',
      Available:'May 15, 2016',
      Price:'$11,55',
      StarRating:' '
    },
    {
      id:'../assets/image/game.jpg',
      Product:'Video Game Controller',
      Code:'GMG-0042',
      Available:'Oct 15, 2015',
      Price:'$33,95',
      StarRating:' '
    }
  ]

  ngOnInit() {
  }

  }
 
