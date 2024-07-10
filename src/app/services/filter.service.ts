import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private isFilterPanelVisible = false;

  constructor() {}

  getFilterPanelVisibility(): boolean {
    return this.isFilterPanelVisible;
  }

  setFilterPanelVisibility(visible: boolean): void {
    this.isFilterPanelVisible = visible;
  }
}
