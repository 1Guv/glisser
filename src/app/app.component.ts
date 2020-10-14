import { Component } from '@angular/core';
import { UserPost } from 'src/_models/user-post.model';
import { DataService } from 'src/_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'glisser-test';
  userPosts: Array<UserPost>;

  constructor(private dataService: DataService) {
    this.dataService.getPosts()
      .subscribe(data => {
        this.userPosts = data;
      });
  }
}
