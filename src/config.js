
const AUTH = process.env.REACT_APP_AUTH;
const PRODUCT = process.env.REACT_APP_PRODUCT;
const BILLING = process.env.REACT_APP_BILLING;

export const AUTH_HEADER = token => ({ Authorization: `Token ${token}` });
export const JWT_HEADER = token => ({ Authorization: `Bearer ${token}` });

export const API = {
  auth: {
    server: 'auth',
    obtain: `${AUTH}auth/token/obtain/`,
    refresh: `${AUTH}auth/token/refresh/`,
    token: `${AUTH}token/`,
    user: `${AUTH}myprofile/`,
    resetPassword: `${AUTH}reset_password/`,
    changePassword: `${AUTH}v1/user_reset_password/`,
    login: `${AUTH}v1/login/`,
    forgot: `${AUTH}forgot_password/`,
    register: `${AUTH}register`,
    authenticate: `${AUTH}authenticate`,
    
  },
  products:{
    add:`${PRODUCT}add`,
    remove:`${PRODUCT}remove`,
    getItems:`${PRODUCT}`
  },
  billing:{
    save:`${BILLING}add`
  }
  
};