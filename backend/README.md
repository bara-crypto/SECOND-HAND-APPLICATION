# Second Hand Appliances Backend

Node.js backend API for managing second hand appliances (Washing Machines, ACs, Fridges).

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the MongoDB connection strings:
     - `MONGODB_LOCAL`: Local MongoDB URI (default: `mongodb://localhost:27017`)
     - `MONGODB_REMOTE`: MongoDB Atlas connection string

3. Start the server:
   ```bash
   npm start
   ```

   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/all/:n` | Get N items from all collections |
| GET | `/washing-machine/:n` | Get N washing machines |
| GET | `/ac/:n` | Get N ACs |
| GET | `/fridge/:n` | Get N fridges |
| POST | `/washing-machine/upload` | Upload washing machine |
| POST | `/ac/upload` | Upload AC |
| POST | `/fridge/upload` | Upload fridge |
| DELETE | `/washing-machine/:id` | Delete washing machine |
| DELETE | `/ac/:id` | Delete AC |
| DELETE | `/fridge/:id` | Delete fridge |
| GET | `/health` | Health check endpoint |

## Item Interface

```json
{
    "id": 1,
    "name": "Samsung 7kg",
    "price": 15000,
    "Description": "Fully automatic washing machine",
    "Spec": {
        "ton": 0,
        "star": 5,
        "year_of_use": 2
    },
    "Image": ["image1.jpg", "image2.jpg"],
    "IsViewAble": true,
    "IsImageExists": true
}
```
