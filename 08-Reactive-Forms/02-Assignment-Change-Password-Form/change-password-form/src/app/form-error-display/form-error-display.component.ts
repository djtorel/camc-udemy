// import { FormErrorHandlerService } from './../form-error-handler.service';
import { FormError } from './../form-error.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-error-display',
  templateUrl: './form-error-display.component.html',
  styleUrls: ['./form-error-display.component.css']
})
export class FormErrorDisplayComponent implements OnInit {
  @Input() error: FormError;

  constructor() {
  }

  ngOnInit() {
  }

}
