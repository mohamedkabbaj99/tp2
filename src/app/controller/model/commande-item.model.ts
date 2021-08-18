import {Commande} from './commande.model';
import {Produit} from './produit.model';
import {Budget} from './budget.model';

export class CommandeItem {
  // @ts-ignore
  public id: number ;
  // @ts-ignore
  public ref: string ;
  // @ts-ignore
  public prix: number ;
  // @ts-ignore
  public qteCommandee: number ;
  // @ts-ignore
  public qteLivree: number ;
  public commande: Commande ;
  public produit: Produit ;

}
