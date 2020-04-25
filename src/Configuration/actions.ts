export type UpdateFormat = 'UPDATE_FORMAT'

export interface UpdateFormatAction {
  type: UpdateFormat
  format: string
}

export const updateFormat = (newFormat: string): UpdateFormatAction => ({
  type: 'UPDATE_FORMAT',
  format: newFormat
})
