"use client";

import { useState } from "react";

export default function Home() {
  const [datasetLink, setDatasetLink] = useState("https://www.kaggle.com/datasets/omercolakoglu/turkish-market-sales-dataset-with-9000items/data");
  const [submissionLink, setSubmissionLink] = useState(
    "https://forms.gle/u39iKnW6eYHqDehc7"
  );
  //https://www.kaggle.com/datasets/omercolakoglu/turkish-market-sales-dataset-with-9000items/data
  return (
    <div className="bg-gray-100">
      {/* Sticky Navbar */}
      {/* <nav className="bg-blue-600 fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">ProBattle BI Module</h1>
          <ul className="flex space-x-6 text-white">
            <li>
              <a href="#intro" className="hover:underline">
                Introduction
              </a>
            </li>
            <li>
              <a href="#overview" className="hover:underline">
                Module Overview
              </a>
            </li>
            <li>
              <a href="#scoring" className="hover:underline">
                Scoring
              </a>
            </li>
            <li>
              <a href="#rules" className="hover:underline">
                Rules
              </a>
            </li>
            <li>
              <a href="#submission" className="hover:underline">
                Submission
              </a>
            </li>
          </ul>
        </div>
      </nav> */}

      {/* Hero Section */}
      <header className="bg-blue-500 text-white text-center py-20 mt-16">
        <h1 className="text-5xl font-bold">
          ProBattle Business Intelligence Challenge
        </h1>
        <p className="text-lg mt-4">
          Solve real-world business problems using Power BI & Python
        </p>
      </header>

      {/* Main Container */}
      <div className="container mx-auto px-6 py-10 bg-white shadow-md rounded-lg">
        {/* Introduction */}
        <section id="intro" className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            📌 Introduction
          </h2>
          <p className="text-gray-700 mt-2">
            Welcome to the Business Intelligence (BI) module of the ProBattle
            Competition! In this session, you will use Power BI and optionally
            Python to analyze data and extract meaningful insights.
          </p>
        </section>

        {/* Module Overview */}
        <section id="overview" className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            📊 Module Overview
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>
              <strong>⏳ Duration:</strong> 4 Hours (Analysis & Dashboard
              Creation) + 1 Hour (Evaluation)
            </li>
            <li>
              <strong>👥 Team Size:</strong> 1 to 3 participants per team
            </li>
            <li>
              <strong>🛠 Tools Allowed:</strong> Power BI (Mandatory), Python
              (Optional)
            </li>
            <li>
              <strong>📂 Dataset:</strong>{" "}
              <a href={datasetLink} className="text-blue-600 underline">
                Download here
              </a>
            </li>
          </ul>
          <h3 className="text-2xl font-semibold mt-4 text-gray-800">
            📑 Deliverables
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>✅ Power BI file (.pbix)</li>
            <li>✅ Python scripts (.py) [if used]</li>
            <li>✅ PDF report explaining insights</li>
          </ul>
        </section>

        {/* Problem Statement */}
        <section id="problem-statement" className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            🔍 Problem Statement
          </h2>
          <p className="text-gray-700 mt-2">
          You are a Business Intelligence Analyst working for a national retail company that operates across multiple cities and regions. The company sells a diverse range of products under various brands and categories and maintains detailed sales transaction records, including customer demographics, store performance, and salesperson details.
          Senior management has tasked you with analyzing this data to identify key trends, uncover sales patterns, and provide actionable recommendations to optimize business performance. 
          </p>
        </section>

        {/* Scoring Breakdown */}
        <section id="scoring" className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            🏆 Scoring Breakdown
          </h2>
          <table className="w-full border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3 text-gray-800">Category</th>
                <th className="border p-3 text-gray-800">Weightage (%)</th>
                <th className="border p-3 text-gray-800">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 text-gray-800">
                  Data Cleaning & Preparation
                </td>
                <td className="border p-3 text-gray-800">20%</td>
                <td className="border p-3 text-gray-800">
                  Handling missing values, structuring data.
                </td>
              </tr>
              <tr>
                <td className="border p-3 text-gray-800">
                  Dashboard Design & Insights
                </td>
                <td className="border p-3 text-gray-800">30%</td>
                <td className="border p-3 text-gray-800">
                  Clear, interactive visualizations.
                </td>
              </tr>
              <tr>
                <td className="border p-3 text-gray-800">
                  Business Problem Solution
                </td>
                <td className="border p-3 text-gray-800">25%</td>
                <td className="border p-3 text-gray-800">
                  Effectiveness in solving the problem.
                </td>
              </tr>
              <tr>
                <td className="border p-3 text-gray-800">Report Quality</td>
                <td className="border p-3 text-gray-800">15%</td>
                <td className="border p-3 text-gray-800">Clarity, logic, insights.</td>
              </tr>
              <tr>
                <td className="border p-3 text-gray-800">
                  Submission Completeness
                </td>
                <td className="border p-3 text-gray-800">10%</td>
                <td className="border p-3 text-gray-800">All required files submitted.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Rules */}
        <section id="rules" className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            📜 Rules of Competition
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>💻 Bring your own laptops with Power BI installed.</li>
            <li>🛑 No discussion with other teams.</li>
            <li>🌐 Internet is allowed for documentation/reference only.</li>
            <li>⚠️ Plagiarism or pre-built dashboards = Disqualification.</li>
            <li>❓ Judges may ask questions during evaluation.</li>
          </ul>
        </section>

        {/* Submission Requirements */}
        <section id="submission" className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            📩 Submission Requirements
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              ✅ <strong>Power BI File (.pbix):</strong> The complete dashboard.
            </li>
            <li>
              ✅ <strong>Python Scripts (.py) [if used]:</strong> Any scripts
              for data cleaning.
            </li>
            <li>
              ✅ <strong>PDF Report:</strong> A document explaining insights and
              solutions.
            </li>
          </ul>
          <p className="mt-2 text-gray-800">
            Submission Link:{" "}
            <a href={submissionLink} className="text-blue-600 underline">
              Submit here
            </a>
          </p>
        </section>

        {/* Report Submission Format */}
        <section id="report-format" className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">📑 Report Submission Format</h2>
          <p className="text-gray-700 mt-2">
            Your report should be compiled in a PDF document and include the following:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>📌 Introduction: Briefly explain the dataset and objective of the analysis.</li>
            <li>📊 Dataset Summary: Overview of key columns, structure, and observations.</li>
            <li>🔍 Data Wrangling & EDA: Steps taken for cleaning, handling missing values, and initial insights.</li>
            <li>📈 Power BI Dashboards & Insights: Include screenshots with short explanations of each dashboard.</li>
            <li>💡 Business Recommendations: Actionable insights to improve sales, profitability, and decision-making.</li>
            <li>📝 Conclusion: Summary of findings and key takeaways.</li>
            {/* <li>📂 Appendix (if applicable): Additional charts, Python scripts, or supporting data.</li> */}
          </ul>
          <p className="mt-2 text-gray-800">
            Ensure your report is clear, structured, and visually presentable, then submit it as a PDF using the provided link.
          </p>
        </section>


        {/* Final Message */}
        <section className="text-center mt-10">
          <h2 className="text-4xl font-bold text-blue-600">🚀 Good Luck!</h2>
          <p className="text-lg text-gray-700 mt-2">
            Showcase your data skills, manage time well, and enjoy the
            challenge!
          </p>
        </section>
      </div>
    </div>
  );
}
