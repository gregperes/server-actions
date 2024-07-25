'use server'

import axios from 'axios'

export async function getUsers() {
  // aqui fica a chamada do seu back
  return axios.get('https://jsonplaceholder.typicode.com/users')
}