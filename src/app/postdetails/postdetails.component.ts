import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css'],
})
export class PostdetailsComponent implements OnInit {
  post: any;
  postedBy: any = {};
  comments: any;
  constructor(private http: HttpClient) {
    let url = 'http://localhost:8000/api/v1/posts/623b6124c4fde245f8e01870';
    this.http.get(url).subscribe((response: any) => {
      console.log(response);
      this.post = response;
      this.postedBy = response.postedBy;
    });

    let url1 =
      'http://localhost:8000/api/v1/posts/623b6124c4fde245f8e01870/comments';
    this.http.get(url1).subscribe((response: any) => {
      console.log(response);
      this.comments = response;
    });
  }

  ngOnInit(): void {}
}
