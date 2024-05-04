# study-assistant-web

I want you to build a web application that provides study assistance and various features for students. The app should be developed using a modern web framework of your choice (e.g., Flask, Django, or Express.js) and follow best practices for security and scalability. Here are the high-level instructions to guide the development process:

1. Overview:
   - Build a student-oriented web application that assists students in their studies and provides useful features.
   - The app should have a user registration and login system to manage individual user accounts and sessions.
   - Implement a trial period for new users, allowing them to explore the app's features before subscribing.
   - The app should include a billing system to handle subscription payments and manage user subscriptions.
   - Security measures, such as HTTPS enforcement, secure session cookies, and limiting concurrent logins, should be implemented.

2. User Registration and Login:
   - Create a user registration page where new users can sign up by providing their name, email, password, degree, and year.
   - Implement a secure password hashing function to store user passwords securely.
   - Develop a login page where registered users can log in using their email and password.
   - Create session management functionality to authenticate and maintain user sessions securely.

3. Trial Period and Billing:
   - Implement a trial period of 7 days for new users after registration.
   - Develop a billing system that handles user subscriptions and payments.
   - Support card payment and integrate payment service providers (e.g., PayFast).
    - Redirect the user to the assistant page or billing page based on their subscription status.

4. Assistant Features:
   - Enable users to create an assistant by providing an assistant name.
   - Develop content generation functionality for the assistant based on the user's uploaded documents and textbooks.
   - Implement a feature for the assistant to generate study notes for the user based on the content generated.
   - Allow users to train the assistant using their uploaded documents to personalize its responses.
   - Create a page to display the assistant's generated notes and allow users to view and manage them.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/study-assistant-web.git
cd study-assistant-web
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
