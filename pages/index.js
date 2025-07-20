// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {
//   return (
//     <div
//       className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
//     >
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               pages/index.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>
//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


// import { RecurrenceProvider } from "../context/RecurrenceContext";
// import RecurringDatePicker from "../components/RecurringDatePicker";

// export default function Home() {
//   return (
//     <RecurrenceProvider>
//       <main className="min-h-screen bg-gray-100 p-10">
//         <RecurringDatePicker />
//       </main>
//     </RecurrenceProvider>
//   );
// }



// // pages/index.js
// import { RecurrenceProvider, useRecurrence } from "../context/RecurrenceContext";
// import RecurringDatePicker from "../components/RecurringDatePicker";
// import CalendarPreview from "../components/CalendarPreview";

// function HomeContent() {
//   const { recurrence } = useRecurrence(); // 🧠 get recurrence from context

//   return (
//     <main className="min-h-screen bg-gray-100 p-10">
//       <RecurringDatePicker />
//       <CalendarPreview config={recurrence} /> {/* 🗓️ pass to calendar */}
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <RecurrenceProvider>
//       <HomeContent />
//     </RecurrenceProvider>
//   );
// }



// // pages/index.js
// import { RecurrenceProvider } from "../context/RecurrenceContext";
// import RecurringDatePicker from "../components/RecurringDatePicker";
// import CalendarPreview from "../components/CalendarPreview";
// import { useRecurrence } from "../context/RecurrenceContext";

// function InnerPage() {
//   const { recurrence } = useRecurrence();

//   return (
//     <main className="min-h-screen bg-gray-100 p-10 space-y-10">
//       <RecurringDatePicker />
//       <CalendarPreview config={recurrence} />
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <RecurrenceProvider>
//       <InnerPage />
//     </RecurrenceProvider>
//   );
// }



// // pages/index.js
// import React from "react";
// import dynamic from "next/dynamic";

// // 🧠 Dynamically load RecurrenceProvider so it's treated as client-side
// const RecurrenceProvider = dynamic(
//   () => import("../context/RecurrenceContext").then(mod => mod.RecurrenceProvider),
//   { ssr: false }
// );

// const RecurringDatePicker = dynamic(() => import("../components/RecurringDatePicker"), { ssr: false });
// const CalendarPreview = dynamic(() => import("../components/CalendarPreview"), { ssr: false });

// function HomePage() {
//   return (
//     <RecurrenceProvider>
//       <main className="min-h-screen bg-gray-100 p-10 space-y-10">
//         <RecurringDatePicker />
//         <CalendarPreview />
//       </main>
//     </RecurrenceProvider>
//   );
// }

// export default HomePage;


// // pages/index.js
// import React from "react";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center">
//       <h1 className="text-3xl font-bold text-blue-600">Recurring Date Picker</h1>
//     </div>
//   );
// }


// // pages/index.js
// import React from "react";
// import { RecurrenceProvider } from "../context/RecurrenceContext";
// import RecurringDatePicker from "../components/RecurringDatePicker";
// import CalendarPreview from "../components/CalendarPreview";

// function InnerPage() {
//   return (
//     <main className="min-h-screen bg-gray-100 p-10 space-y-10">
//       <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
//         Recurring Date Picker
//       </h1>
//       <RecurringDatePicker />
//       <CalendarPreview />
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <RecurrenceProvider>
//       <InnerPage />
//     </RecurrenceProvider>
//   );
// }



// pages/index.js
// import { RecurrenceProvider } from "../context/RecurrenceContext";
// import { RecurrenceProvider } from "../context/RecurrenceContext";
import { RecurrenceProvider } from "@/context/RecurrenceContext";
import RecurringDatePicker from "../components/RecurringDatePicker";
// import CalendarPreview from "../components/CalendarPreview";

export default function Home() {
  return (
    <RecurrenceProvider>
      <main className="min-h-screen bg-gray-100 p-10 space-y-10">
        <h1 className="text-3xl font-bold text-center text-blue-600">Recurring Date Picker</h1>
        <RecurringDatePicker />
        {/* <CalendarPreview /> */}
      </main>
    </RecurrenceProvider>
  );
}
