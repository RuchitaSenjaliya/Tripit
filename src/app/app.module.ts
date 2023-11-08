import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { TopSearchbarComponent } from './top-searchbar/top-searchbar.component';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MainContentComponent } from './main-content/main-content.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';

import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    TopSearchbarComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    CdkDropList,
    MatDatepickerModule,
    CdkDrag,
    MatNativeDateModule,
    MatMenuModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
