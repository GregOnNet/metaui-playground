import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialRulesModule } from '@ngx-metaui/material-rules';
import { MetaConfig, MetaUIRulesModule } from '@ngx-metaui/rules';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as userRules from './rules/user-rules';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MetaUIRulesModule.forRoot(),
    MaterialRulesModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private config: MetaConfig) {
    // mandatory - you need to register app defined rules and types since there is no
    // introspection in js

    const rules: any[] = config.get('metaui.rules.user-rules') || [];
    rules.push(userRules);
    config.set('metaui.rules.user-rules', rules);
  }
}
