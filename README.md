# 🎓 Student Management System - Day 1 MERN Stack Assignment

## 📝 Project Description
[cite_start]This project was developed as part of the **MERN Stack & React JS Foundations** training[cite: 1, 2]. [cite_start]I am currently working as a **Frontend Developer Intern** at **CodeCraze Academy**, an EdTech platform[cite: 4]. 

[cite_start]The goal of this assignment was to build a basic **Student Management System UI** that allows admins and instructors to add, view, and manage student details dynamically to track enrollments efficiently[cite: 5, 7].

## 🚀 Key Features & Concepts Applied
[cite_start]This application demonstrates the following **Day 1 React and JavaScript** fundamentals[cite: 9, 13]:

### 1. JavaScript & TypeScript Basics
* [cite_start]**Variables & Data Types**: Storing learner details using `let` and `const`[cite: 14].
* [cite_start]**Functions**: Implementation of student registration using **Arrow Functions**[cite: 14].
* [cite_start]**Array Methods**: Using `.map()` for dynamic list rendering [cite: 14, 26] [cite_start]and `.filter()` for the search/filtering logic[cite: 15, 31].
* [cite_start]**ES6 Features**: Using the **Spread Operator** for immutable state updates[cite: 15].

### 2. React Fundamentals
* [cite_start]**Component Architecture**: Modular structure including `LearnerEnrollmentForm` and `LearnerDisplay` components[cite: 42, 44, 45].
* [cite_start]**State & Props**: Managing dynamic data with `useState` and passing data between components via `props`[cite: 12].
* [cite_start]**Event Handling**: Handling form submissions and button clicks (`onClick`, `onChange`)[cite: 15, 33].
* [cite_start]**Controlled Inputs**: Capturing and validating form data (Name, Age, Course)[cite: 15, 17, 19, 23].

### 3. Async Logic
* [cite_start]**Promises & Async/Await**: Simulating a real-world API response using a `setTimeout` within a Promise[cite: 15, 36, 37, 41].

## 🛠️ Setup Instructions
[cite_start]To run this project locally, follow these steps[cite: 46]:

1. **Install Dependencies**:
   ```bash
   npx create-react-app day1-assessment-app --template typescript
   cd day1-assessment-app
   Start the Application:

2.Bash
npm start

The app will be available at http://localhost:3000.

📂 Project Structure

src/components/LearnerEnrollmentForm.tsx: Handles the input fields for Name, Age, and Course.
+1


src/components/LearnerDisplay.tsx: Displays the list of students dynamically.


src/App.tsx: The main container managing the global state and filtering logic.

📤 GitHub Submission
Follow these commands to push the project to your repository:

Create a repository named: day1-student-management-app.

Run the following in your terminal:

Bash
git init
git add .
git commit -m "Day 1 React Assignment"
git branch -M main
git remote add origin <your-repo-link>
git push -u origin main
⚖️ Anti-Plagiarism & Modifications
To ensure originality, I have implemented the following variations:


Unique Naming: Used learnerRecords and registerLearner instead of generic names.



Custom Logic: Modified the filter condition to Age >= 20.


Bonus Features: Added empty input validation and a delete functionality.



Evaluation Criteria: Functionality (30%),
Concept Usage (25%),
React Implementation (20%),
Code Quality (15%), 
Originality (10%).

OUTPUT SCREENSHOT LINK
https://uploadnow.io/files/JDjNlKx
