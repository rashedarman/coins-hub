import { TextInput } from '@mantine/core';
import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as IconSearch } from '../assets/IconSearch.svg';
import { Coin } from '../interfaces';
import { RootState } from '../store/configureStore';

interface Props {
  onSetFilteredCoins: React.Dispatch<React.SetStateAction<Coin[]>>;
}

function CoinSearch(props: Props) {
  const { onSetFilteredCoins } = props;
  const { coins } = useSelector((state: RootState) => state.coins);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    onSetFilteredCoins(
      coins.filter(({ name }) => name.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  };

  return (
    <TextInput
      onChange={handleSearch}
      size="md"
      placeholder="Search crypto"
      rightSection={<IconSearch />}
    />
  );
}

export default CoinSearch;
