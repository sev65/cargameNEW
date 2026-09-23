import { describe, expect, it } from 'vitest'
import { createMarket, generateVehicle, vehicles } from './content'

describe('vehicle content helpers', () => {
  it('provides a vehicle database with more than one hundred entries', () => {
    expect(vehicles.length).toBeGreaterThanOrEqual(100)
  })

  it('generates a vehicle with valid market fields', () => {
    const vehicle = generateVehicle(vehicles[0], () => 0.7, 'test-vehicle')

    expect(vehicle.id).toBe('test-vehicle')
    expect(['Poor', 'Fair', 'Good', 'Excellent']).toContain(vehicle.condition)
    expect(vehicle.mileage).toBeGreaterThan(0)
    expect(vehicle.purchasePrice).toBeGreaterThan(0)
    expect(vehicle.marketValue).toBeGreaterThan(0)
  })

  it('creates uniquely identified rotating market listings', () => {
    const market = createMarket({ keyPrefix: 'test', random: () => 0.2, count: 3 })

    expect(market).toHaveLength(3)
    expect(new Set(market.map((vehicle) => vehicle.id)).size).toBe(3)
  })
})