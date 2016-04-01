import Config from '_/src/config'
import Axios from 'axios'

export default Axios.create({
  baseURL: Config.apiUrl
})
