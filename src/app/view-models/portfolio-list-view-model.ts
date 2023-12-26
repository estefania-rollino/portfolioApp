export interface IPortfolioListViewModel {
  portfolioItems: IPortfolioViewModel[];
}

export interface IPortfolioViewModel {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  webLink: string;
  imageUrl?: string;
}

