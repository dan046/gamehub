import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a89828a3900f400a9b3363e2b5a03731",
  },
})
