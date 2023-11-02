type Status = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type MatkulRiwayat = {
  no: number;
  mk: string;
  kelas: string;
  tgl_ambil: string;
  jam_ambil: string;
  tgl_proses: string;
  jam_proses: string;
  pengambil: string;
  status: Status;
};
