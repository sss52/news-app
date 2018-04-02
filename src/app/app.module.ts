import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {  HttpModule  } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TopHeadlinesPage } from '../pages/top-headlines/top-headlines';
//import { ListPage } from '../pages/list/list';
import { SettingPage } from '../pages/setting/setting';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiSetting } from '../services/api_setting/api_setting';
import { RestApi } from '../services/rest_api/rest_api';
import {AccordionModule} from "ng2-accordion";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TopHeadlinesPage,
    //ListPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AccordionModule,
    Ng4LoadingSpinnerModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TopHeadlinesPage,
    //ListPage,
    SettingPage
  ],
  providers: [
    ApiSetting,
    RestApi,
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
