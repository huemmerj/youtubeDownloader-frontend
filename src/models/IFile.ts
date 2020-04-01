import { Status } from './Status'

export interface IFIle {
  id: string
  socket: object
  url: string
  title: string
  folder: string
  playlistId: string
  format: string
  outPath: string
  status: Status
}
