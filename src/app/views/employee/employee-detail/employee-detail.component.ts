import { Component, OnInit } from '@angular/core';
import {Gender} from "../../../entities/gender";
import {Employee} from "../../../entities/employee";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GenderService} from "../../../services/gender.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../../services/employee.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employees: Employee[] = [];
  genders: Gender[] = [];
  selectedId?: number;
  employee?: Employee[];

  constructor(private genderService:GenderService,
              private route:ActivatedRoute,
              private router: Router,
              private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params) => {
      // @ts-ignore
      this.selectedId = + params.get('id');
      await this.loadAll();
    });
  }

  async loadAll() : Promise<void> {
    this.employee = await this.employeeService.searchAll('id='+this.selectedId);
    this.genders = await this.genderService.getAll();
    // @ts-ignore
    this.employees = [this.employee];
  }
}
