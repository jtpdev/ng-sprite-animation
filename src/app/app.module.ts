import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SpriteAnimationModule } from './sprite-animation/sprite-animation.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpriteAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
