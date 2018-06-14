import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

import { Http } from '@angular/http';
import "rxjs/add/operator/map";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private urlb:string = "http://localhost:3000/boleto";
  public dadosb: Array<{}>;
  public totalb:number = 0;

  private urlc:string = "http://localhost:3000/cheque";
  public dadosc: Array<{}>;
  public totalc:number = 0;

  public total:number = 0;
  constructor(
    public navCtrl: NavController,
    public http: Http
  ) {
    this.http.get(this.urlb)
    .map(res => res.json())
    .subscribe(datab => {
      this.dadosb = datab;
    });
    this.http.get(this.urlb)
    .map(res => res.json())
    .subscribe(boleto => {
     this.totalb = boleto.length;
     this.total += this.totalb;
    });

    
    this.http.get(this.urlc)
    .map(res => res.json())
    .subscribe(datac => {
      this.dadosc = datac;

    });
    this.http.get(this.urlc)
    .map(res => res.json())
    .subscribe(cheque => {
     this.totalc = cheque.length;
     this.total += this.totalc;
    });


  }

  GoCadastro(){
    this.navCtrl.push(CadastroPage);
  }
}
