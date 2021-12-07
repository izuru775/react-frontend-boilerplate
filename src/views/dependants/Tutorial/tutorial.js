import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { EnhancedTable, EnhancedModal } from "components/index";
import { useState } from "react";

export const Tutorial = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const dialogContent = useState("This is a success");

  let sampleModal = (
    <Card>
      <CardContent>
        <Typography>Enhance modal example</Typography>
        <EnhancedModal
          dialogTitle="sample Modal"
          dialogContent={dialogContent}
          isOpen={modalStatus}
          onSubmit={() => {
            setModalStatus(false);
          }}
          onClose={() => {
            setModalStatus(false);
          }}
        />
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            modalStatus ? setModalStatus(false) : setModalStatus(true);
          }}
          Open
        >Click</Button>
      </CardActions>
    </Card>
  );
  let sampleTable = (
    <EnhancedTable
      data={[
        {
          name: "Sodi",
          Age: "30",
          hobby: "Fishing",
        },
        {
          name: "Emily",
          Age: "25",
          hobby: "Gardning",
        },
        {
          name: "Veera",
          Age: "22",
          hobby: "Swimming",
        },
      ]}
    />
  );
  let content = (
    <Box>
      <Typography>Hello ,World</Typography>
      {sampleTable}
      {sampleModal}
    </Box>
  );

  return content;
};
