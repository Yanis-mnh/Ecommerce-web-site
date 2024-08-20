import { ChevronDownIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";

const isEmptyChart = (chart: string[]): boolean => {
  return chart.length === 0 ? true : false;
};

const Chart = () => {
  const [chart, setChart] = useState(["potato", "test", "aaah"]);
  const list_product = chart.map((x) => (
    <MenuItem>
      {" "}
      {x} <DeleteIcon />{" "}
    </MenuItem>
  ));
  let i = 0;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Chart
      </MenuButton>
      <MenuList key={i}>
        {list_product}{" "}
        {!isEmptyChart(chart) && (
          <MenuItem
            as={Button}
            onClick={() => {
              setChart([]);
            }}
          >
            delet All
          </MenuItem>
        )}
        {isEmptyChart(chart) && <Center>Empty Chart</Center>}
      </MenuList>
    </Menu>
  );
};
export default Chart;
