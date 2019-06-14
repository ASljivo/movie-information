import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageTemplateComponent implements OnInit {
  @Input() errorConfig: any;

  constructor() {}

  ngOnInit() {}
}
