To clone and run your **full-stack** project from the GitHub repository, follow the steps below:

### Step 1: Clone the Full-Stack Repository

1. **Open your terminal** (Command Prompt, PowerShell, or terminal on Mac/Linux).

2. **Navigate to the directory** where you want to clone the repository:
   ```bash
   cd path/to/your/directory
   ```

3. **Clone the full-stack repository**:
   ```bash
   git clone https://github.com/rajithlingam/full-stack
   ```

4. **Navigate into the cloned folder**:
   ```bash
   cd full-stack
   ```

### Step 2: Install Node.js and npm

1. **Download and install Node.js** from [nodejs.org](https://nodejs.org/), which will install both **Node.js** and **npm**.

2. **Verify the installations**:
   - To check if Node.js is installed, run:
     ```bash
     node --version
     ```
   - To check if npm is installed, run:
     ```bash
     npm --version
     ```

### Step 3: Install Dependencies

1. Inside the `full-stack` project directory, run the following command to install all required dependencies for both the front-end and back-end (if needed) listed in the `package.json` file:
   ```bash
   npm install
   ```

### Step 4: Install Nodemon

1. **Install nodemon globally** (if you haven’t already installed it):
   ```bash
   npm install -g nodemon
   ```

2. **Start your full-stack application** using nodemon:
   - If you have a back-end server (e.g., in an `index.js` or `server.js` file), start it by running:
     ```bash
     nodemon index.js
     ```
   - Replace `index.js` with the actual entry point of your back-end code.

### Step 5: Access Your Application

- Once you run `nodemon`, it will show output like:
  ```bash
  [nodemon] starting `node index.js`
  Server running at http://localhost:3000
  ```

- Open a browser and go to `http://localhost:3000` (or the port your app is running on).

### Recap of Commands:
```bash
cd path/to/your/directory
git clone https://github.com/rajithlingam/full-stack
cd full-stack
npm install
npm install -g nodemon
nodemon index.js
```

Your full-stack application should now be running on your local machine. Let me know if you encounter any issues or need further clarification!