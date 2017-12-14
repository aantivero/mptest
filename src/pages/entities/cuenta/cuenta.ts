import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { Cuenta } from './cuenta.model';
import { CuentaService } from './cuenta.provider';

@IonicPage()
@Component({
    selector: 'page-cuenta',
    templateUrl: 'cuenta.html'
})
export class CuentaPage {
    cuentas: Cuenta[];

    // todo: add pagination

    constructor(private navCtrl: NavController, private cuentaService: CuentaService,
                private modalCtrl: ModalController, private toastCtrl: ToastController) {
        this.cuentas = [];
    }

    ionViewDidLoad() {
        this.loadAll();
    }

    loadAll() {
        this.cuentaService.query().subscribe(
            (response) => this.onSuccess(response),
            (error) => this.onError(error));
    }

    private onSuccess(data) {
        this.cuentas = data;
    }

    private onError(error) {
        console.error(error);
        // todo: use toaster, this.jhiAlertService.error(error.message, null, null);
    }

    trackId(index: number, item: Cuenta) {
        return item.id;
    }

    add() {
        let addModal = this.modalCtrl.create('CuentaDialogPage');
        addModal.onDidDismiss(cuenta => {
            if (cuenta) {
                this.cuentaService.create(cuenta).subscribe(data => {
                    this.cuentas.push(data);
                    let toast = this.toastCtrl.create({
                        message: 'Cuenta added successfully.',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }, (error) => console.error(error));
            }
        });
        addModal.present();
    }

    delete(cuenta) {
        this.cuentaService.delete(cuenta.id).subscribe(() => {
            let toast = this.toastCtrl.create({
                message: 'Cuenta deleted successfully.',
                duration: 3000,
                position: 'top',
            });
            toast.present();
            this.loadAll();
        }, (error) => console.error(error));
    }

    open(cuenta: Cuenta) {
        this.navCtrl.push('CuentaDetailPage', {
            cuenta: cuenta
        });
    }
}
