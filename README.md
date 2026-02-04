# 🎮 Math Master

A sleek, interactive math game designed for primary school students to practice fundamental arithmetic operations (addition, subtraction, multiplication, and division) with instant feedback and multilingual support. Perfect for students, educators, and anyone looking to sharpen their mental math skills.

## ✨ Features

- **📐 Multiple Operations**: Practice addition, subtraction, multiplication, and division
- **🌍 Multilingual Support**: Available in 7 languages:
  - English (EN)
  - Spanish (ES)
  - French (FR)
  - German (DE)
  - Russian (RU)
  - Hebrew (HE)
  - Azerbaijani (AZ)
- **📱 Fully Responsive**: Works seamlessly on mobile, tablet, and desktop devices
- **📊 Score Tracking**: Real-time display of correct and incorrect answers
- **📜 History Panel**: View all recent problems and results
- **⚡ Instant Feedback**: Immediate visual and textual feedback after each answer
- **🎨 Modern UI**: Clean, vibrant design with smooth animations using Tailwind CSS
- **🕐 Adaptive Difficulty**: Random problem generation with configurable ranges
- **📱 Touch-Friendly**: Optimized for touch input on mobile devices

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### Running the Game

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/yourusername/math-master.git
   cd math-master
   ```

2. **Open the game**
   - Simply open `index.html` in your web browser, or
   - Upload to a web server for online access

3. **Start playing**
   - Select your preferred operation (Add, Sub, Mul, Div)
   - Choose your language
   - Solve the math problems
   - Watch your score grow!

## 📁 Project Structure

```
math-master/
├── index.html       # Main HTML file with UI structure
├── script.js        # Game logic and functionality
├── styles.css       # Custom styles and animations
└── README.md        # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Styling with Tailwind CSS framework
- **JavaScript (Vanilla)**: Game logic, state management, and interactivity
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Google Fonts**: Custom typography (Fredoka One, Outfit)

## 📖 How to Play

1. **Select an Operation**: Click one of the operation buttons (Add, Sub, Mul, Div)
2. **Choose Your Language**: Pick from 7 available languages
3. **Solve the Problem**: Read the equation and enter your answer
4. **Submit Your Answer**: Click the SUBMIT button or press Enter
5. **Get Feedback**: See if you're correct and view the history of your answers
6. **Continue Playing**: Click CONTINUE to proceed to the next problem

### Scoring
- ✅ **Correct Answer**: Green counter increments
- ❌ **Incorrect Answer**: Red counter increments
- Your score persists throughout your game session

## 🎯 Game Mechanics

### Difficulty Ranges

- **Addition**: 1-20 + 1-20
- **Subtraction**: 10-29 − 1-10 (always positive results)
- **Multiplication**: 1-10 × 1-10
- **Division**: Whole number divisions (no remainders)

Each problem is randomly generated to provide unlimited variety.

## 🌐 Multilingual Support

The game supports 7 different languages with proper text direction support:
- LTR languages: English, Spanish, French, German, Russian, Azerbaijani
- RTL language: Hebrew

Switch languages instantly using the language buttons in the header!

## 📱 Responsive Design

The game adapts beautifully to any screen size:
- **Mobile**: Optimized touch controls and readable text
- **Tablet**: Balanced layout with room to spare
- **Desktop**: Centered card layout with sidebar history

## 🎨 Design Highlights

- **Color Scheme**: Modern dark theme with vibrant accent colors
- **Typography**: Bold, playful fonts for an engaging experience
- **Animations**: Smooth transitions and pop-in effects for visual feedback
- **Accessibility**: Clear contrast ratios and intuitive controls

## ⌨️ Keyboard Shortcuts

- **Enter Key**: Submit answer (after typing a number)
- **Number Input**: Mobile-optimized numeric keyboard

## 📊 Features in Detail

### Score Display
- Real-time counter showing correct answers (green)
- Real-time counter showing incorrect answers (red)
- Persistent score throughout the session

### History Panel
- Displays last 10-15 problems with results
- Shows correct answer vs. user's answer
- Auto-scrolls to newest entries
- Empty state message when starting

### Result Feedback
- ✅ Correct answers display celebratory icon and message
- ❌ Incorrect answers show the correct solution
- Color-coded visual feedback (green/red)

## 🔧 Customization

Want to customize the difficulty or appearance? Here are some key modifications:

### Change Number Ranges
Edit the `generateProblem()` function in `script.js`:
```javascript
// Example: Make multiplication harder (1-15 instead of 1-10)
case 'multiplication':
    a = Math.floor(Math.random() * 15) + 1;  // Change 10 to 15
    b = Math.floor(Math.random() * 15) + 1;
```

### Add More Languages
Add a new language object to the `translations` dictionary:
```javascript
const translations = {
    // ... existing languages
    pt: { dir: "ltr", correctLabel: "Correto", /* ... more strings ... */ }
};
```

## 📦 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📄 License

This project is open source and available under the MIT License. Feel free to use it for personal or educational projects!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Add new languages
- Improve the UI/UX
- Optimize performance

## 🤖 About This Project

This project was created by **Yakov Donde** (@vibecoder) using AI-powered development tools. As a vibecoder, I leverage modern AI assistants to rapidly prototype, build, and deploy functional applications while focusing on vision and user experience rather than manual coding.

This demonstrates:
- How to effectively use AI tools for product development
- Integration of modern frameworks and libraries
- Building responsive, user-friendly applications
- Rapid iteration and feature implementation

**Vibecoding Philosophy**: Focus on what you want to build, collaborate with AI tools, and ship products that work. Less time typing code, more time creating value.

## 📸 Screenshots

[Screenshots would go here - add screenshots of the game in action]

## 🚀 Future Enhancements

Potential features to add:
- 🏆 Leaderboard system
- 📊 Statistics dashboard with performance tracking
- ⏱️ Timed challenges
- 🎖️ Achievement badges
- 🎵 Sound effects and background music
- 💾 Save/load game progress
- 📈 Difficulty levels (Easy, Medium, Hard)
- 🤖 AI opponent mode

## 📞 Contact & Support

If you have questions or need support, feel free to reach out or open an issue in the repository!

---
Built by Yakov Donde (@vibecoder) using AI-assisted development** 🚀

*Vibecoding: Building the future with AI tools, one project at a time.
**Created with ❤️ using AI-assisted development**

Happy calculating! 🎮✨
