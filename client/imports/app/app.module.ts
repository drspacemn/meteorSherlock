import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PartiesFormComponent } from './parties/parties-form.component';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    PartiesFormComponent
    ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [],
  // Modules
  imports: [
    BrowserModule, FormsModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}
