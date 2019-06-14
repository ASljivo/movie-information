import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageTemplateComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [ErrorMessageTemplateComponent],
  imports: [CommonModule],
  exports: [ErrorMessageTemplateComponent]
})
export class SharedModule {}
