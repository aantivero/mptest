import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { CuentaDialogPage } from './cuenta-dialog';
import { CuentaService } from './cuenta.provider';

@NgModule({
    declarations: [
        CuentaDialogPage
    ],
    imports: [
        IonicPageModule.forChild(CuentaDialogPage),
        TranslateModule.forChild()
    ],
    exports: [
        CuentaDialogPage
    ],
    providers: [CuentaService]
})
export class CuentaDialogPageModule {
}
