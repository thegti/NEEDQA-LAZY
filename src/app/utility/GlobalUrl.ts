import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GlobalUrl {

  //   public  API_BASE_URL = 'http://202.88.227.185/NEEDQAAPI/';


  public pageSize = 20;
  public MemberImgFolder = 'Upload/Attachments/';

  ConvertDate(srDate) {
    var dd = new Date(srDate).getDate();
    var mm = new Date(srDate).getMonth() + 1;
    var yy = new Date(srDate).getFullYear();
    return (mm + '-' + dd + '-' + yy);

  }
}

