const faker = require('faker')

exports.basePayload = {
  avoidHighways: faker.random.boolean(),
  building: faker.address.secondaryAddress(),
  currentLocation: {
    _latitude: faker.address.latitude(),
    _longitude: faker.address.longitude(),
  },
  destination: {
    _latitude: faker.address.latitude(),
    _longitude: faker.address.longitude(),
  },
  destinationText: faker.address.streetSuffix(),
  distance: faker.random.number(),
  duration: faker.random.number(),
  initialLocation: {
    _latitude: faker.address.latitude(),
    _longitude: faker.address.longitude(),
  },
  isActive: faker.random.boolean(),
  origin: {
    _latitude: faker.address.latitude(),
    _longitude: faker.address.longitude(),
  },
  phone: faker.phone.phoneNumber(),
  staff: {
    displayName: faker.internet.userName(),
    id: faker.random.uuid(),
    name: faker.internet.userName(),
    pictureUrl: faker.image.avatar(),
  },
  sessionId: faker.random.uuid(),
  createdAt: faker.date.past(),
  currentLocationUpdatedAt: faker.date.recent(),
  organization: {
    brand: 'lobeam',
    id: faker.random.uuid(),
    serviceName: faker.company.companyName(),
    websiteUrl: faker.internet.url(),
  },
}
