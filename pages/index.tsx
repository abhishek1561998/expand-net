import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlockSummary from "../components/blockSummary";
import SiteContainer from "../components/layout/container";
import ListCard from "../components/listcard";
import styles from "../styles/home.module.scss";
import dummyBlockData from "../data/dummyBlockData";
import TransactionSummary from "../components/transactionSummary";
import dummyTransactionData from "../data/dummyTransactionData";
import axios from "axios";
import { Card, Grid } from "@mui/material";

const Home: NextPage = () => {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState<any>();

  // const onSearch = (e:any) => {
  //   e.preventDefault();
  //   console.log(e.target.value)
  // }

  const headers = {
    "x-api-key": "n4BocqLzca39f81kkhwD58qztD74Ky0E2JjJR8oi",
  };

  const getEtherProce = async () => {
    try {
      await axios
        .get(`https://uat.expand.network/chain/getbalance/?address=${search}`, {
          headers,
        })
        .then((response) => {
          if (response.status === 200) {
            setData(response.data.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getEtherProce();
  }, [search]);

  return (
    <main className={styles.home}>
      <section className={styles.home__search_section}>
        <SiteContainer>
          <div className={styles.home__search_form}>
            <p className={styles.home__search_form_title}>
              Welcome to Expand Network Eathereum Blockchain Explorer
            </p>
            <div className={styles.home__search_form_content}>
              <input
                type="text"
                className={styles.home__search_form_input_field}
                placeholder="Search ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Link href="#" passHref>
                <button className={styles.home__search_form_search_button}>
                  <Image src="/search.png" width={30} height={30} />
                </button>
              </Link>
            </div>
          </div>
        </SiteContainer>
      </section>

      {/* //body */}
      <SiteContainer>
        <Card style={{ marginTop: "-20px", marginBottom: "20px" }}>
          <Grid container spacing={2} p={5}>
            {/* <Card> */}
            <Grid item xs={12} sm={4}>
              <Card>
                <div className={styles.home__stats_summary_section_one}>
                  <div className={styles.home__stats_summary_price}>
                    <div className={styles.home__stats_summary_price_icon}>
                      <Image
                        src="/ethereum icon.png"
                        height="20px"
                        width="20px"
                      />
                    </div>
                    <div className={styles.home__stats_summary_price_content}>
                      <p
                        className={
                          styles.home__stats_summary_price_content_title
                        }
                      >
                        Ether Price
                      </p>
                      <p
                        className={
                          styles.home__stats_summary_price_content_value
                        }
                      >
                        $2800
                      </p>
                    </div>
                  </div>
                  {/* <hr className="horizontal-divider" /> */}
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <div className={styles.home__stats_summary_transactions}>
                  <div className={styles.home__stats_summary_transactions_icon}>
                    <Image src="/transaction.png" height="30px" width="30px" />
                  </div>
                  <div
                    className={styles.home__stats_summary_transactions_content}
                  >
                    <div className="">
                      <p
                        className={
                          styles.home__stats_summary_transactions_content_title
                        }
                      >
                        Transactions
                      </p>
                      <p
                        className={
                          styles.home__stats_summary_transactions_content_value
                        }
                      >
                        1,234.56 M <span className="">(15TPS)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <div className={styles.home__stats_summary_section_three}>
                  <div style={{ padding: "20px" }}>
                    $ Balance : {data?.balance ? data?.balance : "--"}
                    {/* <TransactionHistoryChart data={dummyTransactionHistoryData} /> */}
                  </div>
                </div>
              </Card>
            </Grid>

            {/* dshdhsj */}

            <Grid item xs={12} sm={4}>
              <Card>
                <div className={styles.home__stats_summary_marketcap}>
                  <div className={styles.home__stats_summary_marketcap_icon}>
                    <Image src="/globe_icon.png" height="20px" width="20px" />
                  </div>
                  <div className={styles.home__stats_summary_marketcap_content}>
                    <p
                      className={
                        styles.home__stats_summary_marketcap_content_title
                      }
                    >
                      Market Cap
                    </p>
                    <p
                      className={
                        styles.home__stats_summary_marketcap_content_value
                      }
                    >
                      $300,800,000,000
                    </p>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <div className={styles.home__stats_summary_marketcap}>
                  <div className={styles.home__stats_summary_marketcap_icon}>
                    <Image src="/globe_icon.png" height="20px" width="20px" />
                  </div>
                  <div className={styles.home__stats_summary_marketcap_content}>
                    <p
                      className={
                        styles.home__stats_summary_marketcap_content_title
                      }
                    >
                      Med Gas Price
                    </p>
                    <p
                      className={
                        styles.home__stats_summary_marketcap_content_value
                      }
                    >
                      $300,800,000,000
                    </p>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={styles.home__stats_summary_section_three}>
                <div>
                  {/* Balance : {data?.balance ? data?.balance : "--"} */}
                  {/* <TransactionHistoryChart data={dummyTransactionHistoryData} /> */}
                </div>
              </div>
            </Grid>
            {/* </Card> */}
          </Grid>
        </Card>
      </SiteContainer>
      <section className={styles.home__stats_section}>
        <SiteContainer>
          <div className={styles.home__stats_latest}>
            <div className={styles.home__stats_latest_blocks}>
              <ListCard
                title="Latest Blocks"
                link="#"
                buttonText="View all blocks"
              >
                {new Array(10).fill(0).map((_, index) => (
                  <div key={index}>
                    {index !== 0 && <hr className="horizontal-divider" />}
                    <BlockSummary {...dummyBlockData} />
                  </div>
                ))}
              </ListCard>
            </div>
            <div className={styles.home__stats_latest_transactions}>
              <ListCard
                title="Latest Transactions"
                link="#"
                buttonText="View all transactions"
              >
                {new Array(10).fill(0).map((_, index) => (
                  <div key={index}>
                    {index !== 0 && <hr className="horizontal-divider" />}
                    <TransactionSummary {...dummyTransactionData} />
                  </div>
                ))}
              </ListCard>
            </div>
          </div>
        </SiteContainer>
      </section>
    </main>
  );
};

export default Home;
