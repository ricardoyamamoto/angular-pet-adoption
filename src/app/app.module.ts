import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdopterComponent } from './adopter/adopter.component';
import { AnimalComponent } from './animal/animal.component';
import { SearchComponent } from './search/search.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    AdopterComponent,
    AnimalComponent,
    SearchComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
