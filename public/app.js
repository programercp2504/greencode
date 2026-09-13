/* ========================================
   GREENCODE - Analysis Engine & Frontend
   ======================================== */

class CodeAnalyzer {
  constructor() {
    this.setupElements();
    this.attachEventListeners();
    this.initializeSVGGradient();
  }

  setupElements() {
    // Input/Control elements
    this.codeInput = document.getElementById('code-input');
    this.languageSelect = document.getElementById('language-select');
    this.analyzeBtn = document.getElementById('analyze-btn');
    this.clearBtn = document.getElementById('clear-btn');
    this.trySampleBtn = document.getElementById('try-sample-btn');

    // Results elements
    this.resultsSection = document.getElementById('results-section');
    this.emptyState = document.getElementById('empty-state');
    this.scoreValue = document.getElementById('score-value');
    this.optimizationLevel = document.getElementById('optimization-level');
    this.issuesCount = document.getElementById('issues-count');
    this.linesAnalyzed = document.getElementById('lines-analyzed');
    this.improvementPotential = document.getElementById('improvement-potential');

    // Issues & Comparison
    this.issuesContainer = document.getElementById('issues-container');
    this.issuesList = document.getElementById('issues-list');
    this.comparisonContainer = document.getElementById('comparison-container');
    this.lineCount = document.getElementById('line-count');

    // Metrics
    this.beforeIssues = document.getElementById('before-issues');
    this.beforeEfficiency = document.getElementById('before-efficiency');
    this.afterIssues = document.getElementById('after-issues');
    this.afterEfficiency = document.getElementById('after-efficiency');
  }

  attachEventListeners() {
    this.analyzeBtn.addEventListener('click', () => this.analyze());
    this.clearBtn.addEventListener('click', () => this.clear());
    this.trySampleBtn.addEventListener('click', () => this.loadSample());
    this.codeInput.addEventListener('input', () => this.updateLineCount());
  }

  initializeSVGGradient() {
    const svg = document.querySelector('.score-circle svg');
    if (svg && !document.getElementById('gradient')) {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const gradient = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'linearGradient'
      );
      gradient.id = 'gradient';
      gradient.setAttribute('x1', '0%');
      gradient.setAttribute('y1', '0%');
      gradient.setAttribute('x2', '100%');
      gradient.setAttribute('y2', '100%');

      const stop1 = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'stop'
      );
      stop1.setAttribute('offset', '0%');
      stop1.setAttribute('stop-color', '#34d399');

      const stop2 = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'stop'
      );
      stop2.setAttribute('offset', '100%');
      stop2.setAttribute('stop-color', '#60a5fa');

      gradient.appendChild(stop1);
      gradient.appendChild(stop2);
      defs.appendChild(gradient);
      svg.insertBefore(defs, svg.firstChild);
    }
  }

  updateLineCount() {
    const lines = this.codeInput.value.split('\n').length;
    this.lineCount.textContent = lines;
  }

  loadSample() {
    const samples = {
      javascript: `// Sample JavaScript with efficiency issues
function processUserData(users) {
  const results = [];
  
  for (let i = 0; i < users.length; i++) {
    console.log('Processing user: ' + users[i].name);
    
    for (let j = 0; j < users[i].orders.length; j++) {
      console.log('Calculating total...');
      let total = 0;
      
      for (let k = 0; k < users[i].orders[j].items.length; k++) {
        total += users[i].orders[j].items[k].price;
      }
      
      const userDiv = document.getElementById('user-' + users[i].id);
      const totalDiv = document.getElementById('total-' + users[i].id);
      
      userDiv.innerHTML = users[i].name;
      totalDiv.innerHTML = total;
    }
  }
  
  return results;
}

function calculateMetrics(data) {
  const sum = calculateSum(data);
  const avg = calculateSum(data) / data.length;
  const median = calculateSum(data) / 2;
  
  return { sum, avg, median };
}`,
      python: `# Sample Python with efficiency issues
def analyze_data(items):
    results = []
    
    for item in items:
        print(f"Processing {item['name']}")
        
        for order in item['orders']:
            print("Calculating total...")
            total = 0
            
            for price in order['prices']:
                total += price
                print(f"Current total: {total}")
            
            database.query(f"SELECT * FROM users WHERE id={item['id']}")
            database.query(f"UPDATE totals SET amount={total} WHERE id={item['id']}")
            
            results.append({'id': item['id'], 'total': total})
    
    return results`,
      java: `public class DataProcessor {
    public static void processUsers(List<User> users) {
        for (int i = 0; i < users.size(); i++) {
            System.out.println("Processing: " + users.get(i).getName());
            
            List<Order> orders = users.get(i).getOrders();
            for (int j = 0; j < orders.size(); j++) {
                System.out.println("Calculating total...");
                double total = 0;
                
                for (int k = 0; k < orders.get(j).getItems().size(); k++) {
                    total += orders.get(j).getItems().get(k).getPrice();
                }
                
                database.executeQuery("SELECT * FROM users WHERE id=" + users.get(i).getId());
                database.executeQuery("UPDATE totals SET amount=" + total);
            }
        }
    }
}`,
      cpp: `#include <iostream>
#include <vector>

void processData(std::vector<User>& users) {
    for (int i = 0; i < users.size(); i++) {
        std::cout << "Processing: " << users[i].name << std::endl;
        
        for (int j = 0; j < users[i].orders.size(); j++) {
            std::cout << "Calculating..." << std::endl;
            double total = 0;
            
            for (int k = 0; k < users[i].orders[j].items.size(); k++) {
                total += users[i].orders[j].items[k].price;
                std::cout << "Total: " << total << std::endl;
            }
            
            database->query("SELECT * FROM users WHERE id=" + users[i].id);
            database->execute();
        }
    }
}`,
      csharp: `public class DataAnalyzer {
    public void ProcessUsers(List<User> users) {
        foreach (var user in users) {
            Console.WriteLine($"Processing: {user.Name}");
            
            foreach (var order in user.Orders) {
                Console.WriteLine("Calculating...");
                decimal total = 0;
                
                foreach (var item in order.Items) {
                    total += item.Price;
                    Console.WriteLine($"Current total: {total}");
                }
                
                var userRecord = database.Users.Find(u => u.Id == user.Id);
                var orderTotal = order.Items.Sum(i => i.Price);
            }
        }
    }
}`,
    };

    const language = this.languageSelect.value;
    this.codeInput.value = samples[language] || samples.javascript;
    this.updateLineCount();
  }

  clear() {
    this.codeInput.value = '';
    this.resultsSection.classList.add('hidden');
    this.emptyState.classList.remove('hidden');
    this.updateLineCount();
  }

  analyze() {
    const code = this.codeInput.value.trim();
    const language = this.languageSelect.value;

    if (!code) {
      alert('Please paste some code to analyze.');
      return;
    }

    const analysis = this.performAnalysis(code, language);
    this.displayResults(analysis);
  }

  performAnalysis(code, language) {
    const lines = code.split('\n');
    const issues = [];

    // Base efficiency score
    let baseScore = 100;

    // Check for console.log in loops
    const loopRegex =
      language === 'python'
        ? /for\s+\w+\s+in\s+/g
        : /for\s*\(/g;
    const loops = (code.match(loopRegex) || []).length;

    const consoleLogRegex =
      language === 'python'
        ? /print\s*\(/g
        : /console\.log|System\.out\.println|printf|std::cout/g;
    const consoleLogs = (code.match(consoleLogRegex) || []).length;

    if (consoleLogs > 0 && loops > 0) {
      const severity = consoleLogs > 2 ? 'high' : 'medium';
      issues.push({
        title: 'Console Logging in Loops',
        explanation:
          'Logging inside loops can severely impact performance, especially with large datasets.',
        severity,
        suggestion:
          'Move logging outside loops or use batch logging. Consider using a logging level to disable verbose output in production.',
      });
      baseScore -= severity === 'high' ? 20 : 10;
    }

    // Check for deeply nested loops
    const nestedLoops = this.detectNestedLoops(code, language);
    if (nestedLoops > 2) {
      issues.push({
        title: `Deeply Nested Loops (${nestedLoops} levels)`,
        explanation:
          'Deeply nested loops can create O(n³) or higher time complexity, making code inefficient with large inputs.',
        severity: 'high',
        suggestion:
          'Consider using built-in array methods, reducing nesting levels, or using more efficient algorithms like divide-and-conquer.',
      });
      baseScore -= 15;
    } else if (nestedLoops > 1) {
      issues.push({
        title: `Nested Loops (${nestedLoops} levels)`,
        explanation:
          'Nested loops can result in quadratic time complexity O(n²). Consider optimizations for large datasets.',
        severity: 'medium',
        suggestion:
          'Explore using hash maps, sets, or sorting to reduce loop nesting and improve time complexity.',
      });
      baseScore -= 8;
    }

    // Check for repeated DOM queries
    const domQueryRegex = /getElementById|querySelector|getElementsBy/g;
    const domQueries = (code.match(domQueryRegex) || []).length;
    if (domQueries > 3) {
      issues.push({
        title: 'Repeated DOM Queries',
        explanation:
          'DOM queries are expensive operations. Repeating them multiple times can slow down your application.',
        severity: 'medium',
        suggestion:
          'Cache DOM references in variables and reuse them. Example: const el = document.getElementById("x"); instead of querying multiple times.',
      });
      baseScore -= 8;
    }

    // Check for repeated calculations
    const repeatedCalcs = this.detectRepeatedCalculations(code);
    if (repeatedCalcs > 0) {
      issues.push({
        title: `Repeated Calculations (${repeatedCalcs} instances)`,
        explanation:
          'Computing the same value multiple times wastes CPU cycles. This is especially problematic in loops.',
        severity: repeatedCalcs > 2 ? 'high' : 'medium',
        suggestion:
          'Calculate the value once, store it in a variable, and reuse it. This is known as the DRY principle.',
      });
      baseScore -= repeatedCalcs > 2 ? 12 : 6;
    }

    // Check for very long functions
    const functionLengths = this.detectLongFunctions(code, language);
    if (functionLengths.maxLength > 50) {
      issues.push({
        title: `Very Long Function (${functionLengths.maxLength} lines)`,
        explanation:
          'Functions that are too long are harder to understand, test, and optimize. They often have multiple responsibilities.',
        severity: functionLengths.maxLength > 100 ? 'high' : 'medium',
        suggestion:
          'Break the function into smaller, single-responsibility functions. This improves readability and maintainability.',
      });
      baseScore -= functionLengths.maxLength > 100 ? 15 : 8;
    }

    // Check for inefficient string concatenation
    const stringConcatRegex = /\+\s*['"`]/g;
    const stringConcats = (code.match(stringConcatRegex) || []).length;
    if (stringConcats > 2) {
      issues.push({
        title: 'Inefficient String Concatenation',
        explanation:
          'String concatenation with + operator can be slow. Use template literals or string builders for better performance.',
        severity: 'low',
        suggestion:
          'Use template literals (JavaScript), f-strings (Python), or StringBuilder for better performance and readability.',
      });
      baseScore -= 5;
    }

    // Check for excessive API calls pattern
    const apiCallPattern =
      /\.get\(|\.post\(|\.fetch\(|requests\.|http\.|database\.query/g;
    const apiCalls = (code.match(apiCallPattern) || []).length;
    if (apiCalls > 5) {
      issues.push({
        title: 'Potential Excessive API/Database Calls',
        explanation:
          'Making many API or database calls in sequence can significantly slow down your application.',
        severity: 'high',
        suggestion:
          'Consider batching requests, caching results, or using pagination. Implement connection pooling for database calls.',
      });
      baseScore -= 15;
    }

    // Ensure score stays within bounds
    baseScore = Math.max(0, Math.min(100, baseScore));

    return {
      score: baseScore,
      issues,
      linesAnalyzed: lines.length,
      improvementPotential: Math.round((100 - baseScore) * 0.8),
    };
  }

  detectNestedLoops(code, language) {
    let maxNesting = 0;
    let currentNesting = 0;

    const loopKeywords =
      language === 'python'
        ? /\b(for|while)\b/g
        : /\b(for|while|foreach)\b/g;

    const lines = code.split('\n');

    for (const line of lines) {
      const trimmed = line.trim();

      // Count opening
      const opens = (
        trimmed.match(
          language === 'python'
            ? /\b(for|while)\b/g
            : /\b(for|while|foreach)\b.*\{/g
        ) || []
      ).length;
      currentNesting += opens;

      // Count closing
      const closes = (trimmed.match(/\}/g) || []).length;
      currentNesting -= closes;

      maxNesting = Math.max(maxNesting, currentNesting);
    }

    return maxNesting;
  }

  detectRepeatedCalculations(code) {
    let count = 0;
    const calculations = {};

    // Look for patterns like .length, .size() used multiple times
    const lengthMatches = code.match(/\.\w+\s*\.length|\.\w+\s*\.size\(\)/g) || [];

    for (const match of lengthMatches) {
      calculations[match] = (calculations[match] || 0) + 1;
    }

    for (const key in calculations) {
      if (calculations[key] > 2) {
        count += calculations[key] - 1;
      }
    }

    return Math.min(count, 5);
  }

  detectLongFunctions(code, language) {
    let maxLength = 0;
    let currentLength = 0;
    let inFunction = false;

    const lines = code.split('\n');

    for (const line of lines) {
      const trimmed = line.trim();

      // Detect function start
      if (
        trimmed.match(/^(function|def|void|public|private|async)\s+\w+/) ||
        trimmed.match(/^\w+\s*\(/)
      ) {
        inFunction = true;
        currentLength = 0;
      }

      if (inFunction) {
        currentLength++;
      }

      // Detect function end
      if (trimmed === '}' || trimmed === '') {
        if (inFunction && currentLength > 3) {
          maxLength = Math.max(maxLength, currentLength);
        }
        inFunction = false;
        currentLength = 0;
      }
    }

    return { maxLength };
  }

  displayResults(analysis) {
    // Hide empty state and show results
    this.emptyState.classList.add('hidden');
    this.resultsSection.classList.remove('hidden');

    // Update score with animation
    const score = analysis.score;
    this.scoreValue.textContent = score;

    // Calculate and update SVG progress
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (score / 100) * circumference;
    const progressCircle = document.querySelector('.score-progress');
    progressCircle.style.strokeDashoffset = offset;

    // Update optimization level
    let level = 'Low';
    if (score >= 80) level = 'High';
    else if (score >= 50) level = 'Medium';
    this.optimizationLevel.textContent = level;

    // Update metrics
    this.issuesCount.textContent = analysis.issues.length;
    this.linesAnalyzed.textContent = analysis.linesAnalyzed;
    this.improvementPotential.textContent = analysis.improvementPotential + '%';

    // Update comparison
    this.beforeIssues.textContent = analysis.issues.length;
    this.beforeEfficiency.textContent = score;
    this.afterIssues.textContent = Math.max(0, analysis.issues.length - 2);
    this.afterEfficiency.textContent = Math.min(100, score + analysis.improvementPotential);

    // Display issues
    if (analysis.issues.length > 0) {
      this.issuesList.innerHTML = '';
      this.issuesContainer.classList.remove('hidden');

      for (const issue of analysis.issues) {
        const issueCard = document.createElement('div');
        issueCard.className = `issue-card severity-${issue.severity}`;

        issueCard.innerHTML = `
          <div class="issue-header">
            <h4 class="issue-title">${this.escapeHtml(issue.title)}</h4>
            <span class="issue-severity ${issue.severity}">${issue.severity}</span>
          </div>
          <p class="issue-explanation">${this.escapeHtml(issue.explanation)}</p>
          <div class="issue-suggestion">
            <strong>💡 Suggestion:</strong> ${this.escapeHtml(issue.suggestion)}
          </div>
        `;

        this.issuesList.appendChild(issueCard);
      }
    } else {
      this.issuesContainer.classList.add('hidden');
    }

    // Show comparison
    this.comparisonContainer.classList.remove('hidden');

    // Scroll to results
    setTimeout(() => {
      this.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new CodeAnalyzer();
});