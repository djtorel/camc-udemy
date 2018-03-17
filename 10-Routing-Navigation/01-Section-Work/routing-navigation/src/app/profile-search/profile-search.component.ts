import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProfileDataService } from '../services/profile-data.service';
import { Follower } from '../common/follower.model';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {
  followers: Follower[];
  searchForm: FormGroup;
  search: string;

  constructor(
    private fb: FormBuilder,
    private service: ProfileDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.searchForm = fb.group({
      search: ['', Validators.required],
    });
  }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap,
    ])
      .switchMap(combined => {
        // const id = combined[0].get('id');
        const page = combined[1].get('page');
        this.search = combined[1].get('search');
        return this.service.getFollowers(this.search);
      })
      .subscribe(followers => this.followers = followers);
  }

  onSubmit(): void {
    const id = this.searchForm.value.search;
    this.router.navigate(['/followers'], { queryParams: {
      search: id,
      page: 1,
      order: 'newest',
    } });
    // this.service.getFollowers(id)
    //   .subscribe(followers => this.followers = followers);
  }

}
