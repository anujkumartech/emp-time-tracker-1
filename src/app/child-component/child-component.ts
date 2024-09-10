import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Employee } from '../../models/app.model';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.html',
  styleUrls: ['./child-component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input() employee: Employee;
  @Output() employeeChange = new EventEmitter<Employee | null>();

  editedRegularHours: number;
  editedOvertimeHours: number;

  ngOnInit() {
    this.resetForm();
  }

  onRegularHoursChange(event: number) {
    this.editedRegularHours = event;
  }

  onOvertimeHoursChange(event: number) {
    this.editedOvertimeHours = event;
  }

  saveChanges() {
    this.employee.regularHours = this.editedRegularHours;
    this.employee.overtimeHours = this.editedOvertimeHours;
    this.employeeChange.emit(this.employee);
  }

  cancelChanges() {
    this.employeeChange.emit(null);
  }

  private resetForm() {
    this.editedRegularHours = this.employee.regularHours;
    this.editedOvertimeHours = this.employee.overtimeHours;
  }
}
