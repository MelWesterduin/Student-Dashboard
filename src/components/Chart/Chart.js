import { useParams } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { averageDifficultyAndFun } from '../utils/averageDifficultyAndFun';
import students from '../data/assignment-gradings.json';
import CustomizedAxisTick from './CustomizedAxisTick';

const Chart = ({ hide }) => {
  const { id } = useParams();

  const chartData = id
    ? students.filter((student) => student.naam === id)
    : averageDifficultyAndFun();

  return (
    <div>
      <BarChart
        width={2200}
        height={550}
        data={chartData}
        margin={{
          top: 15,
          right: 30,
          left: 25,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="opdracht"
          interval={0}
          height={165}
          tick={<CustomizedAxisTick />}
        />
        <YAxis domain={[0, 6]} />
        <Tooltip />
        {hide !== 'moeilijk' && <Bar dataKey="leuk" fill="orange" />}
        {hide !== 'leuk' && <Bar dataKey="moeilijkheid" fill="pink" />}

        <Legend />
      </BarChart>
    </div>
  );
};

export default Chart;
