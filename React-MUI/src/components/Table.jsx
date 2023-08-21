import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

const columns = [
  { id: 'id', label: 'Field', minWidth: 100 },
  { id: 'value', label: 'Value', minWidth: 100 },
];

export default function MyTable() {
  
  const row = useSelector((state) => state.selectedSlice.value);
  const status = useSelector((state) => state.selectedSlice.status);
  const entries = Object.entries(row || {})

  const isValidUrl = urlString=> {
		let url;
		try { 
	      	url =new URL(urlString); 
	    }
	    catch(e){ 
	      return false; 
	    }
	    return url.protocol === "http:" || url.protocol === "https:";
	}

  return (
      status === "Pending"
      ?
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>  
      :
      (<Paper sx={{ overflow: 'hidden', mx:10 ,my:5}}>
        <TableContainer sx={{ maxHeight: 500 }} >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                    <b> {column.label.toLocaleUpperCase()} </b>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                    {
                    entries.map((entry) => {
                        return(
                        <TableRow hover role="checkbox" tabIndex={-1} key={entry}> 
                          {
                            entry.map((k) => {
                              return(
                                <TableCell key={k}>
                                {
                                  ( (isValidUrl(k)) ? <Avatar alt="Alt" src={k} /> : k )
                                }
                              </TableCell>
                              )
                            })
                          }
                      </TableRow>
                        )}
                      )
                    }
              </TableBody>
            </Table>
          </TableContainer>
      </Paper>)
  );
}
