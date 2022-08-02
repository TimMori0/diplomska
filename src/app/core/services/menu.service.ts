import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
    private menuSubject: BehaviorSubject<string> = new BehaviorSubject("");

    public menu: Observable<string> = new Observable();

    constructor(){
        this.init();
    }

    init(){
        this.menu = this.menuSubject.asObservable();
        this.menuSubject.next("applications")
    }

    setMenuPage(page: string){
        this.menuSubject.next(page);
    }
}