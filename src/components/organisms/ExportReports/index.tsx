import { Box, Modal, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TextField from "../../atoms/TextField";
import { rows } from "../../../constants";

const Wrapper = styled(Box)(`
    width:100vw;
    height:100vh;
    padding:2rem;
`);

const TableContainer = styled(Box)(`
    background:white;
    width:65vw;
    height:80vh;
    padding:2rem;
    border-radius:.5rem;
`);

const ModalStyled = styled(Modal)(`
    display:flex;
    align-items:center;
    justify-content:center;

`);

const DateContainer = styled(Box)(`
    margin-top:2rem;
    width:20vw;
    display:flex;
    justify-content:space-between;
`);

const ButtonsContainer = styled(Box)(`
    width:100%;
    margin-top:3rem;
    display:flex;
    flex-direction:row-reverse;
    margin-left:auto;
    .MuiButton-root{
        margin-left:10px;
    }
`);

interface Range {
  from: string;
  to: string;
}
interface Report {
  id: number;
  reportAuthor: string;
  reportDate: string;
  reportInfo: string;
}

const ExportReports = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [reports, setReports] = useState<Report[]>([]);
  const [selectedReportsModal, setSelectedReportsModal] =
    useState<boolean>(false);
  const [dateRange, setDateRange] = useState<Range>({ from: "", to: "" });

  const cols: GridColDef[] = [
    { field: "reportAuthor", headerName: "Author", flex: 1 },
    { field: "reportInfo", headerName: "Info", flex: 1 },
    { field: "reportDate", headerName: "Date", flex: 1 }
  ];

  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDateRange((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const submitReports = () => {
    const fromDate = new Date(dateRange.from);
    const toDate = new Date(dateRange.to);
    const selectedRows = rows.filter((item) => {
      const currDate = new Date(item.reportDate);
      return currDate >= fromDate && currDate <= toDate;
    });
    setReports(selectedRows);
  };

  return (
    <Wrapper>
      <Button
        variant="contained"
        sx={{ textTransform: "capitalize" }}
        onClick={() => setOpenModal(true)}
      >
        Export Reports
      </Button>
      <ModalStyled open={openModal} onClose={() => setOpenModal(false)}>
        <TableContainer>
          <Typography variant="h1">Reports</Typography>
          <DataGrid
            sx={{ height: "40vh" }}
            columns={cols}
            rows={rows}
            hideFooter
            hideFooterPagination
            disableColumnMenu
          />
          <DateContainer>
            <Box sx={{ width: "200px" }}>
              <Typography variant="body1">From</Typography>
              <TextField
                type="date"
                fullWidth
                name="from"
                onChange={handleDateChange}
              />
            </Box>
            <Box sx={{ width: "200px" }}>
              <Typography variant="body1" marginLeft={"10px"}>
                To
              </Typography>
              <TextField
                type="date"
                fullWidth
                sx={{ marginLeft: "10px" }}
                name="to"
                onChange={handleDateChange}
              />
            </Box>
          </DateContainer>
          <ButtonsContainer>
            <Button
              variant="contained"
              disabled={dateRange.from && dateRange.to ? false : true}
              onClick={() => {
                setOpenModal(() => {
                  submitReports();
                  return false;
                });
                setSelectedReportsModal(true);
              }}
            >
              Submit
            </Button>
            <Button value="outlined" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </ButtonsContainer>
        </TableContainer>
      </ModalStyled>
      <ModalStyled
        open={selectedReportsModal}
        onClose={() => setSelectedReportsModal(false)}
      >
        <TableContainer>
          <Typography variant="h1">Selected Reports</Typography>
          <DataGrid
            sx={{ height: "30vh" }}
            columns={cols}
            rows={reports}
            hideFooter
            hideFooterPagination
            disableColumnMenu
          />
          <ButtonsContainer>
            <Button
              variant="contained"
              onClick={() => {
                alert("successfully submitted");
                setSelectedReportsModal(false);
              }}
            >
              Confirm
            </Button>
            <Button
              value="outlined"
              onClick={() => setSelectedReportsModal(false)}
            >
              Cancel
            </Button>
          </ButtonsContainer>
        </TableContainer>
      </ModalStyled>
    </Wrapper>
  );
};

export default ExportReports;
