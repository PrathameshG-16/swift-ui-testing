
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export const ReportMetrics = () => {
  const testStatusData = [
    { name: 'Login', passed: 42, failed: 3, skipped: 1 },
    { name: 'Search', passed: 38, failed: 2, skipped: 0 },
    { name: 'Checkout', passed: 35, failed: 5, skipped: 2 },
    { name: 'Admin', passed: 30, failed: 1, skipped: 1 },
    { name: 'User Profile', passed: 25, failed: 0, skipped: 0 },
  ];

  const performanceData = [
    { name: 'Mon', duration: 1.2 },
    { name: 'Tue', duration: 1.3 },
    { name: 'Wed', duration: 1.1 },
    { name: 'Thu', duration: 1.4 },
    { name: 'Fri', duration: 1.2 },
    { name: 'Sat', duration: 1.0 },
    { name: 'Sun', duration: 0.9 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Test Results by Module</CardTitle>
          <CardDescription>Distribution of test results across application modules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={testStatusData}
                stackOffset="expand"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#888" strokeOpacity={0.1} />
                <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="passed" stackId="a" fill="#4ade80" radius={[4, 4, 0, 0]} />
                <Bar dataKey="failed" stackId="a" fill="#f87171" radius={[4, 4, 0, 0]} />
                <Bar dataKey="skipped" stackId="a" fill="#fbbf24" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Test Performance Trend</CardTitle>
          <CardDescription>Average test execution time over the past week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={performanceData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#888" strokeOpacity={0.1} />
                <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis 
                  stroke="#888" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `${value}s`}
                />
                <Tooltip formatter={(value) => [`${value}s`, 'Duration']} />
                <Line
                  type="monotone"
                  dataKey="duration"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
