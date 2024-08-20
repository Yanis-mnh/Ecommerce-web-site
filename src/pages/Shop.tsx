import { Grid, GridItem } from "@chakra-ui/react";

const Shop = () => {
  return (
    <>
      <Grid
        gridTemplateColumns={"repeat(5, 1fr)"}
        gridTemplateRows={"repeat(4,1fr)"}
        gap={"1em"}
        height={"60vh"}
        margin={"1em 0"}
      >
        <GridItem gridArea={"1 / 1 / 6 / 4"} bg="blue.500">
          test0
        </GridItem>
        <GridItem gridArea={" 1 / 4 / 3 / 6"}>test1</GridItem>
        <GridItem gridArea={" 3 / 4 / 6 / 6"}>test2</GridItem>
      </Grid>
    </>
  );
};

export default Shop;
