import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FrontendtestComponent } from './frontendtest/frontendtest.component';
import { MariaRoutingModule } from './maria-routing.module';

@NgModule({
  declarations: [FrontendtestComponent],
  imports: [CommonModule, MariaRoutingModule, ReactiveFormsModule],
  providers: []
})
export class MariaModule {}
