# Angular questions and answers

A public, community-driven repository of Angular questions and answers, designed for e-learning and self-assessment. 

This repository is open to community contributions. Please honor our contributions guideline (currently in progress) in order to keep the questions and answers on point.

---
<!-- Place your questions and aswers in this placeholder - Follow the example provided -->
#### 1. How would you bind a the value of the `name` property into the component template?
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
- C: `My name is [name]`
- D: `My name is {{name}}`

<details>
  <summary><strong>Click to see correct answer</strong></summary>
  <p>

  #### Answer: D

  In order to bind a dynamic value into a template we use the `{{ value }}` syntax, where `property` can be the name of a public property of the component class, or the return of a function or component method (being the latter discouraged for methods implementing too much logic due to performance reasons). Angular implements by means of its template engine and its change detection machinery all the logic required to _inject_ the values represented by these properties in a process known as _interpolation_.

  </p>
</details>
---

[Back to top](#angular-questions-and-answers)

Licensed under the terms of the MIT License.