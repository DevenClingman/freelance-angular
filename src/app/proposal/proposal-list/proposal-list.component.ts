import { Component } from '@angular/core';
import { Proposal } from '../proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent{
  proposalOne: Proposal = new Proposal(15, "xyz company", 'http://devenclingman.com', 'Ruby on Rails', 150, 120, 15, 'dclingy@gmail.com');

  proposalTwo: Proposal = new Proposal(16, "Yahoo", 'http://devenclingman.com', 'Ruby on Rails', 150, 120, 15, 'dclingy@gmail.com');

  proposalThree: Proposal = new Proposal(17, "Google", 'http://devenclingman.com', 'Ruby on Rails', 150, 120, 15, 'dclingy@gmail.com');

  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}
