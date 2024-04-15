import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatToolbarModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: '../labseq.html'
})
export class AppComponent {
  title: string = 'labseq-front';
  result: number = 0;
  input: number = 0;

  constructor(private http: HttpClient) {}

  calculateLabSeq() {
    this.http.get<number>(`http://localhost:8080/labseq/${this.input}`).subscribe(val => {
      console.log(val);
      this.result = val;
    });
  }
}
