import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SelectCategoryPage } from '../pages/select-category/select-category';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterDoctorPage } from '../pages/register-doctor/register-doctor';
import { RegisterPatientPage } from '../pages/register-patient/register-patient';
import { DoctorHomePage } from '../pages/doctor-home/doctor-home';
import { SplashPage } from '../pages/splash/splash';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    RegisterDoctorPage,
    RegisterPatientPage,
    ListPage,
    SelectCategoryPage,
    DoctorHomePage,
    SplashPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    RegisterDoctorPage,
    RegisterPatientPage,
    SelectCategoryPage,
    DoctorHomePage,
    SplashPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
