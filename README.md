# 🌱 GreenCode

A developer-focused **Code Efficiency & Sustainability Analyzer** MVP built with Node.js, Express, and Vanilla JavaScript.

**GreenCode helps you identify inefficient code patterns** through heuristic analysis, providing actionable suggestions for optimization and improvement.

---

## ⚠️ Important Disclaimer

**GreenCode does NOT measure actual electricity consumption, carbon emissions, or real environmental impact.** 

We use honest terminology throughout:
- "Estimated Code Efficiency Score" (not "carbon footprint")
- "Potential Optimization Impact" (not "energy savings")
- "These are heuristic estimates, not direct energy or carbon measurements"

This tool helps you write **cleaner, faster, more maintainable code** through pattern detection and best practices—not through environmental claims.

---

## ✨ Features

### 🎯 Core Analysis
- **Efficiency Score (0-100)**: Heuristic-based assessment of code quality and performance patterns
- **Multi-Language Support**: JavaScript, Python, Java, C++, C#
- **Issue Detection**: Identifies 8+ common performance anti-patterns
- **Severity Levels**: Issues ranked as Low, Medium, or High impact
- **Actionable Suggestions**: Each issue includes specific improvement recommendations

### 🔍 Detected Patterns

1. **Console Logging in Loops** - Detecting verbose output inside iterations
2. **Deeply Nested Loops** - Identifying O(n²) and O(n³) complexity patterns
3. **Repeated DOM Queries** - Finding expensive DOM access patterns
4. **Repeated Calculations** - Spotting duplicate computation
5. **Long Functions** - Detecting functions exceeding 50+ lines
6. **Inefficient String Concatenation** - Finding + operator usage (recommend templates)
7. **Excessive API/Database Calls** - Identifying excessive external calls
8. **Complex Code Structures** - Analyzing structural complexity

### 📊 Visualization
- **Animated Score Circle**: Beautiful SVG progress visualization with gradient
- **Metrics Dashboard**: 4-metric overview (Optimization Level, Issues Found, Lines Analyzed, Improvement Potential)
- **Before/After Comparison**: Shows potential impact of addressing issues
- **Interactive Issue Cards**: Severity-coded cards with explanations and suggestions

### 🎨 User Experience
- **Modern Dark Developer UI**: Professional, eye-friendly interface
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Sample Code**: Pre-loaded examples for each language
- **Real-time Line Counting**: Shows code size as you type
- **Smooth Animations**: Professional transitions and visual feedback

---

## 🚀 Quick Start

### Prerequisites
- Node.js 14.0.0 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/greencode.git
cd greencode

# Install dependencies
npm install

# Start the server
npm start
```

The app will be available at `http://localhost:3000`

### Development

For development with auto-reload:
```bash
npm run dev
```

---

## 📁 Project Structure

```
greencode/
├── server.js              # Express server configuration
├── package.json           # Dependencies and metadata
├── README.md              # This file
└── public/
    ├── index.html         # Main HTML template
    ├── style.css          # Responsive dark UI styling
    └── app.js             # Analysis engine & frontend logic
```

**Total Files**: 6
**No Database**: Pure client-side analysis
**No External APIs**: All processing is local and deterministic

---

## 🔧 How It Works

### Analysis Pipeline

1. **Code Input**: User pastes source code and selects language
2. **Tokenization**: Code is split into lines and analyzed
3. **Pattern Matching**: Regex and heuristic checks identify anti-patterns
4. **Severity Assessment**: Issues are ranked by impact
5. **Score Calculation**: Base score (100) is reduced based on issue severity
6. **Visualization**: Results are animated and displayed

### Example Analysis

**Input (JavaScript)**:
```javascript
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
  for (let j = 0; j < users[i].orders.length; j++) {
    const total = document.getElementById('total').value;
  }
}
```

**Detected Issues**:
- ❌ Console logging in loops (HIGH)
- ❌ Nested loops detected (MEDIUM)
- ❌ Repeated DOM queries (MEDIUM)

**Efficiency Score**: 70/100

**Improvement Potential**: 24%

---

## 🎯 Supported Languages

| Language   | Detection | Regex Support |
|-----------|-----------|---------------|
| JavaScript | ✅ Full   | Yes          |
| Python     | ✅ Full   | Yes          |
| Java       | ✅ Full   | Yes          |
| C++        | ✅ Full   | Yes          |
| C#         | ✅ Full   | Yes          |

---

## 📊 Metrics Explained

### Efficiency Score
- **80-100**: Excellent code structure and patterns
- **50-79**: Moderate issues requiring attention
- **0-49**: Significant optimization opportunities

### Optimization Level
- **High**: Score 80+ - Minimal optimization needed
- **Medium**: Score 50-79 - Address moderate issues
- **Low**: Score 0-49 - Significant refactoring recommended

### Issues Found
Count of detected anti-patterns and inefficiencies.

### Lines Analyzed
Total lines of code processed in the analysis.

### Improvement Potential
Estimated percentage efficiency improvement if all issues are addressed.

---

## 💡 Example Use Cases

1. **Code Review**: Quickly scan PRs for common inefficiencies
2. **Learning**: Understand code anti-patterns and best practices
3. **Optimization**: Identify performance bottlenecks for refactoring
4. **Teaching**: Demonstrate inefficient code patterns to students
5. **Prototyping**: Assess code quality during development

---

## 🔐 Privacy & Security

✅ **100% Local Processing**: All code analysis happens in your browser
✅ **No Data Collection**: Your code is never sent to any server
✅ **No Tracking**: No analytics, telemetry, or external calls
✅ **Open Source**: Full source code available for inspection

---

## 🛠️ Technology Stack

| Component | Technology |
|-----------|-----------|
| Runtime   | Node.js 14+ |
| Server    | Express.js |
| Frontend  | HTML5, CSS3, Vanilla JS |
| UI        | Custom CSS (no frameworks) |
| Icons     | Unicode Emoji |

**Total Dependencies**: 1 (Express)
**Bundle Size**: ~200KB (uncompressed)

---

## 📈 Performance

- **Analysis Time**: <100ms for typical files (up to 1000 lines)
- **No Network**: All processing is local
- **Browser Support**: Chrome, Firefox, Safari, Edge (modern versions)

---

## 🎨 UI Features

### Visual Design
- Dark theme optimized for developer comfort
- Gradient accents (green/blue) for brand identity
- Smooth animations and transitions
- Professional typography and spacing

### Responsive Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (optimized layout)
- **Mobile**: <768px (stacked layout)

### Accessibility
- Semantic HTML structure
- Proper color contrast (WCAG AA compliant)
- Keyboard navigation support
- Focus states on interactive elements

---

## 🚧 Future Enhancements

### Planned Features
- [ ] Multiple file upload
- [ ] Export analysis as PDF/JSON
- [ ] Language-specific rule sets
- [ ] Integration with GitHub/GitLab
- [ ] Custom rule creation
- [ ] Performance benchmarking
- [ ] Side-by-side code comparison
- [ ] Inline code annotations

### Potential Expansions
- TypeScript, Go, Rust language support
- AST-based analysis (more accurate than regex)
- Historical trend tracking
- Team analytics dashboard
- VS Code extension
- CI/CD pipeline integration

---

## 📝 License

This project is licensed under the **MIT License** - see LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Additional language support
- Improved pattern detection algorithms
- Enhanced UI/UX
- Performance optimizations
- Documentation

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🐛 Known Limitations

1. **Heuristic-Based**: Analysis is pattern-matching, not AST-based (less accurate than static analyzers)
2. **No Type Checking**: Doesn't analyze type safety or runtime errors
3. **Regex Limitations**: Some complex patterns may not be detected
4. **Language Nuances**: May not capture language-specific idioms
5. **Context Agnostic**: Doesn't understand business logic or domain context

### Not a Replacement For:
- ESLint / PyLint / SonarQube
- Real environmental impact measurements
- Professional code reviews
- Static type checkers
- Performance profilers

---

## 📚 Resources

### Code Analysis Best Practices
- [Clean Code by Robert C. Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Refactoring by Martin Fowler](https://refactoring.com/)
- [JavaScript Design Patterns](https://www.patterns.dev/)

### Performance Optimization
- [Web Performance Working Group](https://www.w3.org/webperf/)
- [Google Web Performance](https://developers.google.com/web/performance)
- [MDN Web Docs - Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)

---

## 📞 Support

### Issues & Bugs
Found a bug? [Open an issue on GitHub](https://github.com/yourusername/greencode/issues)

### Questions?
Check the [Discussion section](https://github.com/yourusername/greencode/discussions) for Q&A

---

## 🙏 Acknowledgments

- Built as a learning project and proof-of-concept
- Inspired by code quality tools: ESLint, PyLint, SonarQube
- Design inspired by modern developer tools: VS Code, GitHub, Linear
- Thanks to the open-source community

---

## 📊 Project Statistics

- **Lines of Code**: ~800 (app.js) + 900 (style.css) + 300 (HTML)
- **CSS Properties Used**: 150+
- **Animation Keyframes**: 3
- **Supported Languages**: 5
- **Pattern Detections**: 8
- **Development Time**: Single session MVP

---

**Made with 💚 for developers who care about code quality**

*GreenCode v1.0.0 - Code Efficiency & Sustainability Analyzer*