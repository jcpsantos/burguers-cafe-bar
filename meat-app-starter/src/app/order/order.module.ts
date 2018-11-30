import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { OrderComponent } from './order.component';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
    {path:'', component: OrderComponent}
]

@NgModule({
    declarations: [OrderComponent, OrderItensComponent, DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule{}