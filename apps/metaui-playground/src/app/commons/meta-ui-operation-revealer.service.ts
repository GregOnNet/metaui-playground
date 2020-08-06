import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MetaUiOperationNotifier {
  constructor(private router: Router) {}

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
