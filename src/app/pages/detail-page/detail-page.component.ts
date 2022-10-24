import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  array = [1, 2, 3, 4];
  form!: UntypedFormGroup;
  value = '';
}
