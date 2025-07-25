# MedleyAI - React Native Expo App

 ## Complete-ish features:

### Quiz
- Both question types are fully supported
- Score, progress and time tracking is acheived through refs that are either set at the Session or question level
- The score and progress is saved when the user either completes or exists out of a quiz
- Drag and Drop functionality was fun to implement, found a library released in the last month that seemed pretty impressive so I could have spent longer investigating that

### Services

Step Service
- 5 questions are randomly when the user "starts" a session
- This generates a set of questions to which forms a quiz
- When a quiz has been completed, the user can no longer access that quiz, but are instead shown a readout of some basic info such as score, time taken

Auth Service
- Handles the user logging in or registering
- Has some email validation logic
- Prevents the same email being registered twice
- On registering the account is saved in a persistent Zustand store under the User type
- This mimics a backend in that it stores user information
- Extension task would be to store the user account on logging out. This could be added to the authService to perist that data
- Login page is a little janky but make sure to check the title to know which screen you are on (either login or registration)

### Stores
- Account Store: persists user accounts in the absence of a backend
- Steps Store: caches the steps when the application is launched

### Component Structure
- The components folder contains all the UI components of the application
- They have been grouped by question type and hierachy on the screen


### Testing
- Hooks have been tested with Jest Unit tests


### Widget
- Not Supported
- APIs not fully implemented as creating an in-memory mock backend service to persist and retrieve data from was beyond stubbing out to be convincing





## 🚀 Features

- **Expo Router**: File-based navigation with deep linking
- **TypeScript**: Full type safety throughout the application
- **Zustand**: Lightweight state management with persistence
- **Zod**: Runtime validation and type inference
- **Testing**: Jest and React Native Testing Library
- **Linting & Formatting**: ESLint and Prettier configuration
- **Performance**: React Native Reanimated and Gesture Handler
- **Security**: Encrypted storage for sensitive data
- **Interactive Quiz System**: Multi-question types with drag-and-drop functionality

## 🎯 Quiz System

The app features a comprehensive quiz system with multiple question types and interactive components:

### Question Types
- **Multiple Choice Questions (MCQ)**: Traditional single-select questions
- **Sort Questions**: Drag-and-drop categorization with visual feedback

### Quiz Components

#### Core Components
- **`Question.tsx`**: Main question container that handles different question types
- **`ProgressBar.tsx`**: Animated progress indicator with circular loader and question counter
- **`QuestionTitle.tsx`**: Displays question title and type
- **`QuestionSubmit.tsx`**: Submit button with validation and feedback

#### Multiple Choice Components
- **`MultipleChoice/index.tsx`**: Container for MCQ options
- **`MultipleChoice/MultipleChoice.tsx`**: Individual option component with selection states

#### Sort Components
- **`Sort/index.tsx`**: Main sort question container with drag-and-drop logic
- **`Sort/Category.tsx`**: Drop zone for categorized items
- **`Sort/Item.tsx`**: Draggable item component

### Component Architecture

```
Quiz Flow:
┌─────────────────┐
│   ProgressBar   │ ← Animated progress with circular loader
├─────────────────┤
│   QuestionTitle │ ← Question title and type display
├─────────────────┤
│     Question    │ ← Main question container
│   ┌───────────┐ │
│   │ MCQ/Sort  │ │ ← Question type specific components
│   │ Components│ │
│   └───────────┘ │
├─────────────────┤
│ QuestionSubmit  │ ← Submit and validation
└─────────────────┘
```

### Data Structure

The quiz system uses a structured data format defined in `src/types/steps.ts`:

```typescript
interface Step {
  index: number;
  title: string;
  heading: string;
  description: string;
  questionData: QuestionData;
}

interface QuestionData {
  questionType: 'mcq' | 'sort';
  options: StepOption[];
  correctAnswer: string;
  categories: string[] | null;
  correct_answer_mapping: Record<string, string[]> | null;
}
```

### Key Features

#### Progress Tracking
- **Animated Progress Bar**: Linear progress indicator with smooth transitions
- **Circular Loader**: Animated circle showing completion percentage
- **Question Counter**: Current question number display (e.g., "3/10")
- **Cancel Button**: Option to exit quiz with confirmation

#### Drag-and-Drop Functionality
- **Gesture Handling**: Uses `react-native-gesture-handler` for smooth interactions
- **Visual Feedback**: Hover states and drag animations
- **Drop Zone Validation**: Real-time feedback for valid/invalid drops
- **Category Management**: Dynamic category creation and item sorting

#### State Management
- **Question State**: Tracks current question, responses, and validation
- **Session Tracking**: Records time taken and attempt counts
- **Progress Persistence**: Maintains quiz state across app sessions

### Dependencies Added

#### Animation & Gestures
- **`react-native-reanimated`**: High-performance animations for progress bars and transitions
- **`react-native-gesture-handler`**: Touch handling for drag-and-drop interactions
- **`react-native-reanimated-dnd`**: Drag-and-drop functionality for sort questions

#### UI & Icons
- **`@expo/vector-icons`**: Icon library for UI elements (close button, etc.)
- **`expo-image`**: Optimized image loading for question assets

#### State & Validation
- **`zustand`**: Lightweight state management for quiz progress

#### Storage & Persistence
- **`@react-native-async-storage/async-storage`**: Local storage for quiz sessions
- **`react-native-encrypted-storage`**: Secure storage for sensitive quiz data

### Custom Hooks

#### `useMarking.ts`
Validates quiz responses based on question type:
- **MCQ Validation**: Direct string comparison
- **Sort Validation**: Array comparison with category mapping
- **Edge Case Handling**: Null checks and type safety

#### `useEmailValidation.ts`
Email format validation using regex patterns for user registration.

### Testing Strategy

The quiz components include comprehensive unit tests:
- **Hook Testing**: `useMarking`, `useEmailValidation`
- **Component Testing**: Progress bar, question components
- **Integration Testing**: Quiz flow and state management

## 📱 Screens

- **Home**: Welcome screen with navigation
- **Counter Demo**: Interactive counter using custom hooks
- **Profile**: User profile with statistics
- **Quiz**: Interactive quiz with multiple question types
- **Auth**: Login and registration screens

## 🛠 Tech Stack

### Core Dependencies

- `expo` - React Native framework
- `expo-router` - File-based navigation
- `react-native` - Mobile app framework
- `typescript` - Type safety

### State Management & Data

- `zustand` - Lightweight state management
- `@tanstack/react-query` - Data fetching and caching
- `@react-native-async-storage/async-storage` - Local storage

### UI & Animation

- `react-native-reanimated` - High-performance animations
- `react-native-gesture-handler` - Touch handling
- `expo-image` - Optimized image loading
- `react-native-safe-area-context` - Safe area management

### Validation & Utilities

- `zod` - Schema validation
- `react-native-i18n` - Internationalization

### Development Tools

- `jest` - Testing framework
- `@testing-library/react-native` - Component testing
- `eslint` - Code linting
- `prettier` - Code formatting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components
│   ├── forms/          # Form components
│   └── ui/             # Basic UI elements
├── screens/            # Screen components
├── navigation/         # Navigation configuration
├── services/           # Business logic
│   ├── api/            # API calls
│   └── storage/        # Local storage
├── store/              # State management
├── utils/              # Helper functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript types
├── constants/          # App constants
└── assets/             # Static assets

app/                    # Expo Router pages
├── _layout.tsx         # Root layout
├── index.tsx           # Home screen
├── counter.tsx         # Counter demo
└── profile.tsx         # Profile screen
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd MedleyAI
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on device/simulator**

   ```bash
   # iOS
   npm run ios

   # Android
   npm run android

   # Web
   npm run web
   ```

## 🧪 Testing

### Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

- `src/__tests__/hooks/` - Hook tests
- `src/__tests__/screens/` - Screen component tests

## 🔧 Development

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

### Available Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run on web browser
- `npm test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format code

## 📦 Key Dependencies Explained

### State Management (Zustand)

- Lightweight alternative to Redux
- Built-in TypeScript support
- Persistence with AsyncStorage
- Example usage in `src/store/index.ts`

### Validation (Zod)

- Runtime type checking
- Form validation
- Type inference
- Example schemas in `src/utils/validation.ts`

### Navigation (Expo Router)

- File-based routing
- Type-safe navigation
- Deep linking support
- Automatic code splitting
