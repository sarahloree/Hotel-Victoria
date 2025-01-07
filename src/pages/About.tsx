const About = () => {
  return (
    <div className="page-transition pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif mb-6">About Hotel Victoria</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-serif mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 1985 by the Rodriguez family, Hotel Victoria stands as a testament to Texas hospitality in the heart of Victoria County. What began as a modest ranch house has been transformed into a luxury boutique hotel that perfectly blends traditional Texas charm with modern comfort.
            </p>
            <p className="text-lg text-muted-foreground">
              Located on 50 acres of pristine Texas countryside, our property offers guests an authentic ranch experience while maintaining the highest standards of luxury accommodation. The original ranch house has been carefully preserved and now serves as our main restaurant, La Victoriana.
            </p>
          </div>
          <div>
            <img
              src="/lovable-uploads/3ec2fd23-beb3-4d57-b278-9ed7cdd39d2d.png"
              alt="Hotel Victoria exterior"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif mb-3">Our Location</h3>
            <p className="text-muted-foreground">
              Situated just outside Victoria, Texas, our hotel provides easy access to both the Gulf Coast and the rich cultural heritage of South Texas. We're perfectly positioned for both business travelers and tourists exploring the Texas Independence Trail.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              At Hotel Victoria, we're dedicated to providing an authentic Texas experience while maintaining the highest standards of luxury and comfort. We believe in preserving the traditions of Texas hospitality while embracing modern amenities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-3">Our Values</h3>
            <p className="text-muted-foreground">
              We pride ourselves on our genuine Southern hospitality, commitment to sustainability, and support of local businesses. Our staff, many of whom are long-time Victoria residents, embody the warm and welcoming spirit of Texas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;