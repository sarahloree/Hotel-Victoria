import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Dining = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleReservation = () => {
    navigate("/bookings", { 
      state: { 
        source: "dining",
        defaultValues: {
          roomType: "deluxe"
        }
      } 
    });
  };

  return (
    <div className="page-transition min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/lovable-uploads/0697b144-8772-4055-bbc0-eb83bec901b3.png"
          alt="La Victoriana restaurant with elegant table settings and pool view"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
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
          <Button size="lg" onClick={() => setShowMenu(true)}>View Menu</Button>
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
          <Button size="lg" onClick={handleReservation}>Book Online</Button>
        </div>
      </div>

      {/* Menu Dialog */}
      <Dialog open={showMenu} onOpenChange={setShowMenu}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif text-center mb-6">La Victoriana Menu</DialogTitle>
          </DialogHeader>
          
          {/* Starters */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif mb-4">Starters</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-medium">Texas Quail</h4>
                  <p className="text-sm text-muted-foreground">Grilled quail with jalapeño honey glaze</p>
                </div>
                <span className="font-medium">$18</span>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-medium">Gulf Shrimp Cocktail</h4>
                  <p className="text-sm text-muted-foreground">Served with house-made cocktail sauce</p>
                </div>
                <span className="font-medium">$22</span>
              </div>
            </div>
          </div>

          {/* Main Courses */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif mb-4">Main Courses</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-medium">Prime Ribeye</h4>
                  <p className="text-sm text-muted-foreground">16oz Texas-raised beef, herb butter</p>
                </div>
                <span className="font-medium">$58</span>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-medium">Redfish on the Half Shell</h4>
                  <p className="text-sm text-muted-foreground">Lemon butter sauce, grilled vegetables</p>
                </div>
                <span className="font-medium">$42</span>
              </div>
            </div>
          </div>

          {/* Desserts */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Desserts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-medium">Pecan Pie</h4>
                  <p className="text-sm text-muted-foreground">Bourbon caramel sauce, vanilla ice cream</p>
                </div>
                <span className="font-medium">$12</span>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-medium">Texas Sheet Cake</h4>
                  <p className="text-sm text-muted-foreground">Rich chocolate cake with pecans</p>
                </div>
                <span className="font-medium">$10</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dining;