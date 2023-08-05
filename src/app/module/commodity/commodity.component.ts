import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commodity } from 'src/app/model/commodity';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {

  days: string | null = null;
  lessThan: string | null = null;
  moreThan: string | null = null;
  commodityId: string | null = null;
  allReceiptsVisible = true;
  commodity: Commodity | undefined;
  commodityNotFound: string | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.days = params.get('days');
      this.lessThan = params.get('lessThan');
      this.moreThan = params.get('moreThan');
      this.commodityId = params.get('id');
      this.httpService.getCommodity(
        `${this.commodityId}?days=${this.days}&lessThan=${this.lessThan}&moreThan=${this.moreThan}`
      ).subscribe(
        res => {
          this.commodity = res;
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 404) {
              this.commodityNotFound = err.error;
            }
            console.log(err);
          }
        }
      );
    });
  }

  showOrHide() {
    this.allReceiptsVisible = !this.allReceiptsVisible;
  }

}
