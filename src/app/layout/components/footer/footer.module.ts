import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { FooterComponent } from 'app/layout/components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
    declarations: [
        FooterComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatToolbarModule,

        FuseSharedModule,
        TranslateModule.forRoot(),
    ],
    exports     : [
        FooterComponent
    ]
})
export class FooterModule
{
}
