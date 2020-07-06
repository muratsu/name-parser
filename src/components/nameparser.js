import React, { useState, useEffect }  from 'react';
import useDebounce from '../hooks/use-debounce';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const parseFullName = require('parse-full-name').parseFullName;
const sampleNames = require('../sampleNames.json').names.join('\n');

const parseNames = (names) => {
  const unprocessedNames = names.split('\n');
  const processedNames = [];

  for (const name of unprocessedNames) {
    let cleanName = parseFullName(name,'first',1,0,0);
    if (cleanName === '') {
      cleanName = 'there';
    }
    processedNames.push(cleanName);
  }

  return processedNames.join('\n');
}

const useStyles = makeStyles((theme) => ({
  textArea: {
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: '100%',
  },
}));

const NameParser = () => {
  const [names, setNames] = useState(sampleNames);
  const [parsedNames, setParsedNames] = useState('');
  // const [isParsing, setIsParsing] = useState(false);

  // Debounce names for proper uex
  const debouncedNames = useDebounce(names, 500);
  const classes = useStyles();

  useEffect(
    () => {
      // Make sure we have a value (user has entered something in input)
      if (debouncedNames) {
        // setIsParsing(true);
        // This isn't async but if it was, we could set state on return
        const results = parseNames(debouncedNames);
        // setIsParsing(false);
        setParsedNames(results);
      } else {
        setParsedNames('');
      }
    },

    [debouncedNames]
  );

  return (
    <Grid container spacing={3} style={{height: '100%'}}>
      <Grid item xs={6}>
        <textarea
          value={names}
          onChange={e => setNames(e.target.value)}
          className={classes.textArea}
        />
      </Grid>
      <Grid item xs={6}>
        <textarea
          value={parsedNames}
          className={classes.textArea}
          readOnly
        />
      </Grid>
    </Grid>
  );
}

export default NameParser