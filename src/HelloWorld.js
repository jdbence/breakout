import Hello from './Hello';

export default class HelloWorld extends Hello {
  constructor() {
    super('World');
  }

  echo() {
    alert(super.hello());
  }
}