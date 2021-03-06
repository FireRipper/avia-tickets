# Avia tickets

App for search airline tickets. You can set some parameters for search. 
These are parameters: where - origin(city/country) to destination (city/country), when - depart date and return date.
Also you can choose a currency (dollar or euro).
Result - tickets fonded or not founded. You can view available tickets and add some tickets to favorite (using button add to favorite).
Also, if you didn't fill all fields (apart from 'return date' one) You'll receive a message: "Please, fill in all the fields".

## Example
<table>
  <tr>
    <td>
      <a href="https://github.com/FireRipper/avia-tickets/tree/master/src/demo" title="Fill some fields">
        <img src="https://github.com/FireRipper/avia-tickets/blob/master/src/demo/set-data.png" width="400" alt="Fill some fields">
      </a>
    </td>
    <td>
      <a href="https://github.com/FireRipper/avia-tickets/tree/master/src/demo" title="Result">
        <img src="https://github.com/FireRipper/avia-tickets/blob/master/src/demo/request-result.png" width="400" alt="Result">
      </a>
    </td>
    <td>
      <a href="https://github.com/FireRipper/avia-tickets/tree/master/src/demo" title="Add to favorite">
        <img src="https://github.com/FireRipper/avia-tickets/blob/master/src/demo/add-ticket-to-favorites.png" width="400" alt="Add to favorite">
      </a>
    </td>
  </tr>
</table>


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
