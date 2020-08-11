import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MetaUiOperationNotifier {
  constructor(private router: Router) {}

  getActiveOperation(route: ActivatedRoute) {
    return route.snapshot.url.toString().includes('create')
      ? 'create'
      : route.snapshot.url.toString().includes('edit')
      ? 'edit'
      : 'view';
  }

  operationChanges(): Observable<'edit' | 'create' | 'view'> {
    return this.router.events.pipe(
      filter(
        (event): event is NavigationStart => event instanceof NavigationStart
      ),
      map(event =>
        event.url.indexOf('create') > -1
          ? 'create'
          : event.url.indexOf('edit') > -1
          ? 'edit'
          : 'view'
      ),
      distinctUntilChanged()
    );
  }
}
