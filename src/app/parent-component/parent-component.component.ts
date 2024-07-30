import { Component } from '@angular/core';
import { Employee } from '../../models/app.model';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent {
  managerName = 'John Doe';

  selectedEmployee: Employee | null = null;

  employees: Employee[] = [
    {
      name: 'Jon Snow',
      regularHours: 40,
      overtimeHours: 5
    },
    {
      name: 'Daenerys Targaryen',
      regularHours: 38,
      overtimeHours: 7
    },
    {
      name: 'Tyrion Lannister',
      regularHours: 42,
      overtimeHours: 4
    },
    {
      name: 'Arya Stark',
      regularHours: 36,
      overtimeHours: 8
    },
    {
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
    return total
  }

  getTeamOvertimeHoursTotal() {
    let total = 0;
    this.employees.forEach(employee => total += employee.overtimeHours);
    return total
  }
}
