
# Internal dependency annotation

## Description

## Examples

### Before

```ts
class Dependency {
  doSomething() {
    console.log('Doing something...');
  }
}

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
```

### After

```ts
class Dependency {
  doSomething() {
    console.log('Doing something...');
  }
}

class MainClass {
  private dependency: Dependency;

  constructor(dependency: Dependency) {
    this.dependency = dependency;
  }

  execute() {
    this.dependency.doSomething();
  }
}

const dependency = new Dependency();
const mainClass = new MainClass(dependency);
mainClass.execute();
```

