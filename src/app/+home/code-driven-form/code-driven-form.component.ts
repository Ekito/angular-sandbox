import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-code-driven-form',
    templateUrl: 'code-driven-form.component.html'
})
export class CodeDrivenFormComponent implements OnInit {

    usernameCtrl: FormControl;
    userForm: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.usernameCtrl = _fb.control('', [Validators.required]);
        this.userForm = _fb.group({
            username: this.usernameCtrl
        });
    }

    ngOnInit() {
    }

    submit(){
        alert(this.userForm.value.username);
    }
}
