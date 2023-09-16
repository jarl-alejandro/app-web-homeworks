import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function StudentTable(props) {

    const handleDelete = (row) => () => {
        props.deleteStudent(row)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Identificador</TableCell>
                        <TableCell align="center">Nombres</TableCell>
                        <TableCell align="center">Carrera</TableCell>
                        <TableCell align="center">Edad</TableCell>
                        <TableCell align="center">Direccion</TableCell>
                        <TableCell align="center">

                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.students.map((row) => (
                        <TableRow
                            key={row.identifier}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.identifier}
                            </TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.career}</TableCell>
                            <TableCell align="center">{row.age}</TableCell>
                            <TableCell align="center">{row.direction}</TableCell>
                            <TableCell align="center">
                                <Button size="small" variant="contained" color="error" className="modal-footer--close" onClick={handleDelete(row)}>
                                    <DeleteIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default StudentTable;
