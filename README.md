# Next.js Ecommerce Application

## Project Description
This is a modern ecommerce web application built with [Next.js](https://nextjs.org), leveraging the latest features of the Next.js app directory structure. The project provides a scalable and performant platform for showcasing products, user authentication, shopping cart functionality, and more.

## Features Overview
- Product listing and detailed product pages
- User authentication and registration
- Shopping cart management
- Responsive design with theme support
- Client and server components for optimized rendering
- Pagination for product listings
- Context API for state management (AuthContext, CartContext)
- API integration for fetching product data

## Prerequisites
- Node.js (version 16 or higher recommended)
- npm or yarn package manager

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nextjs-ecommerce
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Development Server
Start the development server with:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app. The page will auto-update as you make changes.

## Building and Running Production
To build the application for production:
```bash
npm run build
# or
yarn build
```
To start the production server:
```bash
npm start
# or
yarn start
```

## Folder Structure Overview
- `src/app/` - Main application directory with pages and layouts
- `src/components/` - Reusable React components (e.g., Navbar, ProductCard, AddToCartButton)
- `src/contexts/` - React Context providers for authentication and cart state
- `src/utils/` - Utility functions such as API fetchers
- `src/lib/` - Library functions, e.g., product data fetching logic
- `src/theme/` - Theme configuration and styling
- `public/` - Static assets like images and icons

## Key Components and Contexts
- **AuthContext**: Manages user authentication state and provides login/logout functionality.
- **CartContext**: Manages the shopping cart state, including adding/removing products and calculating totals.
- **Navbar**: Navigation bar component that adapts based on authentication state.
- **ProductCard**: Displays product information in product listings.
- **AddToCartButton**: Button component to add products to the cart.

## Extending the App
- Add new pages by creating files in the `src/app/` directory.
- Extend product data by modifying or adding API calls in `src/lib/products.ts`.
- Customize styling and themes in `src/theme/`.
- Add new context providers in `src/contexts/` for additional global state management.

## Deployment
The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com), the platform from the creators of Next.js.

For more deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contribution
Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License
This project is open source and available under the MIT License.
