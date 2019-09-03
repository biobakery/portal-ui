import Cookies from 'js-cookie'

export const setAccessToken = (access) => Cookies.set('google_access_token', access)
export const getAccessToken = () => Cookies.get('google_access_token')
export const rmAccessToken = () => Cookies.remove('google_access_token')
export const isUserAuth = () => !!getAccessToken()

