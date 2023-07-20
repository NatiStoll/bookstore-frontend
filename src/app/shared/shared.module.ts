import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// import { ZipCodeMaskPipe } from './pipes/zip-code-mask.pipe';

import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [HeaderComponent, NotFoundComponent],
})
export class SharedModule {}
