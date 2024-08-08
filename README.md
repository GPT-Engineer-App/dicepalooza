# Welcome to your GPT Engineer project

## Project info

**Project**: dicepalooza 

**URL**: https://run.gptengineer.app/projects/723b192f-d02a-4f89-a2e3-e7838fd3bf41/improve

**Description**: Project Overview:
Develop a secure and user-friendly Bitcoin casino using a provably fair method. The site must prioritize security, support multiple cryptocurrencies, and provide a comprehensive user management system. The core game will be a customizable dice game with various betting options and features.

Key Features:

User Registration and Login:
Require a unique username with appended unique numbers (e.g., username#2).
Secure authentication, including two-factor authentication.
Cryptocurrency Support:
Accept deposits in Bitcoin, Litecoin, Dogecoin, and TRX.
Confirm blockchain transactions before crediting accounts.
Wager and Transaction Management:
Link wagers to users in the database.
Chatroom Integration:
Provide a chatroom with messages linked to users.
Implement moderation commands for timeouts and cancellations.
User Roles and Permissions:
Base User: Can place wagers and chat.
Moderator: Can manage chatroom timeouts.
Administrator: Can promote users, access backend statistics, and change house edge.
Administrator Dashboard:
View comprehensive site statistics.
Manage financial aspects and site settings.
Dice Game Features:
Customizable win chances and game options.
User-configurable seeds and auto-betting strategies.
Bulk betting for multiple rolls with summarized results.
Technical Requirements:

Implement using a secure and robust programming language.
Ensure all code is complete, secure, and functional.
Additional Improvements:

Enhanced Security:
Implement two-factor authentication and regular security audits.
User Experience:
Offer tutorials and a user-friendly interface.
Payment Gateway:
Support additional cryptocurrencies and fast transaction processing. 

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/723b192f-d02a-4f89-a2e3-e7838fd3bf41/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/723b192f-d02a-4f89-a2e3-e7838fd3bf41/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/dicepalooza.git
cd dicepalooza
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/723b192f-d02a-4f89-a2e3-e7838fd3bf41/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)