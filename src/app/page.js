"use client";

import { useState } from "react";

export default function Home() {
  const [datasetLink, setDatasetLink] = useState("https://www.kaggle.com/datasets/omercolakoglu/turkish-market-sales-dataset-with-9000items/data"); // Replace with actual link
  const [submissionLink, setSubmissionLink] = useState("#"); // Replace with actual link

  return (
    <div className="container mx-auto px-6 py-10 bg-white">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">ProBattle Business Intelligence (BI) Module</h1>
        <p className="text-lg text-gray-700 mt-2">Solve a business problem using Power BI & Python</p>
      </header>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
        <p className="text-gray-700 mt-2">
          Welcome to the Business Intelligence (BI) module of the ProBattle Competition! In this session, you will solve a business problem using Power BI and optionally Python for data cleaning.
        </p>
      </section>

      {/* Module Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">2. Module Overview</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Duration:</strong> 4 Hours (Analysis & Dashboard Creation) + 1 Hour (Evaluation)</li>
          <li><strong>Team Size:</strong> 1 to 3 participants per team</li>
          <li><strong>Tools Allowed:</strong> Power BI (Mandatory), Python (Optional)</li>
          <li><strong>Dataset:</strong> <a href={datasetLink} className="text-blue-600 underline">Download here</a></li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 text-gray-800">Deliverables:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>✅ Power BI file (.pbix)</li>
          <li>✅ Python scripts (.py) [if used]</li>
          <li>✅ PDF report explaining insights</li>
        </ul>
      </section>

      {/* Scoring Breakdown */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">3. Scoring Breakdown</h2>
        <table className="w-full border-collapse border border-gray-300 mt-2">
          <thead>
            <tr className="bg-white">
              <th className="border p-2 text-gray-800">Category</th>
              <th className="border p-2 text-gray-800">Weightage (%)</th>
              <th className="border p-2 text-gray-800">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 text-gray-800">Data Cleaning & Preparation</td>
              <td className="border p-2 text-gray-800">20%</td>
              <td className="border p-2 text-gray-800">Handling missing values, inconsistencies, and structuring data.</td>
            </tr>
            <tr>
              <td className="border p-2 text-gray-800">Dashboard Design & Insights</td>
              <td className="border p-2 text-gray-800">30%</td>
              <td className="border p-2 text-gray-800">Clear, interactive Power BI visualizations with meaningful insights.</td>
            </tr>
            <tr>
              <td className="border p-2 text-gray-800">Business Problem Solution</td>
              <td className="border p-2 text-gray-800">25%</td>
              <td className="border p-2 text-gray-800">How well the solution addresses the problem and decision-making.</td>
            </tr>
            <tr>
              <td className="border p-2 text-gray-800">Report Quality</td>
              <td className="border p-2 text-gray-800">15%</td>
              <td className="border p-2 text-gray-800">Clarity, insights, and logical reasoning in the PDF report.</td>
            </tr>
            <tr>
              <td className="border p-2 text-gray-800">Submission Completeness</td>
              <td className="border p-2 text-gray-800">10%</td>
              <td className="border p-2 text-gray-800">Proper submission of required files.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Rules */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">4. Rules of Competition</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Bring your own laptops with Power BI installed.</li>
          <li>Teams must work independently; no discussion with other teams.</li>
          <li>Internet usage is allowed only for documentation and syntax reference.</li>
          <li>Plagiarism or pre-built dashboards will result in disqualification.</li>
          <li>Judges may ask questions during evaluation.</li>
        </ul>
      </section>

      {/* Submission Requirements */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">5. Submission Requirements</h2>
        <p className="text-gray-700 mt-2">Participants must submit the following files:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>✅ <strong>Power BI File (.pbix):</strong> The complete dashboard.</li>
          <li>✅ <strong>Python Scripts (.py) [if used]:</strong> Any scripts for data cleaning.</li>
          <li>✅ <strong>PDF Report:</strong> A document explaining insights and solutions.</li>
        </ul>
        <p className="mt-2 text-gray-800">
          Submission Link: <a href={submissionLink} className="text-blue-600 underline">Submit here</a>
        </p>
      </section>

      {/* Setup Notes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">6. Setup Notes</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Ensure Power BI Desktop is installed before the competition.</li>
          <li>If using Python, install required libraries like pandas, numpy, matplotlib.</li>
          <li>Save and test your Power BI file before submission to avoid corruption.</li>
        </ul>
      </section>

      {/* Final Message */}
      <section className="text-center mt-10">
        <h2 className="text-3xl font-bold text-blue-600">Good Luck! 🚀</h2>
        <p className="text-lg text-gray-700 mt-2">
          Showcase your data analysis and visualization skills, manage time well, and have fun solving the challenge!
        </p>
      </section>
    </div>
  );
}
