import { PipesExercisePage } from './app.po';

describe('pipes-exercise App', () => {
  let page: PipesExercisePage;

  beforeEach(() => {
    page = new PipesExercisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
