import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
searchTerm: string="";
  constructor(private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
  //   console.log("this.route", this.route);
  //   console.log("this.route.params", this.route.params)
    this.route.params.subscribe(params =>{

      if(params['searchTerm']){

        this.searchTerm = params['searchTerm']
      }
    })
  }

  search():void{
  if(this.searchTerm){
    this.router.navigateByUrl('/search/' + this.searchTerm)
  }

  }

}
