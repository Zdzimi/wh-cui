import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { OrderOrDiscountCandidates } from 'src/app/model/orderOrDiscountCandidates';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  days = 30;
  lessThan = 30;
  moreThan = 70;
  candidates: OrderOrDiscountCandidates | undefined;
  daysViolation: string | undefined;
  lessViolation: string | undefined;
  moreViolation: string | undefined;
  dataViolation: string | undefined;

  constructor(private httpService: HttpService) { }

  getStats(): void {
    this.clearViolations();
    this.setViolation();
    if (this.thereAreNoViolations()) {
      this.httpService.getStats(`?days=${this.days}&lessThan=${this.lessThan}&moreThan=${this.moreThan}`).subscribe(
        res => {
          this.candidates = res;
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            console.log(err);
          }
        }
      );
    }
  }

  thereAreNoViolations(): boolean {
    return !this.daysViolation && !this.lessViolation && !this.moreViolation && !this.dataViolation;
  }

  clearViolations(): void {
    this.daysViolation = undefined;
    this.lessViolation = undefined;
    this.moreViolation = undefined;
    this.dataViolation = undefined;
  }

  setViolation(): void {
    if (this.days < 1) {
      this.daysViolation = "minimalna ilość dni to 1";
    }
    if (this.lessThan < 1) {
      this.lessViolation = "minimalna wartość mniejsza niż to 1";
    }
    if (this.moreThan < 0) {
      this.moreViolation = "minimalna wartość większa niż to 0";
    }
    if (this.moreThan < this.lessThan) {
      this.dataViolation = "wartość większa niż musi być nie mniejsza od wartości mniejsza niż";
    }
  }
}
