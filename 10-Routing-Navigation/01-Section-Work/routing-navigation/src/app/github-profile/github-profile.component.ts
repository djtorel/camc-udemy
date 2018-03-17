import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  username: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    console.log(this.username);
  }

  submit() {
    // this.router.navigate(['/followers'], { queryParams: {
    //   search: this.username,
    //   page: 1,
    //   order: 'newest',
    // } });
    this.location.back();
  }

}
