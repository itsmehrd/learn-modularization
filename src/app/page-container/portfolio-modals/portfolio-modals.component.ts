import { Component, OnInit } from '@angular/core';
import { portfolioModals } from './portfolio-modal.constants';
import { PortfolioModal } from './portfolio-modal.interface';

@Component({
  selector: 'app-portfolio-modals',
  templateUrl: './portfolio-modals.component.html',
  styleUrls: ['./portfolio-modals.component.css'],
})
export class PortfolioModalsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  portfolioModals: PortfolioModal[] = portfolioModals
}
