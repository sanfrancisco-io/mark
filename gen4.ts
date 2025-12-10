import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { faker } from '@faker-js/faker'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const getRandomDate = (currentDate: Date) => {
  const daysToAdd = getRange(1, 8)
  const randomHours = getRange(0, 25)
  const randomMins = getRange(0, 60)
  const randomSecs = getRange(0, 60)

  const deliveryDate = new Date(currentDate)

  deliveryDate.setDate(currentDate.getDate() + daysToAdd)
  deliveryDate.setHours(randomHours, randomMins, randomSecs)

  return deliveryDate
}

function generateProducts(count: number) {
  const currencies = ['RUB', 'USD', 'KGS']
  const currentDate = new Date()
  const products = []

  for (let i = 1; i <= count; i++) {
    const deliveryDate = getRandomDate(currentDate)

    products.push({
      id: i,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({ min: 10, max: 200, dec: 2 })),
      currency: currencies[getRange(0, currencies.length)],
      imageUrl: faker.image.url({ width: 300, height: 200 }),
      stock: faker.number.int({ min: 0, max: 1000 }),
      rating: getRange(1, 6),
      deliveryDate: deliveryDate.toISOString(),
    })
  }

  return products
}

const data = {
  products: generateProducts(100),
}

fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(data, null, 2))
