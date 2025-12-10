import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ChevronLeft, Check, CreditCard, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Reservation: React.FC = () => {
    const [step, setStep] = useState(1);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        pax: '2',
        name: '',
        email: '',
        phone: '',
        requests: ''
    });

    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const handleDetailsSubmit = () => {
        setStep(3); // Payment state
    };

    const handlePayment = () => {
        setIsProcessingPayment(true);
        setTimeout(() => {
            setIsProcessingPayment(false);
            setStep(4); // Success state
        }, 2000);
    };

    const paxNum = parseInt(formData.pax) || 0;
    const depositAmount = paxNum * 10;

    const timeSlots = [
        '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
    ];

    return (
        <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
            {/* Simple Header for Reservation Page */}
            <nav className="p-6 border-b border-stone-800 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 text-stone-400 hover:text-gold-400 transition-colors">
                    <ChevronLeft size={20} />
                    <span className="uppercase tracking-widest text-sm">Back to Home</span>
                </Link>
                <div className="flex items-center gap-3">
                    <img src="/logo_real.png?v=3" alt="Logo" className="h-10 w-10 rounded-full" />
                    <span className="font-serif text-lg text-gold-400 tracking-widest">SHABU DESU</span>
                </div>
                <div className="w-24"></div> {/* Spacer for center alignment */}
            </nav>

            <div className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-2xl"
                >
                    {step < 3 && (
                        <div className="mb-10 text-center space-y-2">
                            <span className="text-gold-500 uppercase tracking-widest text-xs">Reservations</span>
                            <h1 className="font-serif text-4xl text-white">Secure Your Table</h1>
                            <div className="flex justify-center gap-2 mt-6">
                                <div className={`h-1 w-12 rounded-full transition-colors ${step >= 1 ? 'bg-gold-500' : 'bg-stone-800'}`}></div>
                                <div className={`h-1 w-12 rounded-full transition-colors ${step >= 2 ? 'bg-gold-500' : 'bg-stone-800'}`}></div>
                                <div className={`h-1 w-12 rounded-full transition-colors ${step >= 3 ? 'bg-gold-500' : 'bg-stone-800'}`}></div>
                            </div>
                        </div>
                    )}

                    <div className="bg-stone-900 border border-stone-800 p-8 rounded-lg shadow-2xl">
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-stone-400 ml-1">Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500 z-10" size={18} />
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date: Date | null) => {
                                                setStartDate(date);
                                                setFormData({ ...formData, date: date ? date.toLocaleDateString() : '' });
                                            }}
                                            minDate={new Date()}
                                            placeholderText="Select Date"
                                            className="w-full bg-stone-950 border border-stone-700 rounded p-4 pl-12 text-white focus:border-gold-500 focus:outline-none transition-colors"
                                            calendarClassName="font-sans"
                                            dateFormat="MMMM d, yyyy"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-stone-400 ml-1">Guests</label>
                                    <div className="relative">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500" size={18} />
                                        <select
                                            className="w-full bg-stone-950 border border-stone-700 rounded p-4 pl-12 text-white focus:border-gold-500 focus:outline-none transition-colors appearance-none"
                                            value={formData.pax}
                                            onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                            ))}
                                            <option value="9+">9+ Guests (Call us)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-stone-400 ml-1">Time</label>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                        {timeSlots.map(time => (
                                            <button
                                                key={time}
                                                onClick={() => setFormData({ ...formData, time })}
                                                className={`p-3 text-sm rounded border transition-all ${formData.time === time
                                                    ? 'bg-gold-500 text-stone-950 border-gold-500 font-semibold'
                                                    : 'border-stone-700 text-stone-400 hover:border-gold-500/50 hover:text-white'
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => setStep(2)}
                                    disabled={!formData.date || !formData.time}
                                    className="w-full bg-red-700 text-white p-4 rounded uppercase tracking-widest font-semibold hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                                >
                                    Continue
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider text-stone-400 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-stone-950 border border-stone-700 rounded p-4 text-white focus:border-gold-500 focus:outline-none transition-colors"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider text-stone-400 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full bg-stone-950 border border-stone-700 rounded p-4 text-white focus:border-gold-500 focus:outline-none transition-colors"
                                            placeholder="+60 12 345 6789"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-stone-400 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-stone-950 border border-stone-700 rounded p-4 text-white focus:border-gold-500 focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-stone-400 ml-1">Special Requests (Optional)</label>
                                    <textarea
                                        className="w-full bg-stone-950 border border-stone-700 rounded p-4 text-white focus:border-gold-500 focus:outline-none transition-colors h-24 resize-none"
                                        placeholder="Allergies, viewing preference, anniversary..."
                                        value={formData.requests}
                                        onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                                    ></textarea>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="w-1/3 border border-stone-700 text-stone-300 p-4 rounded uppercase tracking-widest hover:border-stone-500 transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={handleDetailsSubmit}
                                        className="w-2/3 bg-red-700 text-white p-4 rounded uppercase tracking-widest font-semibold hover:bg-red-600 transition-colors"
                                    >
                                        Proceed to Payment
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                <div className="text-center mb-8">
                                    <CreditCard className="mx-auto text-gold-500 mb-4" size={48} />
                                    <h2 className="text-2xl font-serif text-white mb-2">Deposit Payment</h2>
                                    <p className="text-stone-400">Please pay the deposit to secure your booking.</p>
                                </div>

                                <div className="bg-stone-950 p-6 rounded border border-stone-800 space-y-4">
                                    <div className="flex justify-between border-b border-stone-800 pb-4">
                                        <span className="text-stone-400">Date</span>
                                        <span className="text-white font-medium">{formData.date}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-stone-800 pb-4">
                                        <span className="text-stone-400">Time</span>
                                        <span className="text-white font-medium">{formData.time}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-stone-800 pb-4">
                                        <span className="text-stone-400">Guests</span>
                                        <span className="text-white font-medium">{formData.pax} Pax</span>
                                    </div>
                                    <div className="flex justify-between pt-2">
                                        <span className="text-gold-500 font-semibold">Total Deposit (RM 10/pax)</span>
                                        <span className="text-gold-500 font-bold text-xl">RM {depositAmount}.00</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        onClick={() => setStep(2)}
                                        className="w-1/3 border border-stone-700 text-stone-300 p-4 rounded uppercase tracking-widest hover:border-stone-500 transition-colors"
                                        disabled={isProcessingPayment}
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={handlePayment}
                                        disabled={isProcessingPayment}
                                        className="w-2/3 bg-red-700 text-white p-4 rounded uppercase tracking-widest font-semibold hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                                    >
                                        {isProcessingPayment ? (
                                            <>
                                                <Loader2 className="animate-spin" size={20} />
                                                Processing...
                                            </>
                                        ) : (
                                            'Pay Now'
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-6">
                                <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto text-gold-500 mb-6">
                                    <Check size={40} />
                                </div>
                                <h2 className="font-serif text-3xl text-white">Booking Confirmed</h2>
                                <p className="text-stone-400 max-w-md mx-auto leading-relaxed">
                                    Thank you, {formData.name}. We have received your reservation request for <span className="text-gold-400">{formData.pax} guests</span> on <span className="text-gold-400">{formData.date}</span> at <span className="text-gold-400">{formData.time}</span>. A confirmation email has been sent to {formData.email}.
                                    <br /><br />
                                    <span className="text-green-500 font-medium">Deposit of RM {depositAmount}.00 has been successfully paid.</span>
                                </p>
                                <div className="pt-8">
                                    <Link to="/" className="inline-block border border-gold-500 text-gold-500 px-8 py-3 rounded hover:bg-gold-500 hover:text-stone-950 transition-all uppercase tracking-widest text-sm">
                                        Return Home
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <div className="mt-8 text-center text-stone-600 text-xs text-light">
                        <p>For parties larger than 8, please contact us directly at +60 12-345 6789.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Reservation;
