import React, { useState } from 'react';
import { CreditCard, Lock, ShoppingBag, CheckCircle, ArrowLeft, Sparkles, Shield, Zap } from 'lucide-react';

export default function Payment() {
    const [step, setStep] = useState(1);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        address: '',
        city: '',
        zipcode: ''
    });

    // Cart items
    const cartItems = [
        { name: 'Pro Runner X1', price: 129.99, qty: 1, image: 'bg-gradient-to-br from-blue-400 to-blue-600' },
        { name: 'Performance Tee', price: 39.99, qty: 2, image: 'bg-gradient-to-br from-green-400 to-green-600' }
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * 0.18;
    const shipping = 15;
    const total = subtotal + tax + shipping;

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRazorpayPayment = () => {
        const options = {
            key: "YOUR_RAZORPAY_KEY_ID", // Replace with your actual Razorpay key
            amount: Math.round(total * 100), // Amount in paise
            currency: "INR",
            name: "X-STOP",
            description: "Sports Equipment & Athleisure",
            image: "https://your-logo-url.com/logo.png", // Replace with your logo
            handler: function (response) {
                setPaymentSuccess(true);
                console.log("Payment successful:", response);
            },
            prefill: {
                name: "Customer Name",
                email: formData.email,
                contact: formData.phone
            },
            notes: {
                address: formData.address
            },
            theme: {
                color: "#2563eb"
            },
            modal: {
                ondismiss: function() {
                    console.log("Payment cancelled");
                }
            }
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    if (paymentSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
                <div className="max-w-md w-full">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 text-center transform animate-bounce-in">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                            <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
                        <p className="text-gray-600 mb-6">Your order has been confirmed. We'll send you shipping updates soon.</p>
                        <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                            <p className="text-sm text-gray-500 mb-1">Order Number</p>
                            <p className="text-2xl font-bold text-gray-900">#XS{Math.floor(Math.random() * 100000)}</p>
                        </div>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold transition-all transform hover:scale-105">
                            Track Order
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-semibold">Back to Shop</span>
                    </button>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        X-STOP
                    </div>
                </div>

                {/* Progress Steps */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="flex items-center justify-center space-x-4">
                        <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-blue-400' : 'text-gray-500'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                                1
                            </div>
                            <span className="hidden sm:inline font-semibold">Details</span>
                        </div>
                        <div className={`h-1 w-16 sm:w-32 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-700'} rounded transition-all`}></div>
                        <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-blue-400' : 'text-gray-500'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                                2
                            </div>
                            <span className="hidden sm:inline font-semibold">Payment</span>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Form */}
                    <div className="space-y-6">
                        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                    <ShoppingBag className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Checkout</h2>
                                    <p className="text-blue-200 text-sm">Complete your purchase securely</p>
                                </div>
                            </div>

                            {step === 1 && (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-white font-semibold mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white font-semibold mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white font-semibold mb-2">Delivery Address</label>
                                        <textarea
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            rows="3"
                                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                                            placeholder="Street address, apartment, suite, etc."
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-white font-semibold mb-2">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                                                placeholder="Mumbai"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white font-semibold mb-2">Pincode</label>
                                            <input
                                                type="text"
                                                name="zipcode"
                                                value={formData.zipcode}
                                                onChange={handleInputChange}
                                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                                                placeholder="400001"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setStep(2)}
                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg mt-6"
                                    >
                                        Continue to Payment
                                    </button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-400/30">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                <CreditCard className="w-8 h-8 text-blue-400" />
                                                <div>
                                                    <h3 className="text-white font-bold text-lg">Razorpay</h3>
                                                    <p className="text-blue-200 text-sm">Secure Payment Gateway</p>
                                                </div>
                                            </div>
                                            <Lock className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 mt-4">
                                            <div className="bg-white/10 rounded-lg p-3 text-center">
                                                <Shield className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                                                <p className="text-white text-xs font-semibold">Secure</p>
                                            </div>
                                            <div className="bg-white/10 rounded-lg p-3 text-center">
                                                <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                                                <p className="text-white text-xs font-semibold">Instant</p>
                                            </div>
                                            <div className="bg-white/10 rounded-lg p-3 text-center">
                                                <Sparkles className="w-6 h-6 text-purple-400 mx-auto mb-1" />
                                                <p className="text-white text-xs font-semibold">Trusted</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-blue-200 text-sm">Supported payment methods:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['UPI', 'Cards', 'Net Banking', 'Wallets', 'EMI'].map((method) => (
                                                <span key={method} className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm font-semibold">
                          {method}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleRazorpayPayment}
                                        className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                                    >
                                        <Lock className="w-5 h-5" />
                                        <span>Pay ₹{total.toFixed(2)}</span>
                                    </button>

                                    <button
                                        onClick={() => setStep(1)}
                                        className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold transition-all"
                                    >
                                        Back to Details
                                    </button>

                                    <p className="text-center text-blue-200 text-xs mt-4">
                                        🔒 Your payment information is encrypted and secure
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Trust Badges */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                            <div className="flex items-center justify-around">
                                <div className="text-center">
                                    <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                                    <p className="text-white text-xs font-semibold">SSL Encrypted</p>
                                </div>
                                <div className="text-center">
                                    <Lock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                                    <p className="text-white text-xs font-semibold">Secure Payment</p>
                                </div>
                                <div className="text-center">
                                    <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                                    <p className="text-white text-xs font-semibold">100% Safe</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div>
                        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl sticky top-8">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <ShoppingBag className="w-6 h-6 mr-2 text-blue-400" />
                                Order Summary
                            </h3>

                            <div className="space-y-4 mb-6">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="flex items-center space-x-4 bg-white/5 rounded-2xl p-4">
                                        <div className={`w-20 h-20 ${item.image} rounded-xl flex items-center justify-center`}>
                                            <span className="text-white text-2xl font-bold opacity-30">X</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-semibold">{item.name}</h4>
                                            <p className="text-blue-200 text-sm">Qty: {item.qty}</p>
                                        </div>
                                        <div className="text-white font-bold">₹{(item.price * item.qty).toFixed(2)}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 border-t border-white/20 pt-6">
                                <div className="flex justify-between text-blue-200">
                                    <span>Subtotal</span>
                                    <span>₹{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-blue-200">
                                    <span>Tax (18%)</span>
                                    <span>₹{tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-blue-200">
                                    <span>Shipping</span>
                                    <span>₹{shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-white text-xl font-bold border-t border-white/20 pt-3">
                                    <span>Total</span>
                                    <span>₹{total.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4 mt-6 border border-green-400/30">
                                <p className="text-green-300 text-sm font-semibold flex items-center">
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    Free shipping on orders over ₹999!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Razorpay Script */}
            <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        </div>
    );
}