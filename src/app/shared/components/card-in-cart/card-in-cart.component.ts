import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-in-cart',
  templateUrl: './card-in-cart.component.html',
  styleUrls: ['./card-in-cart.component.scss']
})
export class CardInCartComponent implements OnInit {
  demoValue = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
