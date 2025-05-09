export interface Note {
  id: number,
  title: string,
  description: string,
  date: Date,
  status: Status,
}

export enum Status {
  NEW = 'NEW',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',
  STATIC = 'STATIC'
}