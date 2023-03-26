import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const iconArr = [
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <FaRegThumbsUp />,
  <GiTreeDoor />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(({ id, title, total }, index) => {
          // console.log(iconArr)
          // console.log(index)
          // console.log(iconArr[index])
          return (
            <StatisticItem
              key={id}
              title={title}
              total={total}
              icon={iconArr[index]}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};
