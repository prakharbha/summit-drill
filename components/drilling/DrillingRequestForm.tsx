"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CloudUpload, Calendar, ArrowRight, ArrowLeft } from "lucide-react";

const services = [
    "GPR: Utility Location",
    "Drilling & Injection",
    "Capping",
    "GPR: UST or Septic Detection",
    "Air Rotary Drilling",
    "In-Situ Solidification/Stabilization (ISS)",
    "Borehole/Downhole Geophysics",
    "Auger Drilling",
    "In-Situ Soil Mixing",
    "Electrical Resistivity",
    "Track Mounted Rigs",
    "Slurry Walls",
    "Seismic Refraction",
    "Over Water/Barge Drilling",
    "Permeable Reactive Barriers",
    "Drilling Support: Clearing & Grubbing",
    "Horizontal Drilling",
    "Ecosystem Restoration",
    "Drilling Support: Road Building/Matts",
    "Low Clearance Drilling",
    "Remediation System Vaults",
    "Drilling Support: Air Bridge Construction",
    "Test Pitting",
    "Groundwater Treatment Systems",
    "Sonic Drilling",
    "Soil Excavation & Disposal",
    "Well Filters",
    "Direct Push Drilling",
    "Stream/Shoreline/Wetland Restoration",
    "Vapor Mitigation Systems"
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
        <section
            className="pt-20 pb-48 bg-[#8B4513] text-white relative z-20"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 100px), 35% 98%, 0 calc(100% - 100px))" }}
        >
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header with Step Indicator */}
                <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
                            Start a Project
                        </h2>
                        <p className="text-lg md:text-xl font-medium">
                            To start a project, please fill out the form below.
                        </p>
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
                        {/* Checkboxes Section */}
                        <div className="mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold italic mb-8">
                                Please check all boxes that align with your Request for Proposal:
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                                {services.map((service) => (
                                    <div key={service} className="flex items-start space-x-3">
                                        <Checkbox
                                            id={service}
                                            className="border-white/50 data-[state=checked]:bg-white data-[state=checked]:text-[#8B4513] w-6 h-6 mt-0.5 rounded-sm"
                                        />
                                        <label
                                            htmlFor={service}
                                            className="text-lg leading-tight cursor-pointer select-none"
                                        >
                                            {service}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end mb-8">
                            <div className="lg:col-span-2">
                                <Textarea
                                    placeholder="Don't see a service you're looking for, add a note here:"
                                    className="bg-white/30 border-none text-white placeholder:text-white/70 min-h-[100px] text-xl p-6 resize-none rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Next Button */}
                        <div className="flex justify-end">
                            <Button
                                onClick={nextStep}
                                size="lg"
                                className="bg-[#1a365d] hover:bg-[#132845] text-white font-bold italic text-xl px-12 py-6 shadow-xl flex items-center gap-3"
                            >
                                Next Step
                                <ArrowRight className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                )}

                {/* Step 2: Contact Information */}
                {currentStep === 2 && (
                    <div className="animate-fadeIn">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                            {/* Left Column: Input Fields (Takes up 2 cols) */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium ml-1">Your Name *</label>
                                        <Input
                                            placeholder="David"
                                            className="bg-white/30 border-none text-white placeholder:text-white/70 h-12 text-lg"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium ml-1">Company Name</label>
                                        <Input
                                            placeholder="Smith"
                                            className="bg-white/30 border-none text-white placeholder:text-white/70 h-12 text-lg"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1">Address</label>
                                    <Input
                                        className="bg-white/30 border-none text-white h-12 text-lg"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium ml-1">City</label>
                                        <Input
                                            className="bg-white/30 border-none text-white h-12 text-lg"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium ml-1">State</label>
                                        <Input
                                            className="bg-white/30 border-none text-white h-12 text-lg"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 pr-0 md:pr-3">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium ml-1">Zip Code</label>
                                        <Input
                                            className="bg-white/30 border-none text-white h-12 text-lg"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium ml-1">Phone Number</label>
                                        <Input
                                            placeholder="(   )"
                                            className="bg-white/30 border-none text-white placeholder:text-white/70 h-12 text-lg"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium ml-1">Cell Number</label>
                                        <Input
                                            placeholder="(   )"
                                            className="bg-white/30 border-none text-white placeholder:text-white/70 h-12 text-lg"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 pr-0 md:pr-3">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium ml-1">Estimated Start Date</label>
                                        <div className="relative">
                                            <Input
                                                className="bg-white/30 border-none text-white h-12 text-lg pr-12"
                                            />
                                            <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: File Upload */}
                            <div className="lg:col-span-1 flex flex-col items-center justify-center text-center space-y-6 mt-8 lg:mt-0">
                                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/40">
                                    <CloudUpload className="w-12 h-12 text-white" />
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">
                                        Upload Project Related<br />Documents/Scope of Work
                                    </h4>
                                    <p className="text-white/80">
                                        You Can Upload Multiple Documents
                                    </p>
                                </div>

                                <div className="w-full max-w-xs bg-black/20 rounded-xl p-8 border-2 border-dashed border-white/20 hover:bg-black/30 transition-colors cursor-pointer relative group">
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                        {/* Mountain graphic placeholder */}
                                        <svg width="60" height="30" viewBox="0 0 60 30" fill="none" className="text-white/20">
                                            <path d="M30 0L60 30H0L30 0Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="text-lg mb-4">(Drop Files Here)</p>
                                    <Button className="bg-[#3d2b25] hover:bg-[#2a1e1a] text-white font-bold italic border border-white/20">
                                        Select Files
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between">
                            <Button
                                onClick={prevStep}
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold italic text-xl px-12 py-6 shadow-xl flex items-center gap-3"
                            >
                                <ArrowLeft className="w-6 h-6" />
                                Previous
                            </Button>
                            <Button
                                size="lg"
                                className="bg-[#1a365d] hover:bg-[#132845] text-white font-bold italic text-xl px-12 py-6 shadow-xl border-2 border-[#1a365d] hover:border-white/20"
                            >
                                Submit Project
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DrillingRequestForm;
