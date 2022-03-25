import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postArray: any =[];
  constructor(private http:HttpClient) {
    let url="http://localhost:8000/api/v1/posts";
    this.http.get(url).subscribe((response:any)=>{
      console.log(response)
      this.postArray=response;
    })

   }

  ngOnInit(): void {
  }

}
