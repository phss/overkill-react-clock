import { Typography } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import { theme } from './theme'

export const Title = styled(Typography)({
  color: theme.palette.text.primary,
  fontWeight: 'lighter',
  letterSpacing: '10px',
  fontSize: '5vw',
  margin: '3vw'
})
