import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonSeeAllComponent } from './button-see-all/button-see-all.component';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';


import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BannerComponent } from './banner/banner.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ButtonSelectColorComponent } from './button-select-color/button-select-color.component';
import { ButtonSelectMemoryComponent } from './button-select-memory/button-select-memory.component';


@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ButtonSeeAllComponent,
    BannerComponent,
    BreadcumbComponent,
    ButtonSelectColorComponent,
    ButtonSelectMemoryComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzBreadCrumbModule
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ButtonSeeAllComponent,
    BannerComponent,
    ButtonSeeAllComponent,
    BreadcumbComponent
  ]
})
export class ComponentsModule { }
