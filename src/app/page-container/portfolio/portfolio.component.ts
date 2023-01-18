import { Component, OnInit } from '@angular/core';
import { portfolioModals } from '../portfolio-modals/portfolio-modal.constants';
import { PortfolioModal } from '../portfolio-modals/portfolio-modal.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  portfolioItems: PortfolioModal[] = portfolioModals;
}
