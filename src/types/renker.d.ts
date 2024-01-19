type Status = 1 | 2 | 3 | 4;

export type RencanaKerja = {
  status: number;
  id?: string;
  assigner_id?: string;
  parent_id?: string;
  assignee_id?: string;
  deskripsi?: string;
  status_pekerjaan?: int;
  assigned_at?: string;
  target_completion_date?: string;
  started_at?: string;
  completed_at?: string;
  deleted_at?: string;
  updater_id?: string;
};

export type RencanaKerjaRequest = {
  deskripsi: string;
};
