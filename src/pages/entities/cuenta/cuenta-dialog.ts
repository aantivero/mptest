import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { Cuenta } from './cuenta.model';
import { CuentaService } from './cuenta.provider';

@IonicPage()
@Component({
    selector: 'page-cuenta-dialog',
    templateUrl: 'cuenta-dialog.html'
})
export class CuentaDialogPage {
    //@ViewChild('fileInput') fileInput;

    isReadyToSave: boolean;

    cuenta: any;

    form: FormGroup;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            id: [''],
            nombre: ['',  Validators.required]
            cbu: ['',  Validators.required]
            aliasCbu: ['', ]
        });

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });
    }

    ionViewDidLoad() {
    }

    /**
     * The user cancelled, dismiss without sending data back.
     */
    cancel() {
        this.viewCtrl.dismiss();
    }

    /**
     * The user is done and wants to create the cuenta, so return it
     * back to the presenter.
     */
    done() {
        if (!this.form.valid) { return; }
        this.viewCtrl.dismiss(this.form.value);
    }
}
