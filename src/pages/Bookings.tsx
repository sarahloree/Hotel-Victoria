import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HotelBookingForm from "@/components/booking/HotelBookingForm";
import RestaurantBookingForm from "@/components/booking/RestaurantBookingForm";

const Bookings = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(
    location.state?.source === "dining" ? "restaurant" : "hotel"
  );

  return (
    <div className="page-transition min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-serif mb-2">Make a Reservation</h1>
          <p className="text-muted-foreground mb-8">
            Book your stay or reserve a table at our award-winning restaurant.
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="hotel">Hotel Room</TabsTrigger>
              <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
            </TabsList>
            <TabsContent value="hotel">
              <div className="mt-6">
                <HotelBookingForm />
              </div>
            </TabsContent>
            <TabsContent value="restaurant">
              <div className="mt-6">
                <RestaurantBookingForm />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Bookings;