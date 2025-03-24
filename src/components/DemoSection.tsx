
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeViewer } from './CodeViewer';

export const DemoSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    { id: 1, name: 'Setup' },
    { id: 2, name: 'Page Objects' },
    { id: 3, name: 'Test Case' },
    { id: 4, name: 'Execution' },
    { id: 5, name: 'Reports' }
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
          <Badge variant="outline" className="mb-2">Interactive Demo</Badge>
          <h2 className="text-3xl font-bold mb-4">See the Framework in Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow this step-by-step demonstration to understand how our testing framework simplifies complex UI testing.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {steps.map((step) => (
          <Button
            key={step.id}
            variant={activeStep === step.id ? "default" : "outline"}
            onClick={() => setActiveStep(step.id)}
            className="rounded-full px-6"
          >
            <span className="mr-2">{step.id}</span>
            {step.name}
          </Button>
        ))}
      </div>

      <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
        {activeStep === 1 && (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">1. Setting Up the Framework</h3>
            <p className="mb-6 text-muted-foreground">
              Get started by setting up the framework with Maven dependencies and basic configuration.
            </p>
            
            <Tabs defaultValue="maven" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="maven">Maven Dependencies</TabsTrigger>
                <TabsTrigger value="config">Configuration</TabsTrigger>
              </TabsList>
              
              <TabsContent value="maven">
                <CodeViewer
                  language="xml"
                  code={`<dependencies>
  <!-- Core dependencies -->
  <dependency>
    <groupId>org.qualitywave</groupId>
    <artifactId>qualitywave-core</artifactId>
    <version>2.3.1</version>
  </dependency>
  
  <!-- Selenium WebDriver -->
  <dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>4.15.0</version>
  </dependency>
  
  <!-- TestNG for test execution -->
  <dependency>
    <groupId>org.testng</groupId>
    <artifactId>testng</artifactId>
    <version>7.8.0</version>
  </dependency>
  
  <!-- Allure for reporting -->
  <dependency>
    <groupId>io.qameta.allure</groupId>
    <artifactId>allure-testng</artifactId>
    <version>2.24.0</version>
  </dependency>
  
  <!-- AI module for intelligent testing -->
  <dependency>
    <groupId>org.qualitywave</groupId>
    <artifactId>qualitywave-ai</artifactId>
    <version>1.8.2</version>
  </dependency>
</dependencies>`}
                />
              </TabsContent>
              
              <TabsContent value="config">
                <CodeViewer
                  language="java"
                  code={`package com.example.config;

import org.qualitywave.core.Configuration;
import org.qualitywave.core.WebDriverManager;
import org.qualitywave.ai.AIAnalysisEngine;
import org.qualitywave.reporting.ReportingConfig;

public class TestConfig {

  public static void initialize() {
    // Configure framework with smart defaults
    Configuration.builder()
      .withBaseUrl("https://example-app.com")
      .withImplicitWait(10)
      .withScreenshotOnFailure(true)
      .withRetryFailedTests(2)
      .build();
    
    // Setup Webdriver
    WebDriverManager.setup()
      .withBrowser("chrome")
      .withHeadless(false)
      .withWindowSize(1920, 1080);
    
    // Initialize AI capabilities
    AIAnalysisEngine.initialize()
      .withSelfHealing(true)
      .withSmartWaits(true)
      .withLearningEnabled(true);
    
    // Setup reporting
    ReportingConfig.setup()
      .withAllure()
      .withSlack("#test-results")
      .withHistoricalData(true);
  }
}`}
                />
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeStep === 2 && (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">2. Creating Page Objects</h3>
            <p className="mb-6 text-muted-foreground">
              Define page objects to encapsulate UI elements and interactions for better maintainability.
            </p>
            
            <CodeViewer
              language="java"
              code={`package com.example.pages;

import org.qualitywave.core.BasePage;
import org.qualitywave.core.ElementFinder;
import org.qualitywave.core.annotations.PageObject;
import org.qualitywave.core.wait.SmartWait;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

@PageObject
public class LoginPage extends BasePage {
  
  @FindBy(id = "username")
  private WebElement usernameField;
  
  @FindBy(id = "password")
  private WebElement passwordField;
  
  @FindBy(css = "button[type='submit']")
  private WebElement loginButton;
  
  @FindBy(css = ".error-message")
  private WebElement errorMessage;
  
  private final ElementFinder elementFinder;
  private final SmartWait smartWait;
  
  public LoginPage(WebDriver driver) {
    super(driver);
    this.elementFinder = new ElementFinder(driver);
    this.smartWait = new SmartWait(driver);
  }
  
  public LoginPage enterUsername(String username) {
    // AI-enhanced element interaction with smart waits
    smartWait.untilClickable(usernameField).clear();
    usernameField.sendKeys(username);
    return this;
  }
  
  public LoginPage enterPassword(String password) {
    smartWait.untilClickable(passwordField).clear();
    passwordField.sendKeys(password);
    return this;
  }
  
  public DashboardPage clickLoginButton() {
    smartWait.untilClickable(loginButton).click();
    return new DashboardPage(driver);
  }
  
  public DashboardPage login(String username, String password) {
    return enterUsername(username)
      .enterPassword(password)
      .clickLoginButton();
  }
  
  public String getErrorMessage() {
    return smartWait.untilVisible(errorMessage).getText();
  }
  
  public boolean isLoginButtonEnabled() {
    return loginButton.isEnabled();
  }
  
  @Override
  public boolean isLoaded() {
    return elementFinder.isPresent(usernameField) && 
           elementFinder.isPresent(passwordField) &&
           elementFinder.isPresent(loginButton);
  }
}`}
            />
          </div>
        )}

        {activeStep === 3 && (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">3. Writing Test Cases</h3>
            <p className="mb-6 text-muted-foreground">
              Create expressive test cases using the framework's fluent API and TestNG annotations.
            </p>
            
            <CodeViewer
              language="java"
              code={`package com.example.tests;

import com.example.pages.LoginPage;
import com.example.pages.DashboardPage;
import com.example.data.TestDataProvider;
import com.example.config.TestConfig;

import org.qualitywave.core.BaseTest;
import org.qualitywave.core.annotations.TestInfo;
import org.qualitywave.ai.TestAnalytics;

import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import org.testng.Assert;

import io.qameta.allure.Feature;
import io.qameta.allure.Severity;
import io.qameta.allure.SeverityLevel;
import io.qameta.allure.Story;

@Feature("Authentication")
public class LoginTests extends BaseTest {
  
  private LoginPage loginPage;
  private TestAnalytics analytics;
  
  @BeforeClass
  public void setUp() {
    TestConfig.initialize();
    loginPage = new LoginPage(getDriver());
    analytics = new TestAnalytics();
  }
  
  @Test(dataProvider = "validCredentials", dataProviderClass = TestDataProvider.class)
  @Severity(SeverityLevel.CRITICAL)
  @Story("User can login with valid credentials")
  @TestInfo(owner = "QA Team", priority = "High")
  public void testValidLogin(String username, String password) {
    // Start analytics for this test
    analytics.startMonitoring("validLogin");
    
    // Perform login
    DashboardPage dashboardPage = loginPage
        .enterUsername(username)
        .enterPassword(password)
        .clickLoginButton();
    
    // Verify dashboard loaded successfully
    Assert.assertTrue(dashboardPage.isLoaded(), "Dashboard page did not load after login");
    Assert.assertEquals(dashboardPage.getWelcomeMessage(), "Welcome, " + username);
    Assert.assertTrue(dashboardPage.isUserLoggedIn(), "User should be logged in");
    
    // End analytics to collect performance metrics
    analytics.stopMonitoring();
  }
  
  @Test(dataProvider = "invalidCredentials", dataProviderClass = TestDataProvider.class)
  @Severity(SeverityLevel.NORMAL)
  @Story("User cannot login with invalid credentials")
  @TestInfo(owner = "QA Team", priority = "Medium")
  public void testInvalidLogin(String username, String password, String expectedError) {
    loginPage
        .enterUsername(username)
        .enterPassword(password)
        .clickLoginButton();
    
    Assert.assertEquals(loginPage.getErrorMessage(), expectedError);
    Assert.assertTrue(loginPage.isLoaded(), "Should remain on login page");
  }
  
  @Test
  @Severity(SeverityLevel.MINOR)
  @Story("Login button is disabled until form is valid")
  @TestInfo(owner = "QA Team", priority = "Low")
  public void testLoginButtonState() {
    loginPage
        .enterUsername("")
        .enterPassword("");
    
    Assert.assertFalse(loginPage.isLoginButtonEnabled(), 
        "Login button should be disabled when fields are empty");
    
    loginPage
        .enterUsername("user")
        .enterPassword("");
    
    Assert.assertFalse(loginPage.isLoginButtonEnabled(), 
        "Login button should be disabled when password is empty");
    
    loginPage
        .enterUsername("")
        .enterPassword("pass");
    
    Assert.assertFalse(loginPage.isLoginButtonEnabled(), 
        "Login button should be disabled when username is empty");
    
    loginPage
        .enterUsername("user")
        .enterPassword("pass");
    
    Assert.assertTrue(loginPage.isLoginButtonEnabled(), 
        "Login button should be enabled when both fields have value");
  }
}`}
            />
          </div>
        )}

        {activeStep === 4 && (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">4. Executing Tests</h3>
            <p className="mb-6 text-muted-foreground">
              Run tests with parallel execution, retries, and real-time monitoring.
            </p>
            
            <Tabs defaultValue="testng" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="testng">TestNG Configuration</TabsTrigger>
                <TabsTrigger value="runner">Test Runner</TabsTrigger>
              </TabsList>
              
              <TabsContent value="testng">
                <CodeViewer
                  language="xml"
                  code={`<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="Authentication Test Suite" parallel="tests" thread-count="4">
  <listeners>
    <listener class-name="org.qualitywave.listeners.RetryListener" />
    <listener class-name="org.qualitywave.listeners.TestStatusListener" />
    <listener class-name="org.qualitywave.ai.SmartAnalyticsListener" />
    <listener class-name="io.qameta.allure.testng.AllureTestNg" />
  </listeners>
  
  <test name="Chrome Tests">
    <parameter name="browser" value="chrome" />
    <classes>
      <class name="com.example.tests.LoginTests" />
      <class name="com.example.tests.RegistrationTests" />
    </classes>
  </test>
  
  <test name="Firefox Tests">
    <parameter name="browser" value="firefox" />
    <classes>
      <class name="com.example.tests.LoginTests" />
      <class name="com.example.tests.RegistrationTests" />
    </classes>
  </test>
</suite>`}
                />
              </TabsContent>
              
              <TabsContent value="runner">
                <CodeViewer
                  language="java"
                  code={`package com.example.runner;

import org.qualitywave.core.TestRunner;
import org.qualitywave.core.TestSuite;
import org.qualitywave.reporting.ReportManager;
import org.qualitywave.monitoring.ExecutionMonitor;

public class TestExecutor {

  public static void main(String[] args) {
    // Create a test suite
    TestSuite suite = new TestSuite("Authentication Tests")
        .withPackage("com.example.tests")
        .withParallelExecution(4)
        .withRetryFailedTests(2)
        .withScreenshotOnFailure(true);
    
    // Setup real-time monitoring
    ExecutionMonitor monitor = new ExecutionMonitor()
        .withRealTimeConsoleUpdates()
        .withSlackNotifications("https://hooks.slack.com/services/...")
        .withPerformanceTracking();
    
    // Execute the tests
    TestRunner.forSuite(suite)
        .withMonitoring(monitor)
        .withReportGen(ReportManager.allure())
        .run();
    
    // Generate reports
    ReportManager.generateAllureReport("target/allure-results", "target/allure-report");
    
    // Notify test completion
    monitor.notifyCompletion();
  }
}`}
                />
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeStep === 5 && (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">5. Analyzing Reports</h3>
            <p className="mb-6 text-muted-foreground">
              Review comprehensive test reports with advanced analytics and insights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-3">Allure Report Configuration</h4>
                <CodeViewer
                  language="java"
                  code={`package com.example.reporting;

import org.qualitywave.reporting.AllureConfig;
import io.qameta.allure.Allure;
import io.qameta.allure.model.Status;

public class ReportingSetup {

  public static void configureAllure() {
    AllureConfig.setup()
      .withCustomLogo("company-logo.png")
      .withEnvironmentInfo()
      .withExecutionTimeline()
      .withCategories(categories -> {
        categories.addCategory("Failed Tests", Status.FAILED);
        categories.addCategory("Broken Tests", Status.BROKEN);
        categories.addCategory("API Issues", 
            test -> test.getLabels().stream()
                .anyMatch(l -> l.getName().equals("api")));
        categories.addCategory("UI Issues", 
            test -> test.getLabels().stream()
                .anyMatch(l -> l.getName().equals("ui")));
      });
    
    // Add custom widgets for analytics
    AllureConfig.addCustomWidget("Performance Trend", 
        "widgets/performance-trend.js");
    AllureConfig.addCustomWidget("Test Stability", 
        "widgets/stability-index.js");
    AllureConfig.addCustomWidget("AI Recommendations", 
        "widgets/ai-recommendations.js");
  }
}`}
                />
              </div>
              
              <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-medium mb-3">Report Highlights</h4>
                <div className="bg-muted/30 rounded-lg p-4 flex-1 flex flex-col">
                  <h5 className="font-medium mb-2">Performance Metrics</h5>
                  <p className="text-sm text-muted-foreground mb-2">
                    Detailed analytics on test execution performance and trends.
                  </p>
                  <div className="mt-auto text-center pt-4">
                    <div className="bg-muted h-24 rounded-md flex items-center justify-center text-muted-foreground text-sm">
                      Performance metrics visualization
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4 flex-1 flex flex-col">
                  <h5 className="font-medium mb-2">AI-Generated Insights</h5>
                  <p className="text-sm text-muted-foreground mb-2">
                    Smart analysis of test failures with recommendations for fixes.
                  </p>
                  <div className="mt-auto text-center pt-4">
                    <div className="bg-muted h-24 rounded-md flex items-center justify-center text-muted-foreground text-sm">
                      AI insights visualization
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
