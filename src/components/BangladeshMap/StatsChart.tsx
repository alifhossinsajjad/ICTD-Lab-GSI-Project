import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from 'recharts';
import { Division, bangladeshDivisions } from '../../data/bangladeshDivisions';
import { FaSchool, FaGraduationCap, FaBook, FaChartBar } from 'react-icons/fa';

interface StatsChartProps {
  division: Division | null;
}

export const StatsChart = ({ division }: StatsChartProps) => {
  const activeDivision = division || bangladeshDivisions.find(d => d.id === 'dhaka') || bangladeshDivisions[0];

  const data = [
    {
      name: 'School',
      institutions: activeDivision.stats.school.institutions,
      labs: activeDivision.stats.school.labs,
      icon: <FaSchool />,
      color: '#10b981'
    },
    {
      name: 'College',
      institutions: activeDivision.stats.college.institutions,
      labs: activeDivision.stats.college.labs,
      icon: <FaGraduationCap />,
      color: '#3b82f6'
    },
    {
      name: 'Madrasha',
      institutions: activeDivision.stats.madrasha.institutions,
      labs: activeDivision.stats.madrasha.labs,
      icon: <FaBook />,
      color: '#f59e0b'
    },
    {
      name: 'Total',
      institutions: activeDivision.stats.total.institutions,
      labs: activeDivision.stats.total.labs,
      icon: <FaChartBar />,
      color: '#ef4444'
    },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-emerald-100 animate-in fade-in zoom-in duration-300">
          <p className="text-sm font-bold text-gray-900 mb-2 border-b pb-1">{label} Statistics</p>
          <div className="space-y-1">
            <p className="text-xs flex items-center justify-between gap-4">
              <span className="text-emerald-600 font-medium">Institutions:</span>
              <span className="font-bold text-gray-800">{payload[0].value.toLocaleString()}</span>
            </p>
            <p className="text-xs flex items-center justify-between gap-4">
              <span className="text-rose-500 font-medium">SRDL Labs:</span>
              <span className="font-bold text-gray-800">{payload[1].value.toLocaleString()}</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full bg-white p-8 rounded-[2rem] border-4 border-white shadow-2xl flex flex-col transition-all duration-500 hover:shadow-emerald-200/50 relative overflow-hidden group">
      {/* Background Decoration */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              {activeDivision.name} <span className="text-emerald-500">Division</span>
            </h2>
            <p className="text-sm text-gray-500 font-medium">Infrastructure & Lab Distribution</p>
          </div>
          <div className="bg-emerald-50 p-3 rounded-2xl">
            <FaChartBar className="text-emerald-500 text-xl" />
          </div>
        </div>

        {/* Summary Mini Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
            <p className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 mb-1">Total Institutions</p>
            <p className="text-xl font-black text-gray-900">{activeDivision.stats.total.institutions.toLocaleString()}</p>
          </div>
          <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100/50">
            <p className="text-[10px] uppercase tracking-wider font-bold text-rose-600 mb-1">Total SRDL Labs</p>
            <p className="text-xl font-black text-gray-900">{activeDivision.stats.total.labs.toLocaleString()}</p>
          </div>
        </div>
      </div>
      
      <div className="flex-grow relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barGap={12}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc', radius: 12 }} />
            <Legend 
              verticalAlign="top" 
              align="right"
              iconType="circle"
              wrapperStyle={{ paddingTop: '0px', paddingBottom: '20px', fontSize: '11px', fontWeight: 700 }}
            />
            
            <Bar 
              dataKey="institutions" 
              name="Institutions" 
              fill="#10b981" 
              radius={[6, 6, 0, 0]}
              barSize={32}
              animationDuration={1500}
            >
              <LabelList dataKey="institutions" position="top" style={{ fill: '#10b981', fontSize: 10, fontWeight: 800 }} offset={8} />
            </Bar>
            
            <Bar 
              dataKey="labs" 
              name="SRDL Labs" 
              fill="#f43f5e" 
              radius={[6, 6, 0, 0]}
              barSize={32}
              animationDuration={2000}
            >
              <LabelList dataKey="labs" position="top" style={{ fill: '#f43f5e', fontSize: 10, fontWeight: 800 }} offset={8} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

