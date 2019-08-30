# Angular questions and answers

A public, community-driven repository of Angular questions and answers, designed for e-learning and self-assessment. 

This repository is open to community contributions. Please honor our contributions guideline (currently in progress) in order to keep the questions and answers on point.

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
  <summary><strong>Click to see correct answer</strong></summary>
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
  <summary><strong>Click to see correct answer</strong></summary>
  <p>

  #### Answer: D

  Although Angular will render HTML that honors the global project CSS ruleset, it will also bundle component styles with components, enabling a more modular design than regular stylesheets, and injecting the CSS that is needed only when components are provisioned. Such styling will be scoped to the component it belongs, unless a different view encapsulation is used.

  In order to associate CSS styles to the rendered component, we can use either of the approaches above. The right apporach will depend on the context of the component, the amount of CSS to be applied and the level of reusability we can to apply. Please note that the CSS generated like this is not inherited by any child component.

  </p>
</details>

--- 

[Back to top](#angular-questions-and-answers)

Licensed under the terms of the MIT License.