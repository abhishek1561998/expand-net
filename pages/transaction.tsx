import React from "react";
import styles1 from "../styles/home.module.scss";
import styles from "../styles/transaction.module.scss";
import axios from "axios";
import ListCard from "../components/listcard";
import {
  Alert,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import SiteContainer from "../components/layout/container";

const Transaction = () => {
  const [chainId, setChainId] = React.useState("");
  const [transactionHash, setTransactionHash] = React.useState("");
  const [data, setData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);

  const headers = {
    "x-api-key": "n4BocqLzca39f81kkhwD58qztD74Ky0E2JjJR8oi",
  };

  const onsubmit = async () => {
    setLoading(true);
    try {
      await axios
        .get(
          `https://uat.expand.network/chain/gettransaction?chainId=${chainId}&transactionHash=${transactionHash}`,
          {
            headers,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            setData(response.data.data);
            console.log("Response Data ===>", response.data.data);
            setLoading(false);
          }
        });
    } catch (error) {
      alert("Please try again");
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <main className={styles.home}>
      <Box
        style={{
          background: "black",
          height: "400px",
          alignItems: "center",
          marginTop: "3rem",
          paddingTop: "3rem",
        }}
      >
        <SiteContainer>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} />
            <Grid item xs={12} sm={4}>
              <form>
                <Grid
                  container
                  p={3}
                  style={{
                    background: "white",
                    borderRadius: "8px",
                  }}
                >
                  <Grid item xs={12} pb={3}>
                    <TextField
                      label={"Chain Id"}
                      fullWidth
                      size="small"
                      variant="outlined"
                      type="text"
                      value={chainId}
                      onChange={(e) => setChainId(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} pb={3}>
                    <TextField
                      label={"Transaction Hash"}
                      fullWidth
                      size="small"
                      variant="outlined"
                      type="text"
                      value={transactionHash}
                      onChange={(e) => setTransactionHash(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant={"contained"}
                      style={{
                        color: "white",
                        background: "#000",
                        fontSize: "12px",
                      }}
                      onClick={() => onsubmit()}
                    >
                      {!loading ? "Get Transaction" : "loading ...."}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={12} sm={4} />
          </Grid>
        </SiteContainer>
      </Box>
      <Box
        className={styles1.home__stats_latest_transactions}
        style={{ width: "90%", margin: "auto", marginTop: "-80px" }}
      >
        <ListCard title="Transactions" link="#" buttonText="">
          <>
            <List>
              <ListItem divider dense>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <ListItemText
                      // style={{ flexBasis: "25%" }}
                      primary={
                        <Typography variant={"subtitle1"}>
                          Transaction Hash :
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <ListItemText
                      style={{
                        color: "gray",
                      }}
                      primary={
                        <span style={{ wordWrap: "break-word" }}>
                          {!data.hash ? "--" : data.hash}
                        </span>
                      }
                    />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem divider dense>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <ListItemText
                      // style={{ flexBasis: "25%" }}
                      primary={
                        <Typography variant={"subtitle1"}>Input :</Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <ListItemText
                      style={{
                        color: "gray",
                      }}
                      primary={
                        <span style={{ wordWrap: "break-word" }}>
                          {!data.input ? "--" : data.input}
                        </span>
                      }
                    />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem divider dense>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <ListItemText
                      primary={
                        <Typography variant={"subtitle1"}>
                          Block Number :
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <ListItemText
                      style={{
                        color: "gray",
                      }}
                      primary={
                        <span style={{ wordWrap: "break-word" }}>
                          {!data.blockNumber ? "--" : data.blockNumber}
                        </span>
                      }
                    />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem divider dense>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <ListItemText
                      primary={
                        <Typography variant={"subtitle1"}>From :</Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <ListItemText
                      style={{
                        color: "gray",
                      }}
                      primary={
                        <span style={{ wordWrap: "break-word" }}>
                          {!data.from ? "--" : data.from}
                        </span>
                      }
                    />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem divider dense>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <ListItemText
                      primary={
                        <Typography variant={"subtitle1"}>To :</Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <ListItemText
                      style={{
                        color: "gray",
                      }}
                      primary={
                        <span style={{ wordWrap: "break-word" }}>
                          {!data.to ? "--" : data.to}
                        </span>
                      }
                    />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem divider dense>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <ListItemText
                      primary={
                        <Typography variant={"subtitle1"}>
                          Transaction Fees :
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <ListItemText
                      style={{
                        color: "gray",
                      }}
                      primary={
                        <>
                          {!data.transactionFees ? "--" : data.transactionFees}
                        </>
                      }
                    />
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem divider dense>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <ListItemText
                      primary={
                        <Typography variant={"subtitle1"}>
                          Transaction Status :
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <ListItemText
                      style={{
                        color: "gray",
                      }}
                      primary={
                        <>
                          {!data.transactionStatus
                            ? "--"
                            : data.transactionStatus}
                        </>
                      }
                    />
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem divider dense>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <ListItemText
                      primary={
                        <Typography variant={"subtitle1"}>Gas</Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <ListItemText
                      style={{
                        color: "gray",
                      }}
                      primary={<>{!data.gas ? "--" : data.gas}</>}
                    />
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem divider dense>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <ListItemText
                      primary={
                        <Typography variant={"subtitle1"}>Value</Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <ListItemText
                      primary={<>{!data.value ? "--" : data.value}</>}
                    />
                  </Grid>
                </Grid>
              </ListItem>
              {/* <ListItem
                
                divider
                dense
              >
               
              </ListItem> */}
            </List>
          </>
        </ListCard>
      </Box>
    </main>
  );
};

export default Transaction;
