import { TextInput } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { useEffect } from 'react';
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

  const [searchTerm, setSearchTerm] = useDebouncedState('', 300);

  useEffect(() => {
    onSetFilteredCoins(
      coins.filter(({ name }) => name.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }, [searchTerm]);

  return (
    <TextInput
      onChange={(event) => setSearchTerm(event.currentTarget.value)}
      size="md"
      placeholder="Search crypto"
      rightSection={<IconSearch />}
    />
  );
}

export default CoinSearch;
