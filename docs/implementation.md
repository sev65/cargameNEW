# Car Dealership Simulator - Build Order

## Goal

Start as a car flipper or dealer and grow into a nationwide dealership empire through used lots, franchise dealerships, acquisitions, and auto groups.

---

# V0.1 - Foundation

## 1. Create Project

- Create React + Vite app
- Install React Router
- Install Zustand
- Install Tailwind

Done When:
- App boots
- Routing works

---

## 2. Create Core Layout

Pages:

- Dashboard
- Market
- Inventory
- Customers
- Finance
- Settings

Done When:
- Navigation works

---

## 3. Create Global Game Store

Game State:

- cash
- day
- inventory
- reputation
- location
- employees

Done When:
- State persists during session

---

## 4. Create Save System

Functions:

- saveGame()
- loadGame()

Storage:

- LocalStorage

Done When:
- Refreshing page keeps progress

---

# V0.2 - Core Car System

## 5. Create Vehicle Database

Fields:

- make
- model
- year
- baseValue
- type

Done When:
- 100+ vehicles exist

---

## 6. Create Vehicle Generator

Generate:

- mileage
- condition
- value

Done When:
- Random vehicles spawn

---

## 7. Create Vehicle Market

Actions:

- buy
- skip
- refresh

Done When:
- Player can purchase cars

---

## 8. Create Inventory System

Display:

- vehicle info
- value
- condition

Actions:

- inspect
- sell

Done When:
- Inventory updates correctly

---

## 9. Create Sell Logic

Rules:

- remove vehicle
- add cash

Done When:
- Profits are calculated

---

# V0.3 - Time & Customers

## 10. Create Day System

Actions:

- next day

Effects:

- market refresh
- customer refresh

Done When:
- Day counter advances

---

## 11. Create Customer Generator

Fields:

- budget
- patience
- negotiationSkill
- preferredType

Done When:
- Customers generate daily

---

## 12. Create Customer Purchase Logic

Checks:

- vehicle type
- vehicle price
- reputation

Done When:
- Customers buy vehicles

---

## 13. Create Negotiation System

Actions:

- accept
- counter
- reject

Done When:
- Offers can be negotiated

---

# V0.4 - Starting Experience

## 14. Create Career Selection Screen

Careers:

1. Teen Flipper
2. Used Car Lot
3. Established Dealer
4. Luxury Dealer
5. Franchise Dealer
6. Auto Group CEO
7. Sandbox

Done When:
- New game initializes correctly

---

## 15. Create Location Selection

Locations:

- Rural Town
- Suburb
- City
- Wealthy Area
- Rust Belt

Done When:
- Location modifiers apply

---

## 16. Create State Selection

States:

- Texas
- California
- Florida
- Michigan

Done When:
- Demand modifiers work

---

# V0.5 - Reputation & Repairs

## 17. Create Reputation System

Range:

0-100

Increase:

- successful sales
- good deals

Decrease:

- failed customers
- bad pricing

Done When:
- Reputation changes daily

---

## 18. Create Vehicle Conditions

States:

- Poor
- Fair
- Good
- Excellent

Done When:
- Every vehicle has condition

---

## 19. Create Repair System

Actions:

- clean
- repair
- restore

Done When:
- Vehicle value increases

---

# V0.6 - Employees

## 20. Create Employee System

Employee Types:

- salesperson
- mechanic
- detailer

Done When:
- Employees can be hired

---

## 21. Create Employee Effects

Salesperson:

- increases sales chance

Mechanic:

- improves repairs

Detailer:

- increases value

Done When:
- Stats affect gameplay

---

# V0.7 - Dealership Growth

## 22. Create Dealership Upgrades

Levels:

1. Driveway
2. Gravel Lot
3. Small Lot
4. Dealership
5. Mega Dealer

Done When:
- Capacity increases

---

## 23. Create Inventory Limits

Examples:

Driveway:

- 3 cars

Gravel Lot:

- 10 cars

Dealership:

- 50 cars

Done When:
- Limits enforce inventory

---

# V0.8 - Real Dealership Features

## 24. Create Vehicle History System

Fields:

- owners
- accidents
- flood damage
- maintenance score

Done When:
- Every vehicle has history

---

## 25. Create Trade-In System

Actions:

- accept
- reject
- counter

Done When:
- Customers offer cars

---

## 26. Create Finance System

Products:

- loans
- warranty
- gap coverage

Done When:
- Finance profit exists

---

# V0.9 - Auctions

## 27. Create Auction House

Actions:

- bid
- buy

Done When:
- Vehicles sell through auctions

---

## 28. Create AI Bidders

Behavior:

- aggressive
- balanced
- conservative

Done When:
- Auctions feel competitive

---

# V1.0 - Multiple Locations

## 29. Create Dealership Entity

Fields:

- inventory
- employees
- profit
- reputation

Done When:
- Multiple dealerships exist

---

## 30. Create Acquisition System

Actions:

- buy dealership

Done When:
- New locations can be owned

---

## 31. Create Dealership Management Screen

Manage:

- inventory
- staff
- upgrades

Done When:
- Player can control all locations

---

# V1.1 - Managers

## 32. Create Manager Employees

Stats:

- leadership
- efficiency
- sales

Done When:
- Managers can be hired

---

## 33. Create Automation

Managers automatically:

- buy inventory
- sell inventory
- manage employees

Done When:
- Locations partially self-run

---

# V1.2 - Franchises

## 34. Create Manufacturer System

Manufacturers:

- Ford
- Chevrolet
- Toyota
- Honda
- Nissan

Done When:
- Manufacturers exist

---

## 35. Create Franchise Applications

Requirements:

- cash
- sales
- reputation

Done When:
- Players apply for franchises

---

## 36. Create Manufacturer Reputation

Track:

- relationship score

Done When:
- Relationships affect rewards

---

## 37. Create Allocation System

Examples:

- Mustang
- Corvette
- Supra

Done When:
- Rare inventory exists

---

# V1.3 - Regional Expansion

## 38. Create City Map

City Data:

- population
- wealth
- competition

Done When:
- Multiple cities exist

---

## 39. Create Regional Expansion

Actions:

- open dealership
- buy dealership

Done When:
- Multi-city ownership works

---

# V1.4 - Competition

## 40. Create AI Dealership Groups

Examples:

- Metro Auto Group
- Prestige Motors
- Prime Automotive

Done When:
- Competitors exist

---

## 41. Create Competitor Behavior

Actions:

- buy dealerships
- advertise
- acquire inventory

Done When:
- Market competition exists

---

# V1.5 - Economy

## 42. Create Economy Simulator

Variables:

- fuel prices
- interest rates
- inflation

Done When:
- Demand fluctuates

---

## 43. Create Random Events

Events:

- recession
- shortages
- rebates
- car shows

Done When:
- Market changes dynamically

---

# V1.6 - Marketing

## 44. Create Marketing System

Campaigns:

- social media
- radio
- TV
- sponsorships

Done When:
- Advertising increases traffic

---

# V1.7 - Auto Groups

## 45. Create Auto Group Entity

Tracks:

- dealerships
- revenue
- market share

Done When:
- Player owns dealership network

---

## 46. Create Rankings

Metrics:

- revenue
- customer satisfaction
- cars sold

Done When:
- Endgame goals exist

---

# V2.0 - Endgame

## 47. Add Luxury Brands

Brands:

- BMW
- Audi
- Mercedes
- Porsche
- Ferrari

---

## 48. Add Regional HQ

Manage:

- budgets
- expansion
- marketing

---

## 49. Add Victory System

Win Conditions:

- largest dealer group
- highest revenue
- highest market share

Done When:
- Game has a clear ending

---
