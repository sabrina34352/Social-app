import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const Button = {
  defaultProps: {
    size: 'sm',
    variant: 'ghost',
  },
};
const styles = {
  global: props => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('#EFEFEF', '#2C3333')(props),
    },
  }),
};

const theme = extendTheme({
  components: {
    Button,
  },
  styles,
});
export default theme;
