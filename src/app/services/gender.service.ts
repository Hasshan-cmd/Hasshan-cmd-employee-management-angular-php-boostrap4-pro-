import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Gender} from "../entities/gender";
import {ApiConfig} from "../shared/api-config";

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http:HttpClient) { }

  async getAll(): Promise<Gender[]> {
    // @ts-ignore
    return this.http.get<Gender[]>(ApiConfig.createURL("genders")).toPromise();
  }
}
