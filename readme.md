# Mono Car Catalogue
Web-based interactive vehicle catalog

## Description

This is a project to showcase my web programming skills. Originally meant to involve front-end only, but since I wanted the app to be based around an API, it involves some backend as well, making it a full-stack project.

So to start, the project is based on three main technologies: 

* React.js utilizing MobX state management and React-Routing for the front-end
* Django backend - Serves project app, and manages databases
* Django REST Framework - Provides REST API 

### User walkthrough

Upon visiting the app, the user is greeted by the login page with a link to register for an account. 

When the user successfully registers an account, or simply, logs in, our API will provide authentication to the user, enabling the usage of the app. Otherwise, apps main routes are protected via private-routes, redirecting the unauthenticated users to the login page.

Authenticated users proceed to the Dashboard, where they can see, filter, or search all available (paginated) car listings. Alternatively, they can create new car listings as well.

Upon opening the listing, the user can see the listing details. If the listing happens to be the user's own, there will be an option to edit or delete it.


## Usage

Just install Python and Node dependencies, and the project can be run in dev-mode 

```
# Start Django development server
/$ python manage.py runserver 


# compile React and watch for changes
/frontend$ npm run dev
```

Alternatively, I will soon privately host the project on my home server, and append this document with a link to the project. 

## License
[MIT](https://choosealicense.com/licenses/mit/)