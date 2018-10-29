import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { StewardsComponent } from './stewards/stewards.component';
import { HelpManualComponent } from './help-manual/help-manual.component';
import { VideoTutorialsComponent } from './video-tutorials/video-tutorials.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'stewards', component: StewardsComponent },
  { path: 'help-manual', component: HelpManualComponent },
  { path: 'video-tutorials', component: VideoTutorialsComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    StewardsComponent,
    HelpManualComponent,
    VideoTutorialsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
