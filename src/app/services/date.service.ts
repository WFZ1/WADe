import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

    constructor() { }

    readDate(dd: Date): string {
        let str: string = '';

        str += (dd.getDate() < 10) ? '0' : '';
        str += dd.getDate() + '-';

        str += (dd.getMonth() < 9) ? '0' : '';
        str += dd.getMonth() + 1 + '-';

        str += dd.getFullYear() + ', ';

        str += (dd.getHours() < 10) ? '0' : '';
        str += dd.getHours() + ':';

        str += (dd.getMinutes() < 10) ? '0' : '';
        str += dd.getMinutes();

        return str;
    }
}
