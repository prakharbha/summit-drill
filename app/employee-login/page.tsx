import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "Employee Login - Summit Drilling, LLC",
  description: "Employee portal login for Summit Drilling team members.",
};

export default function EmployeeLoginPage() {
  return (
    <PageTemplate
      title="Employee Login"
      description="Access the employee portal"
    />
  );
}

