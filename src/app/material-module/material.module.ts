import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSlideToggleModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatSlideToggleModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class MaterialModule { }