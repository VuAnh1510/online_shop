import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  arrayCarrosel = [1, 2, 3, 4];
  arrayBaner = [1, 2, 3];
  arrayProduct = [1, 2, 3, 4];
}
