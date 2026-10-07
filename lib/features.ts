export type FeatureFaq = {
  question: string;
  answer: string;
};

export type FeatureDefinition = {
  slug: string;
  name: string;
  category: string;
  eyebrow: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  benefits: string[];
  steps: Array<{ title: string; description: string }>;
  faqs: FeatureFaq[];
};

const commonFaqs: FeatureFaq[] = [
  { question: 'Can my team use this from a phone?', answer: 'Yes. AI Closer is designed around the way Indian sales teams actually work: calls and follow-ups can be managed from a mobile-first workflow.' },
  { question: 'Does this connect with the rest of AI Closer?', answer: 'Yes. Every feature shares the same lead, call, activity, and follow-up context so your team does not need duplicate data entry.' },
];

export const features: FeatureDefinition[] = [
  {
    slug: 'automatic-sales-call-recording', name: 'Automatic Sales Call Recording', category: 'CALLS & CONTEXT', eyebrow: 'CAPTURE EVERY CONVERSATION',
    description: 'Automatically keep a usable record of sales calls so owners and managers can understand what happened without relying on memory.', seoTitle: 'Automatic Sales Call Recording Software | AI Closer', seoDescription: 'Record sales conversations automatically and keep call context connected to leads, follow-ups, and coaching in AI Closer.', image: '/assets/features/automatic-sales-call-recording.png',
    benefits: ['Keep call context attached to the right lead', 'Give managers a reliable source for coaching', 'Reduce missed details after busy calling blocks'],
    steps: [{ title: 'Connect calling', description: 'Use the salesperson\'s normal SIM-based calling workflow.' }, { title: 'Record automatically', description: 'AI Closer keeps the conversation available in the lead timeline.' }, { title: 'Review and act', description: 'Replay the call, add notes, and create the next follow-up.' }], faqs: commonFaqs,
  },
  {
    slug: 'salesperson-sim-support', name: "Salesperson's Own SIM Support", category: 'CALLS & CONTEXT', eyebrow: 'PHONE-FIRST BY DESIGN',
    description: 'Let salespeople work from the SIM and phone they already use while the business keeps a central view of calls and outcomes.', seoTitle: "Salesperson's Own SIM Support for Sales CRM | AI Closer", seoDescription: 'Support each salesperson\'s own SIM-based calling workflow while centralizing sales activity in AI Closer.', image: '/assets/features/salesperson-sim-support.png',
    benefits: ['Reduce change management for field teams', 'Keep personal calling habits connected to work', 'Give owners a single operational view'], steps: [{ title: 'Assign the owner', description: 'Map each salesperson to the leads and phone workflow they manage.' }, { title: 'Call from the SIM', description: 'The salesperson keeps the familiar phone-first experience.' }, { title: 'Sync activity', description: 'Call history and outcomes stay visible to the right team members.' }], faqs: commonFaqs,
  },
  {
    slug: 'centralized-call-history', name: 'Centralized Call History', category: 'CALLS & CONTEXT', eyebrow: 'ONE TIMELINE FOR THE TEAM',
    description: 'Bring salesperson call activity into one searchable history so every customer conversation has a clear place to live.', seoTitle: 'Centralized Sales Call History CRM | AI Closer', seoDescription: 'Give teams one centralized timeline for sales calls, recordings, notes, and lead outcomes.', image: '/assets/features/centralized-call-history.png',
    benefits: ['Search call activity by lead or salesperson', 'See the full conversation timeline', 'Make handoffs easier when ownership changes'], steps: [{ title: 'Collect activity', description: 'Calls arrive in the shared workspace with their lead context.' }, { title: 'Find the moment', description: 'Filter history by person, lead, date, or outcome.' }, { title: 'Continue the work', description: 'Turn the next action into a note, reminder, or follow-up.' }], faqs: commonFaqs,
  },
  {
    slug: 'call-recording-playback', name: 'Call Recording Playback', category: 'CALLS & CONTEXT', eyebrow: 'LISTEN WITH PURPOSE',
    description: 'Replay important calls when you need the exact customer language, objection, or promise that should shape the next step.', seoTitle: 'Sales Call Recording Playback | AI Closer', seoDescription: 'Replay recorded sales calls to understand customer needs, objections, and coaching opportunities.', image: '/assets/features/call-recording-playback.png',
    benefits: ['Review calls without interrupting the salesperson', 'Use real examples in coaching sessions', 'Keep customer promises easy to verify'], steps: [{ title: 'Open the lead', description: 'Start from the lead timeline instead of searching across tools.' }, { title: 'Replay the call', description: 'Listen for intent, objections, and commitments.' }, { title: 'Share the next move', description: 'Add a note or follow-up while the context is fresh.' }], faqs: commonFaqs,
  },
  {
    slug: 'lead-management', name: 'Lead Management', category: 'LEADS & PIPELINE', eyebrow: 'KEEP EVERY OPPORTUNITY MOVING',
    description: 'Organize prospects, owners, statuses, notes, and next actions in one practical lead workspace.', seoTitle: 'Lead Management CRM for Sales Teams | AI Closer', seoDescription: 'Manage leads, owners, statuses, notes, and next actions in a focused sales CRM for Indian teams.', image: '/assets/features/lead-management.png',
    benefits: ['Keep lead information in one place', 'Make ownership obvious', 'Turn loose prospects into planned next steps'], steps: [{ title: 'Add or import leads', description: 'Bring prospects into the workspace with useful contact context.' }, { title: 'Assign responsibility', description: 'Give each lead a clear salesperson and status.' }, { title: 'Move the opportunity', description: 'Track calls, notes, follow-ups, and progress until the outcome.' }], faqs: commonFaqs,
  },
  {
    slug: 'lead-distribution-assignment', name: 'Lead Distribution & Assignment', category: 'LEADS & PIPELINE', eyebrow: 'MAKE OWNERSHIP CLEAR',
    description: 'Distribute incoming leads to the right salesperson so response time, accountability, and workload stay visible.', seoTitle: 'Lead Distribution and Assignment CRM | AI Closer', seoDescription: 'Assign and distribute sales leads clearly across a team with AI Closer.', image: '/assets/features/lead-distribution-assignment.png',
    benefits: ['Reduce unowned leads', 'Balance work across salespeople', 'Make response responsibility visible'], steps: [{ title: 'Receive the lead', description: 'Capture a new opportunity in the shared pipeline.' }, { title: 'Choose the owner', description: 'Assign based on territory, workload, or manager judgment.' }, { title: 'Track the handoff', description: 'See when the owner called and what happened next.' }], faqs: commonFaqs,
  },
  {
    slug: 'lead-status-tracking', name: 'Lead Status Tracking', category: 'LEADS & PIPELINE', eyebrow: 'SEE WHAT IS REALLY HAPPENING',
    description: 'Use clear statuses to understand which leads are new, active, waiting, won, or lost without chasing updates in chat.', seoTitle: 'Lead Status Tracking for Sales Teams | AI Closer', seoDescription: 'Track lead status changes and see which opportunities need attention with AI Closer.', image: '/assets/features/lead-status-tracking.png',
    benefits: ['Standardize the language your team uses', 'Find stalled opportunities early', 'Give managers a current pipeline view'], steps: [{ title: 'Define statuses', description: 'Set stages that match the way your team sells.' }, { title: 'Update after activity', description: 'Move a lead when a call or follow-up changes its state.' }, { title: 'Review the board', description: 'Use the status view to decide where the team should focus.' }], faqs: commonFaqs,
  },
  {
    slug: 'follow-up-management', name: 'Follow-up Management', category: 'LEADS & PIPELINE', eyebrow: 'TURN INTENT INTO ACTION',
    description: 'Plan and manage follow-ups so promising conversations do not disappear after the first call.', seoTitle: 'Follow-up Management CRM | AI Closer', seoDescription: 'Plan reminders and sales follow-ups from the same workspace as your calls and leads.', image: '/assets/features/follow-up-management.png',
    benefits: ['Create a clear next action after each call', 'Reduce forgotten callbacks', 'Give managers visibility into pending work'], steps: [{ title: 'Capture the promise', description: 'Add the next action while the call context is available.' }, { title: 'Set the reminder', description: 'Choose the timing and owner for the follow-up.' }, { title: 'Close the loop', description: 'Mark the outcome and move the lead to its next stage.' }], faqs: commonFaqs,
  },
  {
    slug: 'call-notes', name: 'Call Notes', category: 'CALLS & CONTEXT', eyebrow: 'WRITE DOWN WHAT MATTERS',
    description: 'Keep concise, useful notes beside every call so the next person can understand the account in seconds.', seoTitle: 'Sales Call Notes in CRM | AI Closer', seoDescription: 'Capture sales call notes beside recordings, leads, and follow-ups in AI Closer.', image: '/assets/features/call-notes.png',
    benefits: ['Preserve customer requirements', 'Make handoffs less fragile', 'Keep notes connected to the actual conversation'], steps: [{ title: 'Finish the call', description: 'Open the customer timeline as soon as the conversation ends.' }, { title: 'Write the signal', description: 'Capture need, objection, promise, or next action.' }, { title: 'Make it useful', description: 'Let the team use the note in future calls and follow-ups.' }], faqs: commonFaqs,
  },
  {
    slug: 'sales-team-mobile-app', name: 'Sales Team Mobile App', category: 'TEAM OPERATIONS', eyebrow: 'WORK WHERE THE TEAM WORKS',
    description: 'Give salespeople a mobile-friendly way to manage leads, calls, notes, and follow-ups from the field.', seoTitle: 'Sales Team Mobile CRM App | AI Closer', seoDescription: 'Help field sales teams manage calls, leads, notes, and follow-ups from a mobile-first CRM.', image: '/assets/features/sales-team-mobile-app.png',
    benefits: ['Keep field work connected', 'Reduce end-of-day admin', 'Give the team the next action wherever they are'], steps: [{ title: 'Open the day', description: 'See assigned leads and reminders from a phone.' }, { title: 'Call and update', description: 'Work from the SIM-based flow and add context quickly.' }, { title: 'Sync with managers', description: 'Activity becomes visible to the wider team without extra reports.' }], faqs: commonFaqs,
  },
  {
    slug: 'admin-dashboard', name: 'Admin Dashboard', category: 'TEAM OPERATIONS', eyebrow: 'RUN THE SALES FLOOR',
    description: 'Give owners and administrators a clear operating view of people, leads, calls, and pipeline movement.', seoTitle: 'Sales Admin Dashboard | AI Closer', seoDescription: 'Manage sales operations with a focused admin dashboard for leads, calls, teams, and pipelines.', image: '/assets/features/admin-dashboard.png',
    benefits: ['See team operations in one view', 'Spot gaps before they become surprises', 'Keep process decisions grounded in activity'], steps: [{ title: 'Open the overview', description: 'Start with the current state of leads, calls, and owners.' }, { title: 'Inspect the detail', description: 'Drill into the salesperson, stage, or activity that needs attention.' }, { title: 'Take action', description: 'Reassign, coach, remind, or adjust the process.' }], faqs: commonFaqs,
  },
  {
    slug: 'team-activity-monitoring', name: 'Team Activity Monitoring', category: 'TEAM OPERATIONS', eyebrow: 'MANAGE WITH CONTEXT',
    description: 'Understand team activity without turning management into a spreadsheet exercise.', seoTitle: 'Sales Team Activity Monitoring | AI Closer', seoDescription: 'Monitor calls, follow-ups, lead movement, and team activity from one sales CRM.', image: '/assets/features/team-activity-monitoring.png',
    benefits: ['See activity trends across the team', 'Find where support is needed', 'Replace assumptions with useful context'], steps: [{ title: 'Collect the signals', description: 'Calls, updates, and follow-ups contribute to one activity view.' }, { title: 'Compare the pattern', description: 'Look across people, time periods, or pipeline stages.' }, { title: 'Coach the process', description: 'Use the signal to remove blockers and reinforce good habits.' }], faqs: commonFaqs,
  },
  {
    slug: 'salesperson-performance-tracking', name: 'Salesperson Performance Tracking', category: 'TEAM OPERATIONS', eyebrow: 'MAKE PERFORMANCE COACHABLE',
    description: 'Track salesperson performance using the activity and outcomes that actually shape the pipeline.', seoTitle: 'Salesperson Performance Tracking CRM | AI Closer', seoDescription: 'Track salesperson activity and performance with connected call, lead, and pipeline context.', image: '/assets/features/salesperson-performance-tracking.png',
    benefits: ['Make one-to-one coaching specific', 'Connect activity to pipeline outcomes', 'Recognize where process support helps'], steps: [{ title: 'Set the context', description: 'See activity alongside ownership and lead stages.' }, { title: 'Find the pattern', description: 'Identify repeatable strengths and friction points.' }, { title: 'Coach the next action', description: 'Turn the finding into a practical improvement conversation.' }], faqs: commonFaqs,
  },
  {
    slug: 'lead-pipeline-management', name: 'Lead Pipeline Management', category: 'LEADS & PIPELINE', eyebrow: 'MAKE THE FUNNEL VISIBLE',
    description: 'Manage a visual pipeline that shows where every lead stands and what should happen next.', seoTitle: 'Lead Pipeline Management CRM | AI Closer', seoDescription: 'Manage a visual sales pipeline with clear stages, owners, and next actions in AI Closer.', image: '/assets/features/lead-pipeline-management.png',
    benefits: ['Create stages for your actual process', 'Find stalled work quickly', 'Give everyone the same pipeline language'], steps: [{ title: 'Define the stages', description: 'Shape the pipeline around your business and sales motion.' }, { title: 'Move the lead', description: 'Update stage as calls, notes, and outcomes change.' }, { title: 'Review the funnel', description: 'Use the board to prioritize the next best action.' }], faqs: commonFaqs,
  },
  {
    slug: 'sales-conversation-insights', name: 'Sales Conversation Insights', category: 'AI SALES INTELLIGENCE', eyebrow: 'LEARN FROM REAL CALLS',
    description: 'Turn real sales conversations into practical signals about what customers ask, value, and need next.', seoTitle: 'AI Sales Conversation Insights | AI Closer', seoDescription: 'Understand sales conversations and customer signals with AI Closer conversation insights.', image: '/assets/features/sales-conversation-insights.png',
    benefits: ['Surface repeated customer themes', 'Help managers coach from evidence', 'Improve the next conversation'], steps: [{ title: 'Collect the conversation', description: 'Use the recorded call and its lead context as the source.' }, { title: 'Read the signal', description: 'Review themes, intent, and moments that deserve attention.' }, { title: 'Apply the insight', description: 'Update messaging, follow-up, or coaching based on what customers said.' }], faqs: commonFaqs,
  },
  {
    slug: 'customer-intent-objection-analysis', name: 'Customer Intent & Objection Analysis', category: 'AI SALES INTELLIGENCE', eyebrow: 'UNDERSTAND THE HESITATION',
    description: 'Make customer intent and objections easier to recognize so salespeople can respond with relevance.', seoTitle: 'Customer Intent and Objection Analysis | AI Closer', seoDescription: 'Analyze customer intent and objections from sales conversations to improve follow-ups and coaching.', image: '/assets/features/customer-intent-objection-analysis.png',
    benefits: ['Separate interest from hesitation', 'Build better objection-handling practice', 'Make follow-ups more specific'], steps: [{ title: 'Listen to the customer', description: 'Start with the words and questions in the conversation.' }, { title: 'Classify the signal', description: 'Understand the intent or objection behind the moment.' }, { title: 'Choose the response', description: 'Create a follow-up or coaching action that addresses it.' }], faqs: commonFaqs,
  },
  {
    slug: 'salesperson-coaching-insights', name: 'Salesperson Coaching Insights', category: 'AI SALES INTELLIGENCE', eyebrow: 'COACH THE MOMENT, NOT A MEMORY',
    description: 'Give managers conversation-led coaching insights that are specific enough to use in the next one-to-one.', seoTitle: 'Salesperson Coaching Insights | AI Closer', seoDescription: 'Coach salespeople using insights from their real conversations, follow-ups, and pipeline activity.', image: '/assets/features/salesperson-coaching-insights.png',
    benefits: ['Ground coaching in real examples', 'Make feedback easier to act on', 'Build consistent team habits'], steps: [{ title: 'Choose the conversation', description: 'Start from a real call or customer moment.' }, { title: 'Identify the opportunity', description: 'Find what worked and what could be clearer.' }, { title: 'Practice the next move', description: 'Turn feedback into a repeatable behavior for the next call.' }], faqs: commonFaqs,
  },
  {
    slug: 'notifications-reminders', name: 'Notifications & Reminders', category: 'TEAM OPERATIONS', eyebrow: 'KEEP THE NEXT STEP VISIBLE',
    description: 'Use helpful reminders and notifications to keep calls, follow-ups, and ownership from getting lost in the day.', seoTitle: 'Sales CRM Notifications and Reminders | AI Closer', seoDescription: 'Keep sales teams on top of calls and follow-ups with connected notifications and reminders.', image: '/assets/features/notifications-reminders.png',
    benefits: ['Protect important follow-up dates', 'Reduce forgotten tasks', 'Keep owners aligned on urgent work'], steps: [{ title: 'Create the trigger', description: 'Set a reminder from a lead, call, or planned follow-up.' }, { title: 'Notify the owner', description: 'Put the next step where the responsible salesperson can see it.' }, { title: 'Resolve the action', description: 'Complete or reschedule it so the pipeline remains honest.' }], faqs: commonFaqs,
  },
];

export function getFeature(slug: string) {
  return features.find((feature) => feature.slug === slug);
}

