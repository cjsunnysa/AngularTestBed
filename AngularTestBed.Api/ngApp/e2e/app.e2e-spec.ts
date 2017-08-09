import { TestbedAppPage } from './app.po';

describe('testbed-app App', () => {
  let page: TestbedAppPage;

  beforeEach(() => {
    page = new TestbedAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
