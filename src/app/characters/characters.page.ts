import {Component, OnInit} from "@angular/core";

import {HttpClient} from "@angular/common/http";

@Component({selector: "app-characters", templateUrl: "./characters.page.html", styleUrls: ["./characters.page.scss"]})
export class CharactersPage implements OnInit {
  private characters = [];
  private page;

  constructor(private http : HttpClient) {
    this.page = 1;
  }

  ngOnInit() {
    this.http.get<any>(`https://rickandmortyapi.com/api/character/?page=${this.page}`).subscribe((res) => {
      this.characters = res.results;
    });
  }

  nextPage() {
    if(this.page <= 33){
      this.page++;
    }else{
      this.page = 1;
    }
    this.ngOnInit();
  }
  
  previousPage() {
    if(this.page >= 2){
      this.page--;
    }else{
      this.page = 34;
    }
    this.ngOnInit();
  }
}
