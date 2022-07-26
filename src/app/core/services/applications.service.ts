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

    addApplication(application: Application){
        var tmp: Array<Application> = new Array<Application>();
        this.applications.subscribe((result: Array<Application>) => {
            tmp = result;
        });

        tmp.push(application);
        this.applicationsSubject.next(tmp);
        localStorage.setItem('applications', JSON.stringify(tmp));
    }

    saveApplications(applications: Array<Application>){
        localStorage.setItem('applications', JSON.stringify(applications));
    }

    updateApplication(application: Application){
        var tmp: Array<Application> = new Array<Application>();
        this.applications.subscribe((result: Array<Application>) => {
            tmp = result;
        });

        tmp.forEach((app) => {
            if(app.id == application.id){
                app.vehicle = application.vehicle;
                app.discount = application.discount;
                app.price = application.price;
            }
        });
        this.applicationsSubject.next(tmp);
        localStorage.setItem('applications', JSON.stringify(tmp));
    }
}