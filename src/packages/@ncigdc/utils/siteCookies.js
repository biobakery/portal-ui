import Cookies from 'js-cookie'

export const TOKEN_NAME = "biom_mass_token"
export const EXPIRE_DAYS = 2

export const setAccessToken = (token) => Cookies.set(TOKEN_NAME, token, { expires: EXPIRE_DAYS })
export const getAccessToken = () => Cookies.get(TOKEN_NAME)
export const rmAccessToken = () => Cookies.remove(TOKEN_NAME)
export const isUserAuth = () => !!getAccessToken()

