import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap2',
  templateUrl: './baitap2.component.html',
  styleUrls: ['./baitap2.component.css']
})
export class Baitap2Component implements OnInit {

  constructor() { }
  students =[
    {
      fullname:'Nguyễn Ngọc Hải',
      birthday:'1-11-2000',
      gender:'Nam',
      image:'../assets/image/hai.jpg',
      mark:'9.5'
    },
    {
      fullname:'Nguyễn Ngọc Vinh',
      birthday:'2-11-2000',
      gender:'Nam',
      image:'../assets/image/hai1.jpg',
      mark:'8.5'

    },
    {
      fullname:'Nguyễn Ngọc Thi',
      birthday:'3-11-2000',
      gender:'Nam',
      image:'../assets/image/hai2.jpg',
      mark:'7.5'
    }
  ]
  ngOnInit() {
  }

}
