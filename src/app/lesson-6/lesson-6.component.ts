import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lesson-6',
  standalone: true,
  imports: [],
  templateUrl: './lesson-6.component.html',
  styleUrl: './lesson-6.component.css'
})
export class Lesson6Component {
  userName:string ="";
  formOrder =new FormGroup(
    {
      
      orderName : new FormControl('',Validators.required),
      adrress: new FormControl(''),
      city:new FormControl()
   
   
    }
  )

}
