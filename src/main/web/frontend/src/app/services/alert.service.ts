import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../model/alert';
import { AlertType } from '../enum/alert-type.enum';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public alerts: Subject<Alert> = new Subject();

  constructor() { }

  showAlert(message: string, type: AlertType): void {
    const alert = new Alert(message, type);
    this.alerts.next(alert);
  }
}
