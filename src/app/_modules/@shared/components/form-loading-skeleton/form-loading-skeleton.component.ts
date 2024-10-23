import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-loading-skeleton',
  templateUrl: './form-loading-skeleton.component.html',
  styleUrls: ['./form-loading-skeleton.component.scss']
})
export class FormLoadingSkeletonComponent implements OnInit {

  @Input() amount: number = 9;
  @Input() colClass: string = 'col-xl-4 col-sm-6 col-12';
  @Input() height: string = '';
  @Input() radius: string = '';

  /**
   * Stores the created array for UI purpose only.
   */
  public itemsArray: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generateArray();
  }

  /**
   * Generates an array based on the given number of amount.
   * HTML component will be repeated accordingly.
   */
  generateArray() {
    for (let index = 0; index < this.amount; index++) {
      this.itemsArray.push('item' + index);
    }
  }
}
