import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AppService implements OnInit{

  apiRoot = 'http://localhost:8080/';
  clientRoot = 'http://localhost:4401/';

  headers: any;
  options: any;
  timeInterval = 1000 * 30;
  user: any;
  domainAPI = '';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: Http,
    //private language: AppLanguage,
    private location: Location,
    private router: Router
  ) {
    this.domainAPI = this.apiRoot;
        var startIdx = this.domainAPI.indexOf("//");

        var protocolSocket = "ws:";
        if (this.domainAPI.indexOf("https://") == 0) {
            protocolSocket = "wss:";
        }

        this.domainAPI = protocolSocket + this.domainAPI.substring(startIdx);
  }

  createHeaders() {
      const token = localStorage.getItem('token');
      this.headers = new Headers();
      // tslint:disable-next-line:max-line-length
      this.headers.set('Content-Type', 'application/json');
      this.headers.set('Authorization', `Bearer ${token}`);
      //this.headers.set('Accept-Language', this.language.get());
  }

  // async doGET(methodUrl: any, params: any) {
  //     this.createHeaders();
  //     const apiURL = `${this.apiRoot}${methodUrl}`;
  //     try {
  //         const data = await this.http.get(apiURL, { headers: this.headers, params })
  //             .toPromise()
  //             .then(res => res.json(), err => {
  //                 if (err.statusText === 'Unauthorized') {
  //                     //this.appSwal.showWarning(this.language.translate.instant('MsgUnauthorized'), false);
  //                     this.router.navigate([AppConsts.page.login]);
  //                 }
  //                 return null;
  //             });
  //         return data;
  //     } catch (e) {
  //         console.log(e);
  //         return null;
  //     }
  // }

  // async doPOST(methodUrl: any, dataRequest: any) {
  //     this.createHeaders();
  //     const apiURL = `${this.apiRoot}${methodUrl}`;
  //     try {
  //         const data = await this.http.post(apiURL, dataRequest, { headers: this.headers })
  //             .toPromise()
  //             .then(res => res.json(), err => console.log(err));
  //         return data;
  //     } catch (e) {
  //         console.log(e);
  //         return null;
  //     }
  // }

  // async doPOSTOPTION(methodUrl: any, dataRequest: any, options: any) {
  //     const apiURL = `${this.apiRoot}${methodUrl}`;
  //     try {
  //         const data = await this.http.post(apiURL, dataRequest, options)
  //             .toPromise()
  //             .then(res => res.json(), err => err.json());
  //         return data;
  //     } catch (e) {
  //         console.log(e);
  //         return null;
  //     }
  // }

  // async doPUT(methodUrl: any, dataRequest: any, params: any) {
  //     this.createHeaders();
  //     const apiURL = `${this.apiRoot}${methodUrl}`;
  //     try {
  //         const data = await this.http.put(apiURL, dataRequest, { headers: this.headers, params })
  //             .toPromise()
  //             .then(res => res.json(), err => console.log(err));
  //         return data;
  //     } catch (e) {
  //         console.log(e);
  //         return null;
  //     }
  // }

  // async doDELETE(methodUrl: any, params: any) {
  //     this.createHeaders();
  //     const apiURL = `${this.apiRoot}${methodUrl}`;
  //     try {
  //         const data = await this.http.delete(apiURL, { headers: this.headers, params })
  //             .toPromise()
  //             .then(res => res.json(), err => console.log(err));
  //         return data;
  //     } catch (e) {
  //         console.log(e);
  //         return null;
  //     }
  // }

  // async doDownload(methodUrl: any, params: any) {
  //     this.createHeaders();
  //     const apiURL = `${this.apiRoot}${methodUrl}`;
  //     try {
  //         const data = await this.http.get(apiURL, { headers: this.headers, params, responseType: ResponseContentType.Blob })
  //             .toPromise()
  //             .then(res => res.json(), err => {
  //                 if (err.statusText === 'Unauthorized') {
  //                     this.router.navigate([AppConsts.page.login]);
  //                 }
  //                 return null;
  //             });
  //         return data;
  //     } catch (e) {
  //         console.log(e);
  //         return null;
  //     }
  // }

  encodeParams(params: any): string {

      let body = '';
      for (const param in params) {
          if (body.length) {
              body += '&';
          }
          body = `${body}${param}=`;
          body = `${body}${encodeURIComponent(params[param])}`;
      }

      return body;
  }
  
  

}
