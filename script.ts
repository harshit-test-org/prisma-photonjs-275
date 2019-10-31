import { Photon } from '@generated/photon'

const photon = new Photon()

// A `main` function so that we can use async/await
async function main() {
  photon.rooms.create({
    data: {
      items: {
        create: {
          type: {
            create: {
              id: 'test',
            },
          },
        },
      },
    },
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
