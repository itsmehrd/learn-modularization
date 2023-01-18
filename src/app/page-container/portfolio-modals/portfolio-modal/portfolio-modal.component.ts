import { Component, Input, OnInit } from '@angular/core';
import { PortfolioModal } from '../portfolio-modal.interface';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.css'],
})
export class PortfolioModalComponent implements OnInit {
  @Input() modalData!: PortfolioModal;

  constructor() {}

  ngOnInit(): void {}
}
