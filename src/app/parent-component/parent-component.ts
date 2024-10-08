import { Component } from '@angular/core';
import { Employee } from '../../models/app.model';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.html',
  styleUrls: ['./parent-component.scss']
})
export class ParentComponentComponent {
  managerName = 'John Doe';

  selectedEmployee: Employee | null = null;

  employees: Employee[] = [
    {
      id: 1,
      name: 'Jon Snow',
      regularHours: 40,
      overtimeHours: 5
    },
    {
      id: 2,
      name: 'Daenerys Targaryen',
      regularHours: 38,
      overtimeHours: 7
    },
    {
      id: 3,
      name: 'Tyrion Lannister',
      regularHours: 42,
      overtimeHours: 4
    },
    {
      id: 4,
      name: 'Arya Stark',
      regularHours: 36,
      overtimeHours: 8
    },
    {
      id: 5,
      name: 'Cersei Lannister',
      regularHours: 40,
      overtimeHours: 6
    }
  ];

  selectEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  getTeamRegularHoursTotal() {
    let total = 0;
    this.employees.forEach(employee => total += employee.regularHours);
    return total;
  }

  getTeamOvertimeHoursTotal() {
    let total = 0;
    this.employees.forEach(employee => total += employee.overtimeHours);
    return total;
  }

  employeeChange(updatedEmployee: Employee | null) {
    if (updatedEmployee) {
      const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
      if (index !== -1) {
        this.employees[index] = updatedEmployee;
      }
    }
    this.selectedEmployee = null;
  }
}
