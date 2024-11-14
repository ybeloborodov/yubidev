import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LinesComponent} from './lines.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';



@NgModule({
  declarations: [LinesComponent, PrivacyPolicyComponent],
  imports: [
    CommonModule
  ],
  exports: [LinesComponent]
})
export class LinesModule { }
