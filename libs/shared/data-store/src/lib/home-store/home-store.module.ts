import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHome from './+state/home.reducer';
import { HomeEffects } from './+state/home.effects';
import { HomeFacade } from './+state/home.facade';
import { HomeApiService } from './api/home-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromHome.HOME_FEATURE_KEY, fromHome.reducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
  providers: [HomeFacade, HomeApiService],
})
export class HomeStoreModule {}
