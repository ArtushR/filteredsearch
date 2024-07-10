import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { FilterService } from "../../services/filter.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSearchExpanded: boolean = false;
  isNavHidden: boolean = false;
  isMobileView: boolean = false;
  isBelow1080px: boolean = false;

  constructor(private filterService: FilterService, private eRef: ElementRef) {}

  ngOnInit() {
    this.checkWindowSize(); // Initial check when the component is initialized
  }

  get isFilterPanelVisible(): boolean {
    return this.filterService.getFilterPanelVisibility();
  }

  onFocus() {
    this.filterService.setFilterPanelVisibility(true);
    this.isSearchExpanded = true;
  }

  onBlur() {
    setTimeout(() => {
      if (!this.isClickInsideFilterPanel) {
        this.filterService.setFilterPanelVisibility(false);
        this.isSearchExpanded = false;
      }
    }, 200);
  }

  expandSearch() {
    this.isSearchExpanded = true;
    if (this.isMobileView) {
      document.body.classList.add('full-screen-search-active');
    }
  }

  collapseSearch() {
    this.isSearchExpanded = false;
    this.filterService.setFilterPanelVisibility(false); // Ensure filter panel is hidden when collapsing search
    document.body.classList.remove('full-screen-search-active');
  }

  isClickInsideFilterPanel: boolean = false;

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInside = this.eRef.nativeElement.contains(target) || target.closest('app-filter-panel');
    if (!clickedInside) {
      this.isSearchExpanded = false;
      this.filterService.setFilterPanelVisibility(false);
    } else {
      this.isClickInsideFilterPanel = true;
      setTimeout(() => {
        this.isClickInsideFilterPanel = false;
      }, 200);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    const width = window.innerWidth;
    this.isMobileView = width <= 850;
    this.isBelow1080px = width <= 1080;
    if (!this.isBelow1080px) {
      this.isNavHidden = false;
    } else {
      this.isNavHidden = true;
    }
  }

  toggleNav() {
    this.isNavHidden = !this.isNavHidden;
  }
}
