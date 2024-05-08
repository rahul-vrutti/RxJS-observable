import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './retry.component.html',
  styleUrl: './retry.component.scss'
})
export class RetryComponent implements OnInit {

  person;
  fetching: boolean = false;
  status = 'No Data';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  
  }

  fetchDetails(){
    this.fetching = true;
    this.status = 'Fetching Data...'
    setTimeout(() => {
      this.http.get('http://localhost:3000/user').pipe(
      // retry(2),
      retryWhen(err => err.pipe(
        delay(2000), 
        scan((count) => {
          if(count >=4){
            throw err;
          }
          else{
            count = count + 1;
            // console.log(count);
            this.status = 'Retrying Attempt #' + count
            return count;
          }
        }, 0)
        )
      ))
      .subscribe({
      next: (res) => {
        console.log(res);
        this.person = res;
        this.status = 'Data Fetched'
        this.fetching = false;
      },
      error:(err)=> {
        console.log(err);
        this.status = 'Problem fetching data...!'
        this.fetching = false;
      }
  
  });
    }, 2000)
    
  }

}
