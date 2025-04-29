// Credit to Shane for most of this code. Basically a rewrite og api.js just with a few small changes.
import axios from 'axios'

const rawUrl = "https://raw.githubusercontent.com/ShaneIsrael/fireshare/main"

const rawApiInstance = axios.create({
  baseURL: rawUrl,
  timeout: 10000,
})

const getAdminNews = () => {
    rawApiInstance.defaults.withCredentials = false // No need to send cookies with requests
    return rawApiInstance.get('/.github/news.json')
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching admin news:", error);
        throw error;
      });
  }
export default getAdminNews