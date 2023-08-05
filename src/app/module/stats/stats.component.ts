import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderOrDiscountCandidates } from 'src/app/model/orderOrDiscountCandidates';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  days: string | null = null;
  lessThan: string | null = null;
  moreThan: string | null = null;
  procedingData = true;
  candidates: OrderOrDiscountCandidates | undefined;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.days = params.get('days');
      this.lessThan = params.get('lessThan');
      this.moreThan = params.get('moreThan');
      this.httpService.getStats(`?days=${this.days}&lessThan=${this.lessThan}&moreThan=${this.moreThan}`).subscribe(
        res => {
          this.procedingData = false
          this.candidates = res;
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            console.log(err);
          }
        }
      );
    });
  }

}
