import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class SharedService {
    private sharedService = new BehaviorSubject<any>(false);
    service = this.sharedService.asObservable();
    constructor(){

    }
    update(data:any){
        this.sharedService.next(data);
    }
}