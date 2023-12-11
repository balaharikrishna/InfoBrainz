import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MenubarModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule ,
    InputTextModule
  ],
})
export class SharedModule { }
