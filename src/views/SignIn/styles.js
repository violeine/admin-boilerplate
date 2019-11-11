const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    maxWidth: 600,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3),
    textAlign: 'center'
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  }
});

export default styles;
