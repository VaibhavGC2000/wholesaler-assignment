import { Box, Button, Divider } from "@mui/material";
import React from "react";
import CustomTypo from "../customComponents/CustomTypo";
import CustomButton from "../customComponents/CustomButton";
import funnel from "../icons/funnel.png";
import Table from "./WholesalerTable";
import WholesalerTable from "./WholesalerTable";
import AddModal from "../Modals/AddModal";
import DeleteModal from "../Modals/DeleteModal";
import { useState } from "react";
import FilterModal from "../Modals/FilterModal";

export default function WholeSaler() {
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <Box sx={{ marginTop: "128px", marginLeft: "63px" }}>
        <CustomTypo
          fontWeight="600"
          fontSize="20px"
          color="#4D47C3"
          fontFamily="Montserrat"
        >
          Wholesalers
        </CustomTypo>
        <Box sx={{ marginLeft: "1281px", marginTop: "13px" }}>
          <CustomButton
            width="82px"
            height="36px"
            onClick={() => setOpen(true)}
          >
            Add
          </CustomButton>
          <Button
            onClick={() => {
              setOpenFilter(true);
            }}
            sx={{
              maxWidth: "124px",
              maxHeight: "36px",
              borderRadius: "6px",
              gap: "10px",
              backgroundColor: "#4D47C3",
              color: "#FFFFFF",
              marginLeft: "28px",
              padding: "9px, 25px, 9px, 25px",
              textTransform: "capitalize",
            }}
          >
            <img src={funnel} alt="funnel" width="18px" height="15.3px" />
            Filters
          </Button>
        </Box>
        <Divider
          sx={{
            minWidth: "1566px",
            color: "#CACACA",
            marginTop: "26px",
            marginLeft: "-27px",
          }}
        />
        <WholesalerTable />
      </Box>
      <AddModal open={open} setOpen={setOpen} />
      <FilterModal openFilter={openFilter} setOpenFilter={setOpenFilter} />
    </>
  );
}
