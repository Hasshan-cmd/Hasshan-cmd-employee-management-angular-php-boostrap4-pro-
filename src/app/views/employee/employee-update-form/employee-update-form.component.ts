import { Component, OnInit } from '@angular/core';
import {Gender} from "../../../entities/gender";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GenderService} from "../../../services/gender.service";
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../entities/employee";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee-update-form',
  templateUrl: './employee-update-form.component.html',
  styleUrls: ['./employee-update-form.component.scss']
})
export class EmployeeUpdateFormComponent implements OnInit {

  genders: Gender[] = [];
  employee?: Employee[];
  selectedId?: number;

  employeeForm =new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100),
      Validators.pattern("^[a-zA-Z ]{3,}$")
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2),
      Validators.pattern("^([1-1][8-9]|[2-4][0-9]|50)$")
    ]),
    nic: new FormControl(null, [
      Validators.required,
      Validators.pattern("^(([0-9]{12})|([0-9]{9}[vVxX]))$")
    ]),
    gender: new FormControl(null, [
      Validators.required
    ])
  });

  get nameField(): FormControl {
    return this.employeeForm.controls.name as FormControl;
  }

  get ageField(): FormControl {
    return this.employeeForm.controls.age as FormControl;
  }

  get nicField(): FormControl {
    return this.employeeForm.controls.nic as FormControl;
  }

  get genderField(): FormControl {
    return this.employeeForm.controls.gender as FormControl;
  }

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
    this.genders = await this.genderService.getAll();
    this.employee = await this.employeeService.searchAll('id='+this.selectedId);
    this.fillForm();
  }

  fillForm() : void {
    // @ts-ignore
    this.nameField.patchValue(this.employee.name);
    // @ts-ignore
    this.ageField.patchValue(this.employee.age);
    // @ts-ignore
    this.nicField.patchValue(this.employee.nic);
    // @ts-ignore
    this.genderField.patchValue(this.employee.gender.id);
  }

  async submit() : Promise<void> {
    if (!this.employeeForm.invalid) {
      try {
        let employee = new Employee();
        const gender = new Gender();
        employee.name = this.nameField.value;
        employee.age = this.ageField.value;
        employee.nic = this.nicField.value;
        gender.id = this.genderField.value;
        employee.gender = gender;

        if (!this.employeeForm.pristine ) {
          // @ts-ignore
          employee = await this.employeeService.update(this.selectedId, employee);
          this.clearForm();
        } this.navigate();
      }catch (e) {
        // @ts-ignore
        alert(e.error.text);
      }
    }
  }

  navigate(){
    this.router.navigate(['/employees']);
  }

  clearForm() {
    this.employeeForm.reset();
  }
}
