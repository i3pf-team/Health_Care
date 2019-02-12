import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SelectCategoryPage } from '../pages/select-category/select-category';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterDoctorPage } from '../pages/register-doctor/register-doctor';
import { RegisterPatientPage } from '../pages/register-patient/register-patient';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterDoctorPage,
    RegisterPatientPage,
    ListPage,
    SelectCategoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterDoctorPage,
    RegisterPatientPage,
    SelectCategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
