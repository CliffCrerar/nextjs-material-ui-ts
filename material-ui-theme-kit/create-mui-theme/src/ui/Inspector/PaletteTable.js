import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const dispColors = obj => {
  const keys = Object.keys(obj);
  return keys.map(key => ({ name: key, val: obj[key] }));
};

export default withStyles({
  root: {
    marginTop: 16,
  },
  cell: {
    height: 16,
  },
  row: {
    height: 16,
  },
  head: {
    height: 24,
  },
  pic: {
    height: 10,
    width: 10,
    border: '1px solid #989898',
  },
})(({ classes, theme }) => {
  if (!theme) return null;
  const palette = theme.palette;
  if (!palette) return null;
  const { primary, secondary } = palette;

  return (
    <React.Fragment>
      <Table className={classes.root}>
        <TableHead>
          <TableRow className={classes.head}>
            <TableCell>Primary</TableCell>
            <TableCell numeric />
          </TableRow>
        </TableHead>
        <TableBody>
          {dispColors(primary).map(color => {
            return (
              <Tooltip
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
                title={color.val}
                placement="right"
              >
                <TableRow
                  className={classes.row}
                  key={color.name}
                >
                  <TableCell className={classes.cell}>{color.name}</TableCell>
                  <TableCell className={classes.cell}>
                    <div
                      className={classes.pic}
                      style={{ backgroundColor: color.val }}
                    />
                  </TableCell>
                </TableRow>
              </Tooltip>
            );
          })}
        </TableBody>
      </Table>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.head}>
            <TableCell>Secondary</TableCell>
            <TableCell numeric />
          </TableRow>
        </TableHead>
        <TableBody>
          {dispColors(secondary).map(color => {
            return (
              <Tooltip
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
                title={color.val}
                placement="right"
              >
                <TableRow
                  className={classes.row}
                  key={color.name}
                >
                  <TableCell className={classes.cell}>{color.name}</TableCell>
                  <TableCell className={classes.cell}>
                    <div
                      className={classes.pic}
                      style={{ backgroundColor: color.val }}
                    />
                  </TableCell>
                </TableRow>
              </Tooltip>
            );
          })}
        </TableBody>
      </Table>
    </React.Fragment>
  );
});
