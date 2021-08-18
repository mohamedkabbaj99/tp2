import {TypePaiement} from './type-paiement.model';
import {ProduitCategorie} from './produit-categorie.model';

export class Produit {
  // @ts-ignore
  public id: number ;
  // @ts-ignore
  public ref: string;
  public produitCategorie: ProduitCategorie ;
}
