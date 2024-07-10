import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from "@angular/material/button";
import { MatInput } from "@angular/material/input";
import { MatTooltip } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPanelComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatIconModule,
        MatIconButton,
        MatInput,
        MatButton,
        MatTooltip,
        MatMiniFabButton,
        MatFabButton
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
