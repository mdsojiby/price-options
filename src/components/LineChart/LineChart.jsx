import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentMarks = [
        { id: 1, name: "Alice", mathMarks: 85, physicsMarks: 78, chemistryMarks: 82 },
        { id: 2, name: "Bob", mathMarks: 78, physicsMarks: 74, chemistryMarks: 80 },
        { id: 3, name: "Charlie", mathMarks: 92, physicsMarks: 88, chemistryMarks: 91 },
        { id: 4, name: "David", mathMarks: 88, physicsMarks: 82, chemistryMarks: 85 },
        { id: 5, name: "Emma", mathMarks: 75, physicsMarks: 70, chemistryMarks: 72 },
        { id: 6, name: "Frank", mathMarks: 83, physicsMarks: 79, chemistryMarks: 84 },
        { id: 7, name: "Grace", mathMarks: 89, physicsMarks: 85, chemistryMarks: 88 },
        { id: 8, name: "Hannah", mathMarks: 95, physicsMarks: 90, chemistryMarks: 94 },
        { id: 9, name: "Ian", mathMarks: 80, physicsMarks: 76, chemistryMarks: 78 },
        { id: 10, name: "Jack", mathMarks: 91, physicsMarks: 87, chemistryMarks: 90 }
      ];
    return (
        <div>
             <LChart width={1000} height={400} data={studentMarks}>
             <Line dataKey="mathMarks" stroke='yellow'></Line>
             <Line dataKey="physicsMarks" stroke='red'></Line>
             <XAxis dataKey="name"></XAxis>
             <YAxis></YAxis>


             </LChart>
            

        </div>
    );
};

export default LineChart;