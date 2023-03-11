import { extendTheme } from '@chakra-ui/react'
import config from '@/styles/tokens/config'
import styles from '@/styles/tokens/globals'
import fonts from '@/styles/tokens/fonts'
import colors from '@/styles/tokens/colors'

const theme = extendTheme({ config, styles, fonts, colors })

export { theme }
