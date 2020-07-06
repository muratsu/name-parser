import React from "react"
import SEO from "../components/seo"
import NameParser from "../components/nameparser"
import {
  Container,
  CssBaseline,
  Typography,
  Link,
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  toolContent: {
    padding: theme.spacing(8, 0, 6),
    flexGrow: 1,
    height: '55vh'
  },
  paragraph: {
    marginTop: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const IndexPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <SEO title="🧙‍♂️🧙‍♂️🧙‍♂️" />
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2"><span role="img" aria-labelledby="hello">👋</span> there,</Typography>
          <Typography variant="body1" align="justify" className={classes.paragraph}>
            If you're doing email marketing, cleaning up data can be a time sink.
            One of the most common repeated tasks I've seen is grabbing first names from a full name.{' '}
            <Link href="https://9to5google.com/2020/06/30/google-sheets-smart-fill/" target="_blank" rel="noopener">Google Sheets will soon use AI</Link>{' '}
            to split a full name column into two columns, but in my experience, names can come in various forms,
            and I wanted to have something more robust.
          </Typography>
          <Typography variant="body1" align="justify" className={classes.paragraph}>
            The tool is effortless to use, paste your name list on the left text box, and the tool will automatically print the result on the right text box.
          </Typography>
        </Container>
      </div>
      <div className={classes.toolContent}>
        <Container style={{height: '100%'}}>
          <NameParser />
        </Container>
      </div>
    </React.Fragment>
  );
}

export default IndexPage
