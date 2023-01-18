import { PortfolioModal } from "./portfolio-modal.interface";

const dummyText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia neque assumenda ipsam nihil, molestias magnam,
                recusandae quos quis inventore quisquam velit asperiores, vitae?
                Reprehenderit soluta, eos quod consequuntur itaque. Nam.`;

export const portfolioModals: PortfolioModal[] = [
  {
    id: 'portfolioModal1',
    img: 'assets/img/portfolio/cabin.png',
    title: 'Log Cabin',
    description: dummyText,
  },
  {
    id: 'portfolioModal2',
    img: 'assets/img/portfolio/circus.png',
    title: 'Circus Tent',
    description: dummyText,
  },
  {
    id: 'portfolioModal3',
    img: 'assets/img/portfolio/game.png',
    title: 'Controller',
    description: dummyText,
  },
  {
    id: 'portfolioModal4',
    img: 'assets/img/portfolio/safe.png',
    title: 'Locked Safe',
    description: dummyText,
  },
  {
    id: 'portfolioModal5',
    img: 'assets/img/portfolio/submarine.png',
    title: 'Submarine',
    description: dummyText,
  },
  {
    id: 'portfolioModal6',
    img: 'assets/img/portfolio/cake.png',
    title: 'Log Cabin',
    description: dummyText,
  },
];
