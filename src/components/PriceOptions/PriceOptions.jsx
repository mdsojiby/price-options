import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions=[

    
        
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 30,
            "features": [
              "Access to gym equipment during off-peak hours",
              "Locker access",
              "One free personal training session per year"
            ]
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "price": 50,
            "features": [
              "Unlimited access to gym equipment",
              "Locker access",
              "Two personal training sessions per month",
              "Access to group fitness classes"
            ]
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "price": 75,
            "features": [
              "24/7 access to gym facilities",
              "Locker and towel service",
              "Four personal training sessions per month",
              "Access to group fitness and specialty classes",
              "Complimentary guest pass once per month"
            ]
          },
          {
            "id": 4,
            "name": "VIP Membership",
            "price": 100,
            "features": [
              "24/7 access to gym facilities",
              "Locker, towel, and laundry service",
              "Eight personal training sessions per month",
              "Unlimited access to all classes and workshops",
              "Dedicated nutrition and wellness consultations",
              "Complimentary guest pass twice per month"
            ]
          }
        
      
    ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl"> Best price in the world</h2>
            <div className="grid  md:grid-cols-3 gap-6">
            {
                priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;