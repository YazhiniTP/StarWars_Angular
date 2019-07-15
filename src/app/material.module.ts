import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

const MODULES = [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatCardModule
]

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule {

}