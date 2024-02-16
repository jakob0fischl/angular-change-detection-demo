import {Routes} from '@angular/router';
import {NormalPropertyComponent} from './examples/normal-property/normal-property.component';
import {NormalPropertyOnPushComponent} from './examples/normal-property-on-push/normal-property-on-push.component';
import {RxjsOnPushComponent} from './examples/rxjs-on-push/rxjs-on-push.component';
import {SignalOnPushComponent} from './examples/signal-on-push/signal-on-push.component';
import {
  NormalPropertyOnPushAsyncComponent,
} from './examples/normal-property-on-push-async/normal-property-on-push-async.component';
import {SomeNiceSignalThingsComponent} from './examples/some-nice-signal-things/some-nice-signal-things.component';

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
    title: 'normal-property-on-push-async',
    path: 'normal-property-on-push-async',
    component: NormalPropertyOnPushAsyncComponent,
  },
  {
    title: 'rxjs-on-push',
    path: 'rxjs-on-push',
    component: RxjsOnPushComponent,
  },
  {
    title: 'signal-on-push',
    path: 'signal-on-push',
    component: SignalOnPushComponent,
  },
  {
    title: 'some-nice-signal-things',
    path: 'some-nice-signal-things',
    component: SomeNiceSignalThingsComponent,
  }
];
