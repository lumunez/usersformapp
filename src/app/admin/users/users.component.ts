import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { UserService } from './user.service';
import { map,tap } from 'rxjs/operators';

import { User } from './user';
import {Item} from '../types_document_type';
import {ITEMS} from '../types_document_type_data';
import {Itemg} from '../gener_user';
import {ITEMSG} from '../gener_user_data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})


export class UsersComponent implements OnInit {
  //rest
  private protectedUrl = 'https://my-json-server.typicode.com/volkz/technical-form/users/';
  private httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  public data$: Observable<any>;
  public dataNewUser$: Observable<any>;
  public errorMessage$: string;

//form-select
  public optiopnTypeSel;
  public optionTypeDocumentSelectedString;
  public optionTypeDocumentSelecteditemsList = ITEMS;
	public optionTypeDocumentSelected = "0";

  //form-checkbox
  public generSel;
  public generSelectedString;
  public generSelecteditemsList = ITEMSG;
  public generSelected = "0";
  submitted = false;
  form;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private apiService: ApiService,
    public router: Router
  ){
    this.form = formBuilder.group({
      name: [''],
      surname: [''],
      document_type: [''],
      identification: [''],
      datedd: [''],
      datemm: [''],
      dateyyyy: [''],
      genero: [''],
      email: [''],
      reemail: [''],
      password: [''],
      repassword: ['']
    });
    //this.data = new UserData();
  }

  ngOnInit() {} // You may show error message on the template


  getSelectedOptiopnType(){
    this.optiopnTypeSel = ITEMS.find(Item => Item.value === this.optionTypeDocumentSelected);
    this.optionTypeDocumentSelectedString = JSON.stringify(this.optiopnTypeSel);
  }
  onItemTypeChange(item){
    this.getSelectedOptiopnType();
  }
  getGenerSelected(){
    this.generSel = ITEMSG.find(Itemg => Itemg.valor === this.generSelected);
    this.generSelectedString = JSON.stringify(this.generSel);
  }
  onItemGenerChange(Itemg){
    this.getGenerSelected();
  }


  validaFormCompleto() {
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    console.log(JSON.stringify(this.form.value, null, 4));
  };
  //ok

  resetform(){
    this.form.reset();
  }

  public getUserJson(){
    this.apiService.getUsuariosListado().subscribe((userdata)=>{
      console.log(userdata);
    });
  }

  public postUserJson() {
    const urlTestMaria = 'https://my-json-server.typicode.com/volkz/technical-form/users';
    const user = this.form.value;
    this.httpClient.post<any>(urlTestMaria, user).subscribe(res => {
      console.log(res);
    });
  }

  


}


//aádir valores por defecto
// this.miFormulario.setValue(this.usuario);
//suscripcion
//this.miFormulario.controls['username'].valueChanges.subscribe(data => {
//  console.log(data);});
