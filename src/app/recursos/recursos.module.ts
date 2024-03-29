import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecursosPageRoutingModule } from './recursos-routing.module';

import { RecursosPage } from './recursos.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecursosPageRoutingModule,
        NgOptimizedImage
    ],
  declarations: [RecursosPage]
})
export class RecursosPageModule {}
