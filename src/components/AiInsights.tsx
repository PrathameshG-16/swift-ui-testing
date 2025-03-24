
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const AiInsights = () => {
  return (
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-2">AI Integration</Badge>
          <h2 className="text-3xl font-bold mb-4">Intelligent Testing Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Harness the power of artificial intelligence to optimize your testing strategy and identify issues before they impact users.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">AI-Powered Test Generation</h3>
          <p className="text-muted-foreground mb-6">
            Our AI engine analyzes your application structure and user flows to automatically generate comprehensive test cases that cover critical paths and edge cases.
          </p>
          <ul className="space-y-3">
            {[
              "Identify critical user journeys automatically",
              "Generate test cases based on application behavior",
              "Optimize test coverage with minimal redundancy",
              "Adapt tests as your application evolves"
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden border shadow-lg"
        >
          <div className="bg-card p-2">
            <div className="bg-muted rounded-md p-4 h-72 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/20">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                    <path d="M12 2a9.96 9.96 0 0 0-8.48 15.27"></path>
                    <path d="M12 22c5.52 0 10-4.48 10-10"></path>
                  </svg>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-sm text-muted-foreground text-center">AI Test Coverage Visualization</p>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Visual representation of AI-generated test coverage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mb-16">
        <Tabs defaultValue="predictive" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="predictive">Predictive Analysis</TabsTrigger>
              <TabsTrigger value="self-healing">Self-Healing</TabsTrigger>
              <TabsTrigger value="anomaly">Anomaly Detection</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="predictive">
            <Card>
              <CardHeader>
                <CardTitle>Predictive Test Analysis</CardTitle>
                <CardDescription>Anticipate potential issues before they occur in production</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <p className="mb-4">
                      Our AI continuously analyzes test results and application behavior to identify patterns and predict potential failures before they impact users.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>Identify high-risk areas in your application</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>Forecast performance degradation</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>Suggest preemptive optimizations</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">87%</div>
                      <p className="text-sm text-muted-foreground">Accuracy in predicting test failures</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="self-healing">
            <Card>
              <CardHeader>
                <CardTitle>Self-Healing Test Suite</CardTitle>
                <CardDescription>Tests that adapt to UI changes automatically</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <p className="mb-4">
                      Our framework employs machine learning to recognize UI elements even when selectors change, automatically updating tests to prevent false failures.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>Reduce test maintenance by up to 70%</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>Adapt to UI refactoring automatically</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>Maintain continuous testing through UI changes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">95%</div>
                      <p className="text-sm text-muted-foreground">Recovery rate for broken selectors</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="anomaly">
            <Card>
              <CardHeader>
                <CardTitle>Smart Anomaly Detection</CardTitle>
                <CardDescription>Identify unexpected behavior with machine learning</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <p className="mb-4">
                      Our AI engine learns normal application behavior and alerts you when unexpected deviations occur, even for conditions you didn't explicitly test for.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>Detect subtle performance regressions</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>Identify unexpected visual changes</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>Flag unusual application behavior</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">92%</div>
                      <p className="text-sm text-muted-foreground">Detection rate for unknown issues</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
