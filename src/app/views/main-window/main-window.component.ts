import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LinkItem} from "../../shared/link-item";
import {UsecaseList} from "../../usecase-list";

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router
  ) {}

  unreadNotificationCount = '0';
  isLive = true;
  sidenavOpen = false;
  sidenaveMode = 'side';
  usecasesLoaded = false;
  latestNotifications: Notification[] = [];

  async loadData(): Promise<void>{

  }

  async ngOnInit(): Promise<void> {
    await this.loadData();
  }

  setSidenavSettings(): void{
    const width = window.innerWidth;
    if (width < 992){
      this.sidenavOpen = false;
      this.sidenaveMode = 'over';
    }else{
      this.sidenavOpen = true;
      this.sidenaveMode = 'side';
    }
  }

  private setLinkItems(): void{
    const dashboardLink = new LinkItem('Dashboard', '/', 'dashboard');
    const userLink = new LinkItem('User Management', '', 'admin_panel_settings');
    const roleLink = new LinkItem('Role Management', '', 'assignment_ind');
    const employeeLink = new LinkItem('Employee Management', '/', 'trip_origin');
    const customerLink = new LinkItem('Customer Management', '/', 'supervised_user_circle');
    const supplierLink = new LinkItem('Supplier Management', '/', 'local_shipping');
    const itemLink = new LinkItem('Item Management', '/', 'list_alt');
    const purchaseLink = new LinkItem('Purchase Management', '/', 'store');
    const saleLink = new LinkItem('Sale Management', '/', 'add_shopping_cart');
    const salaryLink = new LinkItem('Salary Management', '/', 'work');

    const showUserLink = new LinkItem('Show All Users', '/users', 'list');
    showUserLink.addUsecaseId(UsecaseList.SHOW_ALL_USERS);
    userLink.children.push(showUserLink);

    const addUserLink = new LinkItem('Add New User', '/users/add', 'add');
    addUserLink.addUsecaseId(UsecaseList.ADD_USER);
    userLink.children.push(addUserLink);

    const showRoleLink = new LinkItem('Show All Roles', '/roles', 'list');
    showRoleLink.addUsecaseId(UsecaseList.SHOW_ALL_ROLES);
    roleLink.children.push(showRoleLink);

    const addRoleLink = new LinkItem('Add New Role', '/roles/add', 'add');
    addRoleLink.addUsecaseId(UsecaseList.ADD_ROLE);
    roleLink.children.push(addRoleLink);

    const addNewEmployeeLink = new LinkItem('Add New Employee', 'employees/add', 'add');
    addNewEmployeeLink.addUsecaseId(UsecaseList.ADD_EMPLOYEE);
    employeeLink.children.push(addNewEmployeeLink);

    const showAllEmployeeLink = new LinkItem('Show All Employee', 'employees', 'list');
    showAllEmployeeLink.addUsecaseId(UsecaseList.SHOW_ALL_EMPLOYEES);
    employeeLink.children.push(showAllEmployeeLink);

    const addNewCustomerLink = new LinkItem('Add New Customer', 'customers/add', 'add');
    addNewCustomerLink.addUsecaseId(UsecaseList.ADD_CUSTOMER);
    customerLink.children.push(addNewCustomerLink);

    const showAllCustomerLink = new LinkItem('Show All Customer', 'customers', 'list');
    showAllCustomerLink.addUsecaseId(UsecaseList.SHOW_ALL_CUSTOMERS);
    customerLink.children.push(showAllCustomerLink);

    const addNewSupplierLink = new LinkItem('Add New Supplier', 'suppliers/add', 'add');
    addNewSupplierLink.addUsecaseId(UsecaseList.ADD_SUPPLIER);
    supplierLink.children.push(addNewSupplierLink);

    const showAllSupplierLink = new LinkItem('Show All Supplier', 'suppliers', 'list');
    showAllSupplierLink.addUsecaseId(UsecaseList.SHOW_ALL_SUPPLIERS);
    supplierLink.children.push(showAllSupplierLink);

    const addNewItemLink = new LinkItem('Add New Item', 'items/add', 'add');
    addNewItemLink.addUsecaseId(UsecaseList.ADD_ITEM);
    itemLink.children.push(addNewItemLink);

    const showAllItemLink = new LinkItem('Show All Item', 'items', 'list');
    showAllItemLink.addUsecaseId(UsecaseList.SHOW_ALL_ITEMS);
    itemLink.children.push(showAllItemLink);

    const addNewPurchaseLink = new LinkItem('Add New Purchase', 'purchases/add', 'add');
    addNewPurchaseLink.addUsecaseId(UsecaseList.ADD_PURCHASE);
    purchaseLink.children.push(addNewPurchaseLink);

    const showAllPurchaseLink = new LinkItem('Show All Purchase', 'purchases', 'list');
    showAllPurchaseLink.addUsecaseId(UsecaseList.SHOW_ALL_PURCHASES);
    purchaseLink.children.push(showAllPurchaseLink);

    const addNewSaleLink = new LinkItem('Add New Sale', 'sales/add', 'add');
    addNewSaleLink.addUsecaseId(UsecaseList.ADD_SALE);
    saleLink.children.push(addNewSaleLink);

    const showAllSaleLink = new LinkItem('Show All Sale', 'sales', 'list');
    showAllSaleLink.addUsecaseId(UsecaseList.SHOW_ALL_SALES);
    saleLink.children.push(showAllSaleLink);

    const addNewSalaryLink = new LinkItem('Add New Salary', 'salaries/add', 'add');
    addNewSalaryLink.addUsecaseId(UsecaseList.ADD_SALARY);
    salaryLink.children.push(addNewSalaryLink);

    const showAllSalaryLink = new LinkItem('Show All Salary', 'salaries', 'list');
    showAllSalaryLink.addUsecaseId(UsecaseList.SHOW_ALL_SALARIES);
    salaryLink.children.push(showAllSalaryLink);

    // @ts-ignore
    this.linkItems.push(dashboardLink);
    // @ts-ignore
    this.linkItems.push(userLink);
    // @ts-ignore
    this.linkItems.push(roleLink);
    // @ts-ignore
    this.linkItems.push(employeeLink);
    // @ts-ignore
    this.linkItems.push(customerLink);
    // @ts-ignore
    this.linkItems.push(supplierLink);
    // @ts-ignore
    this.linkItems.push(itemLink);
    // @ts-ignore
    this.linkItems.push(purchaseLink);
    // @ts-ignore
    this.linkItems.push(saleLink);
    // @ts-ignore
    this.linkItems.push(salaryLink);

  }

  ngOnDestroy(): void {
    this.isLive = false;
  }
}
