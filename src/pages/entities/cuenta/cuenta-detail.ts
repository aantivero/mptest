import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Cuenta } from './cuenta.model';
import { CuentaService } from './cuenta.provider';

@IonicPage()
@Component({
    selector: 'page-cuenta-detail',
    templateUrl: 'cuenta-detail.html'
})
export class CuentaDetailPage {
    cuenta: Cuenta;

    constructor(navParams: NavParams) {
        this.cuenta = navParams.get('cuenta');
    }
}
