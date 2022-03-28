# Contributing to this project

We accept submissions and support in many different ways, but contributing with questions and answer sets including an explanation of the rationale behind the right answer is the preferred way for contribution.

Please proceed to the *Submission How-To* below to learn more about the different ways you can contribute with your questions and answers.

## <a name="submission-howto"></a> Submission How-To
Perhaps you're a seasoned Angular developer, or perhaps you're just taking the first dive into the framework. For what is worth, and as part of your Angular discovery process, you have probably stumbled upon relevant questions about how to formulate a specific functionality with Angular. After figuring out some answers you ended up discovering the right way to achieve somethng according to the Angular API and perhaps dug up some extra information that allowed you to better understand the logic behind such functionality. 

In summary, we expect your submissions to feature exactly that information: a question, a set of possible answer choices (pointing out the right one) and an further explanation of answer provided.

The general rule of thumb here is that questions should not be too long to formulate, can be accompanied by code snippets if necessary. Answers can feature both text and code and should be no less than 3 and no more than 4.

### Submitting an updated Q&A (or several) within the README
The README file is the central point of content for this entire repo and the main focus of contribution. We accept submissions and support in many different ways, but contributing with questions and answer sets including an explanation of the rationale behind the right answer is the preferred way of contribution.

In order to ensure that the blocks submitted by the community are consistent, we kindly ask our contributors to stick to Markdown syntax and observe the following template in their submissions to the README file. Please note that the template combines both Markdown and HTML code. DO NOT repurpose the template in your submissions. Otherwise your contribution will most likely be turned down.

```markdown
#### [Number] - [Question]

[code snippet wrapped by ```javascript|css|html markdown code delimiters]

##### Possible answers:

- A: [Answer 1...]
- B: [Answer 2...]
- C: [Answer 3...]
- D: [Answer 4...]

<details>
  <summary><strong>Click to see the answer</strong></summary>
  <p>
    #### Answer: [Letter for the answer]

    [Attach a detailed explanation of the answer]
  </p>
</details>

--- 
```

In the snippet above please replace the text wrapped by brackets (`[]`) by your Q&A content. Also please remember to assign a correlative number to your question.

### Submitting an updated JSON file
Along with your contributions to the main README file in the form of answers and questions, we'd appreciate when contributors also attach their content to the main JSON file (`en-gb.json`) made availaible in the `/data` folder. The purpose of this file is to leverage the content provided to implement additional projects such as self-assessment, e-learning tools.

We have put together an opinionated JSON schema to ensure consistency across all Q&A's provided. When submitting your contributions in JSON format, please observe the following schema upon adding your content at the bottom of the already existing JSON file:

```json
[
  ... previous JSON items
  {
    "question": "Your question abstract. Markdown code accepted",
    "questionCode": "```javascript  Snippet wrapped by Markdown code markers and code type prefix for formatting purposes. Use \n escape delimiters for line breaks  ```",
    "options": [
      "Answer choice 1",
      "Answer choice 1",
      "Answer choice 1",
      "Answer choice 1"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Detailed description of the rationale behind the answer. Markdown code is honored",
    "tags": ["tag 1", "tag 2"],
    "difficultyLevel": 0
  }
]
```

We would appreciate an extra effort from our contributors by adding some metadata on the Q&A blocks submitted so we can better categorize content in the future. Please note that the JSON snippet above features two extra properties, namely `tags` and `difficultyLevel`. The former aims to include tags that will allow to better categorize and/or filter questions in whatever tools might eventually consume this data, while the latter informs of the difficulty level of each question, so question sets can be eventually filtered to better match the experience level we might want to target.

Please kindly find below the tag set standardized for this project and the difficulty levels set for the current dataset:

#### Tags

- `components`
- `templates`
- `styles`
- `router`
- `forms`
- `services`
- `modules`
- `dependency injection`
- `change detection`
- `cli`
- `animation`
- `http`
- `pipes`
- `pirectives`

#### Difficulty Level

- 0: Easy
- 1: Medium
- 2: Hard
- 3: Expert


### Submitting an unanswered question

Perhaps you might not have an actual answered question to contribute with to this project, but that does not mean you cannot share your own questions here. Ultimately, Q&A's are the by-product of questionning ourselves about our daily practice with Angular.

Therefore, feel free to post your questions by [submitting an issue](https://github.com/sirius-tiger-team/angular-questions-and-answers/issues) to our [GitHub Repository][github]. Either the project curators or any other contributor will gladly answer it, hence turning the information provided into a Q&A added to our repository after [submitting a Pull Request](https://github.com/sirius-tiger-team/angular-questions-and-answers/pulls).

## <a name="typos"></a> Found a Typo?
If you find a typo in the source code, you can help us by
[submitting an issue](https://github.com/sirius-tiger-team/angular-questions-and-answers/issues) to our [GitHub Repository][github]. Even better, you can
[submit a Pull Request](https://github.com/sirius-tiger-team/angular-questions-and-answers/pulls) with a fix.
