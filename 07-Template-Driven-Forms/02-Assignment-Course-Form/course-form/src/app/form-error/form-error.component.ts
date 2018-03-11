import { Component, OnInit, Input } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent implements OnInit {
  @Input('name') fieldName: string;
  @Input() fieldObj: NgModel;

  constructor() { }

  ngOnInit() {
  }

}
