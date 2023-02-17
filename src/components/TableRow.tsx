import { Box, Text } from '@mantine/core';

type StringOrNumber = string | number;

interface Props {
  label: StringOrNumber;
  value: StringOrNumber;
}

function TableRow(props: Props) {
  const { label, value } = props;

  return (
    <Box component="tr" sx={{ textAlign: 'center' }}>
      <td>
        <Text fz="md">{label}</Text>
      </td>
      <td>
        <Text fz="md" fw="500">
          {value}
        </Text>
      </td>
    </Box>
  );
}

export default TableRow;
