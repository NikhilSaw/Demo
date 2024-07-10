 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorModule } from './Routing/doctor/doctor.module';
import { AdminModule } from './Routing/admin/admin.module';
import { PatientModule } from './Routing/patient/patient.module';
import { AppointmentModule } from './Routing/appointment/appointment.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DoctorModule,
    AdminModule,
    PatientModule,
    AppointmentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
