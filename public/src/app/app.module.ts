import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EditComponent } from './edit/edit.component';
import { AddReviewComponent } from './add-review/add-review.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateComponent,
    ReviewsComponent,
    EditComponent,
    AddReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
