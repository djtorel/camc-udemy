import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  isActive = false;
  password = 'test123';

  constructor() { }

  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }

  onDivClicked() {
    console.log('Div was clicked');
  }

  onKeyUp(email) {
    console.log(email);
  }

  onPasswordEnter() {
    console.log(this.password);
  }

  ngOnInit() {
  }

}
