import { Component, Input, Output, EventEmitter, OnInit, input, computed, model, output } from '@angular/core';
import { Employee } from '../../models/app.model';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  employee = model<Employee | null>(null);
  employeeChange = output<Employee | null>();


  ngOnInit() {
    this.resetForm();
  }

  onRegularHoursChange(event: number) {
    console.log('event', event);
    this.employee.set({
      ...this.employee(),
      regularHours: event
    })
  }

  onOvertimeHoursChange(event: number) {
    this.employee.set({
      ...this.employee(),
      overtimeHours: event
    })
  }

  saveChanges() {
    this.employeeChange.emit(this.employee());
  }

  cancelChanges() {
    this.employeeChange.emit(null);
  }

  private resetForm() {
    this.employee.set(null);
  }
}
