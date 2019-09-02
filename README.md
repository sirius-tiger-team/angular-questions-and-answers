# Angular questions and answers

A public, community-driven repository of Angular questions and answers, designed for e-learning and self-assessment. 

This repository is open to community contributions. Please observe our [contributions guideline](CONTRIBUTING.md) in order to keep the questions and answers on point.

You can fetch a localized version of these questions in raw JSON format from the `data` folder.

---
#### 1. How would you bind the value of the `name` property into the component template?
```javascript
@Component({
  selector: 'my-component',
  template: `My name is ...`,
})
export class MyComponent  { 
  name: string;
}
```
##### Possible answers:

- A: `My name is {name}`
- B: `My name is {{this.name}}`
- C: `My name is {{name}}`
- D: `My name is <%=name%>`

<details>
  <summary><strong>Click to see the answer</strong></summary>
  <p>

  #### Answer: C

  In order to bind a dynamic value into a template we use the `{{ value }}` syntax, where `property` can be the name of a public property of the component class, or the return of a function or component method (being the latter discouraged for methods implementing too much logic due to performance reasons). Angular implements by means of its template engine and its change detection machinery all the logic required to _inject_ the values represented by these properties in a process known as _interpolation_.

  </p>
</details>

---

#### 2. How can we apply the following styling to the generated HTML of a given component template?

```css
p { 
  color: blue;
  font-weight: bold;
}
```

##### Possible answers:

- A: By saving those styles into a CSS file and add its path to the array assigned to the `styleUrls` property of the component decorator.
- B: By adding those styles to the strings array in to the `styles` property of the component decorator.
- C: By adding those styles to the component HTML template, wrapped by `<style></style>` tags.
- D: All the above are correct.

<details>
  <summary><strong>Click to see the answer</strong></summary>
  <p>

  #### Answer: D

  Although Angular will render HTML that honors the global project CSS ruleset, it will also bundle component styles with components, enabling a more modular design than regular stylesheets, and injecting the CSS that is needed only when components are provisioned. Such styling will be scoped to the component it belongs, unless a different view encapsulation is used.

  In order to associate CSS styles to the rendered component, we can use either of the approaches above. The right apporach will depend on the context of the component, the amount of CSS to be applied and the level of reusability we can to apply. Please note that the CSS generated like this is not inherited by any child component.

  </p>
</details>

--- 
#### 5. How would you create a two-way data binding property in a component?
```html
  <app-my-component [(add)]="myAdd"></app-my-component>
```
##### Possible answers:

- A: By using the `@IO` decorator in a property `add`.
- B: By naming input property and output events with the same name: `add`.
- C: By naming the input property as `add` and the output event as `addChange`.
- D: All the above are correct.

<details>
  <summary><strong>Click to see the answer</strong></summary>
  <p>

  #### Answer: C

  Angular has this syntatic sugar when we has a property `x` and a corresponding event named `xChange`. Angular desugars the binding into 
  `<app-my-component [add]="myAdd" (addChange)="myAdd=$event"></app-my-component>`.

  </p>
</details>

---

#### 3. What will happen if you run the following CLI command in the shell of an Angular workspace?

```bash
$ ng g c Foo -c=Default
```

##### Possible answers:

- A: It builds the Angular application and serves it with the default settings from `http://foo:4200/`.
- B: It creates a new component named `FooComponent` with the default setup for change detection.
- C: It generates a new application named `Foo` where the main entry component is `Default`.
- D: The command will throw an error in the console: `ng g c -c` are made up script params.

<details>
  <summary><strong>Click to see the answer</strong></summary>
  <p>

  #### Answer: B

  The syntax above depicts the shorthand version of:
  
  ```bash
  $ ng generate component Foo --changeDetection=Default
  ````

  This command will create a new component named `FooComponent` within the `./foo` folder with the Change Detection startegy set to Default.

  In practice, all the main CLI commands and most of the modifier parameters are extended with shorthand versions.

  </p>
</details>

--- 

#### 4. What is the purpose of the `deps` array property in the following code snippet?

```typescript
@NgModule({
  providers: [{
    provide: MusicService,
    useFactory: myMusicServiceFactory,
    deps: [CountryMusicLibrary]
  }]
})
export class MusicModule {
  // etc..
}
```

##### Possible answers:

- A: It injects an instance of `MusicService` in the providers pool of `MusicModule`. Such instance is returned by the `myMusicServiceFactory()` factory function, which is executed passing an instance of the `CountryMusicLibrary` class as the function parameter.
- B: It sets `CountryMusicLibrary` as the default implementation for the `MusicService` token, which also requires `myMusicServiceFactory` as a dependency altogether.
- C: From that moment on, any component or service injecting `CountryMusicLibrary` will get an instance of `MusicService` instead, executing `myMusicServiceFactory()` as a callback on every injection.

<details>
  <summary><strong>Click to see the answer</strong></summary>
  <p>

  #### Answer: A

  The snippet above configures the dependency injection machinery to execute the `myMusicServiceFactory()` factory function in order to retrieve the singleton required to implement `MusicService` in the context of the dependency injector for `MusicModule`. However, that function will expect a parameter typed as `CountryMusicLibrary` upon execution. An implementation example could operate as follows:

  ```typescript
  const myMusicServiceFactory = (library: CountryMusicLibrary): MusicService => {
    return new StyledMusicService(library);
  };
  ```

  </p>
</details>

--- 

[Back to top](#angular-questions-and-answers)

Licensed under the terms of the MIT License.