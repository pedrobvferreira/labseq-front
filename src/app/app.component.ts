import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LabSeqService } from './components/views/labseq/labseq.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule
  ],
  templateUrl: './components/views/labseq/labseq.html',
  styleUrls: ['./components/views/labseq/labseq.css'],
})
export class AppComponent {
  title: string = 'labseq';
  result: number = 0;
  input: number = 0;

  constructor(private service: LabSeqService) {}

  ngOnInit(): void {
    this.calculateLabSeq();
  }

  calculateLabSeq() {
    this.service.getLabSeq(this.input).subscribe(result => {
      this.result = result;
    });
  }
}
