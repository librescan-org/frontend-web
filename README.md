# LibreScan Frontend

##  Requirements

```
Node.js v18
yarn
```

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Environment variables

Create a .env file in the root project directory:

```
NUXT_APP_GRPC_API_URL=192.168.0.1:42069
NUXT_APP_TOKEN_SYMBOL=ETH # Optional, default value: ETH
NUXT_APP_TOKEN_DECIMALS=18 # Optional, default value: 18
NUXT_APP_LOGO_TYPE=DEFAULT # Optional, possible values: DEFAULT | QAN | CUSTOM
NUXT_APP_LOGO_LIGHT=<IMAGE_URL> # If logo type is CUSTOM
NUXT_APP_LOGO_DARK=<IMAGE_URL> # If logo type is CUSTOM
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

## Docker build and run example

```bash
docker build -t librescan/frontend-web
docker run \
	--name librescan-frontend \
    -e NUXT_APP_GRPC_API_URL=192.168.50.129:9090 \
	-e NUXT_APP_TOKEN_SYMBOL=ETH \
    -e NUXT_APP_TOKEN_DECIMALS=18 \
	-p 3000:3000 \
	librescan/frontend-web
```
