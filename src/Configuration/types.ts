export type Format = 'HH:mm:ss' | 'h:mm:ss A' | 'HH:mm' | 'h:mm A'

export interface ConfigurationState {
  format: Format
  timezone: string
}
