import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TercerComponent } from './tercer/tercer.component';
import { CuartoComponent } from './cuarto/cuarto.component';

@NgModule({

  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    TercerComponent,
    CuartoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([ 
                           { path: 'second-component/:id/:img', component: SecondComponent },
                            { path: 'tercer-component', component: TercerComponent },
                            {path: 'first-component', component: FirstComponent },
                            {path: 'cuarto-component', component: CuartoComponent },
                           { path: '',   redirectTo: '/second-component', pathMatch: 'full' },
                           { path: '',   redirectTo: '/first-component', pathMatch: 'full' } ])
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
