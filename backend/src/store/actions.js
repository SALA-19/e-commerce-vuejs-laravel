import axiosClient from "../axios";

export function getCurrentUser({commit}, data) {
  return axiosClient.get('/user', data)
    .then(({data}) => {
      commit('setUser', data);
      return data;
    })
}

export function login({commit}, data) {
  return axiosClient.post('/login', data)
    .then(({data}) => {
      commit('setUser', data.user);
      commit('setToken', data.token)
      return data;
    })
}

export function logout({commit}) {
  return axiosClient.post('/logout')
    .then((response) => {
      commit('setToken', null)

      return response;
    })
}



export function getProducts({commit}, {url=null, search= '', perPage=10, sort_field, sort_direction} = {}){
  commit('setProdutcs', [true]); 
  url = url || '/products'
  return axiosClient.get(url, {
    params:{search, per_page: perPage, sort_field, sort_direction}
  })
    .then((response)=>{ 
      commit('setProdutcs', [false,response.data])
    })
    .catch(()=>{
      commit('setProdutcs', [false])
    })
}

export function getProduct({commit}, id) {
  return axiosClient.get(`/products/${id}`)
}

export function  createProduct({commit}, product) {
  if (product.image instanceof File) {
    const form = new FormData();
    form.append('title', product.title);
    form.append('image', product.image);
    form.append('description', product.description || '');
    form.append('price', product.price);
    form.append('price', product.published ? 1 : 0);
    product = form;
  }
  return axiosClient.post('/products', product)
}

export function updateProduct({commit}, product) {
  const id = product.id
  if (product.image instanceof File) {
    const form = new FormData();
    form.append('id', product.id);
    form.append('title', product.title);
    form.append('image', product.image);
    form.append('description', product.description || '');
    form.append('price', product.published ? 1 : 0);
    form.append('price', product.price);
    form.append('_method', 'PUT');
    product = form;
  }
  return axiosClient.put(`/products/${id}`, product)
}

export function deleteProduct({commit}, id) {
  return axiosClient.delete(`/products/${id}`)
}


export function getUsers({commit, state}, {url = null, search = '', per_page, sort_field, sort_direction} = {}) {
  commit('setUsers', [true])
  url = url || '/users'
  const params = {
    per_page: state.users.limit,
  }
  return axiosClient.get(url, {
    params: {
      ...params,
      search, per_page, sort_field, sort_direction
    }
  })
    .then((response) => {
      commit('setUsers', [false, response.data])
    })
    .catch(() => {
      commit('setUsers', [false])
    })
}

export function createUser({commit}, user) {
  return axiosClient.post('/users', user)
}

export function updateUser({commit}, user) {
  return axiosClient.put(`/users/${user.id}`, user)
}




export function getOrders({commit}, {url=null, search= '', perPage=10, sort_field, sort_direction} = {}){
  commit('setOrders', [true]); 
  url = url || '/orders'
  return axiosClient.get(url, {
    params:{search, per_page: perPage, sort_field, sort_direction}
  })
    .then((response)=>{ 
      commit('setOrders', [false,response.data])
    })
    .catch(()=>{
      commit('setOrders', [false])
    })
}

export function getOrder({commit}, id) {
  return axiosClient.get(`/orders/${id}`)
}



export function getCustomers({commit, state}, {url = null, search = '', per_page, sort_field, sort_direction} = {}) {
  commit('setCustomers', [true])
  url = url || '/customers'
  const params = {
    per_page: state.customers.limit,
  }
  return axiosClient.get(url, {
    params: {
      ...params,
      search, per_page, sort_field, sort_direction
    }
  })
    .then((response) => {
      commit('setCustomers', [false, response.data])
    })
    .catch(() => {
      commit('setCustomers', [false])
    })
}

export function getCustomer({commit}, id) {
  return axiosClient.get(`/customers/${id}`)
}

export function createCustomer({commit}, customer) {
  return axiosClient.post('/customers', customer)
}

export function updateCustomer({commit}, customer) {
  return axiosClient.put(`/customers/${customer.id}`, customer)
}

export function deleteCustomer({commit}, customer) {
  return axiosClient.delete(`/customers/${customer.id}`)
}

export function getCountries({commit}) {
  return axiosClient.get('countries')
    .then(({data}) => {
      commit('setCountries', data)
    })
}