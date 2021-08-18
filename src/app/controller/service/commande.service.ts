import { Injectable } from '@angular/core';
import {Commande} from '../model/commande.model';
import {CommandeItem} from '../model/commande-item.model';
import {HttpClient} from '@angular/common/http';
import {Paiement} from '../model/paiement.model';
import {TypePaiement} from '../model/type-paiement.model';
import {Produit} from '../model/produit.model';
import {ProduitCategorie} from '../model/produit-categorie.model';
import {Budget} from '../model/budget.model';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _commande: Commande;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _budget: Budget;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _budgets: Array<Budget>;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _commandeItem: CommandeItem;
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _paiement: Paiement;
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _typePaiement: TypePaiement;
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _produit: Produit;
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _produitCategorie: ProduitCategorie;
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _commandeItems: Array<CommandeItem>;
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _paiements: Array<Paiement>;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _typePaiements: Array<TypePaiement>;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _produitCategories: Array<ProduitCategorie>;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _produits: Array<Produit>;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _commandes: Array<Commande>;
  // tslint:disable-next-line:variable-name
  private _index: number;


  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef



/*----------------------------------save---------------------------------------------*/


  // tslint:disable-next-line:typedef
  public addCommandeItem(){

        console.log('qteCommandee =' + this.commandeItem.qteCommandee );
        console.log('prix =' + this.commandeItem.prix );
        console.log('total =' + this.commande.total );
        this.commande.total += this.commandeItem.qteCommandee * this.commandeItem.prix;
        this.commande.commandeItems.push(this.cloneCommandeItem(this.commandeItem));
        // @ts-ignore
        this.commandeItem = null;


  }

  // tslint:disable-next-line:typedef
  public addPaiement(){


        this.commande.totalPaye += this.paiement.montant;
        this.commande.paiements.push(this.clonePaiement(this.paiement));


    // @ts-ignore
        this.paiement = null;


  }



  // tslint:disable-next-line:typedef
  public save(){


    if (this.commande.id == null){
      this.commande.id = this.commandes.length + 1;
      this.commandes.push(this.cloneCommande(this.commande));
      this.budgets.push(this.cloneBudget(this.budget));
    }else{
      this.commandes[this._index] = this.cloneCommande(this.commande);
      this.budgets[this._index] = this.cloneBudget(this.budget);
    }
    // @ts-ignore
    this.commande = null;


  }



  /*----------------------------clone-------------------------------------*/
  // tslint:disable-next-line:typedef
  private cloneBudget(budget: Budget) {
    const myclone = new Budget();
    myclone.id = budget.id;
    myclone.annee = budget.annee;
    return myclone;
  }
  // tslint:disable-next-line:typedef
  private cloneCommande(commande: Commande) {
    const myclone = new Commande();
    myclone.id = commande.id;
    myclone.reference = commande.reference;
    myclone.description = commande.description;
    myclone.total = commande.total;
    myclone.totalPaye = commande.totalPaye;
    return myclone;
  }

  // tslint:disable-next-line:typedef
  private cloneCommandeItem(commandeItem: CommandeItem) {
    const myclone = new CommandeItem();
    myclone.id = commandeItem.id;
    myclone.ref = commandeItem.ref;
    myclone.prix = commandeItem.prix;
    myclone.qteCommandee = commandeItem.qteCommandee;
    myclone.produit.ref = commandeItem.produit.ref;
    myclone.produit.produitCategorie.reference = commandeItem.produit.produitCategorie.reference;
    return myclone;
  }



  // tslint:disable-next-line:typedef
  private clonePaiement(paiement: Paiement) {
    const myclone = new Paiement();
    myclone.id = paiement.id;
    myclone.reference = paiement.reference;
    myclone.montant = paiement.montant;
    myclone.datePaiement = paiement.datePaiement;
    myclone.typePaiement.ref = paiement.typePaiement.ref;
    return myclone;
  }





  /*------------------------------update-----------------------------------------------*/



  /*------------------------------getter et setter budget------------------------------------------*/

  get budget(): Budget {
    if (this._budget == null){
      this._budget = new Budget();
    }
    return this._budget;  }

  set budget(value: Budget) {
    this._budget = value;
  }

  get budgets(): Array<Budget> {
    if (this._budgets == null){
      this._budgets = new Array<Budget>();
    }
    return this._budgets;
  }

  set budgets(value: Array<Budget>) {
    this._budgets = value;
  }

  /*------------------------------getter et setter commandeItem------------------------------------------*/



  get commandeItem(): CommandeItem {
    if (this._commandeItem == null){
      this._commandeItem = new CommandeItem();
    }
    return this._commandeItem;
  }

  set commandeItem(value: CommandeItem) {
    this._commandeItem = value;
  }

  get commandeItems(): Array<CommandeItem> {
    if (this._commandeItems == null){
      this._commandeItems = new Array<CommandeItem>();
    }
    return this._commandeItems;
  }

  set commandeItems(value: Array<CommandeItem>) {
    this._commandeItems = value;
  }



  /*------------------------------getter setter commande-----------------------------------------------*/

  get commande(): Commande {
    if (this._commande == null){
      this._commande = new Commande();
    }
    return this._commande;
  }

  set commande(value: Commande) {
    this._commande = value;
  }


  get commandes(): Array<Commande> {
    if (this._commandes == null){
      this._commandes = new Array<Commande>();
    }
    return this._commandes;
  }

  set commandes(value: Array<Commande>) {
    this._commandes = value;
  }

  /*-----------------------------------getter setter paiement---------------------------------------------*/

  get paiement(): Paiement {
    if (this._paiement == null){
      this._paiement = new Paiement();
    }
    return this._paiement;
  }

  set paiement(value: Paiement) {
    this._paiement = value;
  }

  get paiements(): Array<Paiement> {
    if (this._paiements == null){
      this._paiements = new Array<Paiement>();
    }
    return this._paiements;
  }

  set paiements(value: Array<Paiement>) {
    this._paiements = value;
  }

  /*-----------------------------------getter setter TypePaiement---------------------------------------------*/

  // @ts-ignore
  get typePaiement(): TypePaiement {
    if (this._typePaiement == null){
      this._typePaiement = new TypePaiement();
    }
    return this._typePaiement;
  }

  set typePaiement(value: TypePaiement) {
    this._typePaiement = value;
  }

  get typePaiements(): Array<TypePaiement> {
    if (this._typePaiements == null){
      this._typePaiements = new Array<TypePaiement>();
    }
    return this._typePaiements;
  }

  set typePaiements(value: Array<TypePaiement>) {
    this._typePaiements = value;
  }

  /*-----------------------------------getter setter produit---------------------------------------------*/

  get produit(): Produit {
    if (this._produit == null){
      this._produit = new Produit();
    }
    return this._produit;
  }
  // @ts-ignore
  // tslint:disable-next-line:adjacent-overload-signatures
  set produit(value: Produit) {
    this._produit = value;
  }

  get produits(): Array<Produit> {
    if (this._produits == null){
      this._produits = new Array<Produit>();
    }
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }
  /*-----------------------------------getter setter Categorieproduit---------------------------------------------*/

  get produitCategorie(): ProduitCategorie {
    // @ts-ignore
    if (this._produitCategorie == null){
      // @ts-ignore

      this._produitCategorie = new ProduitCategorie();
    }
    // @ts-ignore

    return this._produitCategorie;
  }

  set produitCategorie(value: ProduitCategorie) {
    // @ts-ignore

    this._produitCategorie = value;
  }
  get produitCategories(): Array<ProduitCategorie> {
    if (this._produitCategories == null){
      this._produitCategories = new Array<ProduitCategorie>();
    }
    return this._produitCategories;
  }

  set produitCategories(value: Array<ProduitCategorie>) {
    this._produitCategories = value;
  }

/*---------------------------------getter setter index----------------------------------------*/
  get index(): number {
    return this._index;
  }

  set index(value: number) {
    this._index = value;
  }

  /*
  public save(){


    if (this.commande.id == null){
      this.commande.id = this.commandes.length + 1;
      this.commandes.push(this.cloneCommande(this.commande));
      this.budgets.push(this.cloneBudget(this.budget));
    }else{
      this.commandes[this._index] = this.cloneCommande(this.commande);
      this.budgets[this._index] = this.cloneBudget(this.budget);
    }
    // @ts-ignore
    this.commande = null;


  }
    public save(){
    this.http.post<number>('http://localhost:8036/pfe/commande/', this.commande).subscribe(
      data => {

        if (this.commande.id == null){
          this.commande.id = this.commandes.length + 1;
          this.commandes.push(this.cloneCommande(this.commande));
          this.budgets.push(this.cloneBudget(this.budget));
        }else{
          this.commandes[this._index] = this.cloneCommande(this.commande);
          this.budgets[this._index] = this.cloneBudget(this.budget);
        }
        // @ts-ignore
        this.commande = null;

      }, error => {
        console.log('error');
      }
    );
  }

   public validateSave(): boolean{
     // @ts-ignore
     return this.commande.reference != null && this.commandeItems.length > 0;

   }
    public save(){
     this.http.post<number>('http://localhost:8036/v1/stock-api/commande/', this.commande).subscribe(
       data => {

         if (this.commande.id == null){
           this.commande.id = this.commandes.length + 1;
           this.commandes.push(this.cloneCommande(this.commande));
         }else{
           this.commandes[this._index] = this.cloneCommande(this.commande);
         }
         // @ts-ignore
         this.commande = null;

       }, error => {
         console.log('error');
       }
     );
   }
   public save(){
     this.http.post<number>('http://localhost:8036/v1/stock-api/commande/', this.commande).subscribe(
       data => {
         if (data > 0){
           this.commandes.push(this.cloneCommande(this.commande));
           // @ts-ignore
           this.commande = null ;
         }

       }, error => {
         console.log('error');
       }
     );

   }



    public addCommandeItem(){
   this.http.post<number>('http://localhost:8037/pfetest2/commande-item/', this.commandeItem).subscribe(
     data => {
    console.log('qteCommandee =' + this.commandeItem.qteCommandee );
    console.log('prix =' + this.commandeItem.prix );
    console.log('total =' + this.commande.total );
    this.commande.total += this.commandeItem.qteCommandee * this.commandeItem.prix;
    this.commande.commandeItems.push(this.cloneCommandeItem(this.commandeItem));


       // @ts-ignore
    this.commandeItem = null;

     }, error => {
       console.log('error');
     }
   );
 }

  // tslint:disable-next-line:typedef
  public addPaiement(){
    this.http.post<number>('http://localhost:8037/pfetest2/paiement/', this.paiement).subscribe(
      data => {
    console.log('qte =' + this.paiement.montant );
    console.log('prix =' + this.paiement.reference );
    console.log('total =' + this.paiement.datePaiement );
    this.commande.totalPaye += this.paiement.montant;
    this.commande.paiements.push(this.clonePaiement(this.paiement));


        // @ts-ignore
    this.paiement = null;

      }, error => {
        console.log('error');
      }
    );
  }
   */


}
