import locations from './locations'
import favoriteTicketsUI from '../views/favorite-tickets'

class Favorite {
    constructor() {
        this.favoriteTicketsList = []
    }

    /**
     * @param {array} list
     * @param {object} newItem
     * @param {number} ticketIndex
     * @returns {*[]}
     */
    updateList(list, newItem, ticketIndex) {
        return [
            ...list.slice(0, ticketIndex),
            newItem,
            ...list.slice(ticketIndex + 1)
        ]
    }

    deleteFromList(list, itemIndex) {
        return [
            ...list.slice(0, itemIndex),
            ...list.slice(itemIndex + 1)
        ]
    }

    /**
     *
     * @param {array} favoriteTicket
     * @param {number} ticketId
     * @returns {number | array}
     */
    addTicketToList(favoriteTicket, ticketId) {
        const favoriteList = this.favoriteTicketsList
        const ticketIndex = favoriteList.findIndex(ticket => ticket._id === ticketId)

        if (ticketIndex === -1) {
            return favoriteList.push(favoriteTicket)
        } else {
            return this.updateList(favoriteList, favoriteTicket, ticketIndex)
        }
    }

    getTicketIndex(ticketId) {
        const convertToNumber = +ticketId

        return this.favoriteTicketsList.findIndex(ticket => ticket._id === convertToNumber)
    }

    deleteTicketFromFavoriteList(target) {
        if (target.classList.contains('delete-favorite')) {
            const parent = target.parentNode.parentNode
            const ticketId = parent.dataset.id

            const ticketIndex = this.getTicketIndex(ticketId)

            this.favoriteTicketsList = this.deleteFromList(this.favoriteTicketsList, ticketIndex)

        } else {
            console.log('Ticket not found')
        }

        return favoriteTicketsUI.renderFavoriteTicketsList(this.favoriteTicketsList)
    }

    getTicket(target) {
        if (target.classList.contains('add-favorite')) {
            const parent = target.offsetParent
            const ticketId = parent.dataset.ticketId
            const tickets = locations.ticketsObj
            const convertTicketIdToNumber = +ticketId
            const newTicket = tickets[ticketId]

            return this.addTicketToList(newTicket, convertTicketIdToNumber)
        } else {
            console.log('Ticket not found')
        }
    }
}

const favorite = new Favorite()

export default favorite
