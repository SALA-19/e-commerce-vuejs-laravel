const state = {
    user: {
        token: sessionStorage.getItem('TOKEN'),
        data: {}
    },
    products: {
        loading: false,
        data:[],
        links: [],
        from: null,
        to: null,
        page: 1,
        limit: null,
        total: null
    },
    users: {
        loading: false,
        data:[],
        links: [],
        from: null,
        to: null,
        page: 1,
        limit: null,
        total: null
    },
    orders: {
        loading: false,
        data:[],
        links: [],
        from: null,
        to: null,
        page: 1,
        limit: null,
        total: null
    },
    customers: {
        loading: false,
        data: [],
        links: [],
        from: null,
        to: null,
        page: 1,
        limit: null,
        total: null
      },
      countries: [],
    toast: {
      show: false,
      message: '',
      delay: 5000
    },
     dateOptions: [
        {key: '1d', text: 'Last Day'},
        {key: '1w', text: 'Last Week'},
        {key: '2w', text: 'Last 2 Weeks'},
        {key: '1m', text: 'Last Month'},
        {key: '3m', text: 'Last 3 Months'},
        {key: '6m', text: 'Last 6 Months'},
        {key: 'all', text: 'All Time'},
      ]
    
};

export default state;