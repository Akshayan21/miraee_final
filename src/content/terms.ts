import source from './terms-of-use.txt?raw';

const lines = source.trim().split(/\r?\n/);

// Boundaries follow the supplied copy, including its Section 6 and Section 10 references.
const sections: [string, number, number][] = [
  ['The Miraee Platform', 4, 6],
  ['Eligibility and account access', 6, 8],
  ['Accuracy of information', 8, 10],
  ['Travel services and bookings', 10, 13],
  ['AI-powered features', 13, 16],
  ['Automated Actions', 16, 19],
  ['Review responsibilities', 19, 21],
  ['Business and personal travel', 21, 23],
  ['Charges, cancellations and refunds', 23, 26],
  ['Payment Cards and transaction monitoring', 26, 32],
  ['Travel requirements', 32, 33],
  ['Compliance with law', 33, 34],
  ['Prohibited uses', 34, 35],
  ['User content', 35, 36],
  ['Privacy and data', 36, 37],
  ['Third-party services', 37, 38],
  ['Intellectual property and feedback', 38, 40],
  ['Disclaimers', 40, 41],
  ['Limitation of liability', 41, 45],
  ['Indemnification', 45, 46],
  ['Suspension and termination', 46, 48],
  ['Dispute resolution and arbitration', 48, 58],
  ['Changes to these Terms', 58, 59],
  ['General terms', 59, 61],
  ['Contact', 61, 73],
];

export const terms = {
  title: 'Miraee Terms of Use',
  updated: lines[0],
  introduction: lines.slice(1, 3),
  sections: sections.map(([title, start, end], index) => ({
    id: `section-${index + 1}`,
    title: `${index + 1}. ${title}`,
    paragraphs: lines.slice(start, end),
  })),
};

