# Avia tickets

App for search airline tickets. You can set some parameters for search. 
These are parameters: where - origin(city/country) to destination (city/country), when - depart date and return date. 
Result - tickets fonded or not founded. You can view available tickets and add some tickets to favorite (using button add to favorite).
Also, if you didn't fill all fields (apart from 'return date' one) You'll receive a message: "Please, fill in all the fields".

## How to install

- Clone this repository on your PC
- Run `yarn install`
- Run `yarn dev`

### Structure

- **node_modules** - libraries.
- **dist** - compiled files that are uploaded to repository.
- **src** - source files
- **src/css** - css styles for page
- **src/icons** - all icons
- **src/js** - include config, helpers, plugins, services, store, views and app.js
- **webpack.config.js** - include all settings for running app, also for build and prepare app for deploy.

## Using framework 

* [Materialize](https://materializecss.com/) - For styling page and elements

## Build with

* [Webpack](https://webpack.js.org/) - a static module bundler for JavaScript applications


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
