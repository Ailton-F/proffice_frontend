import type { Route } from '../+types/root';
import '../styles/dashboard.css';
import { Dashboard } from '~/pages/dashboard';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Proffice | Dashboard" },
    { name: "description", content: "Organizational platform for teachers!" },
  ];
}

export const loader = () => {
  return {};
}

export default function DashboardPage() {
  return <Dashboard/>
};

