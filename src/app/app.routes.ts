import { Routes } from '@angular/router';
import {LinesComponent} from './lines/lines.component';
import {PrivacyPolicyComponent} from './lines/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  // {
  //   path: "lines",
  //   component: LinesComponent
  // },
  // {
  //   path: "lines/privacy_policy",
  //   component: PrivacyPolicyComponent
  // },
  // { path: '**', redirectTo: 'lines/privacy_policy' }

  {
    path: "",
    component: PrivacyPolicyComponent
  },
  { path: '**', redirectTo: '' }
];
