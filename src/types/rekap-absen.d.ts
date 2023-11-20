interface Absen {
  id: number;
  tanggal: Date;
  hari: number;
  waktumulai: Date;
  waktupulang: Date;
  durasikerja: Number;
  keterangan?: "string";
}

export { Absen };
