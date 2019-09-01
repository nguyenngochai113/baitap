import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap3',
  templateUrl: './baitap3.component.html',
  styleUrls: ['./baitap3.component.css']
})
export class Baitap3Component implements OnInit {

  constructor() { }
      cards=[
        {
        id:'pd101',
        image:'../assets/image/lap.jpg',
        name:'Laptop',
        price:'30000',
        quatity:'3',
        action:''
      },
      {
        id:'pd101',
        image:'../assets/image/ip.jpg',
        name:'Mobile',
        price:'54000',
        quatity:'5',
        action:''
      },
      {
        id:'pd102',
        image:'../assets/image/tivi.jpg',
        name:'Television',
        price:'22000',
        quatity:'6',
        action:''
      },
      {
        id:'pd103',
        image:'../assets/image/phone.jpg',
        name:'Headphone',
        price:'13000',
        quatity:'3',
        action:''
      },
      {
        id:'TotalPrice',
        image:'../assets/image/hai.jpg',
        name:'508900',
        price:'13000',
        quatity:'3',
        action:''
      }
    ]
  ngOnInit() {
  }

}
