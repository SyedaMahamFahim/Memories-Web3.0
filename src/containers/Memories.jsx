import React, { useContext } from "react";
import { Heading, Box } from "@chakra-ui/react";
import { MemoryCard } from "../components";
import { TransactionContext } from "../context/TransactionContext";

const Memories = () => {
  const { transactions } = useContext(TransactionContext);
  console.log("All Memories from memory contract", transactions);
  return (
    <>
      {transactions.length > 0 && (
        <>
          <Box
            marginTop={"5rem"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            alignContent="center"
          >
            <Heading fontWeight={600} fontSize={"3xl"} mb={4} align={"center"}>
              All the memories that you have created.
            </Heading>
          </Box>

          <Box
            style={{
              display: "flex",
              alignContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {transactions &&
              transactions.map((transaction) => (
                <MemoryCard
                  key={transaction.id}
                  title={transaction.title}
                  description={transaction.description}
                />
              ))}

          </Box>
        </>
      )}
    </>
  );
};

export default Memories;
