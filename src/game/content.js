export const locations = [
  { id: 'rural', name: 'Small Rural Town', description: 'Lower overhead and a slower, loyal market.', bonus: '+$25,000 starting cash', cashBonus: 25000 },
  { id: 'suburb', name: 'Growing Suburb', description: 'A balanced market with steady demand.', bonus: 'Balanced market', cashBonus: 0 },
  { id: 'city', name: 'Large City', description: 'More shoppers, tougher competition.', bonus: '+50% customer traffic', cashBonus: 0 },
  { id: 'wealthy', name: 'Wealthy Area', description: 'Premium buyers with high expectations.', bonus: '+50% luxury demand', cashBonus: 0 },
  { id: 'rust-belt', name: 'Rust Belt Town', description: 'Affordable inventory and practical buyers.', bonus: '10% lower purchase costs', cashBonus: 0, purchaseDiscount: 0.1 },
]

export const states = [
  { id: 'texas', name: 'Texas', bonus: 'Truck demand +30%' },
  { id: 'california', name: 'California', bonus: 'EV demand +50%' },
  { id: 'florida', name: 'Florida', bonus: 'Luxury demand +20%' },
  { id: 'michigan', name: 'Michigan', bonus: 'Ford and GM reputation boost' },
  { id: 'new-york', name: 'New York', bonus: 'Dense urban customer base' },
]

export const careers = [
  { id: 'flipper', name: 'Teen Flipper', description: 'Start from a driveway and prove the model.', startingCash: 5000, capacity: 2, dailyExpense: 150 },
  { id: 'small-lot', name: 'Small Used Car Lot', description: 'A modest lot with room to grow.', startingCash: 50000, capacity: 10, dailyExpense: 800 },
  { id: 'established', name: 'Established Used Dealer', description: 'A healthy operation with buying power.', startingCash: 250000, capacity: 15, dailyExpense: 2200 },
  { id: 'luxury', name: 'Luxury Dealer Owner', description: 'Premium inventory and premium risk.', startingCash: 150000, capacity: 6, dailyExpense: 2800 },
  { id: 'franchise', name: 'Franchise Dealer', description: 'A first step toward manufacturer backing.', startingCash: 300000, capacity: 20, dailyExpense: 3600 },
  { id: 'group-ceo', name: 'Auto Group CEO', description: 'Start with a small network of stores.', startingCash: 1000000, capacity: 30, dailyExpense: 7000 },
  { id: 'sandbox', name: 'Sandbox Mode', description: 'Experiment freely with a deep reserve.', startingCash: 100000000, capacity: 50, dailyExpense: 15000 },
]

export const vehicles = [
  {
    id: 'civic-2017', make: 'Honda', model: 'Civic EX', year: 2017, mileage: 84000,
    condition: 'Fair', purchasePrice: 8200, marketValue: 10000, type: 'sedan',
    history: { owners: 2, accidents: 1, floodDamage: false, serviceRecords: 'Partial service records' },
  },
  {
    id: 'tacoma-2018', make: 'Toyota', model: 'Tacoma SR5', year: 2018, mileage: 96000,
    condition: 'Good', purchasePrice: 17800, marketValue: 22400, type: 'truck',
    history: { owners: 1, accidents: 0, floodDamage: false, serviceRecords: 'Complete service records' },
  },
  {
    id: 'escape-2020', make: 'Ford', model: 'Escape SE', year: 2020, mileage: 61000,
    condition: 'Good', purchasePrice: 14500, marketValue: 18100, type: 'suv',
    history: { owners: 1, accidents: 0, floodDamage: false, serviceRecords: 'Complete service records' },
  },
]

export const customers = [
  { name: 'Sarah Mitchell', preference: 'compact sedan', budget: 15000, patience: 'careful' },
  { name: 'Marcus Lee', preference: 'truck', budget: 26000, patience: 'direct' },
  { name: 'Priya Shah', preference: 'reliable SUV', budget: 22000, patience: 'thoughtful' },
]

export const getById = (items, id) => items.find((item) => item.id === id)