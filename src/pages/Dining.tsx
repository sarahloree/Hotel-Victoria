import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Dining = () => {
  return (
    <div className="page-transition min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-neutral-900 to-neutral-800">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">La Victoriana</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Experience refined Texas cuisine in an elegant ranch-style setting
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* About Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            A Culinary Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            La Victoriana offers a unique dining experience that combines traditional
            Texas flavors with contemporary culinary techniques. Our expert chefs
            craft each dish using locally-sourced ingredients, ensuring both
            quality and authenticity.
          </p>
          <Button size="lg">View Menu</Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-serif mb-3">Breakfast</h3>
              <p className="text-muted-foreground">
                Start your day with our gourmet breakfast featuring Texas classics
                and contemporary favorites.
              </p>
              <p className="mt-2 font-medium">7:00 AM - 10:30 AM</p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-serif mb-3">Lunch & Dinner</h3>
              <p className="text-muted-foreground">
                Savor our chef's specialties featuring premium steaks, fresh
                seafood, and seasonal ingredients.
              </p>
              <p className="mt-2 font-medium">12:00 PM - 10:00 PM</p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-serif mb-3">Bar & Lounge</h3>
              <p className="text-muted-foreground">
                Enjoy craft cocktails, local wines, and premium spirits in our
                sophisticated lounge setting.
              </p>
              <p className="mt-2 font-medium">4:00 PM - 11:00 PM</p>
            </CardContent>
          </Card>
        </div>

        {/* Reservations */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Make a Reservation
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            For the best dining experience, we recommend making a reservation.
            Special arrangements can be made for private events and celebrations.
          </p>
          <Button size="lg" variant="secondary" className="mr-4">
            Call to Reserve
          </Button>
          <Button size="lg">Book Online</Button>
        </div>
      </div>
    </div>
  );
};

export default Dining;