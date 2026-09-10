# Vietnam marketplace account and checkout patterns

Verified 2026-09-07 against first-party Vietnam help, policy and registration pages. This note records product patterns, not permission to copy another platform's terms or implementation.

## Account and role patterns

### Shopee Vietnam

Shopee's operating rules use one broad **User** concept covering **Buyer** and **Seller** roles. A user registers a Shopee account; becoming a seller adds seller information through Seller Channel. This supports a shared identity with seller-specific onboarding and operating data rather than requiring DecoUp to make buyer and seller separate people.

Shopee also supports organizations operating multiple shops through a separate Shop Management Channel. That is an advanced operational layer and does not imply that an early marketplace needs multi-shop administration.

Sources: [Shopee marketplace operating rules](https://help.shopee.vn/portal/4/article/77245-QUY-CH%E1%BA%BE-HO%E1%BA%A0T-%C4%90%E1%BB%98NG-SA%CC%80N-TH%C6%AF%C6%A0NG-MA%CC%A3I-%C4%90I%C3%8A%CC%A3N-T%C6%AF%CC%89-SHOPEE.VN), [Shopee Shop Management FAQ](https://help.shopee.vn/portal/1/article/98755).

### Chợ Tốt

Chợ Tốt documents buyer benefits under a user account—direct seller chat, transaction history, saved listings and contacted profiles—and separately documents how an account posts sale listings. Its posting rules classify seller activity as individual, semi-professional/broker, or professional plan usage. This is evidence for one identity participating in buying and selling while capabilities and policies depend on the activity profile.

Sources: [buyer account benefits](https://trogiup.chotot.com/nguoi-mua/tai-sao-nen-tao-tai-khoan-tai-cho-tot-de-mua-hang/), [posting an item](https://trogiup.chotot.com/nguoi-ban/cac-buoc-rao-ban-mot-mon-hang/), [listing limits by user type](https://trogiup.chotot.com/nguoi-ban/toi-duoc-dang-bao-nhieu-tin-voi-mot-tai-khoan/).

### Lazada Vietnam

Lazada exposes a dedicated Seller Center registration flow using a local phone number and seller-specific email/address information. Its public registration page says an existing seller account can sign in, but does not establish that an ordinary buyer login automatically becomes a seller identity. The safe inference is that seller onboarding and operations are a distinct capability even when credentials may be related.

Source: [Lazada Seller Center registration](https://sellercenter.lazada.vn/apps/register/index?lazMall=0).

## Shopee multi-seller checkout

Shopee lets a buyer select products from multiple shops in one cart and perform one checkout/payment action. Its help center also calls the result **multiple orders paid at the same time**. Those orders share the checkout address, pickup information and payment method.

Fulfillment remains seller/shop scoped:

- shipping fees are calculated for each same-shop product group and then summed;
- available shipping methods can differ by shop/product;
- even products from one shop may split when size or configured shipping methods require separate fulfillment.

The product lesson is to distinguish a customer-facing **checkout session** from independently managed **seller orders** and **shipments**. It does not prove that DecoUp needs multi-seller checkout in its first release.

Sources: [buying from multiple sellers](https://help.shopee.vn/portal/4/article/79474-?seo=1), [paying multiple orders](https://help.shopee.vn/portal/4/article/79596-H%C6%B0%E1%BB%9Bng%20D%E1%BA%ABn%20Thanh%20To%C3%A1n%20Nhi%E1%BB%81u%20%C4%90%C6%A1n%20H%C3%A0ng), [shipping-fee grouping](https://help.shopee.vn/portal/4/article/79531-%5BPh%C3%AD-v%E1%BA%ADn-chuy%E1%BB%83n%5D-Ph%C3%AD-v%E1%BA%ADn-chuy%E1%BB%83n-%C4%91%C6%B0%E1%BB%A3c-t%C3%ADnh-th%E1%BA%BF-n%C3%A0o-n%E1%BA%BFu-t%C3%B4i-mua-s%E1%BA%A3n-ph%E1%BA%A9m-t%E1%BB%AB-nhi%E1%BB%81u-Shop-trong-c%C3%B9ng-m%E1%BB%99t-%C4%91%C6%A1n-h%C3%A0ng%3F), [shipping method and package splitting](https://help.shopee.vn/portal/4/article/79518-%5BV%E1%BA%ADn%20chuy%E1%BB%83n%5D%20T%E1%BB%95ng%20h%E1%BB%A3p%20c%C3%A1c%20c%C3%A2u%20h%E1%BB%8Fi%20v%E1%BB%81%20Ph%C6%B0%C6%A1ng%20th%E1%BB%A9c%20v%E1%BA%ADn-chuy%E1%BB%83n).

## Recommendation for DecoUp

Use one **User account** with separately activated buyer, seller and service-provider capabilities. Keep seller/provider profiles, verification and operating surfaces distinct. This matches the accessible identity model of Shopee and Chợ Tốt while preserving the dedicated onboarding discipline visible in Lazada.

For ordering, define each Order as belonging to one seller. A future Checkout may group multiple seller Orders, while shipping, cancellation, disputes and settlement remain per Order or Shipment. Whether the first release exposes multi-seller checkout remains a product-scope decision.

## Evidence limits

Public pages reveal user-visible policy and flow, not internal data models. Lazada's public page does not prove whether buyer and seller records share one internal identity. Shopee sometimes uses “one order” in customer-facing copy while another official page says multiple orders are paid together; the recommendation relies on the combined behavior, not wording alone.
