import Hello from './Hello';
import HelloWorld from './HelloWorld';

class App {
    constructor(){
        var hw = new HelloWorld();
        hw.echo();
        
        alert(Hello.sayHelloAll());
    }
}

new App();