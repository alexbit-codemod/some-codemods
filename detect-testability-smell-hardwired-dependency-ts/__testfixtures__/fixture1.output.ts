class Dependency {
  doSomething() {
    console.log('Doing something...');
  }
}

/* This class creates instances of its dependencies internally*/
class MainClass {
  private dependency: Dependency;

  constructor() {
    this.dependency = new Dependency();
  }

  execute() {
    this.dependency.doSomething();
  }
}

const mainClass = new MainClass();
mainClass.execute();