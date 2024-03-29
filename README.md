# SHOP

## Overview

This is an ecommerce application that allows users to browse and shop available products.

Built with React, Redux, JavaScript, HTML5, CSS

## Getting Started
1. Fork and clone this repository
2. `npm install` `react` `react-redux` `react-router-dom` `@reduxjs/toolkit`
3. `npm run dev` to start the build process and run the application using Vite
4. Copy and paste the localhost url to your preferred web browser
5. Start shopping to your heart's content!

## Description

As a user (not logged in):
* view entire list of available products
* view product details
* create a new account
* access login page

As a user (logged in):
* same access as a user not logged in
* view account details
* add/remove products to cart
* view running cart subtotal and cart total
* place an order for products in cart

## Restrictions
Due to the nature of the API database, this application was built with limited capabilities:
* A new user creating an account will receive a 200 or 201 status however the data will not be posted to the API
* An existing user (who is logged in) will receive a 200 or 201 status after checking out their cart however the cart order will not be placed
* An existing user (who is logged in) will have access to view account details however will be unable to edit their account information due to being unable to make POST requests to the API