import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditBioComponent } from 'src/_dialogs/dialog-edit-bio/dialog-edit-bio.component';
import { DialogEditNameComponent } from 'src/_dialogs/dialog-edit-name/dialog-edit-name.component';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {

  @Input() profileImage: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() bio: string;
  @Input() id: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public editName(): void {
    this.dialog.open(DialogEditNameComponent, {
      width: '500px',
      panelClass: 'custom-dialog',
      data: {id: this.id, fname: this.firstName, lname: this.lastName}
    });
  }

  public editBio(): void {
    console.log('edit bio');
    this.dialog.open(DialogEditBioComponent, {
      width: '500px',
      panelClass: 'custom-dialog',
      data: {id: this.id, bio: this.bio}
    });
  }

}
