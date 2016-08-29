# _Untranslatables_

#### EPICODUS TEAM WEEK PROJECT

_This is an Epicodus [http://www.epicodus.com/] student group project_

#### By _**Maarja Laineste, Caleb Stokka, Sky Rousse, Noah Yasskin**_

## Description

Untranslatable Words - An entertaining and edifying web app that aesthetically presents words or phrases that are impossible to translate.

The Book of Life explains the therapeutic value of untranslatable Words:
Untranslatable Words
http://www.thebookoflife.org/untranslatable-words/
There are lots of moods, needs and feelings that our own language has not yet properly pinned down. The perfect word – even if it comes from abroad – can help us to explain ourselves to other people – and its existence quietly reassures us (and everyone else) that a state of mind is not really rare, just rarely spoken of. The right word brings dignity to our troubles, and helps us identify more accurately what we really like or find annoying.

Untranslatables will enrich your vocabulary, open your eyes, and expand your mind.

*Front-End Tasks*

|Task | Complete |
| ------------- |:-------------:|
| Dozen definitions| -- |
| Images w/word| -- |
| Layout| -- |
| Navigation| -- |

*Back-End Tasks*

| Task | Complete |
| ------------- |:-------------:|
| Angular2 setup| -- |
| CRUD/L for admin| -- |
| L + (R) for user| -- |
| One table database(Mongo DB)| -- |

*Requirement*: Participation in creating and presenting a project, and collaborating effectively with teammates.

| Component        | Action           | Parent  |
| ------------- |:-------------:| -----:|
| AppComponent      | holds data | -- |
| *Component      | List | AppComponent |
| *Component      | New | AppComponent |
| *Component      | Edit | AppComponent |

*Database*

| Table     | Row       | Value  |
| ----- |:-----------:| -----:|
| words | name| string |
|       | definition | string |
|       | language | string |
|       | category | string |
|       | partOfSpeech | string  |
|       | sentence | string |
|       | color | string |
|       | link | string |
|       | font | string |
|       | image | string |



## User Stories

MVP Minimum Viable Product

The MVP for Untranslatables should include:

* _At least a dozen untranslatable Words_
* _A definition of each word with its country of origin_
* _A complementary image to accompany each word_
* _An easy way to scroll through or view_
* _An admin section that is hidden to site users that allows the admin to create, update, and destroy words and images_
* _A way to sort words_


App User
* _As a user of the app:_
* _I want to be entertained in an edifying way_
* _I want to  be able to easily view several untranslatable words with a definition of each word_
* _I want to be able to see at least one image that complements each word_
* _I want to be able to view the App on a PC, laptop, phone or tablet_
* _I want to be able to add words to a favorite list_


* _As a site administrator:_
* _I want to see a sorted list of all untranslatable words and click on any individual word to go to a detail page for that word_
* _I want to be able to create, update, and destroy individual words and images_
* _I do not want site visitors to be able to easily find the Admin section of the App (a password sign in for Admin)_

Further Explorations

* _Include tags for words (like humorous, dark, people or nature) that users can sort by_
* _Site visitors should be able to share an untranslatable on Facebook, Twitter other social media sites or Email or Print it_
* _Include categories (like language) that are sortable_
* _Include phonetic spelling/pronunciation guide for each word_
* _Include a poetic sentence for each word_
* _Allow users to recommend additional words and/or make comments_
* _Users should be able to access the App live on the internet_
* _The definitions of each word contain descriptions that help us see the world with fresh eyes._
* _Create a game where users guess a word based on a definition_
* _Create a memory game where users try to match two images/definitions_
* _Allow users to sign up for a regular email with a new word sent to their inbox_
* _Add country flag to each word_
* _Link to additional information for each word_
* _Create a splash page_
* _Create a color picker for word tiles on the admin page_
* _Allow users to click on a word and see an image (or an additional image)_


## Setup/Installation Requirements

1. Clone the repository from GitHub_
```
$Git clone https://github.com/yasskin/untranslatables.git
```
2. Install globals for your computer, if needed (gulp, bower, sass, typescript, typescript packages.)

```
$ npm install gulp -g <!-- only needs to be done once -->
```
```
$ npm install bower -g <!-- only needs to be done once -->
```
```
$ gem install sass
```
```
$ npm install typescript -g
```
```
$ apm install atom-typescript
```
3. Gather the UI packages the program requires

```
$ bower install <!-- saved into bower_components/ -->
```
4. Gather the back-end packages the program requires

```
$ npm install <!-- saved into node_modules/ -->
```
5. Construct and display the App on the local server

```
$ npm run gulp
```
```
$ npm start
```
6. Navigate to localhost:3000

```
$ mongod --dbpath ~/Desktop/untranslatables/data/db
```

## Known Bugs

* _If you want to know about bugs, consult an entomologist. This app knows no bugs_

## Support and contact details

* _View the repository on GitHub at:_
https://github.com/yasskin/untranslatables

_If you run into any issues or have questions, ideas, or concerns, please feel free to contact Noah:_

* _Noah Yasskin: <a href="mailto:noahyasskin@gmail.com">noahyasskin@gmail.com</a>_

## Technologies Used

* _HTML & CSS_
* _SASS_
* _JavaScript_
* _Node.js_
* _Gulp_
* _Bower_
* _GitHub API_

### License

*MIT License*

The MIT License (MIT)
Copyright (c) 2016, Maarja Laineste, Caleb Stokka, Sky Rousse, and Noah Yasskin
https://opensource.org/licenses/MIT
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
