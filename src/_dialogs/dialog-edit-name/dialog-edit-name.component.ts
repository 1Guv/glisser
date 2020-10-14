import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DialogNameData } from 'src/_models/dialog-name-data.model';
import { DataService } from 'src/_services/data.service';

@Component({
  selector: 'app-dialog-edit-name',
  templateUrl: './dialog-edit-name.component.html',
  styleUrls: ['./dialog-edit-name.component.scss']
})
export class DialogEditNameComponent implements OnInit {

  public nameForm = new FormGroup({});
  public id: number;
  public firstName: string;
  public lastName: string;
  public post = {
    id: null,
    profileImageUrl: '',
    firstName: '',
    lastName: '',
    bio: ''
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogNameData,
    private dataService: DataService) {

    this.id = this.data.id;
    this.firstName = this.data.fname;
    this.lastName = this.data.lname;

    this.nameForm.addControl('nameFormDetails', new FormGroup({
      fname: new FormControl(this.firstName, [Validators.required]),
      lname: new FormControl(this.lastName, [Validators.required])
    }));

    this.nameForm.get('nameFormDetails').get('fname').valueChanges.subscribe(value => {
      this.post.firstName = value;
    });

    this.nameForm.get('nameFormDetails').get('lname').valueChanges.subscribe(value => {
      this.post.lastName = value;
    });
   }

  ngOnInit() {}

  public saveName() {
    this.post.id = +this.id;
    this.post.firstName = this.nameForm.get('nameFormDetails').get('fname').value;
    this.post.lastName = this.nameForm.get('nameFormDetails').get('lname').value;
    this.dataService.updateName(this.post);
  }

}
