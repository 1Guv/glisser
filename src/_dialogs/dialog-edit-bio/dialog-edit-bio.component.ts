import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DialogBioData } from 'src/_models/dialog-bio-data.model';
import { DataService } from 'src/_services/data.service';

@Component({
  selector: 'app-dialog-edit-bio',
  templateUrl: './dialog-edit-bio.component.html',
  styleUrls: ['./dialog-edit-bio.component.scss']
})
export class DialogEditBioComponent implements OnInit {

  public bioForm = new FormGroup({});
  public bio: string;
  public id: number;
  public post = {
    id: null,
    profileImageUrl: '',
    firstName: '',
    lastName: '',
    bio: ''
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogBioData,
    private dataService: DataService) {

    this.bio = this.data.bio;
    this.id = this.data.id;

    this.bioForm.addControl('bioFormDetails', new FormGroup({
      bio: new FormControl(this.bio, [Validators.required]),
    }));
   }

  ngOnInit() {
  }

  public saveBio() {
    this.post.id = +this.id;
    this.post.bio = this.bioForm.get('bioFormDetails').get('bio').value;
    this.dataService.updateBio(this.post);
  }

}
