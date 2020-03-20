import currencyUI from './currency'

class FavoriteTicketsUI {
    constructor(currency) {
        this.favoriteSection = document.getElementById('favorite-section')
        this.getCurrencySymbol = currency.getCurrencySymbol.bind(currency)
    }

    /**
     * @param {array} favoriteTicketsList
     */
    renderFavoriteTicketsList(favoriteTicketsList) {
        this.clearDropdown()
        let fragment = ''

        const currency = this.getCurrencySymbol()
        favoriteTicketsList.forEach(favoriteTicket => {
            const template = FavoriteTicketsUI.templateFavoriteTicket(favoriteTicket, currency)
            fragment += template
        })

        this.favoriteSection.insertAdjacentHTML('afterbegin', fragment)
    }

    clearDropdown() {
        return this.favoriteSection.innerHTML = ''
    }

    static templateFavoriteTicket(favoriteTicket, currencySymbol) {
        return `
       <div class="favorite-item  d-flex align-items-start" data-id=${favoriteTicket._id}>
                <img
                  src=${favoriteTicket.airline_logo}
                  alt=${favoriteTicket.airline_name}
                  class="favorite-item-airline-img"
                />
                <div class="favorite-item-info d-flex flex-column">
                  <div
                    class="favorite-item-destination d-flex align-items-center"
                  >
                    <div class="d-flex align-items-center mr-auto">
                      <span class="favorite-item-city">${favoriteTicket.origin_name} </span>
                      <i class="medium material-icons">flight_takeoff</i>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="medium material-icons">flight_land</i>
                      <span class="favorite-item-city">${favoriteTicket.destination_name}</span>
                    </div>
                  </div>
                  <div class="ticket-time-price d-flex align-items-center">
                    <span class="ticket-time-departure">${favoriteTicket.departure_at}</span>
                    <span class="ticket-price ml-auto">${currencySymbol} ${favoriteTicket.price}</span>
                  </div>
                  <div class="ticket-additional-info">
                    <span class="ticket-transfers">Пересадок: ${favoriteTicket.transfers}</span>
                    <span class="ticket-flight-number">Номер рейса: ${favoriteTicket.flight_number}</span>
                  </div>
                  <a
                    class="waves-effect waves-light btn-small pink darken-3 delete-favorite ml-auto"
                    >Delete</a
                  >
                </div>
              </div>
        `
    }
}

const favoriteTicketsUI = new FavoriteTicketsUI(currencyUI)

export default favoriteTicketsUI
