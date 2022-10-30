import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { LoginPageComponent } from './login-page/login-page.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SharedModule } from '../shared/shared.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { CartPageComponent } from './cart-page/cart-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  declarations: [
    HomePageComponent,
    LoginPageComponent,
    DetailPageComponent,
    CartPageComponent,
    PaymentPageComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    SharedModule,
    NzCarouselModule,
    NzButtonModule,
    NzRateModule,
    NzIconModule,
    NzTabsModule,
    NzRadioModule,
    NzSelectModule,
    NzCheckboxModule
  ],
  exports : [
    HomePageComponent,
    LoginPageComponent,
    DetailPageComponent,
    PaymentPageComponent
  ]
})
export class PagesModule { }
