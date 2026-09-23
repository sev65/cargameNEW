# Car Dealership Simulator - Complete Game Design Roadmap

## Overview

Build a browser-based dealership management simulator using:

- React
- HTML/CSS
- JavaScript
- LocalStorage (initial saves)
- Netlify (hosting)

The player can start from almost nothing and eventually build a nationwide automotive empire through used car lots, franchise dealerships, luxury dealerships, and dealership groups.

---

# Core Gameplay Loop

1. Buy vehicles
2. Inspect vehicle history
3. Repair and clean vehicles
4. Set sale prices
5. Negotiate with customers
6. Sell vehicles for profit
7. Expand business
8. Open more locations
9. Earn franchise rights
10. Build an automotive empire

---

# New Game Setup

## Choose Starting Location

### Small Rural Town

Difficulty: Easy

Pros:
- Cheap land
- Cheap employees
- Low competition

Cons:
- Low customer traffic
- Smaller market

Starting Bonus:
- +$25,000
- Property costs -30%

---

### Growing Suburb

Difficulty: Normal

Pros:
- Balanced economy
- Moderate competition
- Average demand

Cons:
- No significant advantages

Starting Bonus:
- +$20,000

---

### Large City

Difficulty: Hard

Pros:
- Massive customer base
- High sales potential

Cons:
- Expensive property
- Expensive staff

Starting Bonus:
- Customer Traffic +50%

---

### Wealthy Area

Difficulty: Hard

Pros:
- Luxury vehicle demand

Cons:
- Customers expect high reputation

Starting Bonus:
- Luxury demand +50%

---

### Rust Belt Town

Difficulty: Medium

Pros:
- Cheap inventory

Cons:
- Lower spending customers

Starting Bonus:
- Vehicle purchase costs reduced

---

# State Selection

## Texas

Bonuses:
- Truck demand +30%
- SUV demand +20%

---

## California

Bonuses:
- EV demand +50%
- Hybrid demand +40%

---

## Florida

Bonuses:
- Luxury demand +20%
- Convertible demand +30%

---

## Michigan

Bonuses:
- Ford reputation boost
- GM reputation boost

---

# Career Start Selection

## 1. Teen Flipper

Difficulty: Very Hard

Start With:
- $5,000
- Driveway
- No employees
- No dealership

Gameplay:
- Buy cheap cars
- Repair them yourself
- Sell from online listings

Achievement:
- Self-Made Millionaire

---

## 2. Small Used Car Lot

Difficulty: Normal

Start With:
- $50,000
- 10 inventory spaces
- Small office
- One salesperson

---

## 3. Established Used Dealer

Difficulty: Easy

Start With:
- $250,000
- 30 vehicles
- Service center
- Several employees

Features Unlocked:
- Financing
- Marketing
- Repairs

---

## 4. Luxury Dealer Owner

Difficulty: Medium

Start With:
- Luxury showroom
- Premium inventory

Brands:
- BMW
- Mercedes
- Audi
- Porsche

Risk:
- Very expensive inventory

---

## 5. Franchise Dealer

Difficulty: Medium

Choose:

- Ford
- Chevrolet
- Toyota
- Honda
- Nissan

Features:
- Factory inventory
- Sales requirements
- Allocations
- Manufacturer reputation

---

## 6. Auto Group CEO

Difficulty: Easy

Start With:
- Multiple dealerships
- Large inventory
- Regional market presence

Focus:
- Management
- Expansion

---

## 7. Sandbox Mode

Difficulty: None

Start With:
- $100,000,000

Everything unlocked:
- All locations
- All dealerships
- All franchise rights

---

# Main Progression Path

## Stage 1 - Teen Flipper

- Flip cars from driveway
- No dealership
- Limited inventory

Goal:
- Earn enough to buy first lot

---

## Stage 2 - Small Used Car Lot

- 10 vehicle capacity
- Local customers
- First employees

Unlock:
- Reputation system
- Advertising

---

## Stage 3 - Established Used Dealer

Unlock:
- Mechanics
- Service center
- Financing
- More inventory

---

## Stage 4 - Multi-Lot Owner

Own multiple locations.

Examples:

- Downtown Used Cars
- Smart Auto Sales
- City Motors

Each location has:
- Revenue
- Employees
- Reputation
- Inventory

---

## Stage 5 - Luxury Dealer

Unlock luxury inventory.

Examples:
- BMW
- Mercedes
- Audi
- Porsche

Higher profit margins.

---

## Stage 6 - Franchise Dealer

Apply for manufacturer franchises.

Examples:
- Ford
- Chevrolet
- Toyota
- Honda
- Nissan

Requirements:
- Reputation score
- Cash reserve
- Sales targets

---

## Stage 7 - Auto Group

Own multiple dealers.

Example:

- 3 Ford dealerships
- 2 Chevrolet dealerships
- 5 used lots
- 1 luxury dealer

---

## Stage 8 - Regional Empire

Expand into neighboring cities.

Example Regions:

- Buffalo
- Syracuse
- Albany
- Rochester
- New York City

Each has:
- Population
- Income level
- Demand
- Competition

---

## Stage 9 - National Empire

Own:
- 50+ dealerships
- Multiple states
- Thousands of vehicles

Goal:
- Become the largest dealership group in the country

---

# Vehicle System

Each vehicle contains:

- Make
- Model
- Year
- Mileage
- Condition
- Purchase Price
- Market Value
- VIN
- Vehicle History

Example:

2017 Honda Civic

- Mileage: 84,000
- Condition: Fair
- Purchase Price: $8,200
- Market Value: $10,000

---

# Vehicle History System

Every vehicle has:

- Number of owners
- Accident records
- Flood damage history
- Service records
- Maintenance records

Benefits:
- Better immersion
- Smarter buying decisions

---

# Customer System

Generated customers include:

- Budget
- Preferred brands
- Vehicle preferences
- Personality
- Negotiation skill

Example:

Sarah

- Budget: $15,000
- Wants SUV
- Strong negotiator

---

# Negotiation System

Player options:

- Accept
- Counter Offer
- Reject

Customer reactions depend on:

- Budget
- Personality
- Reputation
- Negotiation ability

---

# Financial System

Track:

- Cash
- Revenue
- Expenses
- Profit
- Loans
- Asset Value

---

# Employee System

Hire:

### Salespeople

Increase sales.

---

### Mechanics

Perform repairs.

---

### Detailers

Improve vehicle appearance.

---

### Finance Managers

Increase financing profits.

---

### General Managers

Manage dealership locations.

---

Employee Stats:

- Skill
- Experience
- Efficiency
- Salary

---

# Service Department

Repairs:

- Oil Changes
- Tires
- Brakes
- Engine Repairs
- Diagnostics

Example:

Repair Engine

Cost:
- $800

Value Increase:
- +$1,500

---

# F&I Department (Finance and Insurance)

Sell:

- Vehicle Loans
- Warranties
- GAP Coverage
- Service Contracts
- Maintenance Plans

Generates major profit.

---

# Reputation System

Scale:

1 - 100

Affected by:

- Reviews
- Customer satisfaction
- Fair pricing
- Service quality

Benefits:

- More customers
- Better franchise opportunities
- Better financing rates

---

# Marketing System

Advertising Types:

### Social Media

Low Cost

---

### Radio

Medium Cost

---

### Television

High Cost

---

### Sponsorships

Very High Cost

Benefits:

- More traffic
- Better reputation
- Brand awareness

---

# Inventory Acquisition

## Local Purchases

Buy directly from sellers.

---

## Trade-Ins

Customer trades vehicle.

Player chooses trade value.

---

## Auctions

Bid against AI dealerships.

Features:

- Timed auctions
- Competitive bidding
- Rare vehicles

---

# Manufacturer Franchise System

Manufacturers:

- Ford
- Chevrolet
- Toyota
- Honda
- Nissan

Requirements Example:

Ford Franchise

- Reputation: 75+
- Cash: $500,000
- Annual Sales: 250

Rewards:

- Factory inventory
- Incentives
- Exclusive models

---

# Manufacturer Reputation

Each manufacturer tracks trust.

Examples:

- Ford Reputation
- Chevrolet Reputation
- Toyota Reputation

High reputation unlocks:

- Better allocations
- Bonuses
- New models

---

# Vehicle Allocation System

High-demand vehicles have limited supply.

Examples:

- Mustang Dark Horse
- Corvette ZR1
- Toyota GR Supra

Players compete for allocations.

---

# Facility Upgrades

### Gravel Lot

5 Vehicles

---

### Small Used Lot

15 Vehicles

---

### Closed Dealership

25 Vehicles

Needs renovation.

---

### Established Dealer

50 Vehicles

Service Center Included.

---

### Mega Dealership

100+ Vehicles

Premium showroom.

---

# Economy System

Vehicle prices change based on:

- Supply
- Demand
- Fuel prices
- Interest rates
- 