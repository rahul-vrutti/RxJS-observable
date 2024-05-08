import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { SearchService } from '../../../appServices/search.service';
import { Search } from '../../../appServices/appInterface/search.interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild('searchForm') searchForm: NgForm;
  searchResults;
  searchResultCount;

  constructor(private _searchService: SearchService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    // this._searchService.getSearches('angular').subscribe(res => {
    //   console.log(res)
    // })
    
    const formValue = this.searchForm.valueChanges;
    formValue.pipe(
      filter(() => this.searchForm.valid),
      map(data => data['searchTerm']),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this._searchService.getSearches(data))
      )
    .subscribe(res => {
      // console.log(res);
      this.searchResults = res;
      // console.log('count ', Object.keys(res).length);
      this.searchResultCount = Object.keys(res).length;
    })
  }

}
