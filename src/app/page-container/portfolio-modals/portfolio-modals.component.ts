import { Component, OnInit } from '@angular/core';
import { PortfolioModal } from './portfolio-modal.interface';

@Component({
  selector: 'app-portfolio-modals',
  templateUrl: './portfolio-modals.component.html',
  styleUrls: ['./portfolio-modals.component.css'],
})
export class PortfolioModalsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dummyText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia neque assumenda ipsam nihil, molestias magnam,
                recusandae quos quis inventore quisquam velit asperiores, vitae?
                Reprehenderit soluta, eos quod consequuntur itaque. Nam.`;

  portfolioModals: PortfolioModal[] = [
    {
      id: 'portfolioModal1',
      img: 'assets/img/portfolio/cabin.png',
      title: 'Log Cabin',
      description: this.dummyText,
    },
    {
      id: 'portfolioModal2',
      img: 'assets/img/portfolio/circus.png',
      title: 'Circus Tent',
      description: this.dummyText,
    },
    {
      id: 'portfolioModal3',
      img: 'assets/img/portfolio/game.png',
      title: 'Controller',
      description: this.dummyText,
    },
    {
      id: 'portfolioModal4',
      img: 'assets/img/portfolio/safe.png',
      title: 'Locked Safe',
      description: this.dummyText,
    },
    {
      id: 'portfolioModal5',
      img: 'assets/img/portfolio/submarine.png',
      title: 'Submarine',
      description: this.dummyText,
    },
    {
      id: 'portfolioModal6',
      img: 'assets/img/portfolio/cake.png',
      title: 'Log Cabin',
      description: this.dummyText,
    },
  ];
}
