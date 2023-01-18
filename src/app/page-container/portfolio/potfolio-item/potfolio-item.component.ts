import { Component, Input, OnInit } from '@angular/core';
import { PortfolioModal } from '../../portfolio-modals/portfolio-modal.interface';

@Component({
  selector: 'app-potfolio-item',
  templateUrl: './potfolio-item.component.html',
  styleUrls: ['./potfolio-item.component.css'],
})
export class PotfolioItemComponent implements OnInit {
  @Input() modalData!: PortfolioModal;

  constructor() {}

  ngOnInit(): void {}
}
