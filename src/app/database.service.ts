import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {
    traditional: Observable<any[]>;
    coconut: Observable<any[]>;
    bath: Observable<any[]>;
    balms: Observable<any[]>;

    traditionalArr = [];
    coconutArr = [];
    bathArr = [];
    balmsArr = [];

    constructor(private afDB: AngularFireDatabase) {
        this.traditional = afDB.list('/traditional').valueChanges();
        this.traditional.forEach(element => {
            for (let i = 0; i < element.length; i++) {
                this.traditionalArr.push(element[i]);
            }
        });
        this.coconut = afDB.list('/coconutAndClay').valueChanges();
        this.coconut.forEach(element => {
            for (let i = 0; i < element.length; i++) {
                this.coconutArr.push(element[i]);
            }
        });
        this.bath = afDB.list('/bathAndBody').valueChanges();
        this.bath.forEach(element => {
            for (let i = 0; i < element.length; i++) {
                this.bathArr.push(element[i]);
            }
        });
        this.balms = afDB.list('/balms').valueChanges();
        this.balms.forEach(element => {
            for (let i = 0; i < element.length; i++) {
                this.balmsArr.push(element[i]);
            }
        });
    }

    getTraditional(): any[] {
        return this.traditionalArr;
    }

    getCoconut(): any[] {
        return this.coconutArr;
    }

    getBath(): any[] {
        return this.bathArr;
    }

    getBalms(): any[] {
        return this.balmsArr;
    }
}
