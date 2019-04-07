import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization:
        'Client-ID e5a11148778f1fcfa24dbb5880edbc25d889d03cfd4a370058777b92b24c85e2',
      },

})

