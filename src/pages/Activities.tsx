const Activities = () => {
  return (
    <div className="page-transition pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif mb-6">Activities & Experiences</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2" 
                alt="Horses at the ranch"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h2 className="text-2xl font-serif mb-4">Ranch Experiences</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Immerse yourself in authentic Texas ranch life with our curated experiences. Join our experienced ranch hands for horseback riding through our scenic trails, learn about cattle ranching traditions, or try your hand at roping.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Guided horseback rides (beginners welcome)</li>
                  <li>Ranch tours</li>
                  <li>Cattle drive demonstrations</li>
                  <li>Western riding lessons</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                alt="Gulf Coast beach"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h2 className="text-2xl font-serif mb-4">Local Adventures</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Explore the rich history and natural beauty of Victoria County. Our concierge can arrange various local experiences that showcase the best of Texas culture and outdoor activities.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Historical site tours</li>
                  <li>Gulf Coast day trips</li>
                  <li>Local brewery tours</li>
                  <li>Wildlife watching</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2" 
                alt="Horses at the ranch"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-serif mb-3">Seasonal Events</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Spring wildflower tours</li>
              <li>• Summer rodeo experiences</li>
              <li>• Fall harvest festivals</li>
              <li>• Winter holiday celebrations</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2" 
                alt="Cultural experiences"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-serif mb-3">Cultural Experiences</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Texas cooking classes</li>
              <li>• Local art workshops</li>
              <li>• Live country music nights</li>
              <li>• Traditional dance lessons</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Outdoor activities"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-serif mb-3">Outdoor Recreation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Hiking trails</li>
              <li>• Bird watching</li>
              <li>• Fishing excursions</li>
              <li>• Photography tours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;