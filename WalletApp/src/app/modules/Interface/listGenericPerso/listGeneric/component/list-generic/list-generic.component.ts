import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";



class genericForm {
  constructor(param: { firstname: FormControl<string | null>; lastname: FormControl<string | null>; status: FormControl<string | null> }) {

  }

}

@Component({
  selector: 'app-list-generic',
  templateUrl: './list-generic.component.html',
  styleUrls: ['./list-generic.component.scss']
})
export class ListGenericComponent implements OnInit {



  useGenericForm: genericForm | undefined;


  constructor(public formsRef: MatDialogRef<ListGenericComponent>, @Inject(MAT_DIALOG_DATA) public datatable: string) {
  }

  ngOnInit(): void {

    this.useGenericForm = new genericForm ({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    })
  }
  onCancel(){
      this.formsRef.close()
    }
}

