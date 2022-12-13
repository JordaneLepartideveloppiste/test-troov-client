const crypto = require('crypto')

const PUBLIC_KEY = process.env.API_KEY_PUBLIC
const PRIVATE_KEY = process.env.API_KEY_PRIVATE


export default function ({ $auth, $axios, redirect}, inject) {
  $axios.onRequest(config => {

    const method = config.method.toUpperCase();
    const uri = "/" + config.url;
    const datetime = new Date().toISOString();

    const CONCAT = method + uri + datetime;
    const API_SIGN = crypto.createHmac('sha1', PRIVATE_KEY).update(CONCAT, "utf-8").digest('hex');

    config.headers["x-public-key"] = PUBLIC_KEY;
    config.headers["x-datetime"] = datetime;
    config.headers["x-signature"] = API_SIGN;
  });

  $axios.onResponseError(error => {
    if (error.response.status === 401) {
      if (!error.response.config.url === "/sessions") {
        $auth.logout()
        return redirect('/')
      }
    }
  });
}