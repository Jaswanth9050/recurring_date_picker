# 📅 Recurring Date Picker

A smart and flexible recurring date picker built using **Next.js**, **React**, and **Tailwind CSS**. This component allows users to select dates that repeat based on rules such as **daily**, **weekly**, **monthly**, or **yearly** recurrence patterns — similar to functionality in Google Calendar or scheduling systems.

---

## 🚀 Project Overview

This project is designed to allow users to define a set of recurring rules (e.g., every 2 weeks on Monday, first Tuesday of every month, or every year on a specific date), and then preview the recurring dates visually in a calendar along with a JSON structure.

The app supports:
- Dynamic UI rendering based on the recurrence type
- Accurate date calculation using `date-fns`
- Real-time preview of all matched recurring dates
- Clean and modular architecture using React Context

---

## ✨ Features

### ✅ Recurrence Options
- **Daily** – Select interval like every day, every 3 days, etc.
- **Weekly** – Choose specific weekdays (e.g., Mon, Wed, Fri)
- **Monthly** – Use either fixed dates or patterns like “Second Tuesday”
- **Yearly** – Choose dates that recur every year

### 📆 Calendar Preview
- Fully interactive calendar showing selected recurring dates
- Displays full month grid including previous/next month overflow days
- Supports hover tooltips and visual highlights for matched dates

### 📤 JSON Preview
- Real-time JSON output that shows the recurrence configuration
- Useful for backend APIs and form submissions

### 🔧 Customization & State Management
- Built using **React Context API** for global state
- Inputs update state and preview components in real-time
- Logic broken into reusable utilities for date generation

---

## 🧠 What’s Happening Under the Hood?

### Folder Structure

components/
├── CalendarPreview.jsx        // Renders calendar with recurring dates highlighted
├── RecurringDatePicker.jsx    // Main input form for selecting recurrence rules
├── JSONPreview.jsx            // Shows JSON output of recurrence config

context/
└── RecurrenceContext.jsx      // Holds and provides global recurrence state

lib/
└── generateDates.js           // Utility for calculating recurring dates based on rules



### Key Logic
- We use `useContext` to manage the recurrence state across the app.
- Based on recurrence type, interval, pattern, and selected days, we generate a list of valid dates within the selected date range using `date-fns`.
- Dates are then highlighted on the calendar.
- We support "First Monday", "Last Friday", and other such patterns.

---

## 🧪 What’s Done

- ✅ Daily, Weekly, Monthly, Yearly selection logic
- ✅ Calendar UI with matched dates highlighted
- ✅ JSON output generation for debugging / integration
- ✅ Pattern support (e.g., first/second weekday of month)
- ✅ Full month calendar view with previous/next days
- ✅ Responsive and accessible UI with Tailwind CSS

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) – React Framework
- [React](https://react.dev/) – UI Library
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [date-fns](https://date-fns.org/) – Date manipulation
- [React Context API](https://reactjs.org/docs/context.html) – Global state

---
