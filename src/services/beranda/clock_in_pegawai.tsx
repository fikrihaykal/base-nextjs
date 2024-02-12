import axios from "axios";

export const clockInPegawai = async ({
  time,
  timezone,
}: {
  time: string | undefined;
  timezone: string | undefined;
}) => {
  const res = await axios
    .post(
      process.env.NEXT_PUBLIC_BASE_URL_API + "/absensi/clock-in",
      {
        time: time,
        timezone: timezone,
      },
      {
        withCredentials: true,
        xsrfCookieName: "CSRF-TOKEN",
        xsrfHeaderName: "X-CSRF-TOKEN",
        withXSRFToken: true,
      }
    )
    .then(
      // nama user
      // status kerja
      (res) => res.data
    )
    .catch((err) => {
      throw err;
    });

  return res;
};
