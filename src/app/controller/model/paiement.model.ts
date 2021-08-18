import {Commande} from './commande.model';
import {TypePaiement} from './type-paiement.model';
import {Budget} from './budget.model';

export class Paiement {
  // @ts-ignore
  public id: number ;
  // @ts-ignore
  public datePaiement: Date;
  // @ts-ignore
  public reference: string;
  // @ts-ignore
  public montant: number;
  public commande: Commande ;
  public typePaiement: TypePaiement ;
}
