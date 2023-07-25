interface Berkas {
    id: number
    name: string
    extension: string
    size: number
    type: 'foto' | 'sertifikat' | 'laporan'
    create_date: string
    description: string
}

export { Berkas }