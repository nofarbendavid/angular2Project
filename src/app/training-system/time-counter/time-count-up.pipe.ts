import { Pipe, PipeTransform } from '@angular/core';
import {calcTime} from '../../../assets/utils/time';

@Pipe({
  name: 'timeCountUp'
})
export class TimeCountUpPipe implements PipeTransform {

  transform(value: any): any {
    return calcTime(value);
  }
}
