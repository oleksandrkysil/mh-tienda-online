import{am as e}from"./B_MjbVB3.js";var p=(t=>(t.CANCELLED="CANCELLED",t.CHECKOUT_DRAFT="CHECKOUT_DRAFT",t.COMPLETED="COMPLETED",t.FAILED="FAILED",t.ON_HOLD="ON_HOLD",t.PENDING="PENDING",t.PROCESSING="PROCESSING",t.REFUNDED="REFUNDED",t))(p||{}),$=(t=>(t.EXTERNAL="EXTERNAL",t.GROUPED="GROUPED",t.SIMPLE="SIMPLE",t.VARIABLE="VARIABLE",t.VARIATION="VARIATION",t))($||{}),C=(t=>(t.DATE="DATE",t.IN="IN",t.MENU_ORDER="MENU_ORDER",t.MODIFIED="MODIFIED",t.NAME="NAME",t.NAME_IN="NAME_IN",t.ON_SALE_FROM="ON_SALE_FROM",t.ON_SALE_TO="ON_SALE_TO",t.PARENT="PARENT",t.POPULARITY="POPULARITY",t.PRICE="PRICE",t.RATING="RATING",t.REGULAR_PRICE="REGULAR_PRICE",t.REVIEW_COUNT="REVIEW_COUNT",t.SALE_PRICE="SALE_PRICE",t.SLUG="SLUG",t.TOTAL_SALES="TOTAL_SALES",t))(C||{}),I=(t=>(t.IN_STOCK="IN_STOCK",t.ON_BACKORDER="ON_BACKORDER",t.OUT_OF_STOCK="OUT_OF_STOCK",t))(I||{}),A=(t=>(t.CATEGORY="CATEGORY",t.PAFRESCO="PAFRESCO",t.POSTFORMAT="POSTFORMAT",t.PRODUCTCATEGORY="PRODUCTCATEGORY",t.PRODUCTTAG="PRODUCTTAG",t.PRODUCTTYPE="PRODUCTTYPE",t.SHIPPINGCLASS="SHIPPINGCLASS",t.TAG="TAG",t.VISIBLEPRODUCT="VISIBLEPRODUCT",t))(A||{});const a=e`
    fragment Image on MediaItem {
  sourceUrl
  altText
  title
  databaseId
}
    `,r=e`
    fragment SimpleProduct on SimpleProduct {
  name
  slug
  price
  rawPrice: price(format: RAW)
  date
  regularPrice
  rawRegularPrice: regularPrice(format: RAW)
  salePrice
  rawSalePrice: salePrice(format: RAW)
  stockStatus
  stockQuantity
  lowStockAmount
  averageRating
  weight
  length
  width
  height
  reviewCount
  onSale
  virtual
  image {
    ...Image
    cartSourceUrl: sourceUrl(size: THUMBNAIL)
    producCardSourceUrl: sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
  }
  galleryImages(first: 20) {
    nodes {
      ...Image
      databaseId
    }
  }
}
    `,o=e`
    fragment VariationAttribute on VariationAttribute {
  name
  attributeId
  value
  label
}
    `,i=e`
    fragment VariableProduct on VariableProduct {
  name
  slug
  price
  rawPrice: price(format: RAW)
  date
  weight
  length
  width
  height
  image {
    ...Image
    cartSourceUrl: sourceUrl(size: THUMBNAIL)
    producCardSourceUrl: sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
  }
  averageRating
  reviewCount
  onSale
  regularPrice
  rawRegularPrice: regularPrice(format: RAW)
  salePrice
  rawSalePrice: salePrice(format: RAW)
  stockStatus
  totalSales
  stockQuantity
  lowStockAmount
  defaultAttributes {
    nodes {
      ...VariationAttribute
    }
  }
  variations(first: 100) {
    nodes {
      name
      databaseId
      price
      regularPrice
      salePrice
      slug
      stockQuantity
      stockStatus
      hasAttributes
      image {
        ...Image
        cartSourceUrl: sourceUrl(size: THUMBNAIL)
        producCardSourceUrl: sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
      }
      attributes {
        nodes {
          ...VariationAttribute
        }
      }
    }
  }
  galleryImages(first: 20) {
    nodes {
      ...Image
      databaseId
    }
  }
}
    `,n=e`
    fragment ExternalProduct on ExternalProduct {
  externalUrl
  buttonText
}
    `,s=e`
    fragment Cart on Cart {
  total
  rawTotal: total(format: RAW)
  subtotal
  totalTax
  discountTotal
  rawDiscountTotal: discountTotal(format: RAW)
  shippingTotal
  chosenShippingMethods
  availableShippingMethods {
    rates {
      cost
      id
      label
    }
  }
  appliedCoupons {
    description
    discountTax
    discountAmount
    code
  }
  isEmpty
  contents(first: 100) {
    itemCount
    productCount
    nodes {
      quantity
      key
      product {
        node {
          name
          slug
          sku
          databaseId
          type
          ...SimpleProduct
          ...VariableProduct
          ...ExternalProduct
        }
      }
      variation {
        node {
          name
          slug
          price
          stockStatus
          regularPrice
          rawRegularPrice: regularPrice(format: RAW)
          salePrice
          rawSalePrice: salePrice(format: RAW)
          image {
            sourceUrl(size: THUMBNAIL)
            cartSourceUrl: sourceUrl(size: THUMBNAIL)
            altText
            title
          }
        }
      }
    }
  }
}
    `,u=e`
    fragment DownloadableItem on DownloadableItem {
  id
  name
  product {
    name
    slug
  }
  url
  accessExpires
  downloadsRemaining
}
    `,d=e`
    fragment Address on CustomerAddress {
  address1
  address2
  city
  country
  email
  firstName
  lastName
  phone
  postcode
  company
  state
}
    `,l=e`
    fragment Customer on Customer {
  lastName
  email
  firstName
  username
  databaseId
  sessionToken
  isPayingCustomer
  billing {
    ...Address
  }
  shipping {
    ...Address
  }
}
    `,c=e`
    fragment OrderFragment on Order {
  orderNumber
  date
  status
  needsPayment
  needsProcessing
  databaseId
  orderKey
  total
  subtotal
  discountTotal
  rawDiscountTotal: discountTotal(format: RAW)
  totalTax
  shippingTotal
  paymentMethodTitle
  paymentMethod
  customer {
    email
    downloadableItems(first: 100) {
      nodes {
        ...DownloadableItem
      }
    }
  }
  downloadableItems(first: 100) {
    nodes {
      ...DownloadableItem
    }
  }
  lineItems {
    nodes {
      quantity
      total
      id
      product {
        node {
          name
          slug
          image {
            sourceUrl(size: THUMBNAIL)
            altText
            title
          }
        }
      }
      variation {
        node {
          name
          image {
            sourceUrl(size: THUMBNAIL)
            altText
            title
          }
        }
      }
    }
  }
  customer {
    ...Customer
  }
}
    `,m=e`
    fragment ProductCategories on Product {
  productCategories {
    nodes {
      databaseId
      slug
      name
      count
    }
  }
}
    `,g=e`
    fragment Terms on Product {
  terms(first: 100) {
    nodes {
      taxonomyName
      slug
    }
  }
}
    `,P=e`
    fragment Viewer on User {
  lastName
  email
  databaseId
  id
  firstName
  username
  nicename
  wooSessionToken
  avatar {
    url
  }
}
    `,S=e`
    fragment PaymentGateway on PaymentGateway {
  title
  id
  description
}
    `,T=e`
    fragment ProductAttribute on ProductAttribute {
  variation
  name
  id
  options
  label
  scope
}
    `,R=e`
    fragment Comment on Comment {
  content
  id
  date
  author {
    node {
      name
      avatar {
        url
      }
    }
  }
}
    `,D=e`
    fragment ProductCategory on ProductCategory {
  count
  databaseId
  id
  name
  slug
  image {
    sourceUrl(size: MEDIUM_LARGE)
    altText
    title
  }
}
    `;e`
    mutation addToCart($input: AddToCartInput!) {
  addToCart(input: $input) {
    cart {
      ...Cart
    }
  }
}
    ${s}
${r}
${a}
${i}
${o}
${n}`;e`
    mutation applyCoupon($code: String!) {
  applyCoupon(input: {code: $code}) {
    applied {
      code
      description
      discountTax
      discountAmount
    }
    cart {
      ...Cart
    }
  }
}
    ${s}
${r}
${a}
${i}
${o}
${n}`;e`
    mutation ChangeShippingCounty($shippingState: String!, $shippingCountry: CountriesEnum!, $billingState: String!, $billingCountry: CountriesEnum!) {
  updateCustomer(
    input: {shipping: {state: $shippingState, country: $shippingCountry}, billing: {state: $billingState, country: $billingCountry}}
  ) {
    customer {
      calculatedShipping
      hasCalculatedShipping
    }
  }
}
    `;e`
    mutation ChangeShippingMethod($shippingMethods: [String] = "") {
  updateShippingMethod(input: {shippingMethods: $shippingMethods}) {
    cart {
      ...Cart
    }
  }
}
    ${s}
${r}
${a}
${i}
${o}
${n}`;e`
    mutation Checkout($billing: CustomerAddressInput = {}, $metaData: [MetaDataInput] = {key: "", value: ""}, $paymentMethod: String = "stripe", $shipping: CustomerAddressInput = {}, $customerNote: String = "", $shipToDifferentAddress: Boolean = false, $account: CreateAccountInput = {username: "", password: ""}, $transactionId: String = "", $isPaid: Boolean = false) {
  checkout(
    input: {paymentMethod: $paymentMethod, billing: $billing, metaData: $metaData, shipping: $shipping, customerNote: $customerNote, shipToDifferentAddress: $shipToDifferentAddress, account: $account, transactionId: $transactionId, isPaid: $isPaid}
  ) {
    result
    redirect
    order {
      needsPayment
      needsProcessing
      status
      databaseId
      orderKey
      subtotal
      total
      subtotal
      totalTax
      shippingTotal
      paymentMethodTitle
      paymentMethod
      date
      subtotal
      customer {
        email
      }
      lineItems {
        nodes {
          quantity
          total
          product {
            node {
              name
              image {
                ...Image
              }
            }
          }
          variation {
            node {
              name
              image {
                ...Image
              }
            }
          }
        }
      }
    }
  }
}
    ${a}`;e`
    mutation EmptyCart {
  emptyCart(input: {clearPersistentCart: true}) {
    cart {
      ...Cart
    }
  }
}
    ${s}
${r}
${a}
${i}
${o}
${n}`;e`
    query getAllTerms($hideEmpty: Boolean = true, $taxonomies: [TaxonomyEnum]!, $first: Int = 100) {
  terms(where: {taxonomies: $taxonomies, hideEmpty: $hideEmpty}, first: $first) {
    nodes {
      taxonomyName
      name
      slug
      count
    }
  }
}
    `;e`
    query getAllowedCountries {
  allowedCountries
}
    `;e`
    query getCart {
  cart {
    ...Cart
  }
  customer {
    ...Customer
  }
  viewer {
    ...Viewer
  }
  paymentGateways {
    nodes {
      ...PaymentGateway
    }
  }
}
    ${s}
${r}
${a}
${i}
${o}
${n}
${l}
${d}
${P}
${S}`;e`
    query getDownloads {
  customer {
    downloadableItems(first: 100) {
      nodes {
        ...DownloadableItem
      }
    }
  }
}
    ${u}`;e`
    query getOrder($id: ID!) {
  order(id: $id, idType: DATABASE_ID) {
    ...OrderFragment
  }
}
    ${c}
${u}
${l}
${d}`;e`
    query getOrders {
  customer {
    orders(first: 100) {
      nodes {
        ...OrderFragment
      }
    }
  }
}
    ${c}
${u}
${l}
${d}`;e`
    query getProduct($slug: ID!) {
  product(id: $slug, idType: SLUG) {
    name
    type
    databaseId
    id
    metaData {
      id
      key
      value
    }
    slug
    sku
    description
    rawDescription: description(format: RAW)
    shortDescription
    attributes {
      nodes {
        ...ProductAttribute
        ... on GlobalProductAttribute {
          slug
          terms(where: {orderby: MENU_ORDER, order: ASC}) {
            nodes {
              name
              slug
              taxonomyName
              databaseId
            }
          }
        }
      }
    }
    ...ProductCategories
    ...Terms
    ...SimpleProduct
    ...VariableProduct
    ...ExternalProduct
    related(first: 5) {
      nodes {
        ...SimpleProduct
        ...VariableProduct
        ...ExternalProduct
      }
    }
    reviews {
      averageRating
      edges {
        rating
        node {
          ...Comment
        }
      }
    }
  }
}
    ${T}
${m}
${g}
${r}
${a}
${i}
${o}
${n}
${R}`;e`
    query getProductCategories($first: Int = 20) {
  productCategories(
    first: $first
    where: {orderby: COUNT, order: DESC, hideEmpty: true}
  ) {
    nodes {
      ...ProductCategory
    }
  }
}
    ${D}`;e`
    query getProducts($after: String, $slug: [String], $first: Int = 9999, $orderby: ProductsOrderByEnum = DATE) {
  products(
    first: $first
    after: $after
    where: {categoryIn: $slug, visibility: VISIBLE, minPrice: 0, orderby: {field: $orderby, order: DESC}, status: "publish"}
  ) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      name
      slug
      type
      databaseId
      id
      averageRating
      reviewCount
      ...Terms
      ...ProductCategories
      ...SimpleProduct
      ...VariableProduct
      ...ExternalProduct
    }
  }
}
    ${g}
${m}
${r}
${a}
${i}
${o}
${n}`;e`
    query getStates($country: CountriesEnum!) {
  countryStates(country: $country) {
    code
    name
  }
}
    `;e`
    query getStockStatus($slug: ID!) {
  product(id: $slug, idType: SLUG) {
    ... on SimpleProduct {
      stockStatus
    }
    ... on VariableProduct {
      stockStatus
      variations {
        nodes {
          stockStatus
        }
      }
    }
  }
}
    `;e`
    query getStripePaymentIntent {
  stripePaymentIntent {
    amount
    clientSecret
    error
    id
    currency
  }
}
    `;e`
    mutation login($username: String!, $password: String!) {
  loginWithCookies(
    input: {login: $username, password: $password, rememberMe: true}
  ) {
    status
  }
}
    `;e`
    mutation Logout {
  logout(input: {clientMutationId: ""}) {
    status
  }
}
    `;e`
    mutation registerCustomer($input: RegisterCustomerInput!) {
  registerCustomer(input: $input) {
    customer {
      ...Customer
    }
  }
}
    ${l}
${d}`;e`
    mutation removeCoupons($codes: [String]!) {
  removeCoupons(input: {codes: $codes}) {
    cart {
      ...Cart
    }
  }
}
    ${s}
${r}
${a}
${i}
${o}
${n}`;e`
    mutation ResetPasswordEmail($username: String!) {
  sendPasswordResetEmail(input: {username: $username}) {
    success
  }
}
    `;e`
    mutation ResetPasswordKey($key: String!, $login: String!, $password: String!) {
  resetUserPassword(input: {key: $key, login: $login, password: $password}) {
    user {
      id
    }
  }
}
    `;e`
    mutation UpDateCartQuantity($key: ID!, $quantity: Int!) {
  updateItemQuantities(input: {items: {key: $key, quantity: $quantity}}) {
    cart {
      ...Cart
    }
  }
}
    ${s}
${r}
${a}
${i}
${o}
${n}`;e`
    mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    customer {
      downloadableItems(first: 100) {
        nodes {
          ...DownloadableItem
        }
      }
    }
  }
}
    ${u}`;e`
    mutation updatePassword($id: ID!, $password: String!) {
  updateUser(input: {id: $id, password: $password}) {
    user {
      id
    }
  }
}
    `;e`
    mutation WriteReview($author: String!, $commentOn: Int!, $content: String!, $rating: Int!, $authorEmail: String!) {
  writeReview(
    input: {rating: $rating, author: $author, content: $content, commentOn: $commentOn, authorEmail: $authorEmail}
  ) {
    rating
  }
}
    `;export{p as O,C as P,I as S,A as T,$ as a};
