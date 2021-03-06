import { PostService } from './../services/post.service';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;
      }, (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {

        } else {
          throw error;
        }
      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(updatedPost => console.log(updatedPost));
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(null, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This pose has already been deleted');
        } else {
          this.posts.splice(index, 0, post);
          throw error;
        }
      });
  }

}
