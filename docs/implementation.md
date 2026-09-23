# Car Dealership Simulator
## Complete Implementation Roadmap

---

# Project Vision

Create a React-based browser game where players can begin as a teenage car flipper and eventually build a nationwide automotive empire consisting of:

- Used car lots
- Luxury dealerships
- Franchise dealerships
- Service centers
- Auto groups
- Regional headquarters

The game should focus on business growth, strategic decision making, customer interactions, vehicle acquisition, and dealership management.

---

# Tech Stack

## Frontend

- React
- Vite
- React Router
- Tailwind CSS
- Zustand (or Context API)

## Data Storage

Version 1:
- LocalStorage

Future Versions:
- Supabase
- Firebase

## Hosting

- Netlify

---

# Development Phases

---

# Phase 0 - Project Foundation

## Goal

Create the project structure and navigation system.

## Tasks

### Setup Project

```bash
npm create vite@latest car-dealer-sim -- --template react
cd car-dealer-sim
npm install
```

### Install Dependencies

```bash
npm install react-router-dom
npm install zustand
npm install lucide-react
```

### Create Folder Structure

```text
src/

components/
pages/
hooks/
context/
data/
utils/
assets/
```

### Core Pages

```text
Dashboard
Inventory
Market
Customers
Finance
Settings
```

### Deliverable

A working React application with navigation.

---

# Phase 1 - Core Buy and Sell Loop

## Goal

Create the first playable version.

---

## Vehicle Generator

Generate random vehicles.

Vehicle Properties:

```js
{
  id,
  make,
  model,
  year,
  mileage,
  condition,
  purchasePrice,
  marketValue
}
```

### Create

```text
cars.json
```

containing:

- Economy Cars
- SUVs
- Trucks
- Sports Cars

---

## Vehicle Market

Player can:

- Browse available cars
- Buy vehicles
- Refresh listings

---

## Inventory System

Display:

- Vehicle Name
- Mileage
- Condition
- Value

Actions:

- Sell
- Inspect

---

## Money System

Track:

```text
Cash
Revenue
Profit
Expenses
```

Starting amounts depend on career start.

---

## Deliverable

Player can:

- Buy vehicles
- Sell vehicles
- Generate profit

---

# Phase 2 - Save System

## Goal

Allow progress to persist.

---

## LocalStorage

Create:

```js
saveGame()
loadGame()
```

Save:

```text
Cash
Inventory
Day
Location
Career
Reputation
```

---

## Deliverable

Game state loads automatically.

---

# Phase 3 - Time System

## Goal

Create progression.

---

### Add Day Cycle

Example:

```text
Day 1
Day 2
Day 3
```

Button:

```text
Next Day
```

---

### Daily Actions

- New inventory
- Customer generation
- Daily expenses
- Market updates

---

## Deliverable

Time advances and game world changes.

---

# Phase 4 - Career Start Selection

## Goal

Allow multiple starting paths.

---

## Teen Flipper

Starting Assets:

```text
Cash: $5,000
Property: Driveway
Employees: None
```

---

## Small Used Car Lot

Starting Assets:

```text
Cash: $50,000
Inventory Slots: 10
Employees: 1
```

---

## Established Dealer

Starting Assets:

```text
Cash: $250,000
Vehicles: 30
Service Center: Yes
```

---

## Luxury Dealer

Starting Assets:

```text
Luxury Inventory
Premium Showroom
```

---

## Franchise Dealer

Options:

- Ford
- Chevrolet
- Toyota
- Honda
- Nissan

---

## Auto Group CEO

Starting Assets:

```text
Multiple Dealerships
Large Inventory
```

---

## Sandbox

Starting Assets:

```text
$100,000,000
Everything Unlocked
```

---

## Deliverable

Player chooses starting career.

---

# Phase 5 - Start Location Selection

## Goal

Create replayability.

---

## Small Rural Town

Pros:

- Cheap land
- Cheap labor

Cons:

- Low traffic

---

## Growing Suburb

Balanced economy.

---

## Large City

Pros:

- Huge customer base

Cons:

- High costs

---

## Wealthy Area

Pros:

- Luxury demand

Cons:

- High expectations

---

## Rust Belt Town

Pros:

- Cheap inventory

Cons:

- Lower customer spending

---

## State Modifiers

### Texas

- Truck Demand +30%
- SUV Demand +20%

### California

- EV Demand +50%
- Hybrid Demand +40%

### Florida

- Luxury Demand +20%
- Convertible Demand +30%

### Michigan

- Ford Bonus
- GM Bonus

---

## Deliverable

Location affects economy and demand.

---

# Phase 6 - Customer System

## Goal

Create buyers.

---

## Customer Generator

Customer Properties:

```js
{
  budget,
  preferredType,
  favoriteBrands,
  patience,
  negotiationSkill
}
```

---

## Customer Traffic

Visitors generated daily.

Example:

```text
3-10 customers per day
```

---

## Deliverable

Customers evaluate inventory.

---

# Phase 7 - Negotiation System

## Goal

Add decision making.

---

Customer submits offer.

Options:

```text
Accept
Counter Offer
Reject
```

---

Factors:

- Vehicle value
- Customer patience
- Reputation
- Sales skill

---

## Deliverable

Negotiation affects sales outcomes.

---

# Phase 8 - Reputation System

## Goal

Reward good business practices.

---

Reputation Scale:

```text
1-100
```

---

Increase Through:

- Fair pricing
- Good reviews
- Fast service

---

Decrease Through:

- Overpricing
- Poor service

---

Benefits:

- Better manufacturers
- More traffic
- Easier sales

---

## Deliverable

Reputation influences gameplay.

---

# Phase 9 - Vehicle Condition and Repairs

## Goal

Create additional profit strategies.

---

Vehicle Conditions

```text
Poor
Fair
Good
Excellent
```

---

Repair Types

### Clean Vehicle

Small cost.

---

### Repair Vehicle

Medium cost.

---

### Restore Vehicle

High cost.

---

## Deliverable

Vehicle value increases after work.

---

# Phase 10 - Employee System

## Goal

Improve dealership efficiency.

---

## Salesperson

Benefits:

- More sales
- Better negotiations

---

## Mechanic

Benefits:

- Faster repairs

---

## Detailer

Benefits:

- Better appearance
- Higher selling prices

---

## Finance Manager

Benefits:

- More financing income

---

## Manager

Benefits:

- Runs dealership operations

---

Employee Stats

```text
Skill
Efficiency
Experience
Salary
```

---

## Deliverable

Staff affects business performance.

---

# Phase 11 - Dealership Upgrades

## Goal

Enable growth.

---

## Gravel Lot

Capacity:

```text
5 Vehicles
```

---

## Small Used Lot

Capacity:

```text
15 Vehicles
```

---

## Established Dealer

Capacity:

```text
50 Vehicles
```

---

## Mega Dealership

Capacity:

```text
100+ Vehicles
```

---

## Deliverable

Player upgrades property.

---

# Phase 12 - Vehicle History System

## Goal

Make vehicle purchases more strategic.

---

Vehicle Information

```text
Owners
Accidents
Flood Damage
Service Records
```

---

## Deliverable

Every car feels unique.

---

# Phase 13 - Auctions

## Goal

Create inventory acquisition variety.

---

Auction Features

- Timed bids
- AI competitors
- Rare cars

Examples:

- Supra
- Skyline
- Corvette
- Ford GT

---

## Deliverable

Players compete for inventory.

---

# Phase 14 - Finance Department

## Goal

Add another profit source.

---

Customer Options

```text
Cash
Finance
Lease
```

---

Products

- Warranties
- GAP Coverage
- Maintenance Plans

---

## Deliverable

Finance department generates recurring income.

---

# Phase 15 - Trade Ins

## Goal

Replicate real dealership operations.

---

Customer Brings Vehicle

Player Chooses:

- Accept
- Reject
- Counter

---

## Deliverable

Used inventory enters business organically.

---

# Phase 16 - Multiple Dealerships

## Goal

Become a dealership owner.

---

Purchase Additional Locations.

Locations Have:

```text
Employees
Inventory
Traffic
Revenue
Profit
```

---

## Deliverable

Player operates multiple businesses.

---

# Phase 17 - Manager Automation

## Goal

Reduce micromanagement.

---

Manager Skills

```text
Sales
Leadership
Efficiency
```

---

Managers run dealerships automatically.

---

## Deliverable

Semi-idle expansion gameplay.

---

# Phase 18 - Franchise Dealership System

## Goal

Enter manufacturer partnerships.

---

Manufacturers

- Ford
- Chevrolet
- Toyota
- Honda
- Nissan

---

Requirement Example

### Ford

```text
Reputation 75+
Cash $500,000+
250 Annual Sales
```

---

Rewards

- Factory Inventory
- Incentives
- Exclusive Models

---

## Deliverable

Major progression milestone.

---

# Phase 19 - Manufacturer Reputation

## Goal

Build manufacturer trust.

---

Tracked Separately

```text
Ford Reputation
Chevrolet Reputation
Toyota Reputation
```

---

Benefits

- Better bonuses
- Better inventory
- Better allocations

---

## Deliverable

Long-term manufacturer relationships.

---

# Phase 20 - Regional Expansion

## Goal

Expand geographically.

---

Cities Have

```text
Population
Income
Competition
Demand
```

---

Examples

```text
Atlanta
Miami
Charlotte
Nashville
Savannah
```

---

## Deliverable

Geographical growth.

---

# Phase 21 - Competitor Dealership Groups

## Goal

Create market competition.

---

AI Companies

```text
Metro Auto Group
Prestige Motors
Prime Automotive
```

---

Competitors Can

- Buy inventory
- Expand locations
- Run advertising
- Acquire franchises

---

## Deliverable

Living business ecosystem.

---

# Phase 22 - Dynamic Economy

## Goal

Make the market feel alive.

---

Economy Variables

```text
Fuel Prices
Interest Rates
Recessions
Inventory Supply
```

---

Examples

- Low gas prices improve truck sales.
- High rates reduce financing demand.

---

## Deliverable

Changing strategic environment.

---

# Phase 23 - Marketing System

## Goal

Drive traffic.

---

Campaigns

### Social Media

Cheap.

### Radio

Moderate.

### Television

Expensive.

### Sponsorships

Premium.

---

Benefits

- Customer traffic
- Reputation
- Brand awareness

---

## Deliverable

Advertising affects growth.

---

# Phase 24 - Auto Group Creation

## Goal

Create an empire.

---

Example

```text
Smart Automotive Group
```

Owns:

```text
5 Ford Stores
3 Chevy Stores
2 Luxury Dealers
8 Used Lots
```

---

Metrics

```text
Cars Sold
Revenue
Market Share
Profit
```

---

## Deliverable

Player controls dealership network.

---

# Phase 25 - Endgame Systems

## Luxury Brands

- BMW
- Audi
- Mercedes
- Porsche
- Ferrari

---

## Regional Headquarters

Manage:

- Budgets
- Advertising
- Expansion

---

## National Rankings

Track:

- Revenue
- Market Share
- Vehicle Sales

---

## Deliverable

Full empire management.

---

# Future Multiplayer Expansion

## Player Marketplace

Sell cars to other players.

---

## Live Auctions

Compete globally.

---

## Trading

Player-to-player deals.

---

## Global Economy

Shared pricing and demand.

---

# Version Release Plan

## Version 0.1

- Vehicles
- Inventory
- Buy/Sell
- Cash
- Saves

---

## Version 0.5

- Customers
- Negotiation
- Reputation
- Repairs

---

## Version 1.0

- Employees
- Upgrades
- Locations
- Career Starts
- Vehicle Histories

---

## Version 2.0

- Auctions
- Financing
- Trade Ins
- Multiple Lots

---

## Version 3.0

- Franchises
- Manufacturers
- Regional Expansion
- Competitors

---

## Version 4.0

- Auto Groups
- Dynamic Economy
- Luxury Market

---

## Version 5.0

- Multiplayer
- Trading
- Global Rankings

---

# Ultimate End Goal

Start as a teenager flipping beat-up cars from a driveway and grow into the owner of the largest automotive group in the country, operating used car lots, service centers, luxury dealerships, manufacturer franchises, and a nationwide dealership empire.