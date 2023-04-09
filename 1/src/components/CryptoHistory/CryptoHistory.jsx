import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { formatTransactions } from 'utiles/format';
export const CryptoHistory = ({ items }) => {
  return (
    <>
      <BaseTable>
        <THead>
          <tr>
            <Th>№</Th>
            <Th>PRICE</Th>
            <Th>AMOUNT</Th>
            <Th>DATE</Th>
          </tr>
        </THead>

        <tbody>
          {items.map(({ id, price, amount, date }) => {
            return (
              <Tr key={id}>
                <Td>{id}</Td>
                <Td>{price}</Td>
                <Td>{amount}</Td>
                <Td>{formatTransactions(date)}</Td>
              </Tr>
            );
          })}
        </tbody>
      </BaseTable>
    </>
  );
};
// "id": 6,
//     "price": 3190.00,
//     "amount": 0.24843000,
//     "date": "2022-02-01T11:14:11.105Z"
