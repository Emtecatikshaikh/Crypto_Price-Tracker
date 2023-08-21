import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

const columns = [
  { id: 'id', label: 'Field', minWidth: 100 },
  { id: 'value', label: 'Value', minWidth: 100 },
];

export default function MyTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const row = useSelector((state) => state.selectedSlice.value);
  console.log(row)
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
    <Paper sx={{ width: '85%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
              {console.log(entries)}
                {
                entries
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((entry) => {
                    return(
                    <TableRow hover role="checkbox" tabIndex={-1}> 
                      {
                        entry.map((k) => {
                          return(
                            <TableCell>
                            {
                              (typeof k === 'object' || null ) ? <p> Something missing !</p> :( (isValidUrl(k)) ? <Avatar alt="Example Alt" src={k} /> : k )
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={entries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
