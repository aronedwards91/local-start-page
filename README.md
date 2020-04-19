# Home Starter Page

This project aims to bundle a useful, editable homepage based on react into a single html file. This avoids CORS and ensures a super fast boot for your home page.

#### Currently includes:

[Trello-style Board](https://github.com/rcdexta/react-trello)

#### Future Additions

Weather forecasting, news (preferably wikinews)

## -
## Setup & other stuff

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Then Ejected to Webpack to allow for single html packaging thanks to [pomo](https://stackoverflow.com/questions/51949719/is-there-a-way-to-build-a-react-app-in-a-single-html-file)

#### Available Scripts

In the project directory, you can run:

- `yarn start`

Runs the development mode @ <br />
Open [http://localhost:3000](http://localhost:3000). Hot reloads.

- `yarn build`

Builds the app for production to the `build` folder.<br />
Other files will be in the folder but only the index.html is required.
