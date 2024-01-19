import axios from "axios";

export const clockOutPegawai = async ({waktuPulang}: { waktuPulang: Date }) => {
  const res = await axios.post(process.env.NEXT_PUBLIC_BASE_URL_API + "/absensi/clock-out", {
    waktu_pulang: waktuPulang
  }, {withCredentials: true, xsrfCookieName: 'CSRF-TOKEN', xsrfHeaderName: 'x-csrf-token'})
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