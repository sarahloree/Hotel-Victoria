const Services = () => {
  return (
    <div className="page-transition pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif mb-6">Our Services</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group border rounded-lg overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80" 
                alt="Luxury room" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-serif mb-4">Luxury Accommodations</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 45 uniquely decorated rooms and suites</li>
                <li>• Private balconies with ranch views</li>
                <li>• Premium bedding and linens</li>
                <li>• In-room coffee service</li>
                <li>• High-speed WiFi</li>
              </ul>
            </div>
          </div>

          <div className="group border rounded-lg overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80" 
                alt="Fine dining" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-serif mb-4">Dining Experience</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• La Victoriana fine dining restaurant</li>
                <li>• Traditional Texas cuisine</li>
                <li>• Local wine selection</li>
                <li>• Room service available</li>
                <li>• Private dining options</li>
              </ul>
            </div>
          </div>

          <div className="group border rounded-lg overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" 
                alt="Wellness facilities" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-serif mb-4">Wellness</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Outdoor swimming pool</li>
                <li>• Fitness center</li>
                <li>• Yoga classes</li>
                <li>• Spa treatments</li>
                <li>• Walking trails</li>
              </ul>
            </div>
          </div>

          <div className="group border rounded-lg overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" 
                alt="Event venue" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-serif mb-4">Events</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Wedding venues</li>
                <li>• Corporate meeting rooms</li>
                <li>• Event planning services</li>
                <li>• Catering options</li>
                <li>• Audio-visual equipment</li>
              </ul>
            </div>
          </div>

          <div className="group border rounded-lg overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                alt="Business center" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-serif mb-4">Business Center</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 24/7 access</li>
                <li>• Printing services</li>
                <li>• Video conferencing</li>
                <li>• Private workspaces</li>
                <li>• Technical support</li>
              </ul>
            </div>
          </div>

          <div className="group border rounded-lg overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80" 
                alt="Concierge service" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-serif mb-4">Concierge</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Local tour arrangements</li>
                <li>• Transportation services</li>
                <li>• Restaurant reservations</li>
                <li>• Activity bookings</li>
                <li>• 24-hour assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;