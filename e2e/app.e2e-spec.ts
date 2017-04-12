import { AppRootPage } from './app.po';

describe('angular-cli-based-starter App', () => {
  let page: AppRootPage;

  beforeEach(() => {
    page = new AppRootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
