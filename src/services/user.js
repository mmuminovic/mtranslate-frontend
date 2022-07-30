import axios from 'axios'
import { store } from '../store'
import { authSlice } from '../store/authSlice'

export const login = async (data) =>
    new Promise(async (resolve, reject) => {
        try {
            const user = await axios.post('/user/login', data)
            const res = { ...user }
            if (!user.data) {
                const message = res.response.data.message
                throw Object.assign(new Error(), { code: 442, message })
            }
            const { token } = user.data
            store.dispatch(authSlice.actions.auth({ token }))
            resolve(user)
        } catch (error) {
            reject({ ...error })
        }
    })

export const signup = (data) =>
    new Promise(async (resolve, reject) => {
        try {
            const user = await axios.post('/user/signup', data)
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })

export const getSponsorData = () =>
    new Promise(async (resolve, reject) => {
        try {
            const sponsor = await axios.get('/sponsor/get')
            resolve(sponsor)
        } catch (error) {
            reject(error)
        }
    })

export const addSponsor = (data) =>
    new Promise(async (resolve, reject) => {
        try {
            const sponsor = await axios.post('/sponsor/add', data)
            resolve(sponsor)
        } catch (error) {
            reject(error)
        }
    })

export const deleteSponsor = () =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios.delete('/sponsor/delete')
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })

export const setWinner = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const user = await axios.patch(`/user/set-winner/${id}`, {})
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
