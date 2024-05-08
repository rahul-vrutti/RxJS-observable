import { Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FormEventComponent } from './observable/components/form-event/form-event.component';
import { IntervalComponent } from './observable/components/interval/interval.component';
import { OfFromComponent } from './observable/components/of-from/of-from.component';
import { ToArrayComponent } from './observable/components/to-array/to-array.component';
import { CustomComponent } from './observable/components/custom/custom.component';
import { MapComponent } from './observable/components/map/map.component';
import { PluckComponent } from './observable/components/pluck/pluck.component';
import { FilterComponent } from './observable/components/filter/filter.component';
import { TapComponent } from './observable/components/tap/tap.component';
import { TakeComponent } from './observable/components/take/take.component';
import { RetryComponent } from './observable/components/retry/retry.component';
import { DebouncetimeComponent } from './observable/components/debouncetime/debouncetime.component';
import { SubjectComponent } from './observable/components/subject/subject.component';
import { ReplaySubject } from 'rxjs';
import { ReplaySubjectComponent } from './observable/components/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/components/async-subject/async-subject.component';
import { ConcatComponent } from './observable/components/concat/concat.component';
import { MergeComponent } from './observable/components/merge/merge.component';
import { MergeMapComponent } from './observable/components/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable/components/concat-map/concat-map.component';
import { ConcatMapNotificationComponent } from './observable/components/concat-map-notification/concat-map-notification.component';
import { SwitchMapComponent } from './observable/components/switch-map/switch-map.component';
import { SearchComponent } from './observable/components/search/search.component';
import { ExhaustMapComponent } from './observable/components/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observable/components/share-replay/share-replay.component';
import { CombineLatestComponent } from './observable/components/combine-latest/combine-latest.component';

export const routes: Routes = [
    {
        path: 'observable',
        component: ObservableComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'fromEvent',
                component: FormEventComponent
            },
            {
                path: 'interval',
                component: IntervalComponent
            },
            {
                path: 'of-from',
                component: OfFromComponent
            },
            {
                path: 'to-array',
                component: ToArrayComponent
            },
            {
                path: 'custom',
                component: CustomComponent
            },
            {
                path: 'map',
                component: MapComponent
            },
            {
                path: 'pluck',
                component: PluckComponent
            },
            {
                path: 'filter',
                component: FilterComponent
            },
            {
                path: 'tap',
                component: TapComponent
            },
            {
                path: 'take',
                component: TakeComponent
            },
            {
                path: 'retry',
                component: RetryComponent
            },
            {
                path: 'debouncetime',
                component: DebouncetimeComponent
            },
            {
                path: 'subject',
                component: SubjectComponent
            },
            {
                path: 'replay-subject',
                component: ReplaySubjectComponent
            },
            {
                path: 'async-subject',
                component: AsyncSubjectComponent
            },
            {
                path: 'concat',
                component: ConcatComponent
            },
            {
                path: 'merge',
                component: MergeComponent
            },
            {
                path: 'merge-map',
                component: MergeMapComponent
            },
            {
                path: 'concat-map',
                component: ConcatMapComponent
            },
            {
                path: 'notification',
                component: ConcatMapNotificationComponent
            },
            {
                path: 'switch-map',
                component: SwitchMapComponent
            },
            {
                path: 'search',
                component: SearchComponent
            },
            {
                path: 'exhaustmap',
                component: ExhaustMapComponent
            },
            {
                path: 'sharereplay',
                component: ShareReplayComponent
            },
            {
                path: 'combine-latest',
                component: CombineLatestComponent
            },
        ]
    },
    {
        path: '**', 
        redirectTo: 'observable'
    },
];
