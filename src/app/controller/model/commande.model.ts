import {CommandeItem} from './commande-item.model';
import {Paiement} from './paiement.model';
import {Budget} from './budget.model';

export class Commande {
  // @ts-ignore
  public id: number ;
// @ts-ignore
  public reference: string ;
// @ts-ignore
  public description: string ;
// @ts-ignore
  public total: number ;
// @ts-ignore
  public totalPaye: number ;
  public budget: Budget;
  public commandeItems = new Array<CommandeItem>();
  public paiements = new Array<Paiement>();


  constructor() {
    this.total = 0;
    this.totalPaye = 0;
  }
}
