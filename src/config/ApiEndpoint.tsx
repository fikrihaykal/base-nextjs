export const apiEndpointMap = new Map([
  [
    "data_realisasi",
    (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080") +
      "/rencana-kerja/",
  ],
  [
    "data_beranda",
    (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080") +
      "/beranda/",
  ],
  [
    "data_libur",
    (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080") +
      "/hari-libur/",
  ],
]);
