# Woofer 
#### By Brooke Perry

## Project Proposal / Outline

#### Project’s Purpose or Goal: Convenient place to store your pup's documents pertaining to vet visits, vaccines, treatments, and medication.

#### Absolute minimum features the project requires to meet this purpose or goal:

* Authentication : user accounts and database to store documents/info
* Track vaccine/medication (add them to Google Calendar: when received and next due date)
* User can have multiple pets 
* Upload image of pup
* Miscellaneous notes section
* Ability to upload pdfs from vet visits


#### Tools, frameworks, libraries, APIs, modules and/or other resources to use to create this MVP:

* React / Redux
* Google calendar api
* Database : probably Firestore 
* Materials-ui and/or styled-components

#### If MVP is met with time to spare, further plans include to implement:

* Tag multiple pets to one medication: set up one reminder for multiple dogs. Example: both of my dogs receive a monthly heart worm treatment. Instead a reminder for each dog, receive one reminder that includes both dogs.
* Add searchable tags to uploaded pdfs 
* Searchable tags for notes section
* Authentication animation when creating user account
* Upcoming vet appointments (add to Google Calendar)
* Track buying food/treats (set reminder for autoship with Chewy)
* Ability to share documents from app (share pdf with doggy daycare, new vet, pet sitter, etc)
* Track weight and food intake
* Add doggy daycare reminder


#### Additional tools, frameworks, libraries, APIs, or other resources will these additional features may require:

* Elemental-ui (for search tags)

#### Rough Sketch Images of Component Tree & Views 

**Component Tree**

![Component Tree](/public/images/plan/component-tree.jpg)

![Component Tree](/public/images/plan/component-tree-detail.jpg)

**Views**

Landing pages for sign-in & user account: 
![Sign In & User Account Page](/public/images/plan/views-landing-user-account.jpg)

Medication section expanded:
![Medication View Expanded](/public/images/plan/views-medication.JPG)

Vet visits section expanded:
![Vet Visit View Expanded](/public/images/plan/views-vet-visit.JPG)

Notes section expanded:
![Notes View Expanded](/public/images/plan/views-notes.JPG)

Woofer Logo (rough) ideas:
![Woofer Logo (rough) Ideas](/public/images/plan/woofer-logo-ideas.png)





 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
