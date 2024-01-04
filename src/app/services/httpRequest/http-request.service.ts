import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  private readonly metaParams: any = {};
  // private readonly token: String = ''; // Assurez-vous de l'initialiser correctement
  readonly API_URL = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  private processGetParams(params: any, reqOpts: any): any {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    reqOpts.params = reqOpts.params.set('reportProgress', true);

    return reqOpts;
  }

  private processPostParams(reqOpts: any): any {
    return Object.assign({}, this.metaParams, reqOpts);
  }

  get(endpoint: string, params?: any, reqOpts?: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}${endpoint}`, this.processGetParams(params, reqOpts));
  }

  getLink(endpoint: string, params?: any, reqOpts?: any): string {
    let link = `${this.API_URL}${endpoint}?format=json`;

    for (const key in params) {
      link += `&${key}=${params[key]}`;
    }
    return link;
  }

  getImage(endpoint: string): Observable<any> {
    return this.http.get(`${this.API_URL}${endpoint}`, { responseType: 'blob' })
      .pipe(
        switchMap(response => this.readFile(response))
      );
  }

  readFile(blob: Blob): Observable<string> {
    return new Observable((obs) => {
      const reader = new FileReader();

      reader.onerror = (err) => obs.error(err);
      reader.onabort = (err) => obs.error(err);
      reader.onload = () => obs.next(reader.result as string);
      reader.onloadend = () => obs.complete();

      reader.readAsDataURL(blob);
    });
  }

  setBlobToString(blob: Blob): Observable<string> {
    return this.readFile(blob);
  }

  put(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.put(`${this.API_URL}${endpoint}`, body, this.processPostParams(reqOpts));
  }

  delete(endpoint: string, params?: any): Observable<any> {
    return this.http.delete(`${this.API_URL}${endpoint}`, { params });
  }

  deletenative(endpoint: string, params?: any, reqOpts?: any): Observable<any> {
    return this.http.delete(`${this.API_URL}${endpoint}`, this.processGetParams(params, reqOpts));
  }

  uploadFile(endpoint: string, body: { file: File, key: string, name: string }, others?: { key: string, value: any }[]): Observable<any> {
    const formData: FormData = new FormData();
    formData.append(body.key, body.file, body.name);
    if (others) {
      for (const other of others) {
        formData.append(other.key, other.value);
      }
    }
    return this.post(endpoint, formData);
  }
  post(endpoint: string, formData: FormData): Observable<any> {
    throw new Error('Method not implemented.');
  }

  patch(endpoint: string, body?: any, reqOpts?: any): Observable<any> {
    return this.http.patch(`${this.API_URL}${endpoint}`, body, this.processPostParams(reqOpts));
  }
}
