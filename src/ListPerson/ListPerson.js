import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    Container,
    Typography,
    TablePagination,
    Box,
    Paper,
    Modal,
    TextField,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    FormHelperText,
    Snackbar,
    Alert,
    InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Search from "@mui/icons-material/Search";

const ListPerson = () => {
    const [persons, setPersons] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openView, setOpenView] = useState(false);
    const [newPerson, setNewPerson] = useState({
        name: "",
        age: "",
        gender: "",
        postcode: "",
    });
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [errors, setErrors] = useState({
        name: "",
        age: "",
        gender: "",
        postcode: "",
    });
    const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
    const [openDeleteSuccess, setOpenDeleteSuccess] = useState(false);
    const [personToDelete, setPersonToDelete] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const dummyData = Array.from({ length: 100 }, (_, i) => ({
            stt: i + 1,
            name: `Name ${i + 1}`,
            age: 20 + Math.floor(Math.random() * 10),
            gender: i % 2 === 0 ? "Male" : "Female",
            postcode: 10000 + Math.floor(Math.random() * 90000),
        }));
        setPersons(dummyData);
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    const handleOpenEdit = (person) => {
        setSelectedPerson(person);
        setNewPerson({ ...person });
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
        setSelectedPerson(null);
        setNewPerson({
            name: "",
            age: "",
            gender: "",
            postcode: "",
        });
        setErrors({
            name: "",
            age: "",
            gender: "",
            postcode: "",
        });
    };

    const handleOpenView = (person) => {
        setSelectedPerson(person);
        setOpenView(true);
    };

    const handleCloseView = () => {
        setOpenView(false);
        setSelectedPerson(null);
    };

    const handleChangeForm = (event) => {
        setNewPerson({
            ...newPerson,
            [event.target.name]: event.target.value,
        });

        setErrors({
            ...errors,
            [event.target.name]: "",
        });
    };

    const handleCreatePerson = () => {
        const newErrors = {};

        if (!newPerson.name) {
            newErrors.name = "Name is required";
        }
        if (!newPerson.age) {
            newErrors.age = "Age is required";
        }
        if (!newPerson.gender) {
            newErrors.gender = "Gender is required";
        }
        if (!newPerson.postcode) {
            newErrors.postcode = "Postcode is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newPersonObject = {
            stt: persons.length + 1,
            name: newPerson.name,
            age: newPerson.age,
            gender: newPerson.gender,
            postcode: newPerson.postcode,
        };
        setPersons([newPersonObject, ...persons]);
        handleCloseAdd();
        setNewPerson({
            name: "",
            age: "",
            gender: "",
            postcode: "",
        });
    };

    const handleEditPerson = () => {
        const newErrors = {};

        if (!newPerson.name) {
            newErrors.name = "Name is required";
        }
        if (!newPerson.age) {
            newErrors.age = "Age is required";
        }
        if (!newPerson.gender) {
            newErrors.gender = "Gender is required";
        }
        if (!newPerson.postcode) {
            newErrors.postcode = "Postcode is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const index = persons.findIndex((p) => p.stt === selectedPerson.stt);
        const updatedPersons = [...persons];
        updatedPersons[index] = { ...selectedPerson, ...newPerson };
        setPersons(updatedPersons);
        handleCloseEdit();
        setNewPerson({
            name: "",
            age: "",
            gender: "",
            postcode: "",
        });
        setErrors({
            name: "",
            age: "",
            gender: "",
            postcode: "",
        });
    };

    const handleOpenDeleteConfirm = (person) => {
        setOpenDeleteConfirm(true);
        setPersonToDelete(person);
    };

    const handleCloseDeleteConfirm = () => {
        setOpenDeleteConfirm(false);
        setPersonToDelete(null);
    };

    const handleDeletePerson = () => {
        const updatedPersons = persons.filter(
            (p) => p.stt !== personToDelete.stt
        );
        setPersons(updatedPersons);
        handleCloseDeleteConfirm();
        setOpenDeleteSuccess(true);
    };

    const handleCloseDeleteSuccess = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenDeleteSuccess(false);
    };

    const handleClickMenu = (event, person) => {
        setAnchorEl(event.currentTarget);
        setSelectedPerson(person);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPersons = persons.filter((person) => {
        const nameMatch = person.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const postcodeMatch = person.postcode.toString().includes(searchTerm);

        return nameMatch || postcodeMatch;
    });

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                }}
            >
                <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#282c34" }}
                >
                    List Person
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                        label="Search"
                        variant="outlined"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        sx={{ width: 600, mr: 20 }}
                        placeholder="Please enter Name or Postcode"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleOpenAdd}
                        sx={{
                            backgroundColor: "#2196f3",
                            borderRadius: 20,
                            fontWeight: "bold",
                        }}
                    >
                        + CREATE
                    </Button>
                </Box>
            </Box>
            <Paper sx={{ overflow: "hidden", borderRadius: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                Stt
                            </TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                Name
                            </TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                Age
                            </TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                Gender
                            </TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                PostCode
                            </TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredPersons
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((person) => (
                                <TableRow key={person.stt}>
                                    <TableCell>{person.stt}</TableCell>
                                    <TableCell>{person.name}</TableCell>
                                    <TableCell>{person.age}</TableCell>
                                    <TableCell>{person.gender}</TableCell>
                                    <TableCell>{person.postcode}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            aria-label="more"
                                            id="long-button"
                                            aria-controls={
                                                openMenu
                                                    ? "long-menu"
                                                    : undefined
                                            }
                                            aria-expanded={
                                                openMenu ? "true" : undefined
                                            }
                                            aria-haspopup="true"
                                            onClick={(event) =>
                                                handleClickMenu(event, person)
                                            }
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            MenuListProps={{
                                                "aria-labelledby":
                                                    "long-button",
                                            }}
                                            anchorEl={anchorEl}
                                            open={openMenu}
                                            onClose={handleCloseMenu}
                                        >
                                            <MenuItem
                                                onClick={() => {
                                                    handleOpenView(
                                                        selectedPerson
                                                    );
                                                    handleCloseMenu();
                                                }}
                                            >
                                                View
                                            </MenuItem>
                                            <MenuItem
                                                onClick={() => {
                                                    handleOpenEdit(
                                                        selectedPerson
                                                    );
                                                    handleCloseMenu();
                                                }}
                                            >
                                                Edit
                                            </MenuItem>
                                            <MenuItem
                                                onClick={() => {
                                                    handleOpenDeleteConfirm(
                                                        selectedPerson
                                                    );
                                                    handleCloseMenu();
                                                }}
                                            >
                                                Delete
                                            </MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    component="div"
                    count={filteredPersons.length} 
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    sx={{
                        "& .MuiTablePagination-toolbar": {
                            backgroundColor: "#f5f5f5",
                        },
                    }}
                    labelRowsPerPage="Các mục trên mỗi trang"
                />
            </Paper>

            {/* Modal "Add new person" */}
            <Modal open={openAdd} onClose={handleCloseAdd}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{ mb: 2, fontWeight: "bold" }}
                    >
                        Add new person
                    </Typography>
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseAdd}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Name"
                                fullWidth
                                name="name"
                                value={newPerson.name}
                                onChange={handleChangeForm}
                                error={!!errors.name}
                            />
                            {errors.name && (
                                <FormHelperText error>
                                    {errors.name}
                                </FormHelperText>
                            )}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Age"
                                fullWidth
                                name="age"
                                value={newPerson.age}
                                onChange={handleChangeForm}
                                error={!!errors.age}
                            />
                            {errors.age && (
                                <FormHelperText error>
                                    {errors.age}
                                </FormHelperText>
                            )}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Gender"
                                fullWidth
                                name="gender"
                                value={newPerson.gender}
                                onChange={handleChangeForm}
                                error={!!errors.gender}
                            />
                            {errors.gender && (
                                <FormHelperText error>
                                    {errors.gender}
                                </FormHelperText>
                            )}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Postcode"
                                fullWidth
                                name="postcode"
                                value={newPerson.postcode}
                                onChange={handleChangeForm}
                                error={!!errors.postcode}
                            />
                            {errors.postcode && (
                                <FormHelperText error>
                                    {errors.postcode}
                                </FormHelperText>
                            )}
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mt: 3,
                        }}
                    >
                        <Button
                            variant="outlined"
                            sx={{ mr: 1 }}
                            onClick={handleCloseAdd}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: "#2196f3" }}
                            onClick={handleCreatePerson}
                        >
                            Confirm
                        </Button>
                    </Box>
                </Box>
            </Modal>

            {/* Modal "Edit person" */}
            <Modal open={openEdit} onClose={handleCloseEdit}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{ mb: 2, fontWeight: "bold" }}
                    >
                        Edit person
                    </Typography>
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseEdit}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Name"
                                fullWidth
                                name="name"
                                value={newPerson.name}
                                onChange={handleChangeForm}
                                error={!!errors.name}
                            />
                            {errors.name && (
                                <FormHelperText error>
                                    {errors.name}
                                </FormHelperText>
                            )}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Age"
                                fullWidth
                                name="age"
                                value={newPerson.age}
                                onChange={handleChangeForm}
                                error={!!errors.age}
                            />
                            {errors.age && (
                                <FormHelperText error>
                                    {errors.age}
                                </FormHelperText>
                            )}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Gender"
                                fullWidth
                                name="gender"
                                value={newPerson.gender}
                                onChange={handleChangeForm}
                                error={!!errors.gender}
                            />
                            {errors.gender && (
                                <FormHelperText error>
                                    {errors.gender}
                                </FormHelperText>
                            )}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Postcode"
                                fullWidth
                                name="postcode"
                                value={newPerson.postcode}
                                onChange={handleChangeForm}
                                error={!!errors.postcode}
                            />
                            {errors.postcode && (
                                <FormHelperText error>
                                    {errors.postcode}
                                </FormHelperText>
                            )}
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mt: 3,
                        }}
                    >
                        <Button
                            variant="outlined"
                            sx={{ mr: 1 }}
                            onClick={handleCloseEdit}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: "#2196f3" }}
                            onClick={handleEditPerson}
                        >
                            Confirm
                        </Button>
                    </Box>
                </Box>
            </Modal>

            {/* Modal "View person" */}
            <Modal open={openView} onClose={handleCloseView}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{ mb: 2, fontWeight: "bold" }}
                    >
                        View person
                    </Typography>
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseView}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Name"
                                fullWidth
                                name="name"
                                value={
                                    selectedPerson ? selectedPerson.name : ""
                                }
                                InputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Age"
                                fullWidth
                                name="age"
                                value={selectedPerson ? selectedPerson.age : ""}
                                InputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Gender"
                                fullWidth
                                name="gender"
                                value={
                                    selectedPerson ? selectedPerson.gender : ""
                                }
                                InputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Postcode"
                                fullWidth
                                name="postcode"
                                value={
                                    selectedPerson
                                        ? selectedPerson.postcode
                                        : ""
                                }
                                InputProps={{ readOnly: true }}
                            />
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mt: 3,
                        }}
                    >
                        <Button variant="outlined" onClick={handleCloseView}>
                            Close
                        </Button>
                    </Box>
                </Box>
            </Modal>

            {/* Modal "Delete Confirmation" */}
            <Modal open={openDeleteConfirm} onClose={handleCloseDeleteConfirm}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{ mb: 2, fontWeight: "bold" }}
                    >
                        Confirm Delete
                    </Typography>
                    <Typography sx={{ mb: 2, fontSize: 20 }}>
                        Are you sure you want to delete{" "}
                        <strong>{personToDelete?.name}</strong>?
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mt: 3,
                        }}
                    >
                        <Button
                            variant="outlined"
                            sx={{ mr: 1 }}
                            onClick={handleCloseDeleteConfirm}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleDeletePerson}
                        >
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Modal>

            {/* Snackbar "Delete Success" */}
            <Snackbar
                open={openDeleteSuccess}
                autoHideDuration={3000}
                onClose={handleCloseDeleteSuccess}
            >
                <Alert
                    onClose={handleCloseDeleteSuccess}
                    severity="success"
                    sx={{ width: "100%", fontSize: 20 }}
                >
                    Person deleted successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ListPerson;
