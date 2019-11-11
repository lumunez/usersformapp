import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Item} from '../types_document_type';
import {ITEMS} from '../types_document_type_data';

@Component({
  selector: 'app-frontendtest',
  templateUrl: './frontendtest.component.html',
  styles: []
})

export class FrontendtestComponent implements OnInit {

  public formGroup: FormGroup;
  title = 'UserForm ng-cli';
  angForm: FormGroup;
  optiopnTypeSel:any;
  optionTypeDocumentSelected:string;
  optionTypeDocumentSelectedString:string;
  optionTypeDocumentSelecteditemsList: Item[] = ITEMS;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit() {
    this.buildForm();
  }

  private buildForm() {

    //const dateLength = 10;
    //const today = new Date().toISOString().substring(0, dateLength);
    //const name = 'JOHN DOE';
    //const minPassLength = 4;
    this.optionTypeDocumentSelecteditemsList = ITEMS;
    this.optionTypeDocumentSelected = "0";
    this.getSelectedOptiopnType();

    this.formGroup = this.formBuilder.group({
      //registeredOn: today,
      //name: [name.toLowerCase(), Validators.required],
      //email: ['john@angular.io', [Validators.required, Validators.email]],
      //password: ['', [Validators.required, Validators.minLength(minPassLength), this.validatePassword]],
      name: ['', Validators.required ],
      surname: ['', Validators.required ],
      document_type: [''],
      identification: [''],
      datedd: [''],
      datemm: [''],
      dateyyyy: [''],
      address: [''],
      email: ['john@angular.io', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
}

getSelectedOptiopnType(){
      this.optiopnTypeSel = ITEMS.find(Item => Item.value === this.optionTypeDocumentSelected);
      this.optionTypeDocumentSelectedString = JSON.stringify(this.optiopnTypeSel);
    }

  onItemTypeChange(item){
      this.getSelectedOptiopnType();
    }

    onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.angForm.value);
  }
}
