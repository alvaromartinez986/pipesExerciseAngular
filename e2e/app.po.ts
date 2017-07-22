import { browser, by, element } from 'protractor';

<<<<<<< HEAD
export class PipesExercisePage {
=======
export class PipesPage {
>>>>>>> 8338efbe87d0ac9c05e9c26b0f53d0bd79cf16d2
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
