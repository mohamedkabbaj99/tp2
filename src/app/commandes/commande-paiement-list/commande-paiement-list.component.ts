import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../../controller/service/commande.service';
import {Commande} from '../../controller/model/commande.model';
import {CommandeItem} from '../../controller/model/commande-item.model';
import {Paiement} from '../../controller/model/paiement.model';
import {Budget} from '../../controller/model/budget.model';

@Component({
  selector: 'app-commande-paiement-list',
  templateUrl: './commande-paiement-list.component.html',
  styleUrls: ['./commande-paiement-list.component.css']
})
export class CommandePaiementListComponent implements OnInit {


  constructor(private commandeService: CommandeService) { }

  get commandes(): Array<Commande> {

    return this.commandeService.commandes;
  }

  get commandeItems(): Array<CommandeItem> {

    return this.commandeService.commandeItems;
  }

  get budgets(): Array<Budget> {
    return this.commandeService.budgets;
  }


  // tslint:disable-next-line:typedef
  public deleteC(index: number){
    // @ts-ignore
    this.commandes.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
