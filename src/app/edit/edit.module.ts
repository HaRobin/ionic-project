import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditPageRoutingModule } from './edit-routing.module';
import { EditPage } from './edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Required for [(ngModel)]
    IonicModule, // Required for Ionic components like ion-input
    EditPageRoutingModule,
  ],
  declarations: [EditPage],
})
export class EditPageModule {}
