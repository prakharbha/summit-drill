"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FormData {
    name: string;
    company: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    cell: string;
    email: string;
    notes: string;
    newsletter: boolean;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        company: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        cell: "",
        email: "",
        notes: "",
        newsletter: true,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, newsletter: checked }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: "success", message: data.message });
                // Reset form
                setFormData({
                    name: "",
                    company: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: "",
                    phone: "",
                    cell: "",
                    email: "",
                    notes: "",
                    newsletter: true,
                });
            } else {
                setSubmitStatus({ type: "error", message: data.error || "Failed to send message" });
            }
        } catch {
            setSubmitStatus({ type: "error", message: "Network error. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 bg-[#5e745d] text-white">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">
                    General Inquiries
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Form Fields (2 cols) */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-white font-semibold">Your Name *</Label>
                                    <Input
                                        id="name"
                                        placeholder="David"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-white/30 border-none text-white placeholder:text-white/70 rounded-[5px]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company" className="text-white font-semibold">Company Name</Label>
                                    <Input
                                        id="company"
                                        placeholder="Smith"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="bg-white/30 border-none text-white placeholder:text-white/70 rounded-[5px]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="address" className="text-white font-semibold">Address</Label>
                                <Input
                                    id="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="bg-white/30 border-none text-white rounded-[5px]"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="city" className="text-white font-semibold">City</Label>
                                    <Input
                                        id="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="bg-white/30 border-none text-white rounded-[5px]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="state" className="text-white font-semibold">State</Label>
                                    <Input
                                        id="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className="bg-white/30 border-none text-white rounded-[5px]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="zip" className="text-white font-semibold">Zip Code</Label>
                                <Input
                                    id="zip"
                                    value={formData.zip}
                                    onChange={handleInputChange}
                                    className="bg-white/30 border-none text-white rounded-[5px]"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-white font-semibold">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        placeholder="(   )"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="bg-white/30 border-none text-white placeholder:text-white/70 rounded-[5px]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cell" className="text-white font-semibold">Cell Number</Label>
                                    <Input
                                        id="cell"
                                        placeholder="(   )"
                                        value={formData.cell}
                                        onChange={handleInputChange}
                                        className="bg-white/30 border-none text-white placeholder:text-white/70 rounded-[5px]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white font-semibold">Email *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-white/30 border-none text-white rounded-[5px]"
                                />
                            </div>

                            <div className="flex items-center space-x-2 pt-4">
                                <Checkbox
                                    id="newsletter"
                                    checked={formData.newsletter}
                                    onCheckedChange={handleCheckboxChange}
                                    className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#5e745d]"
                                />
                                <Label htmlFor="newsletter" className="text-white font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    I would like to subscribe to Summit's Dispatch newsletter.
                                </Label>
                            </div>
                        </div>

                        {/* Notes & Submit (1 col) */}
                        <div className="lg:col-span-1 flex flex-col h-full">
                            <div className="space-y-2 flex-grow flex flex-col">
                                <Label htmlFor="notes" className="text-white font-semibold text-lg">Notes</Label>
                                <Textarea
                                    id="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    className="bg-white/30 border-none text-white min-h-[300px] flex-grow resize-none rounded-[5px]"
                                />
                            </div>

                            {/* Status Message */}
                            {submitStatus && (
                                <div className={`mt-4 p-4 rounded-lg ${submitStatus.type === "success" ? "bg-green-600/20 text-green-100" : "bg-red-600/20 text-red-100"}`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <div className="pt-8 flex justify-end">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#1A365D] hover:bg-[#152c4d] text-white font-bold text-lg px-12 py-6 shadow-lg rounded-md disabled:opacity-50"
                                >
                                    {isSubmitting ? "Sending..." : "Submit"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
