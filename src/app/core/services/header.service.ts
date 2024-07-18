import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

Injectable({ providedIn: 'root' });
export class HeaderService {
  private elementsSubject = new BehaviorSubject(new Map<string, TemplateRef<HTMLElement>>());
  public elements$ = this.elementsSubject.asObservable();

  addHeaderElement(element: TemplateRef<HTMLElement>, id: string) {
    if (this.elementsSubject.value.has(id)) {
      return;
    }

    this.elementsSubject.value.set(id, element);
    this.elementsSubject.next(new Map(this.elementsSubject.value));
  }

  removeHeaderElement(id: string) {
    if (!this.elementsSubject.value.has(id)) {
      return;
    }
    this.elementsSubject.value.delete(id);
    this.elementsSubject.next(new Map(this.elementsSubject.value));
  }
}
