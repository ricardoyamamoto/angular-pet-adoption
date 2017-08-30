import { AngularPetAdoptionPage } from './app.po';

describe('angular-pet-adoption App', () => {
  let page: AngularPetAdoptionPage;

  beforeEach(() => {
    page = new AngularPetAdoptionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
