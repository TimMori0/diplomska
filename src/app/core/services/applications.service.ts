import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Application } from '../models/application.model';

@Injectable({ providedIn: 'root' })
export class ApplicationsService {
    private applicationsSubject: BehaviorSubject<Array<Application>> = new BehaviorSubject(new Array<Application>());

    public applications: Observable<Array<Application>> = new Observable();

    constructor(){
        this.init();
    }

    init(){
        this.applications = this.applicationsSubject.asObservable();
        this.getApplications();
    }

    getApplications(){
        console.log("Get Applications");

        const tmp = JSON.parse(localStorage.getItem('applications') || '{}');
        this.applicationsSubject.next(tmp);
    }
}