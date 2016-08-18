# fullStack-JS-App

## Learning Objectives

This lab is a chance to solidify what we learned earlier in the course about back-end Javascript and connect it to our fancy new front-end framework, Angular.  To do this, we will:

* Build the following pieces around our front-end
    * A node server to serve up our front-end files
    * `$http` to connect to an API endpoint
    * An API endpoint that uses
      * Mongo and Mongoose to save our data
      * Express to route our resources

## Setup

1. Open up your Cards Against Assembly app (aka `angular-directives-lab`)
2. Verify that the cards in questionsList in `cardsController.js` are rendering properly on the page.
3. It should look similar to this:

<img width="965" alt="Custom Card" src="https://cloud.githubusercontent.com/assets/25366/9668827/a352dbf8-5238-11e5-8d00-80ccf02ca95c.png">

### Step 1: Server Setup

1. Create a directory for your node server.
2. Create a JS file that will act as your server file.
3. Look back at your back-end labs for reference on how to build this first directory.
4. Serve up your front-end files from this server, preferably in a `public` directory.

### Step 2: $http / AJAX Connection to Back-End

1. Use the following Heroku endpoint to replace your hard-coded Cards: https://shielded-forest-41789.herokuapp.com/api/flashcards
2. Use $http to GET the flashcards
3. Use $http to POST a new flashcard

### Step 3: Create Express Routes

At this point, we still haven't built out our database, so hardcoding the data for your cards is expected.  However, you should be able to:

1. Create a .get() (#index) route in Express that returns all of your hardcoded cards.
2. Create a .get() (#show) route in Express that returns one of your hardcoded cards based on ID.
3. Create a .post() (#create) route in Express that adds a hardcoded card to your array of hardcoded cards.

### Step 4: Integrate Mongo/Mongoose

Now, we're going to set up our database.  Match up your Express routes with Mongoose methods so you can:

1. Return all your cards.
2. Return a single card based on ID.
3. Save a single card to your database.

### Step 5: CRUD All the Things!

OK, now we can GET and POST, but that's not very helpful for the user looking to create a *new* card, *update* a card, or *delete* one.  Let's build out that functionality:

1. Build an HTML form that will allow us to submit a new card with our new POST method.  Since this is Angular, you will probably want to use `ng-submit`.  For help on this, you can look at the [Criminals Lab](https://github.com/den-wdi-1/http-lab).
2. Add a button on each card that allows you to DELETE a card.  Again, the Criminals Lab should be helpful.
3. Use a form that lets you edit and UPDATE a card.

### Step 6: Looking Good

First, step back and appreciate the work you've just done.  You just built out a back-end for your app without any starter code!

Pretty cool, right?!

Now, how can we make this app better?

### Step 7: Refactoring and Improvement (Bonus)

Here are some things we can improve on this app...

* Use $resource instead of $http
* Update our cards in place with [angular-xeditable](https://vitalets.github.io/angular-xeditable/)
* Refactor your app to fit Angular and Node best practices.  Remember the following:
   * Keep code DRY
   * [Principle of Single Responsibility](https://en.wikipedia.org/wiki/Single_responsibility_principle)
   * [Angular Style Guide](https://github.com/den-wdi-1/angular-style-guide)
* Use front-end routing with `ngRoute` where you don't want to refresh the page

