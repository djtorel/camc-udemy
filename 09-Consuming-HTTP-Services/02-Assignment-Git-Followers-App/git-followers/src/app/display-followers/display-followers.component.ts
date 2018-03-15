import { Follower } from './../common/follower.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-followers',
  templateUrl: './display-followers.component.html',
  styleUrls: ['./display-followers.component.css']
})
export class DisplayFollowersComponent implements OnInit {
  @Input() follower: Follower;

  constructor() {
  }

  ngOnInit() {
  }

}
