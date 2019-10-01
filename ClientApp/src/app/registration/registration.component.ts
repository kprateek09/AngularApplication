import { Component, OnInit } from '@angular/core';
import { Schema } from '../schema';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    schema = new Schema('', '', '', '', '');

    constructor() {}

    ngOnInit() { }

    onSubmit() {
        window.alert("Your form has been submitted!");
    }
}

