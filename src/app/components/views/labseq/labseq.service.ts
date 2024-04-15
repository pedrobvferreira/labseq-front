import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabSeqService {
  baseUrl: string = Environment.baseUrl;

  constructor(private http: HttpClient) { }

  getLabSeq(value: number):Observable<number>{
    const url = `${this.baseUrl}/labseq/${value}`
    return this.http.get<number>(url)
  }
}
