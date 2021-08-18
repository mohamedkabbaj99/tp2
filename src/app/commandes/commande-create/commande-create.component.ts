import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../../controller/service/commande.service';
import {Commande} from '../../controller/model/commande.model';
import {CommandeItem} from '../../controller/model/commande-item.model';
import {Produit} from '../../controller/model/produit.model';
import {ProduitCategorie} from '../../controller/model/produit-categorie.model';
import {Paiement} from '../../controller/model/paiement.model';
import {TypePaiement} from '../../controller/model/type-paiement.model';
import {Budget} from '../../controller/model/budget.model';



@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent implements OnInit {

  constructor(private commandeService: CommandeService) { }
  // tslint:disable-next-line:typedef
  public save(){
    return this.commandeService.save();
  }

 /*
  public validateSave(){
    return this.commandeService.validateSave();
  }*/

  // tslint:disable-next-line:typedef
  public addCommandeItem(){
   this.commandeService.addCommandeItem();
  }

  // tslint:disable-next-line:typedef
  public addPaiement(){
    this.commandeService.addPaiement();
  }

  get commande(): Commande {
    return this.commandeService.commande;
  }
  get commandeItem(): CommandeItem {
    return this.commandeService.commandeItem;
  }


  get commandes(): Array<Commande> {

    return this.commandeService.commandes;
  }

  get commandeItems(): Array<CommandeItem> {

    return this.commandeService.commandeItems;
  }
  get paiement(): Paiement {

    return this.commandeService.paiement;
  }


  get produit(): Produit {

    return this.commandeService.produit;
  }
  get produitCategorie(): ProduitCategorie {

    return this.commandeService.produitCategorie;
  }




  get budget(): Budget {

    return this.commandeService.budget;
  }
  get produits(): Array<Produit> {

    return this.commandeService.produits;
  }
  get produitCategories(): Array<ProduitCategorie> {

    return this.commandeService.produitCategories;
  }





  ngOnInit(): void {
  }

}
