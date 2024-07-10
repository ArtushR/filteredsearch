import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent {
  previousSearches: string[] = [
    'angular',
    'react',
    'vue',
    'javaScript',
    'typeScript',
    'java',
    'python',
    'oop',
  ];
}
