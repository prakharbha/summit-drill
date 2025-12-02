"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
    return (
        <section className="py-20 bg-[#5e745d] text-white">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">
                    General Inquiries
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Form Fields (2 cols) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-white font-semibold">Your Name *</Label>
                                <Input id="name" placeholder="David" className="bg-white/30 border-none text-white placeholder:text-white/70" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-white font-semibold">Company Name</Label>
                                <Input id="company" placeholder="Smith" className="bg-white/30 border-none text-white placeholder:text-white/70" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address" className="text-white font-semibold">Address</Label>
                            <Input id="address" className="bg-white/30 border-none text-white" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="city" className="text-white font-semibold">City</Label>
                                <Input id="city" className="bg-white/30 border-none text-white" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="state" className="text-white font-semibold">State</Label>
                                <Input id="state" className="bg-white/30 border-none text-white" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="zip" className="text-white font-semibold">Zip Code</Label>
                            <Input id="zip" className="bg-white/30 border-none text-white" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-white font-semibold">Phone Number</Label>
                                <Input id="phone" placeholder="(   )" className="bg-white/30 border-none text-white placeholder:text-white/70" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cell" className="text-white font-semibold">Cell Number</Label>
                                <Input id="cell" placeholder="(   )" className="bg-white/30 border-none text-white placeholder:text-white/70" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white font-semibold">Email *</Label>
                            <Input id="email" type="email" className="bg-white/30 border-none text-white" />
                        </div>

                        <div className="flex items-center space-x-2 pt-4">
                            <Checkbox id="newsletter" className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#5e745d]" />
                            <Label htmlFor="newsletter" className="text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                I would like to subscribe to Summit’s Dispatch newsletter.
                            </Label>
                        </div>
                    </div>

                    {/* Notes & Submit (1 col) */}
                    <div className="lg:col-span-1 flex flex-col h-full">
                        <div className="space-y-2 flex-grow flex flex-col">
                            <Label htmlFor="notes" className="text-white font-semibold text-lg">Notes</Label>
                            <Textarea
                                id="notes"
                                className="bg-white/30 border-none text-white min-h-[300px] flex-grow resize-none"
                            />
                        </div>

                        <div className="pt-8 flex justify-end">
                            <Button className="bg-[#1A365D] hover:bg-[#152c4d] text-white font-bold text-lg px-12 py-6 shadow-lg rounded-md">
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
