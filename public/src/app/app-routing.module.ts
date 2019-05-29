import { AddReviewComponent } from './add-review/add-review.component';
import { EditComponent } from './edit/edit.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';




const routes: Routes = [
  { path: 'restaurants', component: DashboardComponent },
  { path: 'restaurant/create', component: CreateComponent },
  { path: 'restaurants/:id', component: ReviewsComponent },
  { path: 'restaurants/:id/edit', component: EditComponent },
  { path: 'restaurants/:id/review', component: AddReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
