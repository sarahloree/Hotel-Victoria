const Services = () => {
  return (
    <div className="page-transition pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif mb-6">Our Services</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-serif mb-4">Luxury Accommodations</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• 45 uniquely decorated rooms and suites</li>
              <li>• Private balconies with ranch views</li>
              <li>• Premium bedding and linens</li>
              <li>• In-room coffee service</li>
              <li>• High-speed WiFi</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-serif mb-4">Dining Experience</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• La Victoriana fine dining restaurant</li>
              <li>• Traditional Texas cuisine</li>
              <li>• Local wine selection</li>
              <li>• Room service available</li>
              <li>• Private dining options</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-serif mb-4">Wellness</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Outdoor swimming pool</li>
              <li>• Fitness center</li>
              <li>• Yoga classes</li>
              <li>• Spa treatments</li>
              <li>• Walking trails</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-serif mb-4">Events</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Wedding venues</li>
              <li>• Corporate meeting rooms</li>
              <li>• Event planning services</li>
              <li>• Catering options</li>
              <li>• Audio-visual equipment</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-serif mb-4">Business Center</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• 24/7 access</li>
              <li>• Printing services</li>
              <li>• Video conferencing</li>
              <li>• Private workspaces</li>
              <li>• Technical support</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
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
  );
};

export default Services;