import { NebulaDemoPage } from './app.po';

describe('nebula-demo App', () => {
  let page: NebulaDemoPage;

  beforeEach(() => {
    page = new NebulaDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
