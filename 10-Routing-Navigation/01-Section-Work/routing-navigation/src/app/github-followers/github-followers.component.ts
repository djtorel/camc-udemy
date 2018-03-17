import { Component, OnInit, Input } from '@angular/core';
import { Follower } from '../common/follower.model';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  @Input() follower: Follower;

  constructor() {
  }

  ngOnInit() {
  }
}
