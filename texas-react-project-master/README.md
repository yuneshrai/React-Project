# Digital Banking Web Application

A **frontend-only** digital banking UI prototype built for a college project. The application uses **mock data only**—no backend, no real payments, and no database integration. All amounts are in **NPR** (Nepalese Rupee); demo accounts use Nepali names (Roduhang Kulung, Shovit Sunar, Sudarshan Katwal, etc.). It demonstrates React concepts such as components, state, routing, form handling, conditional rendering, and responsive design.

---

## Project Overview

This is a UI prototype of a digital banking interface with five main pages:

1. **Login** — Email and password fields with mock authentication; redirects to dashboard on success.
2. **Dashboard** — Welcome message, account balance card, recent transactions, income vs expense chart, and quick action buttons (Send Money, View Account, Profile).
3. **Account Details** — Dummy account number, account type (Savings), current balance, and full transaction history table.
4. **Money Transfer** — Beneficiary name and amount inputs; shows a mock success message after submission.
5. **Profile / Settings** — User details, change-password form (mock), and logout button.

Login state is stored in `localStorage`. API calls are simulated with `setTimeout` for loading states.

---

## Tech Stack

- **React 19** — UI library
- **Vite 7** — Build tool and dev server
- **React Router 7** — Client-side routing
- **CSS** — Custom styles with CSS variables (no UI framework for core layout)

---

## How to Run the Project

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. Open the URL shown in the terminal (e.g. `http://localhost:5173`) in your browser.

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**

   ```bash
   npm run preview
   ```

---

## Demo Login Credentials

All amounts are in **NPR** (Nepalese Rupee). Use any of these to sign in (mock authentication); each account shows a different name:

| Email            | Password  | Account name      |
|------------------|-----------|-------------------|
| `demo@bank.com`  | `demo123` | Roduhang Kulung   |
| `user@test.com`  | `password`| Shovit Sunar      |
| `admin@test.com` | `password`| Sudarshan Katwal  |
| `anjali@bank.com`| `demo123` | Anjali Gurung     |
| `bikash@bank.com`| `demo123` | Bikash Thapa      |

---

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── BalanceCard/
│   ├── TransactionList/
│   ├── IncomeExpenseChart/
│   └── QuickActions/
├── pages/            # Page components
│   ├── Login/
│   ├── Dashboard/
│   ├── AccountDetails/
│   ├── MoneyTransfer/
│   └── Profile/
├── data/             # Mock data (no API)
│   └── mockData.js
├── provider/         # Auth context and main layout
├── App.jsx
└── main.jsx
```

---

## Notes

- This is **not** a real banking application. No real payments or sensitive data are processed.
- All data is stored locally (mock data and `localStorage` for login state).
- Suitable for college evaluation and frontend-concept demonstration only.
