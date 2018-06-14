import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@IonicPage()
@Component({
  selector: 'page-cheques',
  templateUrl: 'cheques.html',
})
export class ChequesPage {
  
  private url:string = "http://localhost:3000/cheque";
  public dados: Array<{}>;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http
  ) {
    this.http.get(this.url)
    .map(res => res.json())
    .subscribe(data => {
      this.dados = data;
    });
  }

  GoCadastro(){
    this.navCtrl.push(CadastroPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChequesPage');
  }

}
