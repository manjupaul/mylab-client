import { MylabClientPage } from './app.po';

describe('mylab-client App', () => {
  let page: MylabClientPage;

  beforeEach(() => {
    page = new MylabClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
