import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-loaderenquiry',
  templateUrl: './loaderenquiry.component.html',
  styleUrls: ['./loaderenquiry.component.scss']
})
export class LoaderenquiryComponent  {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  constructor(private loaderService: LoaderService){}
  isLoading: Subject<boolean> = this.loaderService.isLoading;
}