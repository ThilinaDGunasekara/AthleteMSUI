import { Injectable } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastrService: NbToastrService) { }

  config: NbToastrConfig | undefined;

  index = 1;
  
  public showAlertToast(type: NbComponentStatus,destroyByClick:boolean,duration:number,hasIcon:boolean,position:NbGlobalPosition,preventDuplicates:boolean, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: destroyByClick,
      duration: duration,
      hasIcon: hasIcon,
      position: position,
      preventDuplicates: preventDuplicates,
    };
    const titleContent = title ? ` ${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }
}
