"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CloudUpload, Calendar, ArrowRight, ArrowLeft } from "lucide-react";
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

// Flat list of all services for balanced grid display
const allServices = [
    { category: "Geophysical Services", name: "GPR: Utility Location" },
    { category: "Geophysical Services", name: "GPR: UST or Septic Detection" },
    { category: "Geophysical Services", name: "Borehole/Downhole Geophysics" },
    { category: "Geophysical Services", name: "Electrical Resistivity" },
    { category: "Geophysical Services", name: "Seismic Refraction" },
    { category: "Drilling Services", name: "Sonic Drilling" },
    { category: "Drilling Services", name: "Direct Push Drilling" },
    { category: "Drilling Services", name: "Drilling & Injection" },
    { category: "Drilling Services", name: "Air Rotary Drilling" },
    { category: "Drilling Services", name: "Auger Drilling" },
    { category: "Drilling Services", name: "Over Water/Barge Drilling" },
    { category: "Drilling Services", name: "Horizontal Drilling" },
    { category: "Drilling Services", name: "Low Clearance Drilling" },
    { category: "Drilling Services", name: "Track Mounted Rigs" },
    { category: "Remediation Services", name: "Test Pitting" },
    { category: "Remediation Services", name: "Soil Excavation & Disposal" },
    { category: "Remediation Services", name: "Stream/Shoreline/Wetland Restoration" },
    { category: "Remediation Services", name: "Capping" },
    { category: "Remediation Services", name: "In-Situ Solidification/Stabilization (ISS)" },
    { category: "Remediation Services", name: "In-Situ Soil Mixing" },
    { category: "Remediation Services", name: "Slurry Walls" },
    { category: "Remediation Services", name: "Permeable Reactive Barriers" },
    { category: "Remediation Services", name: "Ecosystem Restoration" },
    { category: "Remediation Services", name: "Remediation System Vaults" },
    { category: "Remediation Services", name: "Groundwater Treatment Systems" },
    { category: "Remediation Services", name: "Well Filters" },
    { category: "Remediation Services", name: "Vapor Mitigation Systems" },
    { category: "Remediation Services", name: "Clearing & Grubbing" },
    { category: "Remediation Services", name: "Road Building/Matts" },
    { category: "Remediation Services", name: "Air Bridge Construction" },
];

const DrillingRequestForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 2;

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

    return (
        <>
            {/* Mountain Divider at Top */}
            <div className="w-full leading-none z-20 relative" style={{ marginTop: 'clamp(-67px, -4.7vw, -50px)' }}>
                <SectionDivider className="w-full h-auto block" fill="#8B4513" />
            </div>

            <section
                className="pt-12 pb-20 bg-[#8B4513] text-white relative z-10"
            >
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

                    {/* Step 1: Service Selection */}
                    {currentStep === 1 && (
                        <div className="animate-fadeIn">
                            {/* Subtitle */}
                            <p className="text-lg mb-8 opacity-90">
                                (Please check all boxes that align with your Request for Proposal)
                            </p>

                            {/* Categorized Checkboxes Section */}
                            <div className="mb-10">
                                {/* Stacked categories - each section below the other */}
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
                                                        id={service}
                                                        className="border-white/60 data-[state=checked]:bg-white data-[state=checked]:text-[#8B4513] w-5 h-5 rounded-sm flex-shrink-0"
                                                    />
                                                    <label
                                                        htmlFor={service}
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
                                                        id={service}
                                                        className="border-white/60 data-[state=checked]:bg-white data-[state=checked]:text-[#8B4513] w-5 h-5 rounded-sm flex-shrink-0"
                                                    />
                                                    <label
                                                        htmlFor={service}
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
                                                        id={service}
                                                        className="border-white/60 data-[state=checked]:bg-white data-[state=checked]:text-[#8B4513] w-5 h-5 rounded-sm flex-shrink-0"
                                                    />
                                                    <label
                                                        htmlFor={service}
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
                                        placeholder="Don't see a service you're looking for, add a note here:"
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
                                                placeholder="David"
                                                className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium ml-1">Company Name</label>
                                            <Input
                                                placeholder="Smith"
                                                className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-sm font-medium ml-1">Address</label>
                                        <Input
                                            placeholder="123 Main Street"
                                            className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium ml-1">City</label>
                                            <Input
                                                placeholder="Bridgewater"
                                                className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium ml-1">State</label>
                                            <Input
                                                placeholder="NJ"
                                                className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-sm font-medium ml-1">Zip Code</label>
                                        <Input
                                            placeholder="08807"
                                            className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium ml-1">Phone Number</label>
                                            <Input
                                                placeholder="(     )"
                                                className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium ml-1">Cell Number</label>
                                            <Input
                                                placeholder="(     )"
                                                className="bg-[#c9917a] border-none text-white placeholder:text-white/80 h-12 text-lg rounded-[7px] px-5"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-end gap-4">
                                        <div className="flex-1 space-y-1">
                                            <label className="text-sm font-medium ml-1">Estimated Start Date</label>
                                            <Input
                                                type="date"
                                                min={new Date().toISOString().split('T')[0]}
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
                                            <Button className="bg-[#3d2b25] hover:bg-[#2a1e1a] text-white font-bold italic text-sm px-8 py-3 border border-white/30">
                                                Select Files
                                            </Button>
                                        </div>
                                    </div>
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

                                {/* Submit Button - Moved here */}
                                <Button
                                    size="lg"
                                    className="bg-[#1a365d] hover:bg-[#132845] text-white font-bold italic text-lg px-10 py-6 rounded-lg shadow-lg"
                                >
                                    Submit Project
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

