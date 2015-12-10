export default class Hello {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return 'Hello ' + this.name + '!';
  }

  static sayHelloAll() {
    return 'Hello everyone!';
  }
}