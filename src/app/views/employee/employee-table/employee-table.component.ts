import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../entities/employee";
import {EmployeeService} from "../../../services/employee.service";
import {FormControl, Validators} from "@angular/forms";
import {GenderService} from "../../../services/gender.service";
import { Gender } from 'src/app/entities/gender';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  employees: Employee[] = [];
  genders: Gender[] = [];

  displayedColumns: string[] = ['id', 'name', 'age', 'nic', 'gender', 'more-col', 'delete-col', 'update-col'];

  nameField = new FormControl();
  genderField = new FormControl();

  constructor(private genderService:GenderService, private employeeService:EmployeeService) { }

  async ngOnInit(): Promise<void> {
    await this.loadAll();
  }

  async loadAll() : Promise<void> {
    this.employees = await this.employeeService.getAll();
    this.genders = await this.genderService.getAll();
  }

  async search() : Promise<void> {
    let searchText = '';
    let searchName = this.nameField.value;
    let searchGender = this.genderField.value;
    if (searchName != null && searchGender != null){
      searchText = "name="+searchName+"&gender="+searchGender;
    }else if (searchName == null) {
      searchText = "gender="+searchGender;
    }else if (searchGender == null) {
      searchText = "name="+searchName;
    }

    if (searchText != '') {
      this.employees = await this.employeeService.searchAll(searchText);
    }
  }

  async delete(employee: Employee) {
    await this.employeeService.delete(employee.id);
    await this.loadAll();
    await this.loadAll();
  }
}
