import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
    private userSubject: BehaviorSubject<User> = new BehaviorSubject(new User());

    public user: Observable<User> = new Observable();

    constructor(){
        this.user = this.userSubject.asObservable();
    }

    setUser(user: User){
        this.userSubject.next(user);
    }
}