# Smart Kids Quiz

This is a browser based general knowledge quiz for kids from age 4 till 12 years old. It allows the user to select the quiz category and displays 10 random questions from pool of 30 questions. It shows and highlight the correct answer in case the user has selected the incorrect one and displays the final result both in number and as chart. The quiz target the kids who are fond of exploring and learning new things.  

The main aim of this project is to construct a visually appealing, responsive and accessible browser quiz that gives the user a modern user experience, and display how such an application can be constructed using JavaScript, HTML and CSS.

![Responsive Mockup](/assets/images/readme/mockup.png)

---

## User Stories

### First Time Visitor Goals:

* As a First Time Visitor, I want to easily understand the main purpose of the site, so I can learn more about the quiz.
* As a First Time Visitor, I want to be able to easily navigate through the website, so I can find the content.
* As a First Time Visitor, I want to see the testimonials, so I can see whether the organization is trustworthy.

### Returning VisitorGoals:

* As a Returning Visitor, I want to see various quizzes, so that I can choose and experience new information.
* As a Returning Visitor, I want to see information about different questions, so that I can experience and learn them. 

### Frequent Visitor Goals:
* As a Frequent User, I want to check whether there are any changes with available quiz category and questions, so I can make a choice which quiz to experience.

---

## Features

+ ### Home Page

    - Represents: 

        * the main idea of the website.
        * Emphasizes the strong points of the website.
        * Arouse the user interest with a strong quote.
        * Invites the user to experience the new adventure by clicking the start button.
    - Facilities the user to control the sound effects.
    - This section is responsive to all common screen sizes.

    ![Home Page](/assets/images/readme/home_page.png)

---

+ ### Quiz Category Selection Page

  - Displays the user 3 quiz options to select based on his/her interest or age category. 
  - Provides the user with 2 more buttons to go back to the home page or continue with the quiz.
  - The button has an attribute of disabled until the user has selected an option.
  - Blur the background to provide a distraction free environment for the user to engage with the quiz selection.
  - This section is responsive to all common screen sizes.
    
    ![Quiz Category Selection Page](/assets/images/readme/quiz_category_page.png)

---

+ ### Quiz Page

  - Displays 10 random questions from the selected quiz type.
  - Shows the number of questions and number of correct answered questions to the user. 
  - Shows the status of answered question by highlighling the border of selected option and correct answer.
  - Highlight the correct answer with green border and incorrect answer by red.
  - In case the user answer is incorred then displays the correct answer to the user.
  - Facilities the user with a button to go to the next question and finally to the result page.
  - The button has an attribute of disabled until the user has selected an option.
  - The background color is set to Blackcurrant which fully matches with the white fonts and provides an appealing user experience.
  - This section is responsive to all common screen sizes.

![Quiz Page](/assets/images/readme/quiz_page.png)

---

+ ### Quiz Result Page

  - This section will allow the user to see the result of quiz.
  - Shows the result in number as well as in chart.
  - Provides the user with the capability to retry the quiz or go to the home page.
  - The result page has the same background color and fonts as quiz page.
  - This section is responsive to all common screen sizes.

![Quiz Result Page](/assets/images/readme/quiz_result_page.png)

---

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) was used as the foundation of the site.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css) - was used to add the styles and layout of the site.
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) - was used to arrange items simmetrically on the pages and make them responsive.
- [Balsamiq](https://balsamiq.com/) was used to make wireframes for the website.
- [VSCode](https://code.visualstudio.com/) was used as the main tool to write and edit code.
- [Git](https://git-scm.com/) was used for the version control of the website.
- [GitHub](https://github.com/) was used to host the code of the website.

---

## Design

### Color Scheme

- White (#FFF) color is used as a main font color along with Pacific blue color in all pages. It has a high contrast with the background colors, increase readibility and provides an awesome user experience . 

![White](/assets/images/readme/white_color.png)

- Pacific Blue (#0086d2) color is used as text and background color for most part of this website. This color has an eye catching effect and almost all children like it. 

![Pacific Blue](/assets/images/readme/pacific_blue_color.png)

- Blackcurrant (#09001d) color is used as a main background color in all pages except in the home page. It is used in the home page start button as hover color as well. This color provides a pleasant user experience by creating high contrast between different elements of the pages. 

![Blackcurrant](/assets/images/readme/blackcurrant_color.png)

- Free Speech Quamarine (#009F82) color is used as border color for correct answer and burgundy (#760023) color is used as border color for incorrect answer.
- The colors (#000, #004C91, #999 and #2E496F) are used as text shadow and buttons hover.

![Free Speech Quamarine](/assets/images/readme/free_speech_quamarine_color.png)
![Burgundy](/assets/images/readme/burgundy_color.png)
![Black](/assets/images/readme/black_color.png)
![Dark Cerulean](/assets/images/readme/dark_cerulean_color.png)
![Nobel](/assets/images/readme/nobel_color.png)
![Venice Blue](/assets/images/readme/venice_blue_color.png)

--- 

### Typography

![Main Font](/assets/images/readme/primary_font.png)

- Andika Google Font is used as the main font of the website in order to increase readability of the content on the pages. This is one of the fonts special for kids. 

![Accent Font](/assets/images/readme/accent_font.png)

- Andika Google Font is used to attract viewers' attention to the website's logo and different pages' headings. It is used to make an accent on the strong points of the website, and to incentivize visitors to experience the quiz.

### Wireframes

- Wireframes is used to plan and sketch the website. 

#### Mobile devices

- [Home Page. Mobile Screen](/assets/images/readme/mobile_home_page.png)
- [Quiz Category Selection Page. Mobile Screen](/assets/images/readme/mobile_quiz_category_selection_page.png)
- [Quiz Page. Mobile Screen](/assets/images/readme/mobile_quiz_page.png)
- [Quiz Result Page. Mobile Screen](/assets/images/readme/mobile_quiz_result_page.png)


#### Tablets

- [Home Page. Tablet Screen](/assets/images/readme/tablet_home_page.png)
- [Quiz Category Selection Page. Tablet Screen](/assets/images/readme/tablet_quiz_category_selection_page.png)
- [Quiz Page. Tablet Screen](/assets/images/readme/tablet_quiz_page.png)
- [Quiz Result Page. Tablet Screen](/assets/images/readme/tablet_quiz_result_page.png)

#### Desktop

- [Home Page. Desktop Screen](/assets/images/readme/desktop_home_page.png)
- [Quiz Category Selection Page. Desktop Screen](/assets/images/readme/desktop_quiz_category_selection_page.png)
- [Quiz Page. Desktop Screen](/assets/images/readme/desktop_quiz_page.png)
- [Quiz Result Page. Desktop Screen](/assets/images/readme/desktop_quiz_result_page.png)

---

## Testing 

- This site is checked for any potential error in different browers and in different screen sizes. 
- Google chrome lighthouse is used to check and generate a comprehensive report regarding the site's performance, accessibility, best practices and SEO with taking both mobile and desktop view into consideration.

![Home Page. Lighthouse Report](/assets/images/readme/lighthouse_report_home_page.png)
![Quiz Category Selection Page. Lighthouse Report](/assets/images/readme/lighthouse_report_quiz_category_selection_page.png)
![Quiz Page. Lighthouse Report](/assets/images/readme/lighthouse_report_quiz_page.png)
![Quiz Result Page. Lighthouse Report](/assets/images/readme/lighthouse_report_quiz_result_page.png)

---

### Validator Testing 

- HTML
  - No errors were returned when passing through the official W3C Markup Validation Service.
  ![W3C validator index.html](/assets/images/readme/w3c_validator_index_html.png)

- CSS
  - No errors were found when passing through the official W3C CSS Validation Service - Jigsaw.
  ![(Jigsaw) validator](/assets/images/readme/jigsaw_validator_style_css.png)

  - JavaScript
  - No errors were found when passing through the JSHint.
  ![JSHint validator questions.js](/assets/images/readme/jshint_questions_js.png)
  ![JSHint validator script.js](/assets/images/readme/jshint_script_1_js.png)
  ![JSHint validator script.js](/assets/images/readme/jshint_script_2_js.png)
  ![JSHint validator script.js](/assets/images/readme/jshint_script_3_js.png)
![JSHint validator script.js](/assets/images/readme/jshint_script_4_js.png)

---

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the [GitHub repository](https://github.com/Ahmad-Hazrati/Smart-Kids-Quiz), navigate to the Settings tab 
  - From the source section drop-down menu, select the **Main** Branch, then click "Save".
  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://ahmad-hazrati.github.io/Smart-Kids-Quiz/)

---

## Local Deployment

In order to make a local copy of this project, you can clone it.
In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/Ahmad-Hazrati/Smart-Kids-Quiz`

--- 

## Future improvements

- 
 * 

---

## Credits 

+ #### Content

- Thanks to my Code Institute mentor Mr. Aleksei Konovalov for his guidance, insight and the constant confidence boost to help me in the right direction.

- Thanks to Slack community for general references, support and encouragement received. 

- The overall project idea and concept is taken from [Codehal Youtube Tutorial](https://www.youtube.com/watch?v=Vp8x8-reqZA&t=3296s)
- Instructions on javaScript coding of sound is taken from [DanielMaherDev](https://github.com/DanielMaherDev/answertime)
- Instructions on JavaScript coding for shuffle function to randomize the questions is taken from [Stack Overflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
- The question contents used in the project are taken from [edsys ](https://www.edsys.in/)
- The sound icons in the header are taken from [Font Awesome](https://fontawesome.com/)
- The fonts used in the site are taken from [Google Fonts](https://fonts.google.com/)

+ #### Media

- The background image used in home page is from [Freepik](https://www.freepik.com/)
- The mp3 audio files used in the project are taken from [Pixabay ](https://www.pixabay.com/)

---
