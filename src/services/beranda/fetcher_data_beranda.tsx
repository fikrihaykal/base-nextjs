import axios from "axios";

export const fetchDataBeranda = async () => {
  const res = await axios.get(process.env.NEXT_PUBLIC_BASE_URL_API + "/beranda/", {withCredentials: true})
    .then(
      // nama user
      // status kerja
      res => res.data
    ).catch(
      err => {
        throw err
      }
    )

  return res
}