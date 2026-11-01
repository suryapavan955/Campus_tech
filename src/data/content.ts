import { assets, referenceCrop } from './assets';
import type { Benefit, ContactConfig, HeroSlide, Solution, Statistic } from '../types';

export const contact: ContactConfig = {
  email: 'support@campus.technology',
  phone: '+91-9980-747722',
  phoneHref: '+919980747722',
  // Set the institution's actual portal URL when supplied. No authentication is mocked.
  loginUrl: undefined,
};

export const heroSlides: readonly HeroSlide[] = [
  {
    id: 'campus', prefix: 'A ', emphasis: 'power-packed solution',
    suffix: ' to streamline all educational and institutional processes.',
    description: 'Campus Tech is a robust solution packed with best-in-class software, consulting, audits, and empowerment activities rolled into one for your institution.',
    buttonLabel: 'Get a Demo', artwork: assets.hero[0],
  },
  {
    id: 'tasks', prefix: 'Enables ', emphasis: 'efficient segregation', suffix: ' of tasks',
    description: 'Campus Tech presents you with multiple dashboards to review the status of various accreditation tasks, including the tasks that are overdue, non-compliant, or need attention.',
    buttonLabel: 'Accreditation & Compliance', solutionId: 'accreditation', artwork: assets.hero[1],
  },
  {
    id: 'requirements', prefix: 'Helps cater to ', emphasis: 'accreditation requirements', suffix: '',
    description: 'Campus Tech has created an associated full-fledged and robust campus automation software along with a dedicated mobile app for students that can cater to multiple accreditation and compliance requirements.',
    buttonLabel: 'Accreditation & Compliance', solutionId: 'accreditation', artwork: assets.hero[2],
  },
  {
    id: 'reports', prefix: '', emphasis: 'Live reports and comparative analysis', suffix: ' made available',
    description: 'Get live reports on data added for multiple accreditations, AI-based alerts for tracking of tasks assigned and completed.',
    buttonLabel: 'Exam Management System', solutionId: 'examinations', artwork: assets.hero[3],
  },
];

export const solutions: readonly Solution[] = [
  { id: 'accreditation', title: 'Accreditation & Compliance', description: 'Bring real-time monitoring for all users’ accreditation requirements for continuous quality improvement', icon: referenceCrop(59, 550, 32, 33) },
  { id: 'lms', title: 'LMS', description: 'Customise the learning system by giving users a unified platform for all academic needs with easy-to-use technology', icon: referenceCrop(316, 550, 33, 33) },
  { id: 'examinations', title: 'Exam Management System', description: 'Streamline the examination process with Online Examinations, Live Proctoring, and assessment management', icon: referenceCrop(574, 550, 32, 33) },
  { id: 'curriculum', title: 'Curriculum Management', description: 'Enable the formulation of syllabi as per the NEP guidelines and identify new and diverse categories of courses', icon: referenceCrop(574, 550, 32, 33) },
];

export const benefits: readonly Benefit[] = [
  { id: 'interface', label: 'Simple and easy-to-use interface', icon: referenceCrop(262, 872, 26, 28) },
  { id: 'dashboard', label: 'Multi-Institutional dashboard', icon: referenceCrop(455, 872, 28, 28) },
  { id: 'alerts', label: 'AI-based alerts for all activities to be conducted', icon: referenceCrop(262, 939, 28, 28) },
  { id: 'learning', label: 'Track learning behaviour and learning outcomes', icon: referenceCrop(455, 939, 30, 28) },
  { id: 'compliance', label: 'Build a new culture of compliance and accreditation', icon: referenceCrop(262, 1005, 28, 28) },
  { id: 'website', label: 'Integration with your campus website', icon: referenceCrop(455, 1005, 30, 28) },
];

export const statistics: readonly Statistic[] = [
  { value: '30', label: 'Top Institutions', color: 'yellow' },
  { value: '13', label: 'in A/A+/A++ Tier', color: 'green' },
  { value: '3000', label: 'Faculty Connect', color: 'yellow' },
  { value: '90,000', label: 'Students Benefited', color: 'green' },
];
