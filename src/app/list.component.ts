import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { List }           from './list';
import {ListService} from './list.service';

@Component({
  selector: 'my-list',
  template: `<h1>list</h1>
  				<ul>
  					<li *ngFor="let item of list">
  						<p *ngFor="let kid of item">{{kid.name}}</p>
  					</li>
  				</ul>
  				`
})
export class ListComponent implements OnInit{ 

    list:List[]=[];

    constructor(private listService: ListService){}
    
    loadlist(){
        this.listService.getList().subscribe((list: List[]) => {
	        var darr = list;
          for(var i in darr)
          {
            var darr1=darr[i];
            for(var i1 in darr1)
            {
              this.list.push(darr1[i1]);
            }
          }
        });
    }

	ngOnInit(){
		this.loadlist();
	}
}