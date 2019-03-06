import {Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnChanges {

  @Input() user: User;
  @Output() userChange: EventEmitter<User> = new EventEmitter<User>();

  @Input() buttonText = 'submit';

  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    if (this.user) {
      this.userForm.setValue(this.user);
      console.log(this.userForm);
    }
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges && simpleChanges.user) {
      if (this.user) {
        this.userForm.get('firstName').setValue(this.user.firstName);
        this.userForm.get('lastName').setValue(this.user.lastName);
        this.userForm.get('userName').setValue(this.user.userName);
        this.userForm.get('password').setValue(this.user.password);
        console.log(this.userForm);
      }
    }
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public submitForm() {
    this.userChange.emit(this.userForm.value);
  }
}
