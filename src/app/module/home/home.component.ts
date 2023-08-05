import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  days = 365;
  lessThan = 30;
  moreThan = 70;
  daysViolation: string | undefined;
  lessViolation: string | undefined;
  moreViolation: string | undefined;
  dataViolation: string | undefined;

  constructor(private router: Router) { }

  getStats(): void {
    this.clearViolations();
    this.setViolations();
    if (this.thereAreNoViolations()) {
      this.router.navigate([`warehouse/d/${this.days}/l/${this.lessThan}/m/${this.moreThan}`]);
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

  setViolations(): void {
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
