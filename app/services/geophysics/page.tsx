import { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";

export const metadata: Metadata = {
  title: "Geophysics Services - Summit Drilling, LLC",
  description: "GPR, Utility Location, UST & Septic Detection, Downhole Geophysics, Electrical Resistivity, and Seismic Refraction services.",
};

export default function GeophysicsPage() {
  return (
    <PageTemplate
      title="Geophysics"
      description="GPR: Utility, UST & Septic Location/Detection, Downhole Geophysics, Electrical Resistivity, Seismic Refraction"
    />
  );
}

