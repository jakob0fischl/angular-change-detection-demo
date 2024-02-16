import { Routes } from '@angular/router';
import {NormalPropertyComponent} from './normal-property/normal-property.component';
import {NormalPropertyOnPushComponent} from './normal-property-on-push/normal-property-on-push.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import {RxjsOnPushComponent} from './rxjs-on-push/rxjs-on-push.component';
import {SignalComponent} from './signal/signal.component';
import {SignalOnPushComponent} from './signal-on-push/signal-on-push.component';

export const routes: Routes = [
  {
    title: 'normal-property',
    path: 'normal-property',
    component: NormalPropertyComponent,
  },
  {
    title: 'normal-property-on-push',
    path: 'normal-property-on-push',
    component: NormalPropertyOnPushComponent,
  },
  {
    title: 'rxjs',
    path: 'rxjs',
    component: RxjsComponent,
  },
  {
    title: 'rxjs-on-push',
    path: 'rxjs-on-push',
    component: RxjsOnPushComponent,
  },
  {
    title: 'signal',
    path: 'signal',
    component: SignalComponent,
  },
  {
    title: 'signal-on-push',
    path: 'signal-on-push',
    component: SignalOnPushComponent,
  }
];
