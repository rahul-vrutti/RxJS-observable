import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgForm } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, NgbModule, RouterLink, RouterOutlet
  ],
  exports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, NgbModule, RouterLink, RouterOutlet
  ]
})

export class SharedModule { }