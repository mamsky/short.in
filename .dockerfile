FROM node:24-alpine

WORKDIR /app

# Copy package.json dan lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh source code
COPY . .

# Build project (kalau untuk production)
RUN npm run build

# Jalankan server menggunakan Vite preview
CMD ["npm", "run", "preview", "--", "--host"]