import { Component, OnInit } from '@angular/core';
import { LabSeqService } from './labseq.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labseq',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './labseq.html',
  styleUrls: ['./labseq.css']
})

export class LabSeqComponent implements OnInit {
  title: string = 'labseq-front';
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