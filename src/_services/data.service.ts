import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserPost } from 'src/_models/user-post.model';
import DATA from '../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userPosts: Array<UserPost> = DATA;
  userPosts$ = new BehaviorSubject<Array<UserPost>>([] as Array<UserPost>);

  constructor() { }

  getPosts() {
    return this.userPosts$ = new BehaviorSubject<Array<UserPost>>(this.userPosts);
  }

  updateName(updatePost: UserPost) {
    this.userPosts.forEach((post: UserPost) => {
      if (post.id === updatePost.id) {
        post.firstName = updatePost.firstName;
        post.lastName = updatePost.lastName;
      }
    });
    this.userPosts$.next(this.userPosts);
  }

  updateBio(updatePost: UserPost) {
    this.userPosts.forEach((post: UserPost) => {
      if (post.id === updatePost.id) {
        post.bio = updatePost.bio;
      }
    });
    this.userPosts$.next(this.userPosts);
  }
}
