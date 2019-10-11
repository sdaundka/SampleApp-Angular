import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      {
        path: 'users',
        component: UserComponent,
        pathMatch: 'full'
       },
       {
         path:'search',
         component: SearchComponent
       }
      //  ,
      //  {
      //  path: '',
      //  component: UserComponent,
      //  pathMatch: 'full'
      // }

  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
