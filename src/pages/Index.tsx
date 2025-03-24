
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { ReportMetrics } from "@/components/ReportMetrics";
import { TestSuiteList } from "@/components/TestSuiteList";
import { CodeViewer } from "@/components/CodeViewer";
import { HeroSection } from "@/components/HeroSection";
import { FrameworkFeatures } from "@/components/FrameworkFeatures";
import { AiInsights } from "@/components/AiInsights";
import { DemoSection } from "@/components/DemoSection";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-2" : "py-4"}`}>
        <div className="container flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">Q</span>
            </div>
            <span className="font-medium">QualityWave</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Features</a>
            <a href="#demo" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Demo</a>
            <a href="#docs" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Documentation</a>
            <a href="#ai" className="text-sm opacity-70 hover:opacity-100 transition-opacity">AI Insights</a>
          </nav>
          <div>
            <Button variant="ghost" size="sm" className="mr-2">Documentation</Button>
            <Button size="sm">Download</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Framework Features */}
      <section id="features" className="py-24">
        <FrameworkFeatures />
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 bg-muted/50">
        <DemoSection />
      </section>

      {/* Test Reports */}
      <section id="reports" className="py-24">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-2">Test Reports</Badge>
              <h2 className="text-3xl font-bold mb-4">Beautiful, Insightful Reports</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive test reports with actionable insights. Visualize your test results and identify issues quickly.
              </p>
            </motion.div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full md:w-[400px] mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Test Success Rate</CardTitle>
                    <CardDescription>Last 7 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">94.3%</div>
                    <Progress value={94.3} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">+2.5% from previous week</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Average Duration</CardTitle>
                    <CardDescription>Per test case</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">1.24s</div>
                    <Progress value={65} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">-0.35s from previous week</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Total Test Runs</CardTitle>
                    <CardDescription>Last 7 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">4,320</div>
                    <Progress value={82} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">+843 from previous week</p>
                  </CardContent>
                </Card>
              </div>
              
              <ReportMetrics />
            </TabsContent>
            
            <TabsContent value="trends">
              <Card>
                <CardHeader>
                  <CardTitle>Test Performance Trends</CardTitle>
                  <CardDescription>Historical performance data for the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                    <p className="text-muted-foreground">Visualization of test performance trends over time</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="details">
              <TestSuiteList />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Code Samples */}
      <section id="docs" className="py-24 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-2">Documentation</Badge>
              <h2 className="text-3xl font-bold mb-4">Simple Yet Powerful API</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Write tests that are easy to understand and maintain with our intuitive API.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Page Object Model</h3>
              <p className="text-muted-foreground mb-6">
                Organized, maintainable tests using the page object pattern.
              </p>
              <CodeViewer 
                code={`public class LoginPage extends BasePage {
  
  @FindBy(id = "username")
  private WebElement usernameField;
  
  @FindBy(id = "password")
  private WebElement passwordField;
  
  @FindBy(css = "button[type='submit']")
  private WebElement loginButton;
  
  public LoginPage(WebDriver driver) {
    super(driver);
    PageFactory.initElements(driver, this);
  }
  
  public DashboardPage login(String username, String password) {
    usernameField.sendKeys(username);
    passwordField.sendKeys(password);
    loginButton.click();
    return new DashboardPage(driver);
  }
}`}
                language="java"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Fluent Test Assertions</h3>
              <p className="text-muted-foreground mb-6">
                Expressive, readable assertions for your test conditions.
              </p>
              <CodeViewer 
                code={`@Test
public void userCanLogInWithValidCredentials() {
  // Arrange
  LoginPage loginPage = new LoginPage(driver);
  
  // Act
  DashboardPage dashboardPage = loginPage
    .login("admin", "password123");
  
  // Assert
  assertThat(dashboardPage)
    .isLoaded()
    .hasWelcomeMessage("Welcome, Admin")
    .and()
    .hasNavigationMenuWithItems(
      "Dashboard", "Users", "Reports", "Settings"
    );
}`}
                language="java"
              />
            </motion.div>
          </div>
          
          <div className="mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">AI-Powered Test Generation</h3>
              <p className="text-muted-foreground mb-6">
                Let AI analyze your application and suggest test scenarios.
              </p>
              <CodeViewer 
                code={`// Generate tests using AI analysis
TestSuite generatedSuite = AITestGenerator.forApplication("https://myapp.com")
  .analyzeUserFlows()
  .identifyCriticalPaths()
  .generateTests(TestCoverage.HIGH);

// Review and customize generated tests
generatedSuite.getTestCases().forEach(testCase -> {
  System.out.println("Generated: " + testCase.getName());
  
  // Customize if needed
  if (testCase.getName().contains("Login")) {
    testCase.addAssertion(
      Assertions.elementPresent("#dashboard-welcome")
    );
  }
});

// Execute the test suite
TestRunner.execute(generatedSuite);`}
                language="java"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Integration */}
      <section id="ai" className="py-24">
        <AiInsights />
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">Q</span>
                </div>
                <span className="font-medium">QualityWave</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Advanced UI testing framework for QA engineers.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Examples</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Framework</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Get Started</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Components</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Plugins</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">License</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} QualityWave. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
