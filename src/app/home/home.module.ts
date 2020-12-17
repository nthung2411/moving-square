import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { MatInputModule } from '@angular/material/input';
import {
    FormsModule,
    ReactiveFormsModule
} from "@angular/forms";

const routes: Routes = [
    { path: '', component: HomeComponent },
];
@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})
export class HomeModule { }