# 💪 AI Fitness Assistant 🤖

Welcome to the **AI Fitness Assistant** – your all-in-one, AI-powered companion for smarter, healthier living!  
Experience real-time voice conversations, personalized workouts, tailored meal plans, and seamless program management, all in a beautifully responsive interface.

---

## 🎬 Demo App

Curious to see it in action?  
[Live Demo](https://virtu-fit-ai.vercel.app/)

---

## ✨ Highlights

- 🚀 **Tech Stack:** Next.js, React, Tailwind CSS & Shadcn UI
- 🎙️ **Voice AI Assistant:** Chat with your own fitness coach (powered by Vapi)
- 🧠 **LLM Integration:** Personalized programs with Gemini AI
- 🏋️ **Workout Plans:** Custom routines tailored to your goals and needs
- 🥗 **Diet Programs:** Meal plans based on allergies and dietary preferences
- 🔒 **Authentication:** Secure sign-ins with Clerk (GitHub, Google, email)
- 💾 **Database:** Lightning-fast Convex DB
- 🎬 **Real-time Generation:** Instantly build and update fitness programs
- 💻 **Modern Layouts:** Beautiful, responsive UI across all devices
- 🎭 **Client & Server Components:** Optimized for performance and flexibility

---

## 🏅 Features

- **Smart AI Assistant:** Converse with an AI that learns about your goals, physical condition, and preferences
- **Workout Plans:** Receive routines suited to your level, injuries, and aspirations
- **Diet Recommendations:** Get meal plans customized for your health and tastes
- **User Authentication:** Sign in with GitHub, Google, or email/password (powered by Clerk)
- **Program Management:** Create/view multiple fitness programs (only the latest is active)
- **Responsive Design:** Enjoy a seamless experience on desktop or mobile

---

## ⚙️ Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-fitness-assistant.git
cd ai-fitness-assistant
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Vapi Voice AI
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
NEXT_PUBLIC_VAPI_API_KEY=

# Convex Database
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
```
*Fill in the values with your own API keys and deployment URLs.*

### 4. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to get started!

---

## 🚀 Deployment

Deploy effortlessly to [Vercel](https://vercel.com):

```bash
npm run build
npm run start
```

Or connect your GitHub repo to Vercel for automatic deployments!

---

## 🛠️ Technologies Used

- **Next.js:** React framework for the frontend and API routes
- **Tailwind CSS & Shadcn UI:** Modern, component-based styling
- **Clerk:** Authentication and user management
- **Vapi:** Conversational voice AI platform
- **Convex:** Real-time database for seamless data sync
- **Gemini AI:** LLM for generating personalized programs

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Vapi Documentation](https://docs.vapi.ai)
- [Convex Documentation](https://docs.convex.dev)
- [Gemini AI Documentation](https://ai.google.dev/gemini-api/docs)

---

## 🤝 Contributing

Pull requests, suggestions, and collaboration are welcome!  
Feel free to open an issue or just reach out if you want to make fitness smarter—together.

---

## 📬 Contact

Questions, feedback, or partnership ideas?  
Email: stef.spat4@outlook.com

---

**Get fit, stay smart, and let AI do the heavy lifting! 💪🤖**
