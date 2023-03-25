import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../entities/employee";
import {ApiConfig} from "../shared/api-config";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  async getAll(): Promise<Employee[]> {
    // @ts-ignore
    return this.http.get<Employee[]>(ApiConfig.createURL("employees")).toPromise();
  }

  async delete(id? : number): Promise<void> {
    // @ts-ignore
    let employee = this.http.delete(ApiConfig.createURL("employees/"+id)).toPromise();
  }

  async searchAll(searchText: string): Promise<Employee[]> {
    // @ts-ignore
    return this.http.get<Employee[]>(ApiConfig.createURL("employees?"+searchText)).toPromise();
  }

  async add(employee: Employee): Promise<Employee[]> {
    // @ts-ignore
    return this.http.post<Employee>(ApiConfig.createURL("employees"), employee).toPromise();
  }

  async update(id? : number, employee?: Employee): Promise<Employee[]> {
    // @ts-ignore
    return this.http.put<Employee>(ApiConfig.createURL("employees/"+id), employee).toPromise();
  }
}
