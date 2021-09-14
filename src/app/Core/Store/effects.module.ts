import {DashLikeAHogEffects} from "./dash-like-a-hog/effects";
import {EffectsModule} from "@ngrx/effects";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    EffectsModule.forRoot([
      DashLikeAHogEffects
    ]),
  ],
  providers: [
  ],
})
export class StoreEffectsModule { }
