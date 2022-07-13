import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { UserRequest } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  
  request! : UserRequest;
  requestForm: FormGroup = new FormGroup({});
  errorMessage = "";

  constructor(
    private requestService: RequestService,
    private router: Router,
    private systemService: SystemService,
  ) { }

  ngOnInit(): void {
    this.requestForm = new FormGroup(
      {
        
        description: new FormControl("",
        [Validators.required,
        Validators.maxLength(80)]),
        
        justification: new FormControl("",
          [Validators.required,
          Validators.maxLength(80)]),
       
        deliverymode: new FormControl("Pickup",
            [Validators.required,
            Validators.maxLength(20)]),

        
        userid: new FormControl(this.systemService.currentUser.id)
 

      })
  }
  onSubmit(){
    if(this.requestForm.invalid){
      return;
    }

    const newUserRequest = {
      ... this.request,
      ... this.requestForm.value
    }
    
    this.requestService.postData(newUserRequest).subscribe(
      resp => {
        this.request = resp as UserRequest;
      },

    );

  }
}



