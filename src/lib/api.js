import Config from '_/config'
import Axios from 'axios'

export default Axios.create({
  baseURL: Config.apiUrl
})
