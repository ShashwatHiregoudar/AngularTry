import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'former',
    templateUrl: './formverifier.component.html'
})
export class FormverifierComponent {
    Uid: string;
    Pwd: string;
    right = '';
    constructor() {
        this.Uid = 'Username';
        this.Pwd = 'Password';
    }
    verify() {
        if ((this.Uid === 'admin') && (this.Pwd === '1234')) {
            this.right = 'right';
        }
    }
}
