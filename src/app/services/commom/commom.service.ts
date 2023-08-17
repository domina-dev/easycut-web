import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CommomService {
    constructor(private http: HttpClient) {}

    healthCheck(): Observable<any> {
        return this.http
            .get(`${environment.url_api}/health-check`, { observe: 'response' })
            .pipe(take(1));
    }
}
