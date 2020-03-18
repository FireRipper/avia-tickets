import api from './services/api-service'

api.countries().then(res => console.log(res))
api.cities().then(res => console.log(res))
