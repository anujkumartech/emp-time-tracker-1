import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/app.model';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent {
  @Input() employee: Employee;
  @Output() employeeChange = new EventEmitter<Employee>();

  onRegularHoursChange(event: number) {
    this.employee.regularHours = event;
    this.employeeChange.emit(this.employee);
  }

  onOvertimeHoursChange(event: number) {
    this.employee.overtimeHours = event;
    this.employeeChange.emit(this.employee);
  }
}
