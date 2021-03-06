## Planning

- Brainstorm the problem that you want your application to solve. It's okay to take inspiration for the features you want to build from other sites or projects you've seen (it's not okay to use their code though).
    The problem: The problem: You want to bet on sports but you don't want to commit the money. 
- Plan how your features will work.
    This project is an application where a user can pick games from any particular day and choose to follow the score of the game or make fantasy bets using points, not money.
- Plan what features your app will have. You can write **User Stories** to help make it clear what you are planning to build.
    - a User can create an account
    - there is a view to browse all games for the day
    - once a game is selected in moves to the top of the list and options are given for fantasy betting
- Model your domain. You need to know what the nouns in your project are - the objects in the 'world' of your application. It can be helpful to draw the relationships between your models.
    - User has a name, username and password.
    - Game has a user_id and gameid, a join table between users and bets
    - Bet has a user_id (key), game_id (key), amount, bet_type, bet_status, and bet_odds 
    
## Services setup
**Setup Repo and initial commit**
    create repo at github.com
    git remote add origin git@github.com:roadpilot/project-five-react-redux.git
    git branch -M main
    git push -u origin main
    test by changing some text in a file and saving.
    You should have staged changes
    You should be able to commit and push
    Your changes should show up in the github.com remote repo.
**Create rails api app:**
    rails new project-five-react-redux --api --database=postgresql
    create backend dir and move all app files into
    create frontend dir and setup index.html and js files
**Setup PostgreSQL**
    sudo apt-get install postgresql
    sudo service postgresql start (sudo service postgresql stop to stop)
    sudo -u postgres createuser --superuser term
    rails db:setup

## Domain Modeling
As you turn your user stories into more clear technical specifications for features, you can start by modeling the data that your application will store and show. Identify the nouns in your stories, their properties, and their relationships.
    - User has a name, username and password.
    - Game has a user_id and gameid, a join table between users and bets
    - Bet has a user_id (key), game_id (key), amount, bet_type, bet_status, and bet_odds 

Later on, you will be ready to create the database schema and application models corresponding to this domain.

## Build resources
rails g resource User username:string name:string password_digest:string --no-test-framework
    seeds
    test in console
rails g resource Game --no-test-framework
    seeds
    test in console
rails g resource Bet user_id:integer household_id:integer --no-test-framework
    seeds
    test in console
rails g resource Item name:string description:string current_location:string proper_location:string household_id:integer last_update_user_id:integer --no-test-framework
    seeds
    test in console

## MVP ASAP
(Minimum Viable Product, As Soon As Possible)

Instead of getting stuck on advanced features, start with a basic working version of the application, then steadily add features piece by piece.

**START WITH LOGIN**

- [] 9. Create your `UsersController`

- [] 10. NOT APPLICABLE

- [] 11. Build routes and views for login
  - Build your `get` login route + "login" view
  - Build your `post` login route
      - **Tip**: Here is where we authenticate the user and leverage the session hash to log them in!
  - Build your `get users/:id` route + "show" view

- [] 12. Create your `ApplicationController` helper methods
  - **Ask**: Why do we add this?
  - `#logged_in?`: checks if the user is logged in
  - `#current_user`: keeps track of the user currently logged in

**MOVE ON TO SIGN UP**
- [] 13. Build routes and views for signup
  - Build your `get` signup route + "signup" view
  - Build your `post` signup route

**WRAP UP WITH LOG OUT**
- [] 14. Build your `get` logout route

## Build vertically, not horizontally

- Build the **R** from CRUD for just one model, _vertically!_ That means one migration, one model, one controller action, add seed data and confirm that your code works by testing it visually, then one `fetch` call, and one DOM update. 
- Then, build the next CRUD action (maybe Create or Update), again building **vertically**.
- Continue building features one by one, (_vertically!_)
- Add feature by feature, not model by model or layer by layer.
- Test each feature, add styles, and create seed data as you go (not all at once at the end)


## Rails App with JavaScript Frontend Spec

Project Specs:
The code should be written in ES6 as much as possible

Use the create-react-app generator to start your project.

Follow the instructions on this repo to setup the generator: create-react-app: https://github.com/facebookincubator/create-react-app

Your app should have one HTML page to render your react-redux application

There should be 5 stateless components

There should be 3 routes

The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs; docs for v4 can be found here)

Use Redux middleware to respond to and modify state change

Make use of async actions and redux-thunk middleware to send data to and receive data from a server

Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.

Your client-side application should handle the display of data with minimal data manipulation

Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!

Project Repo Specs:
Read Me file contains:
    Application Description
    Installation guide (e.g. fork and clone repo, migrate db, bundle install, etc)
    Contributors guide (e.g. file an issue, file an issue with a pull request, etc)
    Licensing statement at the bottom (e.g. This project has been licensed under the MIT open source license.)

Repo General
    You have a large number of small Git commits
    Your commit messages are meaningful
    You made the changes in a commit that relate to the commit message
    You don't include changes in a commit that aren't related to the commit message