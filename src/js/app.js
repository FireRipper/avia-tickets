import locations from './store/locations'
import formUI from './views/form'
import currencyUI from './views/currency'
import ticketsUI from './views/tickets'
import favorite from './store/favorite'
import favoriteTicketsUI from './views/favorite-tickets'

import '../css/style.css'
import './plugins'

document.addEventListener('DOMContentLoaded', () => {
    initApp()

    const form = formUI.form
    const ticket = ticketsUI.ticketsSections
    const favoriteTicket = favoriteTicketsUI.favoriteSection

    //Events
    form.addEventListener('submit', e => {
        e.preventDefault()

        if (!formUI.originValue || !formUI.destinationValue || !formUI.departDateValue) {
            M.toast({
                html: 'Please, fill in all the fields',
                classes: 'rounded light-blue darken-1'
            })
            return
        }

        onFormSubmit()
    })

    ticket.addEventListener('click', addTicketToFavoriteList)
    favoriteTicket.addEventListener('click', deleteTicketFromFavorite)

    //Handlers
    function addTicketToFavoriteList({ target }) {
        favorite.getTicket(target)
        favoriteTicketsUI.renderFavoriteTicketsList(favorite.favoriteTicketsList)
    }

    function deleteTicketFromFavorite({ target }) {
        favorite.deleteTicketFromFavoriteList(target)
    }

    async function initApp() {
        await locations.init()
        formUI.setAutocompleteData(locations.shortCitiesList)
    }

    async function onFormSubmit() {
        //get data from inputs
        const origin = locations.getCityCodeByKey(formUI.originValue)
        const destination = locations.getCityCodeByKey(formUI.destinationValue)
        const depart_date = formUI.departDateValue
        const return_date = formUI.returnDateValue
        const currency = currencyUI.currencyValue

        await locations.fetchTickets({
            origin,
            destination,
            depart_date,
            return_date,
            currency
        })

        ticketsUI.renderTickets(locations.lastSearch)
        locations.convertTicketsToObject(locations.lastSearch)
    }
})
