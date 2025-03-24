
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4">Advanced UI Testing Framework</Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Elevate QA Engineering with <span className="text-primary">Intelligent</span> Testing
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A sophisticated Java-based UI testing framework designed for modern applications. 
            Seamlessly integrating AI analytics for smarter, faster, and more reliable testing.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" className="rounded-full px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              View Documentation
            </Button>
          </motion.div>
          
          <motion.div
            className="relative bg-card rounded-xl shadow-lg overflow-hidden border"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="absolute top-0 left-0 right-0 h-6 bg-muted flex items-center px-3 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="pt-8 pb-4 px-4 text-left">
              <pre className="language-java text-sm overflow-x-auto">
                <code>{`import org.qualitywave.core.TestSuite;
import org.qualitywave.ai.AnalysisEngine;
import org.qualitywave.report.AllureReporting;

public class E2ETests {

    @Test
    public void completeUserJourney() {
        // Initialize framework with AI-driven test analysis
        TestSuite suite = new TestSuite("User Journey")
            .withAIAnalysis(AnalysisEngine.create()
                .withLearningEnabled(true)
                .withPredictiveHealing(true))
            .withReporting(new AllureReporting());
            
        // Define test flow with intelligent waits and assertions
        new LoginPage(driver)
            .login("testuser", "password")
            .verifyDashboardLoaded()
            .navigateToUserProfile()
            .updateUserDetails(new UserData("Test User", "test@example.com"))
            .verifyUpdateSuccess()
            .logout();
            
        // AI-powered test verification and reporting
        suite.completeTest();
    }
}`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </motion.div>
    </section>
  );
};
