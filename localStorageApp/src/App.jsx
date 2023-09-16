import StudentTable from './StudentTable.jsx'
import {AppBar, Button, Container, Toolbar, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import StudentDialog from "./StudentDialog.jsx";

const STORAGE_STUDENTS = "students";


function App() {
    const [open, setOpen] = useState(false);
    const [students, setStudents] = useState([])

    useEffect(() => {
        const storageStunts = JSON.parse(localStorage.getItem(STORAGE_STUDENTS));
        if (storageStunts) {
            setStudents(storageStunts)
        }
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (student) => {
        setOpen(false);

        if (student) {
            setStudents((prevState) => {
                const students = prevState.concat(student);
                localStorage.setItem(STORAGE_STUDENTS, JSON.stringify(students))
                return students;
            })
        }
    }

    const deleteStudent = (student) => {
        setStudents((prevState) => {
            const students = prevState.filter(s => s.identifier !== student.identifier)
            localStorage.setItem(STORAGE_STUDENTS, JSON.stringify(students))
            return students;
        })
    }

    return (
    <>
        <AppBar position="static" style={{ marginBlockEnd: '5rem', backgroundColor: 'var(--primaryDark)' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Alejandro Rivas - localStorageApp
                </Typography>
                <Button onClick={handleClickOpen} variant="contained" style={{ marginBlock: '1.5rem' }}>Nuevo estudainte</Button>
            </Toolbar>
        </AppBar>
        <Container maxWidth="xl">
            <StudentTable
                students={students}
                deleteStudent={deleteStudent}
            />
            <StudentDialog
                open={open}
                onClose={handleClose}
            />
        </Container>
    </>
  )
}

export default App
