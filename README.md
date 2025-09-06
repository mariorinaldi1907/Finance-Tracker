# Finance-Tracker

Agenda :

1. Aim of the project
2. Project Structure
3. Progress Rates

---

## 1. AIM

The aim of this project is for me to be able to create a dashboard like website that is able to help me track my finances ( Income & Expenditure from my bank statements ).

This interactive dashboard helps me to visulaise and analyse my finances very well !!

---

## 2. Project Structure

finance-tracker/
├── node_modules/ # installed dependencies (auto-created)
├── public/ # static assets (images, icons, etc.)
├── src/
│ ├── app/ # all your routes/pages (App Router)
│ │ ├── api/ # server API routes (e.g., /api/import)
│ │ ├── upload/ # /upload page
│ │ │ └── page.js
│ │ ├── transactions/ # /transactions page
│ │ │ └── page.js
│ │ ├── dashboard/ # /dashboard page
│ │ │ └── page.js
│ │ └── page.js # home page (/)
│ ├── components/ # shared React components (you’ll add later)
│ └── lib/ # helpers (e.g., db.js for database connection)
├── migrations/ # SQL migration files (you’ll add)
├── scripts/ # utility scripts (e.g., migrate.js)
├── .env.local # your DATABASE_URL lives here (not committed to git)
├── .gitignore # tells git what to ignore
├── package.json # project dependencies & scripts
├── README.md # project documentation
└── next.config.mjs # Next.js config file

---

## 3. Tracking Progress rates for the project

### Major commits that i make

First Commit :

1. Created my supabase account
2. Initalised the next.js project that i will be working on that includes the Javascript, APP router, '/src' folder as well.
3. Added placeholder pages

## 4. Running the programme

1. Getting started ( CLONE THE REPO FROM GITHUB )

- git clone https://github.com/mariorinaldi1907/Finance-Tracker.git

2. Enter the folder names finance-tracker

- cd finance-tracker

3. install all the necessary dependencies

- npm install
- npm run dev

4. check if it is working on ur personal computer
   at localhost

- open up and browser and input http://localhost:3000/

5. Try out the app and you should see that it is running
