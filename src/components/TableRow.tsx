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
        <Text size="md">{label}</Text>
      </td>
      <td>
        <Text size="md" fw="600">
          {value}
        </Text>
      </td>
    </Box>
  );
}

export default TableRow;
