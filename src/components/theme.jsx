import { extendTheme } from "@chakra-ui/react";

const Button = {
  defaultProps: {
    size: 'sm',
    variant: 'ghost',
  },
};

const theme = extendTheme({
    components:{
        Button,
    }
})
export default theme;