import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { faker } from '@faker-js/faker'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PRODUCT_COUNT = 50
const STORE_TYPES = ['Digital', 'Express', 'Point', 'Zone', 'Hub']

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const generateDeliveryDate = (baseDate: Date) => {
  const daysToAdd = getRandomInt(0, 8)
  const deliveryDate = new Date(baseDate)

  deliveryDate.setDate(baseDate.getDate() + daysToAdd)
  deliveryDate.setHours(
    getRandomInt(0, 24),
    getRandomInt(0, 60),
    getRandomInt(0, 60),
  )

  return deliveryDate
}

const generateProductAttributes = () => {
  return [
    { name: 'Brand', value: faker.company.name() },
    { name: 'Material', value: faker.commerce.productMaterial() },
    { name: 'Color', value: faker.color.human() },
    { name: 'Origin Country', value: faker.location.country() },
    { name: 'Weight', value: `${faker.number.int({ min: 100, max: 5000 })} g` },
    { name: 'Warranty', value: `${getRandomInt(1, 5)} years` },
    { name: 'Model Year', value: getRandomInt(2020, 2024).toString() },
  ]
}

function generateMerchantOffer() {
  const randomType = faker.helpers.arrayElement(STORE_TYPES)
  const name = faker.person.firstName()

  return {
    merchantId: faker.string.uuid(),
    merchantName: `${name} ${randomType}`,
    merchantRating: getRandomInt(1, 6),
    price: parseFloat(faker.commerce.price({ min: 10, max: 200, dec: 2 })),
    currency: 'USD',
    estimatedDeliveryDate: generateDeliveryDate(new Date()),
  }
}

function generateDatabaseData(count: number) {
  const today = new Date()

  const products = []
  const specifications = []
  const offers = []

  for (let id = 1; id <= count; id++) {
    const attributes = generateProductAttributes()

    const productOffers = faker.helpers.multiple(generateMerchantOffer, {
      count: getRandomInt(5, 11),
    })

    products.push({
      id: id,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({ min: 10, max: 200, dec: 2 })),
      currency: 'USD',
      imageUrl: faker.image.url({ width: 300, height: 200 }),
      stockCount: faker.number.int({ min: 0, max: 1000 }),
      rating: getRandomInt(1, 6),
      deliveryDate: generateDeliveryDate(today),
    })

    specifications.push({
      id: id,
      attributes: attributes,
    })

    offers.push({
      id: id,
      items: productOffers,
    })
  }

  return { products, specifications, offers }
}

const dbData = generateDatabaseData(PRODUCT_COUNT)

fs.writeFileSync(
  path.join(__dirname, 'db.json'),
  JSON.stringify(dbData, null, 2),
)

console.log('Database generated successfully!')
