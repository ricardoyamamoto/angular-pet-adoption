import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatProgressBarModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { AdopterComponent } from './adopter/adopter.component';
import { PetComponent } from './pet/pet.component';
import { SearchComponent } from './search/search.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {BreedService} from './services/breed.service';
import {AgeService} from './services/age.service';
import {ColourService} from './services/colour.service';
import {PetService} from './services/pet.service';
import {FileUploadComponent} from './file-upload/file-upload.component';



const appRoutes: Routes = [
  {path: 'pet', component: PetComponent},
  {path: 'search', component: SearchComponent},
  {path: 'upload', component: FileUploadComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdopterComponent,
    PetComponent,
    SearchComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FileUploadModule,
    MatProgressBarModule,
    MatExpansionModule
  ],
  providers: [
    AgeService,
    BreedService,
    ColourService,
    PetService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
