<<<<<<< HEAD
import { PipesExercisePage } from './app.po';

describe('pipes-exercise App', () => {
  let page: PipesExercisePage;

  beforeEach(() => {
    page = new PipesExercisePage();
=======
import { PipesPage } from './app.po';

describe('pipes App', () => {
  let page: PipesPage;

  beforeEach(() => {
    page = new PipesPage();
>>>>>>> 8338efbe87d0ac9c05e9c26b0f53d0bd79cf16d2
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
