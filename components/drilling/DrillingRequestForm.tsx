"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CloudUpload } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";

// Services organized by category
const serviceCategories = {
    "Geophysical Services": [
        "GPR: Utility Location",
        "GPR: UST or Septic Detection",
        "Borehole/Downhole Geophysics",
        "Electrical Resistivity",
        "Seismic Refraction",
    ],
    "Drilling Services": [
        "Sonic Drilling",
        "Direct Push Drilling",
        "Drilling & Injection",
        "Air Rotary Drilling",
        "Auger Drilling",
        "Over Water/Barge Drilling",
        "Horizontal Drilling",
        "Low Clearance Drilling",
        "Track Mounted Rigs",
    ],
    "Remediation Services": [
        "Test Pitting",
        "Soil Excavation & Disposal",
        "Stream/Shoreline/Wetland Restoration",
        "Capping",
        "In-Situ Solidification/Stabilization (ISS)",
        "In-Situ Soil Mixing",
        "Slurry Walls",
        "Permeable Reactive Barriers",
        "Ecosystem Restoration",
        "Remediation System Vaults",
        "Groundwater Treatment Systems",
        "Well Filters",
        "Vapor Mitigation Systems",
        "Clearing & Grubbing",
        "Road Building/Matts",
        "Air Bridge Construction",
    ],
};

interface FormData {
    services: string[];
    additionalNotes: string;
    name: string;
    company: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    cell: string;
    email: string;
    startDate: string;
}

const DrillingRequestForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 2;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const [formData, setFormData] = useState<FormData>({
        services: [],
        additionalNotes: "",
        name: "",
        company: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        cell: "",
        email: "",
        startDate: "",
    });

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleServiceToggle = (service: string, checked: boolean) => {
        setFormData((prev) => ({
            ...prev,
            services: checked
                ? [...prev.services, service]
                : prev.services.filter((s) => s !== service),
        }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async () => {
        // Validate required fields
        if (!formData.name || !formData.email) {
            setSubmitStatus({ type: "error", message: "Name and email are required." });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("/api/project-request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: "success", message: data.message });
                // Reset form
                setFormData({
                    services: [],
                    additionalNotes: "",
                    name: "",
                    company: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: "",
                    phone: "",
                    cell: "",
                    email: "",
                    startDate: "",
                });
                setCurrentStep(1);
            } else {
                setSubmitStatus({ type: "error", message: data.error || "Failed to submit request" });
            }
        } catch {
            setSubmitStatus({ type: "error", message: "Network error. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section
                className="pb-20 bg-[#8B4513] text-white relative z-10"
                style={{ paddingTop: 'clamp(3rem, 5vw, 8rem)' }}
            >
                {/* Mountain Divider at Top of Section */}
                <div className="absolute top-0 left-0 right-0 w-full leading-none z-0 pointer-events-none" style={{ transform: 'translateY(-99%)' }}>
                    <SectionDivider className="w-full h-auto block" fill="#8B4513" />
                </div>
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Header with Step Indicator */}
                    <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-extrabold italic mb-2">
                                Start-a-Project
                            </h2>
                            <h3 className="text-xl md:text-2xl font-bold mb-1">
                                Quick Response Proposal Request Form
                            </h3>
                        </div>

                        {/* Step Indicator */}
                        <div className="flex items-center gap-4">
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg ${currentStep >= 1 ? 'bg-white text-[#8B4513]' : 'bg-white/30 text-white'}`}>
                                1
                            </div>
                            <div className="w-12 h-1 bg-white/30">
                                <div className={`h-full bg-white transition-all duration-300 ${currentStep >= 2 ? 'w-full' : 'w-0'}`}></div>
                            </div>
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg ${currentStep >= 2 ? 'bg-white text-[#8B4513]' : 'bg-white/30 text-white'}`}>
                                2
                            </div>
                        </div>
                    </div>

                    {/* Status Message */}
                    {submitStatus && (
                        <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === "success" ? "bg-green-600/20 text-green-100" : "bg-red-600/20 text-red-100"}`}>
                            {submitStatus.message}
                        </div>
                    )}

                    {/* Step 1: Service Selection */}
                    {currentStep === 1 && (
                        <div className="animate-fadeIn">
                            {/* Subtitle */}
                            <p className="text-lg mb-8 opacity-90">
                                (Please check all boxes that align with your Request for Proposal)
                            </p>

                            {/* Categorized Checkboxes Section */}
                            <div className="mb-10">
                                <div className="space-y-8">
                                    {/* Geophysical Services */}
                                    <div className="p-4 border border-white/40 rounded-lg">
                                        <h4 className="text-2xl font-bold italic mb-3 text-white">
                                            Geophysical Services
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2.5">
                                            {serviceCategories["Geophysical Services"].map((service) => (
                                                <div key={service} className="flex items-center space-x-3 group">
                                                    <Checkbox
                                                        id={`geo-${service}`}
                                                        checked={formData.services.includes(service)}
                                                        onCheckedChange={(checked) => handleServiceToggle(service, checked as boolean)}
                                                        className="border-white/60 data-[state=checked]:bg-white data-[state=checked]:text-[#8B4513] w-5 h-5 rounded-sm flex-shrink-0"
                                                    />
                                                    <label
                                                        htmlFor={`geo-${service}`}
                                                        className="text-base leading-snug cursor-pointer select-none group-hover:text-white/90 transition-colors"
                                                    >
                                                        {service}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Drilling Services */}
                                    <div className="p-4 border border-white/40 rounded-lg">
                                        <h4 className="text-2xl font-bold italic mb-3 text-white">
                                            Drilling Services
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2.5">
                                            {serviceCategories["Drilling Services"].map((service) => (
                                                <div key={service} className="flex items-center space-x-3 group">
                                                    <Checkbox
                                                        id={`drill-${service}`}
                                                        checked={formData.services.includes(service)}
                                                        onCheckedChange={(checked) => handleServiceToggle(service, checked as boolean)}
                                                        className="border-white/60 data-[state=checked]:bg-white data-[state=checked]:text-[#8B4513] w-5 h-5 rounded-sm flex-shrink-0"
                                                    />
                                                    <label
                                                        htmlFor={`drill-${service}`}
                                                        className="text-base leading-snug cursor-pointer select-none group-hover:text-white/90 transition-colors"
                                                    >
                                                        {service}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Remediation Services */}
                                    <div className="p-4 border border-white/40 rounded-lg">
                                        <h4 className="text-2xl font-bold italic mb-3 text-white">
                                            Remediation Services
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2.5">
                                            {serviceCategories["Remediation Services"].map((service) => (
                                                <div key={service} className="flex items-center space-x-3 group">
                                                    <Checkbox
                                                        id={`rem-${service}`}
                                                        checked={formData.services.includes(service)}
                                                        onCheckedChange={(checked) => handleServiceToggle(service, checked as boolean)}
                                                        className="border-white/60 data-[state=checked]:bg-white data-[state=checked]:text-[#8B4513] w-5 h-5 rounded-sm flex-shrink-0"
                                                    />
                                                    <label
                                                        htmlFor={`rem-${service}`}
                                                        className="text-base leading-snug cursor-pointer select-none group-hover:text-white/90 transition-colors"
                                                    >
                                                        {service}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="flex flex-col lg:flex-row items-end gap-6">
                                <div className="flex-1 w-full">
                                    <Textarea
                                        id="additionalNotes"
                                        placeholder="Don't see a service you're looking for, add a note here:"
                                        value={formData.additionalNotes}
                                        onChange={handleInputChange}
                                        className="bg-white/20 border-none text-white placeholder:text-white/70 min-h-[80px] text-lg p-4 resize-none rounded-[7px] w-full"
                                    />
                                </div>
                                <Button
                                    onClick={nextStep}
                                    size="lg"
                                    className="bg-[#1a365d] hover:bg-[#132845] text-white font-bold italic text-lg px-10 py-6 rounded-lg shadow-lg"
                                >
                                    Next &gt;&gt;
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Contact Information */}
                    {currentStep === 2 && (
                        <div className="animate-fadeIn">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                {/* Left Column: Input Fields (Takes up 2 cols) */}
                                <div className="lg:col-span-2 space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium ml-1">Your Name *</label>
                                            <Input
                                                id="name"
                                                placeholder="David"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium ml-1">Company Name</label>
                                            <Input
                                                id="company"
                                                placeholder="Smith"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-sm font-medium ml-1">Email *</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@company.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-sm font-medium ml-1">Address</label>
                                        <Input
                                            id="address"
                                            placeholder="123 Main Street"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium ml-1">City</label>
                                            <Input
                                                id="city"
                                                placeholder="Bridgewater"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium ml-1">State</label>
                                            <Input
                                                id="state"
                                                placeholder="NJ"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-sm font-medium ml-1">Zip Code</label>
                                        <Input
                                            id="zip"
                                            placeholder="08807"
                                            value={formData.zip}
                                            onChange={handleInputChange}
                                            className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium ml-1">Phone Number</label>
                                            <Input
                                                id="phone"
                                                placeholder="(     )"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium ml-1">Cell Number</label>
                                            <Input
                                                id="cell"
                                                placeholder="(     )"
                                                value={formData.cell}
                                                onChange={handleInputChange}
                                                className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-end gap-4">
                                        <div className="flex-1 space-y-1">
                                            <label className="text-sm font-medium ml-1">Estimated Start Date</label>
                                            <Input
                                                id="startDate"
                                                type="date"
                                                min={new Date().toISOString().split('T')[0]}
                                                value={formData.startDate}
                                                onChange={handleInputChange}
                                                className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: File Upload */}
                                <div className="lg:col-span-1 flex flex-col items-center text-center space-y-4">
                                    {/* Upload Icon */}
                                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/40">
                                        <CloudUpload className="w-10 h-10 text-white" />
                                    </div>

                                    {/* Upload Text */}
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold italic">
                                            Upload Project Related<br />Documents/Scope of Work
                                        </h4>
                                        <p className="text-white/80 text-sm">
                                            You Can Upload Multiple Documents
                                        </p>
                                    </div>

                                    {/* Drop Zone with Mountain Background */}
                                    <div
                                        className="w-full max-w-[280px] rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity relative"
                                        style={{
                                            backgroundImage: 'url(/images/files-bg.webp)',
                                            backgroundSize: 'contain',
                                            backgroundPosition: 'center bottom',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundColor: '#8B4513'
                                        }}
                                    >
                                        <div className="pt-12 pb-4 px-6 flex flex-col items-center">
                                            <p className="text-lg text-white font-medium">(Drop Files Here)</p>
                                            <Button type="button" className="bg-[#3d2b25] hover:bg-[#2a1e1a] text-white font-bold italic text-sm px-8 py-3 border border-white/30">
                                                Select Files
                                            </Button>
                                        </div>
                                    </div>
                                    <p className="text-white/60 text-xs">File upload coming soon</p>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8">
                                <Button
                                    onClick={prevStep}
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold italic text-lg px-10 py-6 rounded-lg shadow-lg"
                                >
                                    &lt;&lt; Previous
                                </Button>

                                {/* Submit Button */}
                                <Button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    size="lg"
                                    className="bg-[#1a365d] hover:bg-[#132845] text-white font-bold italic text-lg px-10 py-6 rounded-lg shadow-lg disabled:opacity-50"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Project"}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default DrillingRequestForm;
