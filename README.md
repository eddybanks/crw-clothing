# Crwn Clothing

This is an ecommerce apparel shoping app that was created by applying some ascpects of a Udemy course on React by Andrea Neagoie and Yihua Zhang while making custom changes.

## Build/Deploy Instructions

This app is currently deployed to the heroku domain http://crwn-clothing.herokuapp.com. However, to build and run the app, simply clone this repo and cd (change directory) into the folder (normally named crwn-clothing) where this is cloned and run yarn install.
Once, all the dependencies are installed, you can run yarn start as shown below. This should run the application on your localhost:3000.


`git clone https://github.com/eddybanks/crwn-clothing.git`

`cd ./crwn-clothing`

`yarn install`

`yarn start`

## Software Stack
- React
- Firebase
- Redux
  - Redux-logger
  - Redux-persist
  - Redux-saga
- Styled Components
- React Router Dom
- Stripe (React-stripe-checkout)
- Sass (scss)

## Purpose
A demo application to test ecommerce shopping

# Major Functions
- Enables users to create and log in to an account using firebase
- Users can browse through a selection of clothing
- Users can add items to cart
- Users can view and update quantity of items in cart including deleting items
- Users can checkout and pay for cart items using test card details in stripe checkout modal


