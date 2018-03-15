import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileDataService } from '../services/profile-data.service';
import { Follower } from '../common/follower.model';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {
  followers: Follower[];
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ProfileDataService) {
    this.searchForm = fb.group({
      search: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    const id = this.searchForm.value.search;
    this.service.getFollowers(id)
      .subscribe(followers => this.followers = followers);
  }

}
