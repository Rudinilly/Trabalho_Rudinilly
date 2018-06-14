import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ChequesPage } from './../cheques/cheques';
import { HomePage } from '../home/home';

import "rxjs/add/operator/map";
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  rootPage: any = HomePage;

  private urlc:string = "http://localhost:3000/cheque";

  private urlb:string = "http://localhost:3000/boleto";
  public contas = { 
		tipo: "",  
		pagamento:""  ,    
		valor:""
  };
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public http: Http,
     public toastCtrl: ToastController) {
  }

  Contas(contas){
    let headers = new Headers();
    headers.append('Content-type','application/json');

    let options = new RequestOptions({ headers: headers });
if(contas.tipo=="Cheque"){
    this.http.post(this.urlc, contas, options)
             .map(res => res.json())
             .subscribe(data => {
              const toast = this.toastCtrl.create({
                message: 'Cheque cadastrado com Sucesso!',
                showCloseButton: true,
                closeButtonText: 'Ok'
              });
              toast.present();
              this.navCtrl.setRoot(this.rootPage);
            });

            contas.tipo="";  
            contas.pagamento="" ;    
            contas.valor="";
          }
          if(contas.tipo=="Boleto"){
            this.http.post(this.urlb, contas, options)
                    .map(res => res.json())
                    .subscribe(data => {
                      const toast = this.toastCtrl.create({
                        message: 'Boleto cadastrado com Sucesso!',
                        showCloseButton: true,
                        closeButtonText: 'Ok'
                      });
                      toast.present();
                      this.navCtrl.setRoot(this.rootPage);
                    });
        
                    contas.tipo="";  
                    contas.pagamento="" ;    
                    contas.valor="";
                  }
            

  }
  openPage() {
    this.navCtrl.setRoot(this.rootPage);
  }

}
