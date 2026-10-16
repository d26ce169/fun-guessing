# 🎮 Fun Guessing (फन गेसिंग)
> Real-Time Indian Pop Culture Multiplayer Party Game

Play with friends and family from anywhere! One host creates a room and shares the 6-digit Team Code or direct invite link. Up to 10 players join, buzz in their answers, and compete for points.

---

## ✨ Features
- **Host Configurable Target Points**: The host decides the winning target (5, 10, 15, 20, or custom) before starting.
- **Massive Database of Over 1 Lakh Questions (102,102 Questions)**:
  - **TMKOC (>50,000 Questions)**: Funny dialogues, background music, character quirks, story arcs, and society trivia.
  - **Bollywood Comedy (>30,000 Questions)**: *Hera Pheri*, *Welcome*, *Dhamaal*, *Golmaal*, *Andaz Apna Apna*, *Chup Chup Ke*, *Munna Bhai*, *3 Idiots*, etc.
  - **Indian Cricket (>12,000 Questions)**: Signature shots (Helicopter, Cover drive, Pull shot, Upper cut, Scoop 360), jerseys, and iconic moments.
  - **General Knowledge (>10,000 Questions)**: ISRO missions, national symbols, monuments, and geography.
- **100% Real Authentic Audio Clues**: 33 authentic audio recordings (Jethalal, Champaklal, Iyer, Garba dhol, TMKOC theme, Paisa Double, Welcome Miracle, Uday Shetty BGM, Rajpal Yadav Tadap, Golmaal Lucky sound, Gabbar, Mogambo, Pushpa, Singham, KGF, Bahubali, Amitabh, SRK, Modi ji, Dhoni Thala, IPL horn).
- **Strictly Zero Duplicates in Same Room**: Questions are tracked per room and never repeat across matches or restarts.
- **Responsive Web UI**: Built-in on-screen touch keypad and desktop keyboard support.
- **Fair & Safe**: Strict 30-second timer, rate-limiting, and sanitized inputs.

---

## 🚀 Local Setup & Run

1. Clone or download the repository:
   ```bash
   git clone <your-repo-url>
   cd fun-guessing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open in browser:
   - Local: `http://localhost:5000`
   - On same Wi-Fi / Local Network: `http://<your-ip>:5000`

---

## ☁️ 100% Free Deployment on Render

This project includes a `render.yaml` blueprint and runs on Node.js with Express & Socket.io:

1. **Sign in to Render**: Go to [render.com](https://render.com) and sign in using your **GitHub account**.
2. **Create New Web Service**:
   - In Render Dashboard, click **New +** and select **Web Service**.
   - Choose **Build and deploy from a Git repository**.
   - Select your `fun-guessing` repository.
3. **Configure Service**:
   - **Name**: `fun-guessing` (or any name you prefer)
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type / Plan**: **Free** ($0/month)
4. **Deploy**:
   - Click **Create Web Service**.
   - Render will build and deploy your game. Once deployed, Render provides a public HTTPS URL (e.g. `https://fun-guessing.onrender.com`) that anyone in the world can open to play!

---

## 📜 License
MIT License
