# Project Plan

## Login Form

- Field validation (required fields).
- Error handling: if the API returns an error, display a notification or error text below the fields.
- Remember me logic:
  - If the checkbox is checked, save the authorization token so the session persists after closing the browser.
  - If not checked, the session should reset when the tab is closed.

## Product List

- Columns matching the Figma mockup.
- Progress bar during data loading.
- Data fetched from API.
- Pagination

## Sorting

- Ability to sort by columns (e.g., by price or rating).
- Sort state should be persisted.

## Adding a Product

- Clicking the "Add" button opens an add product form with fields: Name, Price, Vendor, SKU.
- On successful addition, show a basic Toast notification.
- No API saving logic required.

## Interface Logic

- If a product's rating is below 3, the value should be highlighted in red.

## Product Search

- Use API.

## API:

- Use public api for data: https://dummyjson.com/docs/products
- Use public api for authorization: https://dummyjson.com/docs/auth

## Enhancements

- Add 404 page
