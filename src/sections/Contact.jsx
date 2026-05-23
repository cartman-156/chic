import React, { useState } from 'react';
import { Mail, MessageCircle, Clock } from 'lucide-react';

export default function Contact({ settings }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailTo = settings?.email || 'manasiawati@ymail.com';
    const subject = `Bespoke Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const whatsappLink = `https://wa.me/${settings?.whatsappNumber || '919999999999'}?text=${encodeURIComponent("Hello Chic, I'd like to schedule an appointment or make an inquiry.")}`;

  return (
  <section id="contact" className="py-28 bg-luxury-champagne/10 border-t border-luxury-champagne/20">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start">

        {/* Left Column: Studio Details */}
        <div className="space-y-12">

          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.3em] text-luxury-muted uppercase font-light block">
              Inquiries
            </span>

            <h2 className="text-4xl md:text-5xl font-serif font-light text-luxury-black">
              Bespoke Orders
            </h2>
          </div>

          <p className="text-sm font-light text-luxury-muted leading-7 max-w-md">
            Thoughtfully designed and meticulously crafted, our bespoke creations are tailored to reflect your unique vision with elegance, artistry, and attention to detail.
          </p>

          <p className="text-sm font-light italic text-luxury-muted leading-7 max-w-md">
            Serving clients worldwide through personalized online consultations.
          </p>

          <div className="space-y-7 pt-8 border-t border-luxury-champagne/40">

            <div className="flex items-start space-x-4">
              <Clock className="w-5 h-5 text-luxury-gold stroke-[1.25] mt-0.5" />
              <div>
                <h4 className="text-[10px] tracking-[0.25em] font-semibold uppercase text-luxury-black">
                  Studio Support
                </h4>
                <p className="text-xs font-light text-luxury-muted mt-1">
                  Monday–Saturday, 10 AM–5 PM
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-5 h-5 text-luxury-gold stroke-[1.25] mt-0.5" />
              <div>
                <h4 className="text-[10px] tracking-[0.25em] font-semibold uppercase text-luxury-black">
                  Email
                </h4>
                <a
                  href={`mailto:${settings?.email || 'manasiawati@ymail.com'}`}
                  className="text-xs font-light text-luxury-muted mt-1 hover:text-luxury-gold transition-colors"
                >
                  {settings?.email || 'manasiawati@ymail.com'}
                </a>
              </div>
            </div>

          </div>

          <div className="pt-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-[11px] tracking-[0.3em] uppercase font-light bg-luxury-charcoal text-luxury-ivory px-7 py-4 hover:bg-luxury-gold transition-colors duration-300 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 stroke-[1.5]" />
              <span>Begin Your Inquiry</span>
            </a>
          </div>

        </div>

        {/* Right Column: Contact/Inquiry Form */}
        <div className="bg-luxury-ivory p-10 md:p-14 border border-luxury-champagne/40 shadow-sm">

          <h3 className="text-2xl font-serif font-light text-luxury-black mb-10">
            Send an Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="space-y-3">
              <label className="text-[10px] tracking-[0.3em] uppercase font-light text-luxury-muted block">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-luxury-champagne focus:border-luxury-gold py-3 text-sm font-light text-luxury-black focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] tracking-[0.3em] uppercase font-light text-luxury-muted block">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-luxury-champagne focus:border-luxury-gold py-3 text-sm font-light text-luxury-black focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] tracking-[0.3em] uppercase font-light text-luxury-muted block">
                Message / Details
              </label>
              <textarea
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your vision, inspiration, or requirements..."
                className="w-full bg-transparent border-b border-luxury-champagne focus:border-luxury-gold py-3 text-sm font-light text-luxury-black focus:outline-none transition-colors placeholder:text-luxury-muted/40 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full text-[11px] tracking-[0.3em] uppercase font-light bg-luxury-gold text-luxury-ivory py-4 hover:bg-luxury-charcoal transition-colors duration-300"
            >
              {submitted ? 'Inquiry Sent Successfully' : 'Submit Inquiry'}
            </button>

          </form>

        </div>

      </div>
    </div>
  </section>
  );
  // return (
  //   <section id="contact" className="py-24 bg-luxury-champagne/10 border-t border-luxury-champagne/20">
  //     <div className="max-w-7xl mx-auto px-6 md:px-12">
  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
  //         {/* Left Column: Studio Details */}
  //         <div className="space-y-10">
  //           <div className="space-y-3">
  //             <span className="text-[10px] tracking-widest text-luxury-muted uppercase font-light block">
  //               Inquiries
  //             </span>
  //             <h2 className="text-4xl md:text-5xl font-serif font-light text-luxury-black">
  //               Bespoke Orders
  //             </h2>
  //           </div>
            
  //           <p className="text-sm font-light text-luxury-muted leading-relaxed max-w-md">
  //             Looking for something uniquely yours? From personalized creations to custom-designed pieces and special occasion essentials, our studio works closely with you to bring your ideas to life.
  //           </p>
  //           <p className="text-sm font-light italic text-luxury-muted leading-relaxed max-w-md">
  //             Serving clients worldwide through personalized online consultations.
  //           </p>

  //           <div className="space-y-6 pt-6 border-t border-luxury-champagne/60">
  //             <div className="flex items-start space-x-4">
  //               <Clock className="w-5 h-5 text-luxury-gold stroke-[1.25] mt-0.5" />
  //               <div>
  //                 <h4 className="text-xs tracking-widest font-semibold uppercase text-luxury-black">Studio Support</h4>
  //                 <p className="text-xs font-light text-luxury-muted mt-1">Monday–Saturday, 10 AM–5 PM</p>
  //               </div>
  //             </div>

  //             <div className="flex items-start space-x-4">
  //               <Mail className="w-5 h-5 text-luxury-gold stroke-[1.25] mt-0.5" />
  //               <div>
  //                 <h4 className="text-xs tracking-widest font-semibold uppercase text-luxury-black">Email</h4>
  //                 <a
  //                   href={`mailto:${settings?.email || 'manasiawati@ymail.com'}`}
  //                   className="text-xs font-light text-luxury-muted mt-1 hover:text-luxury-gold transition-colors"
  //                 >
  //                   {settings?.email || 'manasiawati@ymail.com'}
  //                 </a>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="pt-4">
  //             <a
  //               href={whatsappLink}
  //               target="_blank"
  //               rel="noopener noreferrer"
  //               className="inline-flex items-center space-x-3 text-xs tracking-widest uppercase font-light bg-luxury-charcoal text-luxury-ivory px-6 py-4 hover:bg-luxury-gold transition-colors duration-300 shadow-sm"
  //             >
  //               <MessageCircle className="w-4 h-4 stroke-[1.5]" />
  //               <span>Begin Your Inquiry</span>
  //             </a>
  //           </div>
  //         </div>

  //         {/* Right Column: Contact/Inquiry Form */}
  //         <div className="bg-luxury-ivory p-8 md:p-12 border border-luxury-champagne/40 shadow-sm">
  //           <h3 className="text-2xl font-serif font-light text-luxury-black mb-8">
  //             Send an Inquiry
  //           </h3>

  //           <form onSubmit={handleSubmit} className="space-y-6">
  //             <div className="space-y-2">
  //               <label className="text-[10px] tracking-widest uppercase font-light text-luxury-muted block">
  //                 Your Name
  //               </label>
  //               <input
  //                 type="text"
  //                 required
  //                 value={formData.name}
  //                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
  //                 className="w-full bg-transparent border-b border-luxury-champagne focus:border-luxury-gold py-2 text-sm font-light text-luxury-black focus:outline-none transition-colors"
  //               />
  //             </div>

  //             <div className="space-y-2">
  //               <label className="text-[10px] tracking-widest uppercase font-light text-luxury-muted block">
  //                 Email Address
  //               </label>
  //               <input
  //                 type="email"
  //                 required
  //                 value={formData.email}
  //                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
  //                 className="w-full bg-transparent border-b border-luxury-champagne focus:border-luxury-gold py-2 text-sm font-light text-luxury-black focus:outline-none transition-colors"
  //               />
  //             </div>

  //             <div className="space-y-2">
  //               <label className="text-[10px] tracking-widest uppercase font-light text-luxury-muted block">
  //                 Message / Details
  //               </label>
  //               <textarea
  //                 required
  //                 rows="4"
  //                 value={formData.message}
  //                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
  //                 placeholder="Describe what you are looking to customize or purchase..."
  //                 className="w-full bg-transparent border-b border-luxury-champagne focus:border-luxury-gold py-2 text-sm font-light text-luxury-black focus:outline-none transition-colors placeholder:text-luxury-muted/40 resize-none"
  //               ></textarea>
  //             </div>

  //             <button
  //               type="submit"
  //               className="w-full text-xs tracking-widest uppercase font-light bg-luxury-gold text-luxury-ivory py-4 hover:bg-luxury-charcoal transition-colors duration-300"
  //             >
  //               {submitted ? 'Inquiry Sent Successfully' : 'Submit Inquiry'}
  //             </button>
  //           </form>
  //         </div>

  //       </div>
  //     </div>
  //   </section>
  // );
}
