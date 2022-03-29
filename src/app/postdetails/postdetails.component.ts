import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css'],
})
export class PostdetailsComponent implements OnInit {
  post: any;
  postId: any;
  postedBy: any = {};
  comments: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.postId = this.route.snapshot.params['id'];
    let url = 'http://localhost:8000/api/v1/posts/' + this.postId;

    this.http.get(url).subscribe((response: any) => {
      console.log('hello');
      console.log(response);
      this.post = response;
      this.postedBy = response.postedBy;
    });

    let url1 =
      'http://localhost:8000/api/v1/posts/' + this.postId + '/comments';
    this.http.get(url1).subscribe((response: any) => {
      console.log('hello second');
      console.log(response);
      this.comments = response;
    });
  }

  ngOnInit(): void {}
}
