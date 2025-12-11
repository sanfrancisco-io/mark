import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { faker } from '@faker-js/faker'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const currencies = ['RUB', 'USD', 'KGS']

const getRange = (min: number, max: number) => {
  // min включительно, max не включительно
  return Math.floor(Math.random() * (max - min) + min)
}

const getRandomDate = (currentDate: Date) => {
  const daysToAdd = getRange(0, 8)
  const randomHours = getRange(0, 24)
  const randomMins = getRange(0, 60)
  const randomSecs = getRange(0, 60)

  const deliveryDate = new Date(currentDate)

  deliveryDate.setDate(currentDate.getDate() + daysToAdd)
  deliveryDate.setHours(randomHours, randomMins, randomSecs)

  return deliveryDate
}

const getRandomSpecs = () => {
  return [
    { name: 'Brand', value: faker.company.name() },
    { name: 'Material', value: faker.commerce.productMaterial() },
    { name: 'Color', value: faker.color.human() },
    { name: 'Origin Country', value: faker.location.country() },
    { name: 'Weight', value: `${faker.number.int({ min: 100, max: 5000 })} g` },
    { name: 'Warranty', value: `${getRange(1, 5)} years` },
    { name: 'Model Year', value: getRange(2020, 2024).toString() },
  ]
}

function createMerchant() {
  return {
    name: faker.company.name(),
    rating: getRange(1, 6),
    price: parseFloat(faker.commerce.price({ min: 10, max: 200, dec: 2 })),
    delivery: getRandomDate(new Date()),
    currency: currencies[getRange(0, currencies.length)],
  }
}

function generateProducts(count: number) {
  const currentDate = new Date()

  const products = []
  const specs = []
  const merchants = []

  for (let i = 1; i <= count; i++) {
    const deliveryDate = getRandomDate(currentDate)
    const randomSpecs = getRandomSpecs()
    const randomMerchants = faker.helpers.multiple(createMerchant, {
      count: getRange(5, 11),
    })

    merchants.push({ id: i, merchants: randomMerchants })

    specs.push({ characteristics: randomSpecs, id: i })

    products.push({
      id: i,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({ min: 10, max: 200, dec: 2 })),
      currency: currencies[getRange(0, currencies.length)],
      imageUrl: faker.image.url({ width: 300, height: 200 }),
      stock: faker.number.int({ min: 0, max: 1000 }),
      rating: getRange(1, 6),
      deliveryDate: deliveryDate,
    })
  }

  return { products, specs, merchants }
}

const { products, specs, merchants } = generateProducts(50)

const data = {
  products,
  specs,
  merchants,
}

fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(data, null, 2))
