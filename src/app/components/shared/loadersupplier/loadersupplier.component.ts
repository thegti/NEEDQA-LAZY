import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-loadersupplier',
  templateUrl: './loadersupplier.component.html',
  styleUrls: ['./loadersupplier.component.scss']
})
export class LoadersupplierComponent  {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  constructor(private loaderService: LoaderService){}
  isLoading: Subject<boolean> = this.loaderService.isLoading;
}