import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/provider/ClientesService/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required ],
      surname: ['', Validators.required],
      address: ['', Validators.required]
   });
  }

  onSubmitForm(){
    if(this.registerForm.valid){
      this.clientesService.saveCliente(this.registerForm.value).subscribe(
        (data) => {
          this.router.navigate(['/users-table'])
          console.log(data);
        },
        (error) =>{
          console.error(error);
        }
      );
    }
  }

}
