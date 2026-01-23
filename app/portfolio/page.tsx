'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

const sampleProjects = [
  {
    id: 'emergency-wait-prediction',
    number: '01',
    title: 'Emergency Department Wait Time Prediction',
    category: 'Healthcare AI',
    shortDesc: 'AI-powered system predicting A&E wait times with 94.95% accuracy using LightGBM.',
    description: 'AI-powered system predicting A&E wait times using LightGBM with 94.95% accuracy. Features real-time patient check-in, interactive visualizations, and clinical decision support with MAE of just 12.06 minutes.',
    image: '/projects/emergency-wait-1.png',
    fallbackGradient: 'from-blue-500 to-cyan-500',
    techStack: ['Python', 'LightGBM', 'Streamlit', 'Pandas', 'Plotly', 'Scikit-learn'],
    metrics: { main: '94.95%', label: 'Accuracy' },
    liveDemo: 'https://emergency-wait-prediction-fsydtkbx5toyvfyvwctder.streamlit.app/',
    github: 'https://github.com/ayoolumi/emergency-wait-prediction',
    huggingface: 'https://huggingface.co/datasets/ayoolumi/emergency-wait-prediction',
    status: 'live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" className="fill-teal-500/20" />
        <path d="M16 8v8l6 4" className="stroke-teal-600" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `This project develops an intelligent machine learning system designed to predict emergency department wait times in real-time. The system leverages historical patient data, staffing levels, and temporal patterns to provide accurate wait time estimates, helping both patients and healthcare administrators make informed decisions.

Emergency departments are high-pressure environments where timely information can significantly impact patient experience and operational efficiency. By implementing predictive analytics, this solution bridges the gap between uncertainty and informed decision-making.

The system features an interactive Streamlit dashboard that allows real-time predictions, patient check-in simulation, and visual exploration of factors affecting wait times. Built with scalability in mind, the solution can be adapted to different healthcare settings and integrated into existing hospital management systems.

Key deliverables include a trained LightGBM model achieving 94.95% accuracy with MAE of 12.06 minutes, comprehensive exploratory data analysis, feature importance insights, and a deployed web application for clinical use.`,
      problemStatement: `Emergency departments worldwide face mounting pressure from increasing patient volumes, staff shortages, and resource constraints. Across Scotland and the UK, A&E waiting times have reached critical levels, with patients routinely waiting 4+ hours for treatment.`,
      previousGaps: `Previous approaches to emergency department wait time prediction have significant limitations including simple averaging methods and basic queueing theory that fail to capture the complexity of emergency care pathways.`,
      aimsObjectives: `Primary Aim: Develop and deploy a machine learning system that accurately predicts emergency department wait times, improving patient experience and supporting clinical decision-making.`,
      datasets: `The project utilizes a synthetic dataset of 100,000 patient records spanning 4 years (2021-2024), carefully generated to mirror realistic emergency department patterns in Scottish healthcare settings.`,
      methodology: `The project follows a structured data science methodology across six phases: Data Generation & Preprocessing, Exploratory Data Analysis, Feature Engineering, Model Development, Hyperparameter Tuning, and Model Evaluation & Deployment.`,
      findings: `LightGBM achieved the best performance with 94.95% accuracy and Mean Absolute Error of just 12.06 minutes. Department Occupancy was the most important feature at 28%.`,
      limitations: `Data is synthetic and model has not been validated on actual hospital data. Single department configuration may require retraining for different hospitals.`,
      recommendations: `Partner with healthcare providers to validate the model using actual A&E data. Develop APIs to connect with hospital management systems.`,
      dashboard: `The project features a comprehensive Streamlit-based web application with Patient Check-In Simulator, Real-Time Department Overview, Analytics Dashboard, and Predictive Insights Panel.`,
      deliverables: `Trained LightGBM model with 94.95% accuracy, complete dataset on Hugging Face, interactive Streamlit dashboard, and full source code on GitHub.`
    }
  },
  {
    id: 'pneumonia-detection',
    number: '02',
    title: 'AI-Powered Pneumonia Detection System',
    category: 'Medical Imaging',
    shortDesc: 'Deep learning chest X-ray analysis system achieving 85.58% diagnostic accuracy using ResNet-18 CNN.',
    description: 'Deep learning chest X-ray analysis system with automated risk assessment and PDF reporting achieving 85.58% accuracy using ResNet-18 CNN architecture with PyTorch.',
    image: '/projects/pneumonia-detection-1.png',
    fallbackGradient: 'from-rose-500 to-orange-500',
    techStack: ['PyTorch', 'ResNet-18', 'CNN', 'Streamlit', 'OpenCV', 'Torchvision'],
    metrics: { main: '85.58%', label: 'Accuracy' },
    liveDemo: 'https://pneumonia-detection-system-l7hrqe7jvf7rwjzwtctgjm.streamlit.app/',
    github: 'https://github.com/ayoolumi/pneumonia-detection-system',
    status: 'live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="4" width="16" height="20" rx="2" className="stroke-rose-600 fill-rose-500/10" strokeWidth="2" />
        <path d="M12 10h8M12 14h8M12 18h4" className="stroke-rose-500" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="22" r="6" className="fill-white stroke-rose-600" strokeWidth="2" />
        <path d="M22 19v6M19 22h6" className="stroke-rose-600" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `This project develops a deep learning system for automated pneumonia detection from chest X-rays, providing rapid screening support for radiologists and clinicians.`,
      problemStatement: `Pneumonia is a leading cause of death worldwide. Manual chest X-ray interpretation is time-consuming and requires expertise that is scarce in many healthcare settings.`,
      previousGaps: `Existing CAD systems often lack explainability, have high false positive rates, and are not designed for clinical workflow integration.`,
      aimsObjectives: `Develop an accessible AI system for pneumonia detection from chest X-rays with high diagnostic accuracy and confidence scores.`,
      datasets: `Chest X-ray dataset with 5,863 images from Kaggle, split into training, validation, and test sets.`,
      methodology: `ResNet-18 architecture with transfer learning from ImageNet, fine-tuned with data augmentation and early stopping.`,
      findings: `Overall Accuracy: 85.58%, Sensitivity: 92%, Specificity: 78%. Transfer learning significantly improved performance.`,
      limitations: `Binary classification only, does not differentiate between bacterial and viral pneumonia. Requires clinical validation.`,
      recommendations: `Extend to multi-class classification, add Grad-CAM visualizations for explainability, conduct clinical trial for regulatory approval.`,
      dashboard: `Streamlit application with image upload, instant analysis, confidence scores, and PDF report generation.`,
      deliverables: `Trained ResNet-18 model, Streamlit web application, complete source code on GitHub.`
    }
  },
  {
    id: 'mental-health-forecasting',
    number: '03',
    title: 'Mental Health Service Demand Forecasting',
    category: 'Healthcare Analytics',
    shortDesc: 'ARIMA-based forecasting system analyzing 1.97M+ records across Scotland\'s 14 health boards.',
    description: 'Time series forecasting system predicting mental health service demand across all 14 Scottish health boards using ARIMA modeling. Analyzes 1,970,620 records from 2019-2024.',
    image: '/projects/mental-health-1.png',
    fallbackGradient: 'from-emerald-500 to-teal-500',
    techStack: ['Python', 'ARIMA', 'Statsmodels', 'Pandas', 'Plotly', 'Streamlit'],
    metrics: { main: '1.97M+', label: 'Records' },
    liveDemo: 'https://mental-health-demand-forecasting-mypuyyylxp3fcubj8dddlb.streamlit.app/',
    github: 'https://github.com/ayoolumi/mental-health-demand-forecasting',
    status: 'live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M4 24 L10 18 L16 22 L22 12 L28 16" className="stroke-emerald-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="10" cy="18" r="2" className="fill-emerald-500" />
        <circle cx="16" cy="22" r="2" className="fill-emerald-500" />
        <circle cx="22" cy="12" r="2" className="fill-emerald-500" />
      </svg>
    ),
    details: {
      introduction: `Comprehensive time series forecasting system to predict mental health service demand across all 14 Scottish territorial health boards.`,
      problemStatement: `Mental health services across Scotland face increasing pressure with rising demand post-COVID and limited resources.`,
      previousGaps: `Previous approaches lacked seasonal decomposition, regional variation analysis, and interactive visualization tools.`,
      aimsObjectives: `Analyze demand patterns, identify seasonal components, develop ARIMA models, and create interactive dashboard.`,
      datasets: `Public Health Scotland data: 1,970,620 records from 2019-2024, covering all 14 health boards.`,
      methodology: `Data cleaning, exploratory analysis, time series decomposition, ARIMA modeling, and cross-validation.`,
      findings: `Strong seasonal patterns with peaks in January and September. 15% overall increase from 2019-2024.`,
      limitations: `Historical data may not fully reflect post-pandemic patterns. External factors not modeled.`,
      recommendations: `Integrate with workforce planning, add external variables, develop early warning system.`,
      dashboard: `Health board overview, time series analysis, forecasting panel, and comparative analysis tools.`,
      deliverables: `ARIMA models for all 14 health boards, interactive Streamlit dashboard, complete source code.`
    }
  },
  {
    id: 'fall-risk-assessment',
    number: '04',
    title: 'AI-Powered Fall Risk Assessment',
    category: 'Healthcare AI',
    shortDesc: 'ML model predicting fall risk in elderly patients with 79.5% accuracy and AUC of 0.856.',
    description: 'Machine learning system for predicting fall risk in elderly patients using logistic regression. Achieves 79.5% accuracy with AUC 0.856.',
    image: '/projects/fall-risk-1.png',
    fallbackGradient: 'from-purple-500 to-pink-500',
    techStack: ['Python', 'Logistic Regression', 'Scikit-learn', 'Streamlit', 'Pandas'],
    metrics: { main: '0.856', label: 'AUC-ROC' },
    liveDemo: 'https://fall-risk-assessment-lnvjtegpsewdkd5khtsfmk.streamlit.app/',
    github: 'https://github.com/ayoolumi/fall-risk-assessment',
    status: 'live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="8" r="4" className="fill-purple-500/30 stroke-purple-600" strokeWidth="2" />
        <path d="M16 12v8M12 16h8M10 24l6-4 6 4" className="stroke-purple-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    details: {
      introduction: `AI-powered risk assessment tool to identify elderly patients at high risk of falling, enabling preventive interventions.`,
      problemStatement: `Falls are the leading cause of injury in people over 65. Many falls are preventable with early intervention.`,
      previousGaps: `Existing tools rely on subjective clinical judgment, paper-based scoring, and lack machine learning integration.`,
      aimsObjectives: `Develop ML model with AUC > 0.80, identify key risk factors, create user-friendly clinical interface.`,
      datasets: `20 features including demographics, medical history, physical assessment, cognitive status, and functional scores.`,
      methodology: `Logistic regression for interpretability, feature importance analysis, threshold optimization.`,
      findings: `Accuracy: 79.5%, AUC-ROC: 0.856, Sensitivity: 80.8%, Specificity: 77.1%. Previous fall history is top risk factor.`,
      limitations: `Model trained on specific demographics, requires clinical validation before deployment.`,
      recommendations: `Validate on larger populations, integrate with EHR systems, develop intervention recommendation engine.`,
      dashboard: `Patient risk assessment form, instant risk score, risk factor breakdown, intervention recommendations.`,
      deliverables: `Logistic regression model, 20-feature risk framework, Streamlit application, documentation.`
    }
  },
  {
    id: 'social-isolation-detection',
    number: '05',
    title: 'Social Isolation Detection System',
    category: 'Social Care AI',
    shortDesc: 'ML system detecting social isolation risk in elderly populations for proactive care intervention.',
    description: 'Machine learning classification system for detecting social isolation risk in elderly populations for proactive social care intervention.',
    image: '/projects/social-isolation-1.png',
    fallbackGradient: 'from-amber-500 to-yellow-500',
    techStack: ['Python', 'Machine Learning', 'Streamlit', 'Pandas', 'Scikit-learn', 'Plotly'],
    metrics: { main: 'Elderly', label: 'Care Focus' },
    liveDemo: 'https://social-isolation-detection-u8bhpjruedwd3yf2295kqt.streamlit.app/',
    github: 'https://github.com/ayoolumi/social-isolation-detection',
    status: 'live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="12" r="5" className="fill-amber-500/30 stroke-amber-600" strokeWidth="2" />
        <circle cx="8" cy="22" r="3" className="fill-amber-400/30 stroke-amber-500" strokeWidth="1.5" />
        <circle cx="24" cy="22" r="3" className="fill-amber-400/30 stroke-amber-500" strokeWidth="1.5" />
        <path d="M16 17v3M11 19l3 2M21 19l-3 2" className="stroke-amber-600" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `AI-powered detection system to identify individuals at risk of social isolation, enabling timely social care interventions.`,
      problemStatement: `Social isolation affects millions of elderly individuals, increasing mortality risk by 26% and linked to dementia and depression.`,
      previousGaps: `Current approaches rely on self-reporting, lack systematic screening, and use reactive rather than proactive identification.`,
      aimsObjectives: `Develop ML classification model, identify key indicators, enable proactive intervention, create accessible screening tool.`,
      datasets: `Risk factors including demographics, social activity, health status, technology use, environment, and life events.`,
      methodology: `Risk factor identification, synthetic data generation, classifier comparison, feature importance analysis.`,
      findings: `Key indicators: living alone, mobility limitations, recent bereavement, low contact frequency, lack of group activity.`,
      limitations: `Based on synthetic data, requires validation with social care agencies, cultural factors may affect indicators.`,
      recommendations: `Partner with social care agencies, integrate with care management systems, add longitudinal monitoring.`,
      dashboard: `Individual risk assessment, population screening, risk visualization, intervention recommendations.`,
      deliverables: `ML classification model, risk scoring framework, Streamlit application, integration guide.`
    }
  },
  {
    id: 'covid-impact-analysis',
    number: '06',
    title: 'COVID Healthcare Impact Analysis',
    category: 'Healthcare Analytics',
    shortDesc: 'Comprehensive analytics dashboard analyzing COVID-19 impact on Scottish healthcare services 2020-2024.',
    description: 'Population health analytics dashboard examining COVID-19 impact on healthcare services across Scotland spanning 2020-2024.',
    image: '/projects/covid-healthcare-1.png',
    fallbackGradient: 'from-indigo-500 to-blue-500',
    techStack: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'Data Analysis'],
    metrics: { main: '2020-24', label: 'Analysis Period' },
    liveDemo: 'https://covid-healthcare-impact-4hxqzrr79raja5c5v9cvba.streamlit.app/',
    github: 'https://github.com/ayoolumi/covid-healthcare-impact',
    status: 'live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" className="stroke-indigo-600 fill-indigo-500/10" strokeWidth="2" />
        <circle cx="16" cy="16" r="4" className="fill-indigo-500" />
        <path d="M16 6v4M16 22v4M6 16h4M22 16h4" className="stroke-indigo-600" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `Comprehensive analysis of how the COVID-19 pandemic impacted Scottish healthcare services from 2020 to 2024.`,
      problemStatement: `The pandemic significantly disrupted healthcare services with cancelled surgeries, reduced attendances, and increased waiting lists.`,
      previousGaps: `Early analyses focused primarily on COVID cases/deaths without examining broader healthcare system impacts.`,
      aimsObjectives: `Quantify service disruption, identify most affected areas, track recovery trajectories, enable regional comparison.`,
      datasets: `Public Health Scotland data including hospital admissions, A&E attendances, outpatient appointments, and workforce data.`,
      methodology: `Multi-source data integration, pre-pandemic baseline establishment, disruption and recovery analysis.`,
      findings: `Elective procedures dropped 70% during first lockdown, A&E attendances fell 40%, recovery patterns vary by region.`,
      limitations: `Data quality issues during pandemic, difficulty separating COVID effects from other factors.`,
      recommendations: `Continue monitoring recovery, develop early warning indicators, analyze long-term population health impacts.`,
      dashboard: `Timeline visualization, service area comparison, regional breakdown maps, recovery tracker.`,
      deliverables: `Comprehensive data analysis, interactive Streamlit dashboard, trend visualizations, source code.`
    }
  },
  {
    id: 'nhs-data-pipeline',
    number: '07',
    title: 'NHS Data Integration Pipeline',
    category: 'Data Engineering',
    shortDesc: 'Automated ETL pipeline for integrating and processing NHS healthcare data sources.',
    description: 'Automated ETL (Extract, Transform, Load) pipeline for integrating multiple NHS data sources with validation and quality checks.',
    image: '/projects/nhs-pipeline-1.png',
    fallbackGradient: 'from-slate-600 to-gray-500',
    techStack: ['Python', 'ETL', 'Pandas', 'SQL', 'Streamlit'],
    metrics: { main: 'ETL', label: 'Pipeline' },
    liveDemo: 'https://nhs-data-integration-pipeline-awass8hapyas6weebsey6n.streamlit.app/',
    github: 'https://github.com/ayoolumi/nhs-data-integration-pipeline',
    status: 'live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="8" height="8" rx="1" className="fill-slate-500/30 stroke-slate-600" strokeWidth="1.5" />
        <rect x="20" y="6" width="8" height="8" rx="1" className="fill-slate-500/30 stroke-slate-600" strokeWidth="1.5" />
        <rect x="12" y="18" width="8" height="8" rx="1" className="fill-slate-600/50 stroke-slate-700" strokeWidth="1.5" />
        <path d="M8 14v2a2 2 0 002 2h4M24 14v2a2 2 0 01-2 2h-4" className="stroke-slate-500" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `Automated ETL pipeline to integrate diverse NHS data sources into unified, analytics-ready format.`,
      problemStatement: `Healthcare data exists in silos across multiple systems with inconsistent formats and quality.`,
      previousGaps: `Heavy reliance on manual processing, limited automation, inconsistent quality checking.`,
      aimsObjectives: `Automate data extraction, implement transformation rules, build validation checks, create reusable components.`,
      datasets: `Hospital activity data, A&E statistics, waiting time records, patient demographics, geographic reference data.`,
      methodology: `Extract from multiple sources, validate at ingestion, transform with standardization, quality check, load to targets.`,
      findings: `Pipeline processes multiple NHS data sources with automated quality checks and standardized outputs.`,
      limitations: `Batch processing only, limited to specific NHS formats, requires configuration for new sources.`,
      recommendations: `Add streaming support, expand source connectors, implement data catalog integration.`,
      dashboard: `Pipeline status monitoring, data quality metrics, processing logs, error tracking.`,
      deliverables: `Complete ETL pipeline, validation framework, monitoring dashboard, configuration templates.`
    }
  },
  {
    id: 'whatsapp-debt-reminder',
    number: '08',
    title: 'WhatsApp Debt Reminder System',
    category: 'Automation Tools',
    shortDesc: 'Automated payment reminder platform with WhatsApp integration, multi-currency tracking, and smart templates.',
    description: 'Full-stack WhatsApp-based debt reminder system with automated messaging, multi-currency support (GBP, NGN, USD, EUR), and payment tracking.',
    image: '/projects/debt_reminder1.png',
    fallbackGradient: 'from-teal-500 to-green-500',
    techStack: ['Python', 'Streamlit', 'SQLite', 'Green API', 'REST APIs', 'WhatsApp'],
    metrics: { main: '4', label: 'Currencies' },
    liveDemo: 'https://debt-reminder-pro-bktusfztnyq4xgrt6cgzvw.streamlit.app/',
    github: 'https://github.com/ayoolumi/debt-reminder-pro',
    status: 'live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="3" className="fill-teal-500/20 stroke-teal-600" strokeWidth="2" />
        <path d="M10 12h12M10 16h8M10 20h10" className="stroke-teal-500" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="6" className="fill-green-500" />
        <path d="M22 24l2 2 3-3" className="stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    details: {
      introduction: `Automated WhatsApp-based debt reminder system that sends professional payment reminders with one click.`,
      problemStatement: `Tracking debts and sending payment reminders manually is awkward, time-consuming, and inconsistent.`,
      previousGaps: `Manual methods lack automation, traditional invoicing is email-based with lower open rates than WhatsApp.`,
      aimsObjectives: `Implement WhatsApp integration, multi-currency support, smart templates, debtor management, payment tracking.`,
      datasets: `Database schema includes debtors, payments, message history, and templates tables.`,
      methodology: `Architecture design, backend development with SQLAlchemy, Green API integration, Streamlit frontend.`,
      findings: `System delivers instant WhatsApp messages, supports 4 currencies, includes 6 message templates.`,
      limitations: `Ephemeral storage on Streamlit Cloud, single WhatsApp account, no scheduled reminders yet.`,
      recommendations: `Add PostgreSQL for persistence, implement scheduled reminders, add payment link integration.`,
      dashboard: `Home, Dashboard, Debtors, Send Reminders, Templates, History, and Settings pages.`,
      deliverables: `Complete Streamlit application, SQLite database, Green API integration, documentation.`
    }
  },
  {
    id: 'executive-sales-dashboard',
    number: '09',
    title: 'Executive Sales Dashboard',
    category: 'Business Analytics',
    shortDesc: 'Business intelligence dashboard with £6.39M revenue tracking, £30.57M pipeline, and 18.9% win rate analysis.',
    description: 'Comprehensive business analytics dashboard for executive sales reporting with £6.39M revenue tracking and interactive visualizations.',
    image: '/projects/executive-bi-1.png',
    fallbackGradient: 'from-green-500 to-emerald-500',
    techStack: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'Business Intelligence'],
    metrics: { main: '£6.39M', label: 'Revenue' },
    liveDemo: 'https://executive-sales-dashboard-9ekb6dle3k5apgaf5d6puu.streamlit.app/',
    github: 'https://github.com/ayoolumi/executive-sales-dashboard',
    status: 'live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="16" width="5" height="10" className="fill-green-500/50" />
        <rect x="11" y="12" width="5" height="14" className="fill-green-500/70" />
        <rect x="18" y="8" width="5" height="18" className="fill-green-600/80" />
        <rect x="25" y="4" width="5" height="22" className="fill-green-600" />
        <path d="M4 28h26" className="stroke-green-700" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `Executive sales dashboard providing C-suite level insights into sales performance, pipeline health, and team productivity.`,
      problemStatement: `Sales executives need clear visibility into revenue performance, pipeline health, and team performance.`,
      previousGaps: `Traditional sales reporting uses static reports, has limited drill-down, and no real-time access.`,
      aimsObjectives: `Create executive KPI dashboard, visualize pipeline and funnel, enable team comparison, provide trend analysis.`,
      datasets: `Metrics: £6.39M revenue, £30.57M pipeline, 18.9% win rate, £17K average deal size.`,
      methodology: `KPI identification, data model design, visualization selection, interactive filter implementation.`,
      findings: `Dashboard shows revenue distribution, conversion rates, top performers, and seasonal trends.`,
      limitations: `Based on sample data, single-currency focus, no CRM integration, manual data refresh.`,
      recommendations: `Add CRM integration, implement automated refresh, add predictive forecasting.`,
      dashboard: `Executive KPI cards, pipeline funnel, revenue trends, team leaderboard, deal drill-down.`,
      deliverables: `Complete Streamlit dashboard, interactive visualizations, sample dataset, source code.`
    }
  },
  {
    id: 'document-management-system',
    number: '10',
    title: 'Care Home Document Management System',
    category: 'Care Administration',
    shortDesc: 'Centralized document control system ensuring consistency, version tracking, and compliance across care settings.',
    description: 'Comprehensive document management solution for care homes featuring version control, approval workflows, compliance tracking, and searchable document repository. Designed to ensure consistency across departments and simplify audits.',
    image: '/projects/document-management-1.png',
    fallbackGradient: 'from-sky-500 to-blue-600',
    techStack: ['Python', 'Streamlit', 'SQLite', 'PDF Processing', 'Search', 'Authentication'],
    metrics: { main: 'QA', label: 'Compliant' },
    liveDemo: 'https://care-home-document-management-3wuuummspu9wqpse9sksk7.streamlit.app/',
    github: 'https://github.com/ayoolumi/care-home-document-management',
    status: 'live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="16" height="22" rx="2" className="fill-sky-500/20 stroke-sky-600" strokeWidth="2" />
        <path d="M10 10h8M10 14h8M10 18h5" className="stroke-sky-500" strokeWidth="2" strokeLinecap="round" />
        <rect x="18" y="14" width="8" height="10" rx="1" className="fill-blue-500 stroke-blue-600" strokeWidth="1.5" />
        <path d="M20 17h4M20 20h4" className="stroke-white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `This project develops a comprehensive document management system tailored for care home environments.`,
      problemStatement: `Care homes face significant document management challenges with scattered documents and no version control.`,
      previousGaps: `Current document management relies on basic shared folders with no version control or audit trail.`,
      aimsObjectives: `Create a user-friendly document management system that ensures consistency and compliance.`,
      datasets: `Document categories including Policies, Care Plans, Training Records, Health & Safety, and more.`,
      methodology: `Requirements gathering, database design, file storage system, search indexing, and workflow engine.`,
      findings: `System provides unlimited document storage with version history and full-text search.`,
      limitations: `Initial setup requires document migration effort and staff training.`,
      recommendations: `AI-powered document classification and automated compliance gap detection.`,
      dashboard: `Document library, search with filters, upload with categorization, version comparison, and compliance status.`,
      deliverables: `Complete document management system with user guide and training materials.`
    }
  },
  {
    id: 'staff-scheduling-dashboard',
    number: '11',
    title: 'Staff Rota & Scheduling Dashboard',
    category: 'Care Administration',
    shortDesc: 'Intelligent staff scheduling system with shift management, availability tracking, and automated rota generation.',
    description: 'AI-assisted staff scheduling solution for care organizations featuring shift pattern management, staff availability tracking, automated rota generation, and real-time coverage monitoring.',
    image: '/projects/staff-rota-1.png',
    fallbackGradient: 'from-violet-500 to-purple-600',
    techStack: ['Python', 'Streamlit', 'SQLite', 'Optimization', 'Calendar APIs', 'Notifications'],
    metrics: { main: 'Rota', label: 'Management' },
    liveDemo: 'https://staff-rota-dashboard-bsy7fd8xwrbxum3bcf5txx.streamlit.app/',
    github: 'https://github.com/ayoolumi/staff-rota-dashboard',
    status: 'live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="20" rx="2" className="fill-violet-500/20 stroke-violet-600" strokeWidth="2" />
        <path d="M4 12h24" className="stroke-violet-600" strokeWidth="2" />
        <path d="M10 4v4M22 4v4" className="stroke-violet-500" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="18" r="2" className="fill-green-500" />
        <circle cx="16" cy="18" r="2" className="fill-blue-500" />
        <circle cx="22" cy="18" r="2" className="fill-purple-500" />
        <circle cx="10" cy="24" r="2" className="fill-orange-500" />
        <circle cx="16" cy="24" r="2" className="fill-pink-500" />
      </svg>
    ),
    details: {
      introduction: `Intelligent staff scheduling system designed specifically for care organizations.`,
      problemStatement: `Care organizations face complex scheduling challenges with multiple shift patterns and varying availability.`,
      previousGaps: `Current scheduling uses paper-based or spreadsheet rotas that are hard to update.`,
      aimsObjectives: `Create an efficient staff scheduling system that reduces administrative burden.`,
      datasets: `Staff records, shift definitions, and historical data for patterns and trends.`,
      methodology: `Requirements analysis, data model design, constraint definition, and optimization logic.`,
      findings: `System provides visual rota builder with templates and automated gap detection.`,
      limitations: `Requires accurate staff data input and complex rules may need refinement.`,
      recommendations: `AI-powered demand forecasting and automatic shift filling.`,
      dashboard: `Weekly/monthly rota view, coverage heat map, staff availability calendar, and analytics.`,
      deliverables: `Complete scheduling system with staff and manager interfaces.`
    }
  },
  {
    id: 'supplier-contractor-portal',
    number: '12',
    title: 'Supplier & Contractor Management Portal',
    category: 'Care Administration',
    shortDesc: 'Centralized system for managing contractor relationships, compliance documentation, and procurement tracking.',
    description: 'Comprehensive supplier and contractor management system featuring vendor database, compliance tracking, contract management, and procurement workflows.',
    image: '/projects/supplier-1.png',
    fallbackGradient: 'from-orange-500 to-red-500',
    techStack: ['Python', 'Streamlit', 'SQLite', 'PDF Generation', 'Email', 'Dashboards'],
    metrics: { main: 'Vendors', label: 'Management' },
    liveDemo: 'https://supplier-management-app-j3m6tslicx9wedjztvxgso.streamlit.app/',
    github: 'https://github.com/ayoolumi/supplier-management-portal',
    status: 'live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="10" height="10" rx="2" className="fill-orange-500/20 stroke-orange-600" strokeWidth="2" />
        <rect x="18" y="8" width="10" height="10" rx="2" className="fill-red-500/20 stroke-red-600" strokeWidth="2" />
        <rect x="11" y="18" width="10" height="10" rx="2" className="fill-orange-600/30 stroke-orange-700" strokeWidth="2" />
        <path d="M9 18v-2M23 18v-2M14 18v-2h4" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `Centralized supplier and contractor management portal for care organizations.`,
      problemStatement: `Managing suppliers and contractors presents significant challenges with scattered information.`,
      previousGaps: `Current supplier management relies on spreadsheets and physical filing.`,
      aimsObjectives: `Create a centralized system for managing all supplier relationships with compliance assurance.`,
      datasets: `Supplier records, compliance documents, and procurement records.`,
      methodology: `Stakeholder consultation, database design, document storage, and workflow engine.`,
      findings: `System provides searchable vendor database and compliance dashboard with alerts.`,
      limitations: `Requires initial data entry effort and supplier engagement.`,
      recommendations: `Supplier self-service portal and automated compliance reminders.`,
      dashboard: `Supplier directory, compliance status, expiring documents alerts, and spending charts.`,
      deliverables: `Complete supplier management system with compliance tracking module.`
    }
  },
  {
    id: 'quality-assurance-system',
    number: '13',
    title: 'Quality Assurance Reporting System',
    category: 'Care Administration',
    shortDesc: 'Comprehensive QA tracking system with audit management, action tracking, and compliance reporting for care settings.',
    description: 'Quality assurance management system designed for care organizations featuring audit scheduling, findings tracking, corrective action management, compliance dashboards, and regulatory reporting.',
    image: '/projects/qa-system-1.png',
    fallbackGradient: 'from-cyan-500 to-teal-600',
    techStack: ['Python', 'Streamlit', 'SQLite', 'PDF Reports', 'Analytics', 'Dashboards'],
    metrics: { main: 'QA', label: 'Excellence' },
    liveDemo: 'https://app-reporting-system-nutugt5tbgahxsjwyhappppr.streamlit.app/',
    github: 'https://github.com/ayoolumi/qa-reporting-system',
    status: 'live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" className="fill-cyan-500/20 stroke-cyan-600" strokeWidth="2" />
        <path d="M12 16l3 3 6-6" className="stroke-teal-600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6v2M16 24v2M6 16h2M24 16h2" className="stroke-cyan-400" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `Comprehensive quality assurance reporting system tailored for care organizations.`,
      problemStatement: `Quality assurance in care settings faces challenges with inconsistent scheduling and tracking.`,
      previousGaps: `Current QA approaches use paper-based audit checklists and spreadsheet tracking.`,
      aimsObjectives: `Create a comprehensive QA system that supports continuous improvement and compliance.`,
      datasets: `Audit records, findings, corrective actions, and standards reference.`,
      methodology: `QA process mapping, audit template design, database design, and workflow engine.`,
      findings: `System provides complete audit lifecycle management with evidence attachment.`,
      limitations: `Requires consistent data entry discipline and template customization.`,
      recommendations: `Mobile app for on-site auditing and AI-powered finding categorization.`,
      dashboard: `Audit calendar, outstanding findings, overdue actions alerts, and trend charts.`,
      deliverables: `Complete QA management system with audit templates library.`
    }
  }
];

type Project = typeof sampleProjects[0];

function ProjectDetailModal({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: Project | null; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  if (!project) return null;

  const sections = [
    { id: 'introduction', title: '1. Project Introduction', content: project.details.introduction, icon: '📋' },
    { id: 'problem', title: '2. Problem Statement', content: project.details.problemStatement, icon: '⚠️' },
    { id: 'gaps', title: '3. Previous Gaps in the Field', content: project.details.previousGaps, icon: '🔍' },
    { id: 'aims', title: '4. Aims and Objectives', content: project.details.aimsObjectives, icon: '🎯' },
    { id: 'datasets', title: '5. Datasets Used', content: project.details.datasets, icon: '📊' },
    { id: 'methodology', title: '6. Methodology', content: project.details.methodology, icon: '⚙️' },
    { id: 'findings', title: '7. Findings', content: project.details.findings, icon: '💡' },
    { id: 'limitations', title: '8. Limitations', content: project.details.limitations, icon: '📌' },
    { id: 'recommendations', title: '9. Recommendations for Future Work', content: project.details.recommendations, icon: '🚀' },
    { id: 'dashboard', title: '10. Interactive Dashboard & Frontend', content: project.details.dashboard, icon: '🖥️' },
    { id: 'deliverables', title: '11. Expected Deliverables', content: project.details.deliverables, icon: '🎁' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`sticky top-0 z-10 bg-gradient-to-r ${project.fallbackGradient} rounded-t-3xl p-8 text-white`}>
              <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium">{project.category}</span>
                {project.status === 'coming-soon' && (
                  <span className="inline-block px-3 py-1 bg-yellow-400/90 text-yellow-900 rounded-full text-sm font-bold">🚧 Coming Soon</span>
                )}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
              <p className="text-white/90 text-lg max-w-3xl">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/20 rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12 max-h-[70vh] overflow-y-auto">
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <motion.div key={section.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="group">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${project.fallbackGradient} rounded-xl flex items-center justify-center text-xl shadow-lg`}>{section.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">{section.title}</h3>
                        <div className="text-slate-600 leading-relaxed whitespace-pre-line">{section.content}</div>
                      </div>
                    </div>
                    {index < sections.length - 1 && <div className="ml-16 mt-8 border-b border-slate-100" />}
                  </motion.div>
                ))}
              </div>

              {project.status !== 'coming-soon' && (
                <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-slate-200">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={`flex-1 min-w-[200px] px-6 py-4 bg-gradient-to-r ${project.fallbackGradient} text-white rounded-xl font-semibold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    View Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px] px-6 py-4 bg-slate-900 text-white rounded-xl font-semibold text-center hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    View Source Code
                  </a>
                </div>
              )}
              
              {project.status === 'coming-soon' && (
                <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                  <div className="inline-flex items-center gap-2 px-6 py-4 bg-yellow-50 border-2 border-yellow-200 rounded-xl text-yellow-800">
                    <span className="text-2xl">🚧</span>
                    <span className="font-semibold">This project is currently in development. Check back soon for live demo and source code!</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project>(sampleProjects[0]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) { document.body.style.overflow = 'hidden'; } 
    else { document.body.style.overflow = 'unset'; }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  const openProjectModal = (project: Project) => { setSelectedProject(project); setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); setTimeout(() => setSelectedProject(null), 300); };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Main Content - Split Layout */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Sticky Image */}
        <div className="lg:w-1/2 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] bg-slate-100 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={activeProject.id} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }} className="w-full h-64 lg:h-full relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.fallbackGradient}`} />
              <img src={activeProject.image} alt={activeProject.title} className="absolute inset-0 w-full h-full object-cover object-top" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">{activeProject.category}</span>
                    {activeProject.status === 'coming-soon' && <span className="inline-block px-3 py-1 bg-yellow-400/90 text-yellow-900 rounded-full text-sm font-bold">🚧 Coming Soon</span>}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-2">{activeProject.title}</h2>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-teal-400">{activeProject.metrics.main}</div>
                    <div className="text-white/70">{activeProject.metrics.label}</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Scrollable Projects */}
        <div className="lg:w-1/2 bg-white">
          {/* Header */}
          <div className="p-8 lg:p-12 border-b border-slate-100">
            <div className="flex items-center gap-2 text-teal-600 text-sm font-medium mb-2">
              <span className="w-8 h-0.5 bg-teal-500" />
              What I Build
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Healthcare AI &<br />Care Solutions</h1>
            <p className="text-slate-600">Transforming healthcare data into actionable insights, plus building practical tools for care administration and operations.</p>
            
            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-slate-100">
              <div><div className="text-2xl font-bold text-teal-600">13</div><div className="text-sm text-slate-500">Projects</div></div>
              <div><div className="text-2xl font-bold text-teal-600">94.95%</div><div className="text-sm text-slate-500">Top Accuracy</div></div>
              <div><div className="text-2xl font-bold text-teal-600">1.97M+</div><div className="text-sm text-slate-500">Records Analyzed</div></div>
            </div>
          </div>

          {/* Projects List */}
          <div className="divide-y divide-slate-100">
            {sampleProjects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveProject(project)}
                className={`p-8 lg:p-12 cursor-pointer transition-all duration-300 ${activeProject.id === project.id ? 'bg-teal-50/50' : 'hover:bg-slate-50'}`}>
                <div className={`h-0.5 mb-6 transition-all duration-300 ${activeProject.id === project.id ? 'bg-gradient-to-r from-teal-500 to-blue-500 w-full' : 'bg-slate-200 w-16'}`} />

                <div className="flex items-start gap-6">
                  <div className="text-slate-300 font-bold text-lg">/{project.number}</div>
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${activeProject.id === project.id ? 'bg-teal-100' : 'bg-slate-100'}`}>{project.icon}</div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${activeProject.id === project.id ? 'text-teal-600' : 'text-slate-900'}`}>{project.title}</h3>
                      {project.status === 'coming-soon' && <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">Coming Soon</span>}
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">{project.shortDesc}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">{tech}</span>
                      ))}
                      {project.techStack.length > 3 && <span className="px-2 py-1 bg-slate-100 text-slate-400 rounded text-xs font-medium">+{project.techStack.length - 3}</span>}
                    </div>

                    <div className="flex items-center gap-3">
                      <motion.button onClick={(e) => { e.stopPropagation(); openProjectModal(project); }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all">
                        View Details
                      </motion.button>
                      {project.status !== 'coming-soon' && (
                        <>
                          <motion.a href={project.liveDemo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="w-9 h-9 bg-slate-100 hover:bg-teal-500 hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all" title="Live Demo">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                          </motion.a>
                          <motion.a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="w-9 h-9 bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all" title="Source Code">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                          </motion.a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="p-8 lg:p-12 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
            <h3 className="text-2xl font-bold mb-3">Interested in Working Together?</h3>
            <p className="text-teal-100 mb-6">Let&apos;s discuss how I can help with your healthcare data challenges or care administration needs.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition">Get in Touch</Link>
              <a href="https://github.com/ayoolumi" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition">View GitHub</a>
            </div>
          </div>

          {/* Footer */}
          <footer className="p-8 lg:p-12 bg-slate-900 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
              <div className="flex items-center gap-3">
                <img src="/Head.jpg" alt="Ayoolumi Melehon" className="w-10 h-10 rounded-full object-cover border-2 border-teal-500" />
                <div>
                  <span className="font-bold block">Ayoolumi Melehon</span>
                  <span className="text-slate-400 text-sm">Founder, The AandA Group</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Quick Links</h4>
                  <div className="space-y-2 text-sm">
                    <Link href="/about" className="block text-slate-400 hover:text-white transition">About</Link>
                    <Link href="/portfolio" className="block text-slate-400 hover:text-white transition">Portfolio</Link>
                    <Link href="/resources" className="block text-slate-400 hover:text-white transition">Resources</Link>
                    <Link href="/experience" className="block text-slate-400 hover:text-white transition">Experience & Skills</Link>
                    <Link href="/contact" className="block text-slate-400 hover:text-white transition">Contact</Link>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Business</h4>
                  <div className="space-y-2 text-sm">
                    <a href="https://aandacomputers.theaandagroup.com/" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-teal-400 transition">AandA Computers 🇳🇬</a>
                    <a href="https://labs.theaandagroup.com/" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-teal-400 transition">AandA Labs Limited 🇬🇧</a>
                    <a href="https://suppliesandimports.theaandagroup.com" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-teal-400 transition">AandA Supplies 🇳🇬</a>
                    <a href="https://farmsfood.theaandagroup.com" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-teal-400 transition">AandA Farms 🇳🇬</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="mailto:ayoolumimelehon@gmail.com" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/ayoolumi-melehon-b63237179/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://github.com/ayoolumi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://huggingface.co/ayoolumi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <span className="text-sm font-bold">🤗</span>
                </a>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
              © 2026 Ayoolumi Melehon | Grangemouth, Falkirk, Scotland | MSc AI • CompTIA Data+
            </div>
          </footer>
        </div>
      </div>

      <ProjectDetailModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
