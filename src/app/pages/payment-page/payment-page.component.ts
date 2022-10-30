import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {
  deliveryMethod = true;
  selectedValue = null;
  sexValue = 'male';
  value = "";
  checked = true;
  inputPaymentForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inputPaymentForm = this.formBuilder.group({
      name: '',
      sex: '',
      email:'',
      phone:'',
      addressStore: '',
      note: '',
      checkTranfer: '',
      checkExportBill:'',
      storeCityAddress: '',
      city: '',
      district:'',
      address: ''
    })
  }
  onSubmit(){
    console.log('submit form');
  }

}
