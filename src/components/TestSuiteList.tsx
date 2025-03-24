
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export const TestSuiteList = () => {
  const testSuites = [
    {
      id: 1,
      name: 'Authentication Tests',
      passed: 18,
      failed: 2,
      skipped: 0,
      duration: '1m 24s',
      lastRun: '2 hours ago',
      status: 'failed'
    },
    {
      id: 2,
      name: 'Product Search Tests',
      passed: 24,
      failed: 0,
      skipped: 1,
      duration: '2m 05s',
      lastRun: '3 hours ago',
      status: 'passed'
    },
    {
      id: 3,
      name: 'Checkout Flow Tests',
      passed: 15,
      failed: 1,
      skipped: 2,
      duration: '3m 12s',
      lastRun: '4 hours ago',
      status: 'failed'
    },
    {
      id: 4,
      name: 'User Profile Tests',
      passed: 12,
      failed: 0,
      skipped: 0,
      duration: '45s',
      lastRun: '1 day ago',
      status: 'passed'
    },
    {
      id: 5,
      name: 'Admin Dashboard Tests',
      passed: 32,
      failed: 0,
      skipped: 3,
      duration: '4m 18s',
      lastRun: '1 day ago',
      status: 'passed'
    }
  ];

  const statusColors = {
    passed: 'bg-green-500',
    failed: 'bg-red-500',
    skipped: 'bg-yellow-500'
  };

  const getBadgeVariant = (status) => {
    switch (status) {
      case 'passed': return 'success';
      case 'failed': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Test Suites</CardTitle>
        <CardDescription>Recent test suite executions and their results</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {testSuites.map((suite) => (
              <div 
                key={suite.id} 
                className="p-4 border rounded-md hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`inline-block w-2 h-2 rounded-full ${statusColors[suite.status]}`}></span>
                      <h3 className="font-medium">{suite.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Last run: {suite.lastRun}</p>
                  </div>
                  <Badge variant={getBadgeVariant(suite.status)}>
                    {suite.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Passed</span>
                    <span className="font-medium text-green-500">{suite.passed}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Failed</span>
                    <span className="font-medium text-red-500">{suite.failed}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Skipped</span>
                    <span className="font-medium text-yellow-500">{suite.skipped}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-muted-foreground">Duration: {suite.duration}</span>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
