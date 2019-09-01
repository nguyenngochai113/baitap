import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap1',
  templateUrl: './baitap1.component.html',
  styleUrls: ['./baitap1.component.css']
})
export class Baitap1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  student={
    fullname:'Nguyen Ngoc Hai',
    birthday:'1-11-2000',
    gender:'Name',
    image:'../assets/image/hai.jpg',
    mark:'9.5'
  }

}
