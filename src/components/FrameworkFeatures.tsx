
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const FrameworkFeatures = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
          <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
          <path d="M12 8v-2"></path>
          <path d="M12 18v-2"></path>
          <path d="M8 12h-2"></path>
          <path d="M18 12h-2"></path>
        </svg>
      ),
      title: "AI-Powered Test Analytics",
      description: "Leverage machine learning to identify test patterns, predict failures, and optimize test coverage automatically."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="m6 17 5-5-5-5"></path>
          <path d="m13 17 5-5-5-5"></path>
        </svg>
      ),
      title: "Parallel Test Execution",
      description: "Run tests concurrently across multiple browsers and devices to dramatically reduce execution time."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M9 11V6a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v0"></path>
          <path d="M5 15h14"></path>
          <path d="M17 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        </svg>
      ),
      title: "Self-Healing Tests",
      description: "Tests automatically adapt to UI changes, reducing maintenance overhead and preventing false failures."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <rect width="16" height="16" x="4" y="4" rx="2"></rect>
          <rect width="6" height="6" x="9" y="9" rx="1"></rect>
          <path d="M15 4v2"></path>
          <path d="M15 18v2"></path>
          <path d="M4 15h2"></path>
          <path d="M18 15h2"></path>
        </svg>
      ),
      title: "Visual Regression Testing",
      description: "Detect visual UI changes with pixel-perfect comparison and AI-based anomaly detection."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M2 9.5V12h6.5"></path>
          <path d="M2 12v2.5H8"></path>
          <path d="M8 19h8"></path>
          <path d="M22 12h-8"></path>
          <path d="M16 5h-4"></path>
          <path d="M22 12v3a4 4 0 0 1-4 4h-4"></path>
          <path d="M18 12V9a4 4 0 0 0-4-4h-1"></path>
        </svg>
      ),
      title: "Elegant Reporting",
      description: "Beautiful, interactive reports with detailed analytics, trends, and actionable insights."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M12 2H2v10h10V2Z"></path>
          <path d="M12 12h10v10H12V12Z"></path>
          <path d="M22 2h-5v5h5V2Z"></path>
          <path d="M7 12H2v5h5v-5Z"></path>
        </svg>
      ),
      title: "Seamless Integrations",
      description: "Integrate with your CI/CD pipeline, test management tools, and communication platforms effortlessly."
    }
  ];

  return (
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-2">Framework Features</Badge>
          <h2 className="text-3xl font-bold mb-4">Powerful Testing Made Simple</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our framework combines sophisticated technology with an elegant, intuitive interface to deliver an exceptional testing experience.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover-lift">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Implementation Complexity</span>
                  <div className="flex items-center">
                    {Array(3).fill(0).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ml-1 ${i < 2 ? 'bg-primary' : 'bg-muted'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
