import { Product, Review, Order } from "../types";

export const initialProducts: Product[] = [
  {
    "id": "ub-drop-01",
    "name": "Urban Beast Cyber Skull Heavy Boxy Drop Tee // Edition 01",
    "nameBn": "\u09b8\u09be\u0987\u09ac\u09be\u09b0 \u09b8\u09cd\u0995\u09be\u09b2 \u09b9\u09c7\u09ad\u09bf \u09ac\u0995\u09cd\u09b8\u09bf \u09a1\u09cd\u09b0\u09aa \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 01",
    "category": "drop-shoulder",
    "price": 1090,
    "originalPrice": 1350,
    "discountPercentage": 19,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/615175201_1406084744635962_2257138100861524301_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/615175201_1406084744635962_2257138100861524301_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/615572121_1406084571302646_2180040545443223423_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/616391617_1406087677969002_1862006422782446921_n.jpg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 9,
      "M": 7,
      "L": 13,
      "XL": 8,
      "XXL": 5
    },
    "inStock": true,
    "featured": true,
    "isClearance": false,
    "badge": "BESTSELLER \ud83d\udd25",
    "badgeBn": "\u09ac\u09c7\u09b8\u09cd\u099f\u09b8\u09c7\u09b2\u09be\u09b0 \ud83d\udd25",
    "rating": 4.8999999999999995,
    "reviewsCount": 27,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-02",
    "name": "Tokyo Nights Acid Washed Drop Shoulder Tee // Edition 02",
    "nameBn": "\u099f\u09cb\u0995\u09bf\u0993 \u09a8\u09be\u0987\u099f\u09b8 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 \u0993\u09df\u09be\u09b6\u09a1 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 02",
    "category": "drop-shoulder",
    "price": 1150,
    "originalPrice": 1450,
    "discountPercentage": 20,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/617087365_1410492377528532_6240485888091223135_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/617087365_1410492377528532_6240485888091223135_n.jpg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 10,
      "M": 8,
      "L": 14,
      "XL": 9,
      "XXL": 6
    },
    "inStock": true,
    "featured": true,
    "isClearance": false,
    "badge": "HOT DROP \u26a1",
    "badgeBn": "\u09b9\u099f \u09a1\u09cd\u09b0\u09aa \u26a1",
    "rating": 5.0,
    "reviewsCount": 30,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-03",
    "name": "Dhaka Underground Heavyweight Graphic Boxy Tee // Edition 03",
    "nameBn": "\u09a2\u09be\u0995\u09be \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u0997\u09cd\u09b0\u09be\u09ab\u09bf\u0995 \u09ac\u0995\u09cd\u09b8\u09bf \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 03",
    "category": "drop-shoulder",
    "price": 1190,
    "originalPrice": 1500,
    "discountPercentage": 20,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/628955168_1445314747379628_5542893953471880941_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/628955168_1445314747379628_5542893953471880941_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/647249937_1445314750712961_4810283017566098452_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/647552570_1445314774046292_5983735212541765961_n.jpg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 11,
      "M": 0,
      "L": 15,
      "XL": 7,
      "XXL": 4
    },
    "inStock": true,
    "featured": true,
    "isClearance": false,
    "badge": "LIMITED EDITION",
    "badgeBn": "\u09b2\u09bf\u09ae\u09bf\u099f\u09c7\u09a1 \u098f\u09a1\u09bf\u09b6\u09a8",
    "rating": 4.8,
    "reviewsCount": 33,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-04",
    "name": "Cyberpunk Dystopia Boxy Drop Fit Tee // Edition 04",
    "nameBn": "\u09b8\u09be\u0987\u09ac\u09be\u09b0\u09aa\u09be\u0982\u0995 \u09a1\u09bf\u09b8\u09cd\u099f\u09cb\u09aa\u09bf\u09af\u09bc\u09be \u09ac\u0995\u09cd\u09b8\u09bf \u09a1\u09cd\u09b0\u09aa \u09ab\u09bf\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 04",
    "category": "drop-shoulder",
    "price": 763,
    "originalPrice": 1350,
    "discountPercentage": 43,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/633992697_1430823238828779_5976513624502058633_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/633992697_1430823238828779_5976513624502058633_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/636854022_1430823182162118_1773259939496168259_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/637004828_1430823365495433_3745903273952795761_n.jpg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 12,
      "M": 6,
      "L": 16,
      "XL": 8,
      "XXL": 5
    },
    "inStock": true,
    "featured": true,
    "isClearance": true,
    "badge": "30% CLEARANCE \ud83d\udca5",
    "badgeBn": "\u09e9\u09e6% \u099b\u09be\u09dc \ud83d\udca5",
    "rating": 4.8999999999999995,
    "reviewsCount": 36,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-05",
    "name": "Acid Beast Typography Oversized Tee // Edition 05",
    "nameBn": "\u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 \u09ac\u09bf\u09b8\u09cd\u099f \u099f\u09be\u0987\u09aa\u09cb\u0997\u09cd\u09b0\u09be\u09ab\u09bf \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 05",
    "category": "drop-shoulder",
    "price": 1050,
    "originalPrice": 1300,
    "discountPercentage": 19,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/636870380_1435037295074040_8101230948818454749_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/636870380_1435037295074040_8101230948818454749_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/637138087_1435037168407386_2118864232600510986_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/637167466_1435036951740741_2168220971040289241_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/637410724_1435036888407414_930356834671705256_n.jpg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 8,
      "M": 7,
      "L": 17,
      "XL": 9,
      "XXL": 6
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "POPULAR",
    "badgeBn": "\u099c\u09a8\u09aa\u09cd\u09b0\u09bf\u09af\u09bc",
    "rating": 5.0,
    "reviewsCount": 39,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-06",
    "name": "Midnight Phantom Back-Print Heavy Drop Tee // Edition 06",
    "nameBn": "\u09ae\u09bf\u09a1\u09a8\u09be\u0987\u099f \u09ab\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09ae \u09ac\u09cd\u09af\u09be\u0995-\u09aa\u09cd\u09b0\u09bf\u09a8\u09cd\u099f \u09b9\u09c7\u09ad\u09bf \u09a1\u09cd\u09b0\u09aa \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 06",
    "category": "drop-shoulder",
    "price": 1150,
    "originalPrice": 1450,
    "discountPercentage": 20,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/637707403_1432315978679505_5768555328931867236_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/637707403_1432315978679505_5768555328931867236_n.jpg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 9,
      "M": 0,
      "L": 12,
      "XL": 7,
      "XXL": 4
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "HOT DROP \ud83d\udd25",
    "badgeBn": "\u09b9\u099f \u09a1\u09cd\u09b0\u09aa \ud83d\udd25",
    "rating": 4.8,
    "reviewsCount": 42,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-07",
    "name": "Retro Matrix Glitch Graphic Boxy Tee // Edition 07",
    "nameBn": "\u09b0\u09c7\u099f\u09cd\u09b0\u09cb \u09ae\u09cd\u09af\u09be\u099f\u09cd\u09b0\u09bf\u0995\u09cd\u09b8 \u0997\u09cd\u09b2\u09bf\u099a \u0997\u09cd\u09b0\u09be\u09ab\u09bf\u0995 \u09ac\u0995\u09cd\u09b8\u09bf \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 07",
    "category": "drop-shoulder",
    "price": 1090,
    "originalPrice": 1350,
    "discountPercentage": 19,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/642769519_1441969121047524_4226099083152415671_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/642769519_1441969121047524_4226099083152415671_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/643978031_1441969021047534_2914250621236142207_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/644122748_1441969174380852_6271083031520484344_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/644570328_1441969081047528_2423521378703097861_n.jpg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 10,
      "M": 9,
      "L": 13,
      "XL": 8,
      "XXL": 5
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "240 GSM HEAVY",
    "badgeBn": "\u09e8\u09ea\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae",
    "rating": 4.8999999999999995,
    "reviewsCount": 45,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-08",
    "name": "Industrial Cybernetic Overdyed Drop Tee // Edition 08",
    "nameBn": "\u0987\u09a8\u09cd\u09a1\u09be\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u09af\u09bc\u09be\u09b2 \u0993\u09ad\u09be\u09b0\u09a1\u09be\u0987\u09a1 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 08",
    "category": "drop-shoulder",
    "price": 784,
    "originalPrice": 1400,
    "discountPercentage": 44,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/644605217_1442955250948911_779387515991857636_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/644605217_1442955250948911_779387515991857636_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/646057667_1442955247615578_8968065509771006038_n.jpg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 11,
      "M": 6,
      "L": 14,
      "XL": 9,
      "XXL": 6
    },
    "inStock": true,
    "featured": false,
    "isClearance": true,
    "badge": "30% CLEARANCE \ud83d\udca5",
    "badgeBn": "\u09e9\u09e6% \u099b\u09be\u09dc \ud83d\udca5",
    "rating": 5.0,
    "reviewsCount": 48,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-09",
    "name": "Raw Urban Distressed Street Tee // Edition 09",
    "nameBn": "\u09b0 \u0986\u09b0\u09ac\u09be\u09a8 \u09a1\u09bf\u09b8\u099f\u09cd\u09b0\u09c7\u09b8\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 09",
    "category": "drop-shoulder",
    "price": 1050,
    "originalPrice": 1300,
    "discountPercentage": 19,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/645549512_1444574560786980_8724623174889610757_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/645549512_1444574560786980_8724623174889610757_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/645962774_1444574547453648_1050592815018554376_n.jpg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 12,
      "M": 0,
      "L": 15,
      "XL": 7,
      "XXL": 4
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "EXCLUSIVE",
    "badgeBn": "\u098f\u0995\u09cd\u09b8\u0995\u09cd\u09b2\u09c1\u09b8\u09bf\u09ad",
    "rating": 4.8,
    "reviewsCount": 51,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-10",
    "name": "Nocturnal Beast High-Density Boxy Tee // Edition 10",
    "nameBn": "\u09a8\u0995\u099f\u09be\u09b0\u09a8\u09be\u09b2 \u09ac\u09bf\u09b8\u09cd\u099f \u09b9\u09be\u0987-\u09a1\u09c7\u09a8\u09b8\u09bf\u099f\u09bf \u09ac\u0995\u09cd\u09b8\u09bf \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 10",
    "category": "drop-shoulder",
    "price": 1090,
    "originalPrice": 1350,
    "discountPercentage": 19,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/660539155_1470202174890885_2129317113735075934_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/660539155_1470202174890885_2129317113735075934_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/661912679_1470201881557581_3939108947500742478_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/662566170_1470201418224294_4446885734441752888_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/662830575_1470201634890939_9184965729112383090_n.jpg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 8,
      "M": 8,
      "L": 16,
      "XL": 8,
      "XXL": 5
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "MUST HAVE",
    "badgeBn": "\u09b8\u09c7\u09b0\u09be \u09aa\u099b\u09a8\u09cd\u09a6",
    "rating": 4.8999999999999995,
    "reviewsCount": 54,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-11",
    "name": "Neo-Dhaka Neon Street Graphic Tee // Edition 11",
    "nameBn": "\u09a8\u09bf\u0993-\u09a2\u09be\u0995\u09be \u09a8\u09bf\u09af\u09bc\u09a8 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u0997\u09cd\u09b0\u09be\u09ab\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 11",
    "category": "drop-shoulder",
    "price": 1150,
    "originalPrice": 1450,
    "discountPercentage": 20,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/696972095_1501253865119049_7558190398288462172_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/696972095_1501253865119049_7558190398288462172_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/697101186_1501254258452343_4129343803453474316_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/697273899_1501254358452333_5059486870426806747_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/697316901_1501254698452299_6801853024918444361_n.jpg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 9,
      "M": 9,
      "L": 17,
      "XL": 9,
      "XXL": 6
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "RESTOCK",
    "badgeBn": "\u09b0\u09bf\u09b8\u09cd\u099f\u0995",
    "rating": 5.0,
    "reviewsCount": 57,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-12",
    "name": "Shadow Walker Drop Shoulder Boxy Tee // Edition 12",
    "nameBn": "\u09b6\u09cd\u09af\u09be\u09a1\u09cb \u0993\u09af\u09bc\u09be\u0995\u09be\u09b0 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u09ac\u0995\u09cd\u09b8\u09bf \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 12",
    "category": "drop-shoulder",
    "price": 763,
    "originalPrice": 1350,
    "discountPercentage": 43,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/701688392_1505433264701109_1451068315252538388_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/701688392_1505433264701109_1451068315252538388_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/702590602_1505433308034438_5512265357455434768_n.jpg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 10,
      "M": 0,
      "L": 12,
      "XL": 7,
      "XXL": 4
    },
    "inStock": true,
    "featured": false,
    "isClearance": true,
    "badge": "30% CLEARANCE \ud83d\udca5",
    "badgeBn": "\u09e9\u09e6% \u099b\u09be\u09dc \ud83d\udca5",
    "rating": 4.8,
    "reviewsCount": 60,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-13",
    "name": "Vortex Motion Abstract Graphic Street Tee // Edition 13",
    "nameBn": "\u09ad\u09be\u09b0\u09cd\u099f\u09c7\u0995\u09cd\u09b8 \u09ae\u09cb\u09b6\u09a8 \u0985\u09cd\u09af\u09be\u09ac\u09b8\u09cd\u099f\u09cd\u09b0\u09be\u0995\u09cd\u099f \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 13",
    "category": "drop-shoulder",
    "price": 1050,
    "originalPrice": 1300,
    "discountPercentage": 19,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/702571017_1509703730940729_644572378982841294_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/702571017_1509703730940729_644572378982841294_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/702846318_1509703264274109_2536044002314742732_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/704914769_1509703034274132_4894712624585781186_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/705298487_1509703524274083_7093330231247075138_n.jpg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 11,
      "M": 7,
      "L": 13,
      "XL": 8,
      "XXL": 5
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "NEW DROP",
    "badgeBn": "\u09a8\u09a4\u09c1\u09a8 \u09a1\u09cd\u09b0\u09aa",
    "rating": 4.8999999999999995,
    "reviewsCount": 63,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-14",
    "name": "Cyber Ronin Japanese Kanji Drop Tee // Edition 14",
    "nameBn": "\u09b8\u09be\u0987\u09ac\u09be\u09b0 \u09b0\u09cb\u09a8\u09bf\u09a8 \u0995\u09be\u099e\u09cd\u099c\u09bf \u09a1\u09cd\u09b0\u09aa \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 14",
    "category": "drop-shoulder",
    "price": 1190,
    "originalPrice": 1500,
    "discountPercentage": 20,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/749269265_1001607596037605_8595709287877325274_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/749269265_1001607596037605_8595709287877325274_n.jpeg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 12,
      "M": 8,
      "L": 14,
      "XL": 9,
      "XXL": 6
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "BESTSELLER \u2b50",
    "badgeBn": "\u09ac\u09c7\u09b8\u09cd\u099f\u09b8\u09c7\u09b2\u09be\u09b0 \u2b50",
    "rating": 5.0,
    "reviewsCount": 66,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-drop-15",
    "name": "Dark Matter Heavyweight Minimalist Drop Tee // Edition 15",
    "nameBn": "\u09a1\u09be\u09b0\u09cd\u0995 \u09ae\u09cd\u09af\u09be\u099f\u09be\u09b0 \u09ae\u09bf\u09a8\u09bf\u09ae\u09be\u09b2\u09bf\u09b8\u09cd\u099f \u09b9\u09c7\u09ad\u09bf \u09a1\u09cd\u09b0\u09aa \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f // \u098f\u09a1\u09bf\u09b6\u09a8 15",
    "category": "drop-shoulder",
    "price": 990,
    "originalPrice": 1250,
    "discountPercentage": 20,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/751578387_1649602009462642_4350624360983860784_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/751578387_1649602009462642_4350624360983860784_n.jpeg"
    ],
    "description": "Engineered with 240+ GSM ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching that won't sag, and structured drop shoulder seams that create an imposing boxy silhouette.",
    "descriptionBn": "\u09e8\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u09ae\u09aa\u09cd\u09af\u09be\u0995\u09cd\u099f \u0995\u099f\u09a8 \u09a6\u09bf\u09df\u09c7 \u09a4\u09c8\u09b0\u09bf\u0964 \u09ae\u099c\u09ac\u09c1\u09a4 \u099f\u09c1\u0987\u09a8-\u09a8\u09bf\u09a1\u09b2 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09a1\u09cd\u09b0\u09aa \u09b6\u09cb\u09b2\u09cd\u09a1\u09be\u09b0 \u0995\u09be\u099f\u09bf\u0982 \u09af\u09be \u09b6\u09b0\u09c0\u09b0\u09c7 \u098f\u09a8\u09c7 \u09a6\u09c7\u09df \u0986\u09b8\u09b2 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 8,
      "M": 0,
      "L": 15,
      "XL": 7,
      "XXL": 4
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "240 GSM",
    "badgeBn": "\u09e8\u09ea\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae",
    "rating": 4.8,
    "reviewsCount": 69,
    "gsm": "240 GSM Combed Compact Cotton",
    "fabric": "100% Preshrunk Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09aa\u09cd\u09b0\u09bf\u09b6\u09cd\u09b0\u09be\u0982\u0995 \u0995\u09ae\u09cd\u09ac\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Signature Oversized Boxy Fit",
    "fitBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09ac\u0995\u09cd\u09b8\u09bf \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-basic-01",
    "name": "Urban Beast Heavy Basic Tee \u2014 Washed Onyx Black",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f \u2014 \u0993\u09df\u09be\u09b6\u09a1 \u0985\u09a8\u09bf\u0995\u09cd\u09b8 \u09ac\u09cd\u09b2\u09cd\u09af\u09be\u0995",
    "category": "basic-tees",
    "price": 790,
    "originalPrice": 990,
    "discountPercentage": 20,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/577826828_1351890786722025_9220208931571881587_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/577826828_1351890786722025_9220208931571881587_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/578266038_1351890896722014_6183378538034907562_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/578266222_1351890856722018_7970866375318097398_n.jpg"
    ],
    "description": "Essential 220 GSM daily heavyweight basic tee. Enzyme-washed for an ultra-soft hand feel while retaining full fabric density and clean neck line.",
    "descriptionBn": "\u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8\u09c7\u09b0 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ad\u09be\u09b0\u09c0 \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f\u0964 \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u098f\u09ac\u0982 \u09a6\u09c0\u09b0\u09cd\u0998\u09b8\u09cd\u09a5\u09be\u09df\u09c0\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 15,
      "M": 10,
      "L": 18,
      "XL": 8,
      "XXL": 5
    },
    "inStock": true,
    "featured": true,
    "isClearance": false,
    "badge": "220 GSM ESSENTIAL",
    "badgeBn": "\u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u098f\u09b8\u09c7\u09a8\u09b6\u09bf\u09af\u09bc\u09be\u09b2",
    "rating": 4.9,
    "reviewsCount": 47,
    "gsm": "220 GSM Heavy Combed Cotton",
    "fabric": "100% Enzyme-Washed Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Clean Relaxed Fit",
    "fitBn": "\u0995\u09cd\u09b2\u09bf\u09a8 \u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-basic-02",
    "name": "Urban Beast Heavy Basic Tee \u2014 Charcoal Slate",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f \u2014 \u099a\u09be\u09b0\u0995\u09cb\u09b2 \u09b8\u09cd\u09b2\u09c7\u099f",
    "category": "basic-tees",
    "price": 790,
    "originalPrice": 990,
    "discountPercentage": 20,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/619330153_1413347187243051_4835478651238887407_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/619330153_1413347187243051_4835478651238887407_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/619509717_1413347060576397_2165216089085088755_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/619637447_1413347117243058_8319481841192021545_n.jpg"
    ],
    "description": "Essential 220 GSM daily heavyweight basic tee. Enzyme-washed for an ultra-soft hand feel while retaining full fabric density and clean neck line.",
    "descriptionBn": "\u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8\u09c7\u09b0 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ad\u09be\u09b0\u09c0 \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f\u0964 \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u098f\u09ac\u0982 \u09a6\u09c0\u09b0\u09cd\u0998\u09b8\u09cd\u09a5\u09be\u09df\u09c0\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 15,
      "M": 10,
      "L": 18,
      "XL": 8,
      "XXL": 5
    },
    "inStock": true,
    "featured": true,
    "isClearance": false,
    "badge": "220 GSM ESSENTIAL",
    "badgeBn": "\u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u098f\u09b8\u09c7\u09a8\u09b6\u09bf\u09af\u09bc\u09be\u09b2",
    "rating": 4.9,
    "reviewsCount": 52,
    "gsm": "220 GSM Heavy Combed Cotton",
    "fabric": "100% Enzyme-Washed Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Clean Relaxed Fit",
    "fitBn": "\u0995\u09cd\u09b2\u09bf\u09a8 \u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-basic-03",
    "name": "Urban Beast Heavy Basic Tee \u2014 Vintage Off-White",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f \u2014 \u09ad\u09bf\u09a8\u09cd\u099f\u09c7\u099c \u0985\u09ab-\u09b9\u09cb\u09df\u09be\u0987\u099f",
    "category": "basic-tees",
    "price": 590,
    "originalPrice": 990,
    "discountPercentage": 40,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/619399726_1414203250490778_6609246732620329170_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/619399726_1414203250490778_6609246732620329170_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/619578536_1414203207157449_5093461241038885901_n.jpg"
    ],
    "description": "Essential 220 GSM daily heavyweight basic tee. Enzyme-washed for an ultra-soft hand feel while retaining full fabric density and clean neck line.",
    "descriptionBn": "\u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8\u09c7\u09b0 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ad\u09be\u09b0\u09c0 \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f\u0964 \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u098f\u09ac\u0982 \u09a6\u09c0\u09b0\u09cd\u0998\u09b8\u09cd\u09a5\u09be\u09df\u09c0\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 15,
      "M": 10,
      "L": 18,
      "XL": 8,
      "XXL": 5
    },
    "inStock": true,
    "featured": false,
    "isClearance": true,
    "badge": "220 GSM ESSENTIAL",
    "badgeBn": "\u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u098f\u09b8\u09c7\u09a8\u09b6\u09bf\u09af\u09bc\u09be\u09b2",
    "rating": 4.9,
    "reviewsCount": 57,
    "gsm": "220 GSM Heavy Combed Cotton",
    "fabric": "100% Enzyme-Washed Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Clean Relaxed Fit",
    "fitBn": "\u0995\u09cd\u09b2\u09bf\u09a8 \u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-basic-04",
    "name": "Urban Beast Heavy Basic Tee \u2014 Military Forest Green",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f \u2014 \u09ae\u09bf\u09b2\u09bf\u099f\u09be\u09b0\u09bf \u09ab\u09b0\u09c7\u09b8\u09cd\u099f \u0997\u09cd\u09b0\u09bf\u09a8",
    "category": "basic-tees",
    "price": 790,
    "originalPrice": 990,
    "discountPercentage": 20,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/660880445_1470200294891073_6742674840414092242_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/660880445_1470200294891073_6742674840414092242_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/660943214_1470200444891058_2433594277309465661_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/662316804_1470200221557747_8797808138616392646_n.jpg"
    ],
    "description": "Essential 220 GSM daily heavyweight basic tee. Enzyme-washed for an ultra-soft hand feel while retaining full fabric density and clean neck line.",
    "descriptionBn": "\u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8\u09c7\u09b0 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ad\u09be\u09b0\u09c0 \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f\u0964 \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u098f\u09ac\u0982 \u09a6\u09c0\u09b0\u09cd\u0998\u09b8\u09cd\u09a5\u09be\u09df\u09c0\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 15,
      "M": 10,
      "L": 18,
      "XL": 8,
      "XXL": 5
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "220 GSM ESSENTIAL",
    "badgeBn": "\u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u098f\u09b8\u09c7\u09a8\u09b6\u09bf\u09af\u09bc\u09be\u09b2",
    "rating": 4.9,
    "reviewsCount": 62,
    "gsm": "220 GSM Heavy Combed Cotton",
    "fabric": "100% Enzyme-Washed Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Clean Relaxed Fit",
    "fitBn": "\u0995\u09cd\u09b2\u09bf\u09a8 \u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-basic-05",
    "name": "Urban Beast Heavy Basic Tee \u2014 Midnight Deep Navy",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f \u2014 \u09ae\u09bf\u09a1\u09a8\u09be\u0987\u099f \u09a1\u09bf\u09aa \u09a8\u09c7\u09ad\u09bf",
    "category": "basic-tees",
    "price": 790,
    "originalPrice": 990,
    "discountPercentage": 20,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/775537609_1343620350846269_4000216009159265506_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/775537609_1343620350846269_4000216009159265506_n.jpeg"
    ],
    "description": "Essential 220 GSM daily heavyweight basic tee. Enzyme-washed for an ultra-soft hand feel while retaining full fabric density and clean neck line.",
    "descriptionBn": "\u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8\u09c7\u09b0 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ad\u09be\u09b0\u09c0 \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f\u0964 \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u098f\u09ac\u0982 \u09a6\u09c0\u09b0\u09cd\u0998\u09b8\u09cd\u09a5\u09be\u09df\u09c0\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 15,
      "M": 10,
      "L": 18,
      "XL": 8,
      "XXL": 5
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "220 GSM ESSENTIAL",
    "badgeBn": "\u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u098f\u09b8\u09c7\u09a8\u09b6\u09bf\u09af\u09bc\u09be\u09b2",
    "rating": 4.9,
    "reviewsCount": 67,
    "gsm": "220 GSM Heavy Combed Cotton",
    "fabric": "100% Enzyme-Washed Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Clean Relaxed Fit",
    "fitBn": "\u0995\u09cd\u09b2\u09bf\u09a8 \u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-basic-06",
    "name": "Urban Beast Heavy Basic Tee \u2014 Earth Sand Dune",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f \u2014 \u0986\u09b0\u09cd\u09a5 \u09b8\u09cd\u09af\u09be\u09a8\u09cd\u09a1 \u09a1\u09c1\u09a8",
    "category": "basic-tees",
    "price": 590,
    "originalPrice": 990,
    "discountPercentage": 40,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/776222576_1045769921636386_4686764310948800620_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/776222576_1045769921636386_4686764310948800620_n.jpeg"
    ],
    "description": "Essential 220 GSM daily heavyweight basic tee. Enzyme-washed for an ultra-soft hand feel while retaining full fabric density and clean neck line.",
    "descriptionBn": "\u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8\u09c7\u09b0 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ad\u09be\u09b0\u09c0 \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f\u0964 \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u098f\u09ac\u0982 \u09a6\u09c0\u09b0\u09cd\u0998\u09b8\u09cd\u09a5\u09be\u09df\u09c0\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 15,
      "M": 10,
      "L": 18,
      "XL": 8,
      "XXL": 5
    },
    "inStock": true,
    "featured": false,
    "isClearance": true,
    "badge": "220 GSM ESSENTIAL",
    "badgeBn": "\u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u098f\u09b8\u09c7\u09a8\u09b6\u09bf\u09af\u09bc\u09be\u09b2",
    "rating": 4.9,
    "reviewsCount": 72,
    "gsm": "220 GSM Heavy Combed Cotton",
    "fabric": "100% Enzyme-Washed Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Clean Relaxed Fit",
    "fitBn": "\u0995\u09cd\u09b2\u09bf\u09a8 \u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-basic-07",
    "name": "Urban Beast Heavy Basic Tee \u2014 Washed Oxide Grey",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f \u2014 \u0993\u09df\u09be\u09b6\u09a1 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09a1 \u0997\u09cd\u09b0\u09c7",
    "category": "basic-tees",
    "price": 790,
    "originalPrice": 990,
    "discountPercentage": 20,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/778279722_1419759426680808_6088311599442503618_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/778279722_1419759426680808_6088311599442503618_n.jpeg"
    ],
    "description": "Essential 220 GSM daily heavyweight basic tee. Enzyme-washed for an ultra-soft hand feel while retaining full fabric density and clean neck line.",
    "descriptionBn": "\u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8\u09c7\u09b0 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ad\u09be\u09b0\u09c0 \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f\u0964 \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u098f\u09ac\u0982 \u09a6\u09c0\u09b0\u09cd\u0998\u09b8\u09cd\u09a5\u09be\u09df\u09c0\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 15,
      "M": 10,
      "L": 18,
      "XL": 8,
      "XXL": 5
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "220 GSM ESSENTIAL",
    "badgeBn": "\u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u098f\u09b8\u09c7\u09a8\u09b6\u09bf\u09af\u09bc\u09be\u09b2",
    "rating": 4.9,
    "reviewsCount": 77,
    "gsm": "220 GSM Heavy Combed Cotton",
    "fabric": "100% Enzyme-Washed Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Clean Relaxed Fit",
    "fitBn": "\u0995\u09cd\u09b2\u09bf\u09a8 \u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-basic-08",
    "name": "Urban Beast Heavy Basic Tee \u2014 Heavy Maroon Berry",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f \u2014 \u09ae\u09c7\u09b0\u09c1\u09a8 \u09ac\u09c7\u09b0\u09bf",
    "category": "basic-tees",
    "price": 790,
    "originalPrice": 990,
    "discountPercentage": 20,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/779996160_2438499849890889_1949153976630207399_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/779996160_2438499849890889_1949153976630207399_n.jpeg"
    ],
    "description": "Essential 220 GSM daily heavyweight basic tee. Enzyme-washed for an ultra-soft hand feel while retaining full fabric density and clean neck line.",
    "descriptionBn": "\u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8\u09c7\u09b0 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ad\u09be\u09b0\u09c0 \u09ac\u09c7\u09b8\u09bf\u0995 \u099f\u09bf-\u09b6\u09be\u09b0\u09cd\u099f\u0964 \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u098f\u09ac\u0982 \u09a6\u09c0\u09b0\u09cd\u0998\u09b8\u09cd\u09a5\u09be\u09df\u09c0\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 15,
      "M": 10,
      "L": 18,
      "XL": 8,
      "XXL": 5
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "220 GSM ESSENTIAL",
    "badgeBn": "\u09e8\u09e8\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u098f\u09b8\u09c7\u09a8\u09b6\u09bf\u09af\u09bc\u09be\u09b2",
    "rating": 4.9,
    "reviewsCount": 82,
    "gsm": "220 GSM Heavy Combed Cotton",
    "fabric": "100% Enzyme-Washed Combed Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u098f\u09a8\u099c\u09be\u0987\u09ae \u0993\u09df\u09be\u09b6\u09a1 \u09b8\u09c1\u09a4\u09bf",
    "fit": "Clean Relaxed Fit",
    "fitBn": "\u0995\u09cd\u09b2\u09bf\u09a8 \u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-shirt-01",
    "name": "Urban Beast Cuban Collar Textured Resort Shirt \u2014 Bone White",
    "nameBn": "\u0995\u09bf\u0989\u09ac\u09be\u09a8 \u0995\u09b2\u09be\u09b0 \u099f\u09c7\u0995\u09cd\u09b8\u099a\u09be\u09b0\u09cd\u09a1 \u09b0\u09bf\u09b8\u09cb\u09b0\u09cd\u099f \u09b6\u09be\u09b0\u09cd\u099f \u2014 \u09ac\u09cb\u09a8 \u09b9\u09cb\u09df\u09be\u0987\u099f",
    "category": "shirts",
    "price": 1350,
    "originalPrice": 1650,
    "discountPercentage": 18,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Shirts/746842834_990609357297118_5313796038813551449_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Shirts/746842834_990609357297118_5313796038813551449_n.jpeg"
    ],
    "description": "Tailored with a breathable Cuban camp collar, relaxed dropped shoulders, and textured waffle/linen cotton weave. Perfect for Dhaka warm evenings and weekend hangouts.",
    "descriptionBn": "\u09ac\u09cd\u09b0\u09c7\u09a5\u09c7\u09ac\u09b2 \u0995\u09bf\u0989\u09ac\u09be\u09a8 \u0995\u09cd\u09af\u09be\u09ae\u09cd\u09aa \u0995\u09b2\u09be\u09b0 \u098f\u09ac\u0982 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u099f\u09c7\u0995\u09cd\u09b8\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u09ac\u09cd\u09b2\u09c7\u09a8\u09cd\u09a1\u0964 \u09a2\u09be\u0995\u09be\u09b0 \u0986\u09ac\u09b9\u09be\u0993\u09df\u09be \u0993 \u0986\u0989\u099f\u09bf\u0982\u09df\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u09b8\u09cd\u099f\u09be\u0987\u09b2\u09bf\u09b6\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 6,
      "L": 11,
      "XL": 5,
      "XXL": 3
    },
    "inStock": true,
    "featured": true,
    "isClearance": false,
    "badge": "HOT DROP \u2728",
    "badgeBn": "\u09b9\u099f \u09a1\u09cd\u09b0\u09aa \u2728",
    "rating": 4.9,
    "reviewsCount": 28,
    "gsm": "180 GSM Textured Woven Blend",
    "fabric": "Cotton-Linen Breathable Woven Blend",
    "fabricBn": "\u0995\u099f\u09a8-\u09b2\u09bf\u09a8\u09c7\u09a8 \u09ac\u09cd\u09b0\u09c7\u09a5\u09c7\u09ac\u09b2 \u09ab\u09cd\u09af\u09be\u09ac\u09cd\u09b0\u09bf\u0995",
    "fit": "Relaxed Camp Collar Fit",
    "fitBn": "\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u0995\u09cd\u09af\u09be\u09ae\u09cd\u09aa \u0995\u09b2\u09be\u09b0 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-shirt-02",
    "name": "Urban Beast Cuban Collar Casual Street Shirt \u2014 Carbon Black",
    "nameBn": "\u0995\u09bf\u0989\u09ac\u09be\u09a8 \u0995\u09b2\u09be\u09b0 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u09b6\u09be\u09b0\u09cd\u099f \u2014 \u0995\u09be\u09b0\u09cd\u09ac\u09a8 \u09ac\u09cd\u09b2\u09cd\u09af\u09be\u0995",
    "category": "shirts",
    "price": 1350,
    "originalPrice": 1650,
    "discountPercentage": 18,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Shirts/746909286_4464328587231346_1227871502320961329_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Shirts/746909286_4464328587231346_1227871502320961329_n.jpeg"
    ],
    "description": "Tailored with a breathable Cuban camp collar, relaxed dropped shoulders, and textured waffle/linen cotton weave. Perfect for Dhaka warm evenings and weekend hangouts.",
    "descriptionBn": "\u09ac\u09cd\u09b0\u09c7\u09a5\u09c7\u09ac\u09b2 \u0995\u09bf\u0989\u09ac\u09be\u09a8 \u0995\u09cd\u09af\u09be\u09ae\u09cd\u09aa \u0995\u09b2\u09be\u09b0 \u098f\u09ac\u0982 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u099f\u09c7\u0995\u09cd\u09b8\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u09ac\u09cd\u09b2\u09c7\u09a8\u09cd\u09a1\u0964 \u09a2\u09be\u0995\u09be\u09b0 \u0986\u09ac\u09b9\u09be\u0993\u09df\u09be \u0993 \u0986\u0989\u099f\u09bf\u0982\u09df\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u09b8\u09cd\u099f\u09be\u0987\u09b2\u09bf\u09b6\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 6,
      "L": 11,
      "XL": 5,
      "XXL": 3
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "HOT DROP \u2728",
    "badgeBn": "\u09b9\u099f \u09a1\u09cd\u09b0\u09aa \u2728",
    "rating": 4.9,
    "reviewsCount": 32,
    "gsm": "180 GSM Textured Woven Blend",
    "fabric": "Cotton-Linen Breathable Woven Blend",
    "fabricBn": "\u0995\u099f\u09a8-\u09b2\u09bf\u09a8\u09c7\u09a8 \u09ac\u09cd\u09b0\u09c7\u09a5\u09c7\u09ac\u09b2 \u09ab\u09cd\u09af\u09be\u09ac\u09cd\u09b0\u09bf\u0995",
    "fit": "Relaxed Camp Collar Fit",
    "fitBn": "\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u0995\u09cd\u09af\u09be\u09ae\u09cd\u09aa \u0995\u09b2\u09be\u09b0 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-shirt-03",
    "name": "Urban Beast Casual Open-Collar Resort Shirt \u2014 Sage Khaki",
    "nameBn": "\u0993\u09aa\u09c7\u09a8 \u0995\u09b2\u09be\u09b0 \u09b0\u09bf\u09b8\u09cb\u09b0\u09cd\u099f \u09b6\u09be\u09b0\u09cd\u099f \u2014 \u09b8\u09c7\u0987\u099c \u0996\u09be\u0995\u09bf",
    "category": "shirts",
    "price": 1350,
    "originalPrice": 1650,
    "discountPercentage": 18,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Shirts/747969977_1003143512527362_6893676019006866332_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Shirts/747969977_1003143512527362_6893676019006866332_n.jpeg"
    ],
    "description": "Tailored with a breathable Cuban camp collar, relaxed dropped shoulders, and textured waffle/linen cotton weave. Perfect for Dhaka warm evenings and weekend hangouts.",
    "descriptionBn": "\u09ac\u09cd\u09b0\u09c7\u09a5\u09c7\u09ac\u09b2 \u0995\u09bf\u0989\u09ac\u09be\u09a8 \u0995\u09cd\u09af\u09be\u09ae\u09cd\u09aa \u0995\u09b2\u09be\u09b0 \u098f\u09ac\u0982 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u099f\u09c7\u0995\u09cd\u09b8\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u09ac\u09cd\u09b2\u09c7\u09a8\u09cd\u09a1\u0964 \u09a2\u09be\u0995\u09be\u09b0 \u0986\u09ac\u09b9\u09be\u0993\u09df\u09be \u0993 \u0986\u0989\u099f\u09bf\u0982\u09df\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u09b8\u09cd\u099f\u09be\u0987\u09b2\u09bf\u09b6\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 6,
      "L": 11,
      "XL": 5,
      "XXL": 3
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "HOT DROP \u2728",
    "badgeBn": "\u09b9\u099f \u09a1\u09cd\u09b0\u09aa \u2728",
    "rating": 4.9,
    "reviewsCount": 36,
    "gsm": "180 GSM Textured Woven Blend",
    "fabric": "Cotton-Linen Breathable Woven Blend",
    "fabricBn": "\u0995\u099f\u09a8-\u09b2\u09bf\u09a8\u09c7\u09a8 \u09ac\u09cd\u09b0\u09c7\u09a5\u09c7\u09ac\u09b2 \u09ab\u09cd\u09af\u09be\u09ac\u09cd\u09b0\u09bf\u0995",
    "fit": "Relaxed Camp Collar Fit",
    "fitBn": "\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u0995\u09cd\u09af\u09be\u09ae\u09cd\u09aa \u0995\u09b2\u09be\u09b0 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-shirt-04",
    "name": "Urban Beast Minimalist Summer Linen Blend Shirt \u2014 Olive",
    "nameBn": "\u09b2\u09bf\u09a8\u09c7\u09a8 \u09ac\u09cd\u09b2\u09c7\u09a8\u09cd\u09a1 \u09b8\u09be\u09ae\u09be\u09b0 \u09b6\u09be\u09b0\u09cd\u099f \u2014 \u0985\u09b2\u09bf\u09ad",
    "category": "shirts",
    "price": 1350,
    "originalPrice": 1650,
    "discountPercentage": 18,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Shirts/748396802_837538042625119_6755693909824507376_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Shirts/748396802_837538042625119_6755693909824507376_n.jpeg"
    ],
    "description": "Tailored with a breathable Cuban camp collar, relaxed dropped shoulders, and textured waffle/linen cotton weave. Perfect for Dhaka warm evenings and weekend hangouts.",
    "descriptionBn": "\u09ac\u09cd\u09b0\u09c7\u09a5\u09c7\u09ac\u09b2 \u0995\u09bf\u0989\u09ac\u09be\u09a8 \u0995\u09cd\u09af\u09be\u09ae\u09cd\u09aa \u0995\u09b2\u09be\u09b0 \u098f\u09ac\u0982 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u099f\u09c7\u0995\u09cd\u09b8\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u09ac\u09cd\u09b2\u09c7\u09a8\u09cd\u09a1\u0964 \u09a2\u09be\u0995\u09be\u09b0 \u0986\u09ac\u09b9\u09be\u0993\u09df\u09be \u0993 \u0986\u0989\u099f\u09bf\u0982\u09df\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u09b8\u09cd\u099f\u09be\u0987\u09b2\u09bf\u09b6\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 6,
      "L": 11,
      "XL": 5,
      "XXL": 3
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "HOT DROP \u2728",
    "badgeBn": "\u09b9\u099f \u09a1\u09cd\u09b0\u09aa \u2728",
    "rating": 4.9,
    "reviewsCount": 40,
    "gsm": "180 GSM Textured Woven Blend",
    "fabric": "Cotton-Linen Breathable Woven Blend",
    "fabricBn": "\u0995\u099f\u09a8-\u09b2\u09bf\u09a8\u09c7\u09a8 \u09ac\u09cd\u09b0\u09c7\u09a5\u09c7\u09ac\u09b2 \u09ab\u09cd\u09af\u09be\u09ac\u09cd\u09b0\u09bf\u0995",
    "fit": "Relaxed Camp Collar Fit",
    "fitBn": "\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u0995\u09cd\u09af\u09be\u09ae\u09cd\u09aa \u0995\u09b2\u09be\u09b0 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-shirt-05",
    "name": "Urban Beast Retro Camp-Collar Street Shirt \u2014 Charcoal",
    "nameBn": "\u09b0\u09c7\u099f\u09cd\u09b0\u09cb \u0995\u09cd\u09af\u09be\u09ae\u09cd\u09aa \u0995\u09b2\u09be\u09b0 \u09b6\u09be\u09b0\u09cd\u099f \u2014 \u099a\u09be\u09b0\u0995\u09cb\u09b2",
    "category": "shirts",
    "price": 1350,
    "originalPrice": 1650,
    "discountPercentage": 18,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Shirts/749330017_2825992897734911_2180235362034800589_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Shirts/749330017_2825992897734911_2180235362034800589_n.jpeg"
    ],
    "description": "Tailored with a breathable Cuban camp collar, relaxed dropped shoulders, and textured waffle/linen cotton weave. Perfect for Dhaka warm evenings and weekend hangouts.",
    "descriptionBn": "\u09ac\u09cd\u09b0\u09c7\u09a5\u09c7\u09ac\u09b2 \u0995\u09bf\u0989\u09ac\u09be\u09a8 \u0995\u09cd\u09af\u09be\u09ae\u09cd\u09aa \u0995\u09b2\u09be\u09b0 \u098f\u09ac\u0982 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u099f\u09c7\u0995\u09cd\u09b8\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u09ac\u09cd\u09b2\u09c7\u09a8\u09cd\u09a1\u0964 \u09a2\u09be\u0995\u09be\u09b0 \u0986\u09ac\u09b9\u09be\u0993\u09df\u09be \u0993 \u0986\u0989\u099f\u09bf\u0982\u09df\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u09b8\u09cd\u099f\u09be\u0987\u09b2\u09bf\u09b6\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 6,
      "L": 11,
      "XL": 5,
      "XXL": 3
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "HOT DROP \u2728",
    "badgeBn": "\u09b9\u099f \u09a1\u09cd\u09b0\u09aa \u2728",
    "rating": 4.9,
    "reviewsCount": 44,
    "gsm": "180 GSM Textured Woven Blend",
    "fabric": "Cotton-Linen Breathable Woven Blend",
    "fabricBn": "\u0995\u099f\u09a8-\u09b2\u09bf\u09a8\u09c7\u09a8 \u09ac\u09cd\u09b0\u09c7\u09a5\u09c7\u09ac\u09b2 \u09ab\u09cd\u09af\u09be\u09ac\u09cd\u09b0\u09bf\u0995",
    "fit": "Relaxed Camp Collar Fit",
    "fitBn": "\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u0995\u09cd\u09af\u09be\u09ae\u09cd\u09aa \u0995\u09b2\u09be\u09b0 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-winter-01",
    "name": "Urban Beast Heavy Brushed Fleece Hoodie \u2014 Jet Black",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u09cd\u09b0\u09be\u09b6\u09a1 \u09ab\u09cd\u09b2\u09bf\u09b8 \u09b9\u09c1\u09a1\u09bf \u2014 \u099c\u09c7\u099f \u09ac\u09cd\u09b2\u09cd\u09af\u09be\u0995",
    "category": "winter",
    "price": 1850,
    "originalPrice": 2350,
    "discountPercentage": 21,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/559212035_1330340435543727_1475168875578118084_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/559212035_1330340435543727_1475168875578118084_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/559680824_1330340325543738_4825311209482826499_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/564567481_1330340382210399_6683871413263948125_n.jpg"
    ],
    "description": "Crafted with 340+ GSM brushed interior heavyweight fleece. Double-layered thermal hood, heavy cotton drawstring with matte metal aglets, and reinforced pouch pocket.",
    "descriptionBn": "\u09e9\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ac\u09cd\u09b0\u09be\u09b6\u09a1 \u0987\u09a8\u09be\u09b0 \u09b9\u09c7\u09ad\u09bf\u0993\u09df\u09c7\u099f \u09ab\u09cd\u09b2\u09bf\u09b8\u0964 \u09a1\u09be\u09ac\u09b2 \u09b2\u09c7\u09df\u09be\u09b0\u09cd\u09a1 \u09b9\u09c1\u09a1, \u09ae\u09c7\u099f\u09be\u09b2 \u0985\u09cd\u09af\u09be\u0997\u09b2\u09c7\u099f \u09b8\u09b9 \u09b9\u09c7\u09ad\u09bf \u09a1\u09cd\u09b0-\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u0982 \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09cd\u09af\u09be\u0999\u09cd\u0997\u09be\u09b0\u09c1 \u09aa\u0995\u09c7\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 7,
      "L": 14,
      "XL": 9,
      "XXL": 4
    },
    "inStock": true,
    "featured": true,
    "isClearance": false,
    "badge": "340 GSM FLEECE \u2744\ufe0f",
    "badgeBn": "\u09e9\u09ea\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ab\u09cd\u09b2\u09bf\u09b8 \u2744\ufe0f",
    "rating": 5.0,
    "reviewsCount": 60,
    "gsm": "340 GSM Heavy Thermal Fleece",
    "fabric": "100% Combed Cotton Face with Thermal Fleece Backing",
    "fabricBn": "\u09e7\u09e6\u09e6% \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u099f\u09a8 \u09ab\u09c7\u09b8 \u0993 \u09a5\u09be\u09b0\u09cd\u09ae\u09be\u09b2 \u09ab\u09cd\u09b2\u09bf\u09b8",
    "fit": "Heavy Boxy Winter Fit",
    "fitBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u0995\u09cd\u09b8\u09bf \u0989\u0987\u09a8\u09cd\u099f\u09be\u09b0 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-winter-02",
    "name": "Urban Beast Two-Tone Retro Varsity Bomber Jacket",
    "nameBn": "\u099f\u09c1-\u099f\u09cb\u09a8 \u09b0\u09c7\u099f\u09cd\u09b0\u09cb \u09ad\u09be\u09b0\u09cd\u09b8\u09bf\u099f\u09bf \u09ac\u09ae\u09cd\u09ac\u09be\u09b0 \u099c\u09cd\u09af\u09be\u0995\u09c7\u099f",
    "category": "winter",
    "price": 2150,
    "originalPrice": 2750,
    "discountPercentage": 21,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/571574589_1344216414156129_1246326728628355551_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/571574589_1344216414156129_1246326728628355551_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/571649729_1344216360822801_7539265076495321204_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/571711125_1344216320822805_2557596950391050969_n.jpg"
    ],
    "description": "Crafted with 340+ GSM brushed interior heavyweight fleece. Double-layered thermal hood, heavy cotton drawstring with matte metal aglets, and reinforced pouch pocket.",
    "descriptionBn": "\u09e9\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ac\u09cd\u09b0\u09be\u09b6\u09a1 \u0987\u09a8\u09be\u09b0 \u09b9\u09c7\u09ad\u09bf\u0993\u09df\u09c7\u099f \u09ab\u09cd\u09b2\u09bf\u09b8\u0964 \u09a1\u09be\u09ac\u09b2 \u09b2\u09c7\u09df\u09be\u09b0\u09cd\u09a1 \u09b9\u09c1\u09a1, \u09ae\u09c7\u099f\u09be\u09b2 \u0985\u09cd\u09af\u09be\u0997\u09b2\u09c7\u099f \u09b8\u09b9 \u09b9\u09c7\u09ad\u09bf \u09a1\u09cd\u09b0-\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u0982 \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09cd\u09af\u09be\u0999\u09cd\u0997\u09be\u09b0\u09c1 \u09aa\u0995\u09c7\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 7,
      "L": 14,
      "XL": 9,
      "XXL": 4
    },
    "inStock": true,
    "featured": true,
    "isClearance": false,
    "badge": "340 GSM FLEECE \u2744\ufe0f",
    "badgeBn": "\u09e9\u09ea\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ab\u09cd\u09b2\u09bf\u09b8 \u2744\ufe0f",
    "rating": 5.0,
    "reviewsCount": 66,
    "gsm": "340 GSM Heavy Thermal Fleece",
    "fabric": "100% Combed Cotton Face with Thermal Fleece Backing",
    "fabricBn": "\u09e7\u09e6\u09e6% \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u099f\u09a8 \u09ab\u09c7\u09b8 \u0993 \u09a5\u09be\u09b0\u09cd\u09ae\u09be\u09b2 \u09ab\u09cd\u09b2\u09bf\u09b8",
    "fit": "Heavy Boxy Winter Fit",
    "fitBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u0995\u09cd\u09b8\u09bf \u0989\u0987\u09a8\u09cd\u099f\u09be\u09b0 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-winter-03",
    "name": "Urban Beast Heavy Streetwear Pullover Hoodie \u2014 Slate Grey",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09aa\u09c1\u09b2\u0993\u09ad\u09be\u09b0 \u09b9\u09c1\u09a1\u09bf \u2014 \u09b8\u09cd\u09b2\u09c7\u099f \u0997\u09cd\u09b0\u09c7",
    "category": "winter",
    "price": 1850,
    "originalPrice": 2350,
    "discountPercentage": 21,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/581463577_1359388642638906_409383497689645876_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/581463577_1359388642638906_409383497689645876_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/583020925_1359388772638893_8503994338298648897_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/583322673_1359388965972207_5062173854990288342_n.jpg"
    ],
    "description": "Crafted with 340+ GSM brushed interior heavyweight fleece. Double-layered thermal hood, heavy cotton drawstring with matte metal aglets, and reinforced pouch pocket.",
    "descriptionBn": "\u09e9\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ac\u09cd\u09b0\u09be\u09b6\u09a1 \u0987\u09a8\u09be\u09b0 \u09b9\u09c7\u09ad\u09bf\u0993\u09df\u09c7\u099f \u09ab\u09cd\u09b2\u09bf\u09b8\u0964 \u09a1\u09be\u09ac\u09b2 \u09b2\u09c7\u09df\u09be\u09b0\u09cd\u09a1 \u09b9\u09c1\u09a1, \u09ae\u09c7\u099f\u09be\u09b2 \u0985\u09cd\u09af\u09be\u0997\u09b2\u09c7\u099f \u09b8\u09b9 \u09b9\u09c7\u09ad\u09bf \u09a1\u09cd\u09b0-\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u0982 \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09cd\u09af\u09be\u0999\u09cd\u0997\u09be\u09b0\u09c1 \u09aa\u0995\u09c7\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 7,
      "L": 14,
      "XL": 9,
      "XXL": 4
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "340 GSM FLEECE \u2744\ufe0f",
    "badgeBn": "\u09e9\u09ea\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ab\u09cd\u09b2\u09bf\u09b8 \u2744\ufe0f",
    "rating": 5.0,
    "reviewsCount": 72,
    "gsm": "340 GSM Heavy Thermal Fleece",
    "fabric": "100% Combed Cotton Face with Thermal Fleece Backing",
    "fabricBn": "\u09e7\u09e6\u09e6% \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u099f\u09a8 \u09ab\u09c7\u09b8 \u0993 \u09a5\u09be\u09b0\u09cd\u09ae\u09be\u09b2 \u09ab\u09cd\u09b2\u09bf\u09b8",
    "fit": "Heavy Boxy Winter Fit",
    "fitBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u0995\u09cd\u09b8\u09bf \u0989\u0987\u09a8\u09cd\u099f\u09be\u09b0 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-winter-04",
    "name": "Urban Beast Oversized Cyber Fleece Sweatshirt",
    "nameBn": "\u0993\u09ad\u09be\u09b0\u09b8\u09be\u0987\u099c\u09a1 \u09b8\u09be\u0987\u09ac\u09be\u09b0 \u09ab\u09cd\u09b2\u09bf\u09b8 \u09b8\u09cb\u09df\u09c7\u099f\u09b6\u09be\u09b0\u09cd\u099f",
    "category": "winter",
    "price": 1650,
    "originalPrice": 2100,
    "discountPercentage": 21,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/582477703_1358772809367156_9089671644866091721_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/582477703_1358772809367156_9089671644866091721_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/583205855_1358772716033832_4820578377638990899_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/583906467_1358772639367173_1452784304201901343_n.jpg"
    ],
    "description": "Crafted with 340+ GSM brushed interior heavyweight fleece. Double-layered thermal hood, heavy cotton drawstring with matte metal aglets, and reinforced pouch pocket.",
    "descriptionBn": "\u09e9\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ac\u09cd\u09b0\u09be\u09b6\u09a1 \u0987\u09a8\u09be\u09b0 \u09b9\u09c7\u09ad\u09bf\u0993\u09df\u09c7\u099f \u09ab\u09cd\u09b2\u09bf\u09b8\u0964 \u09a1\u09be\u09ac\u09b2 \u09b2\u09c7\u09df\u09be\u09b0\u09cd\u09a1 \u09b9\u09c1\u09a1, \u09ae\u09c7\u099f\u09be\u09b2 \u0985\u09cd\u09af\u09be\u0997\u09b2\u09c7\u099f \u09b8\u09b9 \u09b9\u09c7\u09ad\u09bf \u09a1\u09cd\u09b0-\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u0982 \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09cd\u09af\u09be\u0999\u09cd\u0997\u09be\u09b0\u09c1 \u09aa\u0995\u09c7\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 7,
      "L": 14,
      "XL": 9,
      "XXL": 4
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "340 GSM FLEECE \u2744\ufe0f",
    "badgeBn": "\u09e9\u09ea\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ab\u09cd\u09b2\u09bf\u09b8 \u2744\ufe0f",
    "rating": 5.0,
    "reviewsCount": 78,
    "gsm": "340 GSM Heavy Thermal Fleece",
    "fabric": "100% Combed Cotton Face with Thermal Fleece Backing",
    "fabricBn": "\u09e7\u09e6\u09e6% \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u099f\u09a8 \u09ab\u09c7\u09b8 \u0993 \u09a5\u09be\u09b0\u09cd\u09ae\u09be\u09b2 \u09ab\u09cd\u09b2\u09bf\u09b8",
    "fit": "Heavy Boxy Winter Fit",
    "fitBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u0995\u09cd\u09b8\u09bf \u0989\u0987\u09a8\u09cd\u099f\u09be\u09b0 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-winter-05",
    "name": "Urban Beast Insulated Track Windbreaker Outerwear",
    "nameBn": "\u0987\u09a8\u09b8\u09c1\u09b2\u09c7\u099f\u09c7\u09a1 \u099f\u09cd\u09b0\u09cd\u09af\u09be\u0995 \u0989\u0987\u09a8\u09cd\u09a1\u09ac\u09cd\u09b0\u09c7\u0995\u09be\u09b0 \u099c\u09cd\u09af\u09be\u0995\u09c7\u099f",
    "category": "winter",
    "price": 1950,
    "originalPrice": 2450,
    "discountPercentage": 20,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/582630033_1358799206031183_8817787549795621831_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/582630033_1358799206031183_8817787549795621831_n.jpg"
    ],
    "description": "Crafted with 340+ GSM brushed interior heavyweight fleece. Double-layered thermal hood, heavy cotton drawstring with matte metal aglets, and reinforced pouch pocket.",
    "descriptionBn": "\u09e9\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ac\u09cd\u09b0\u09be\u09b6\u09a1 \u0987\u09a8\u09be\u09b0 \u09b9\u09c7\u09ad\u09bf\u0993\u09df\u09c7\u099f \u09ab\u09cd\u09b2\u09bf\u09b8\u0964 \u09a1\u09be\u09ac\u09b2 \u09b2\u09c7\u09df\u09be\u09b0\u09cd\u09a1 \u09b9\u09c1\u09a1, \u09ae\u09c7\u099f\u09be\u09b2 \u0985\u09cd\u09af\u09be\u0997\u09b2\u09c7\u099f \u09b8\u09b9 \u09b9\u09c7\u09ad\u09bf \u09a1\u09cd\u09b0-\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u0982 \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09cd\u09af\u09be\u0999\u09cd\u0997\u09be\u09b0\u09c1 \u09aa\u0995\u09c7\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 7,
      "L": 14,
      "XL": 9,
      "XXL": 4
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "340 GSM FLEECE \u2744\ufe0f",
    "badgeBn": "\u09e9\u09ea\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ab\u09cd\u09b2\u09bf\u09b8 \u2744\ufe0f",
    "rating": 5.0,
    "reviewsCount": 84,
    "gsm": "340 GSM Heavy Thermal Fleece",
    "fabric": "100% Combed Cotton Face with Thermal Fleece Backing",
    "fabricBn": "\u09e7\u09e6\u09e6% \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u099f\u09a8 \u09ab\u09c7\u09b8 \u0993 \u09a5\u09be\u09b0\u09cd\u09ae\u09be\u09b2 \u09ab\u09cd\u09b2\u09bf\u09b8",
    "fit": "Heavy Boxy Winter Fit",
    "fitBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u0995\u09cd\u09b8\u09bf \u0989\u0987\u09a8\u09cd\u099f\u09be\u09b0 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-winter-06",
    "name": "Urban Beast Vintage Washed Heavy Crewneck",
    "nameBn": "\u09ad\u09bf\u09a8\u09cd\u099f\u09c7\u099c \u0993\u09df\u09be\u09b6\u09a1 \u09b9\u09c7\u09ad\u09bf \u0995\u09cd\u09b0\u09c1-\u09a8\u09c7\u0995",
    "category": "winter",
    "price": 1650,
    "originalPrice": 2100,
    "discountPercentage": 21,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/594166371_1373195781258192_8601423378106249904_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/594166371_1373195781258192_8601423378106249904_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/595443906_1373195851258185_6402525899891378995_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/595452326_1373195964591507_3217349169711359790_n.jpg"
    ],
    "description": "Crafted with 340+ GSM brushed interior heavyweight fleece. Double-layered thermal hood, heavy cotton drawstring with matte metal aglets, and reinforced pouch pocket.",
    "descriptionBn": "\u09e9\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ac\u09cd\u09b0\u09be\u09b6\u09a1 \u0987\u09a8\u09be\u09b0 \u09b9\u09c7\u09ad\u09bf\u0993\u09df\u09c7\u099f \u09ab\u09cd\u09b2\u09bf\u09b8\u0964 \u09a1\u09be\u09ac\u09b2 \u09b2\u09c7\u09df\u09be\u09b0\u09cd\u09a1 \u09b9\u09c1\u09a1, \u09ae\u09c7\u099f\u09be\u09b2 \u0985\u09cd\u09af\u09be\u0997\u09b2\u09c7\u099f \u09b8\u09b9 \u09b9\u09c7\u09ad\u09bf \u09a1\u09cd\u09b0-\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u0982 \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09cd\u09af\u09be\u0999\u09cd\u0997\u09be\u09b0\u09c1 \u09aa\u0995\u09c7\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 7,
      "L": 14,
      "XL": 9,
      "XXL": 4
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "340 GSM FLEECE \u2744\ufe0f",
    "badgeBn": "\u09e9\u09ea\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ab\u09cd\u09b2\u09bf\u09b8 \u2744\ufe0f",
    "rating": 5.0,
    "reviewsCount": 90,
    "gsm": "340 GSM Heavy Thermal Fleece",
    "fabric": "100% Combed Cotton Face with Thermal Fleece Backing",
    "fabricBn": "\u09e7\u09e6\u09e6% \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u099f\u09a8 \u09ab\u09c7\u09b8 \u0993 \u09a5\u09be\u09b0\u09cd\u09ae\u09be\u09b2 \u09ab\u09cd\u09b2\u09bf\u09b8",
    "fit": "Heavy Boxy Winter Fit",
    "fitBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u0995\u09cd\u09b8\u09bf \u0989\u0987\u09a8\u09cd\u099f\u09be\u09b0 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-winter-07",
    "name": "Urban Beast Stealth Fleece Zip-Up Hoodie",
    "nameBn": "\u09b8\u09cd\u099f\u09bf\u09b2\u09a5 \u09ab\u09cd\u09b2\u09bf\u09b8 \u099c\u09bf\u09aa-\u0986\u09aa \u09b9\u09c1\u09a1\u09bf",
    "category": "winter",
    "price": 1950,
    "originalPrice": 2500,
    "discountPercentage": 22,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/611661014_1399291071981996_4767407141529107759_n.jpg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/611661014_1399291071981996_4767407141529107759_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/611970052_1399291171981986_2797693768153195072_n.jpg",
      "/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/612198000_1399291131981990_6825631921387332053_n.jpg"
    ],
    "description": "Crafted with 340+ GSM brushed interior heavyweight fleece. Double-layered thermal hood, heavy cotton drawstring with matte metal aglets, and reinforced pouch pocket.",
    "descriptionBn": "\u09e9\u09ea\u09e6+ \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ac\u09cd\u09b0\u09be\u09b6\u09a1 \u0987\u09a8\u09be\u09b0 \u09b9\u09c7\u09ad\u09bf\u0993\u09df\u09c7\u099f \u09ab\u09cd\u09b2\u09bf\u09b8\u0964 \u09a1\u09be\u09ac\u09b2 \u09b2\u09c7\u09df\u09be\u09b0\u09cd\u09a1 \u09b9\u09c1\u09a1, \u09ae\u09c7\u099f\u09be\u09b2 \u0985\u09cd\u09af\u09be\u0997\u09b2\u09c7\u099f \u09b8\u09b9 \u09b9\u09c7\u09ad\u09bf \u09a1\u09cd\u09b0-\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u0982 \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09cd\u09af\u09be\u0999\u09cd\u0997\u09be\u09b0\u09c1 \u09aa\u0995\u09c7\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 7,
      "L": 14,
      "XL": 9,
      "XXL": 4
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "340 GSM FLEECE \u2744\ufe0f",
    "badgeBn": "\u09e9\u09ea\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09ab\u09cd\u09b2\u09bf\u09b8 \u2744\ufe0f",
    "rating": 5.0,
    "reviewsCount": 96,
    "gsm": "340 GSM Heavy Thermal Fleece",
    "fabric": "100% Combed Cotton Face with Thermal Fleece Backing",
    "fabricBn": "\u09e7\u09e6\u09e6% \u0995\u09ae\u09cd\u09ac\u09a1 \u0995\u099f\u09a8 \u09ab\u09c7\u09b8 \u0993 \u09a5\u09be\u09b0\u09cd\u09ae\u09be\u09b2 \u09ab\u09cd\u09b2\u09bf\u09b8",
    "fit": "Heavy Boxy Winter Fit",
    "fitBn": "\u09b9\u09c7\u09ad\u09bf \u09ac\u0995\u09cd\u09b8\u09bf \u0989\u0987\u09a8\u09cd\u099f\u09be\u09b0 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-bottom-01",
    "name": "Urban Beast Heavy Terry Cargo Shorts \u2014 Matte Black",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u099f\u09c7\u09b0\u09bf \u0995\u09be\u09b0\u09cd\u0997\u09cb \u09b6\u09b0\u09cd\u099f\u09b8 \u2014 \u09ae\u09cd\u09af\u09be\u099f \u09ac\u09cd\u09b2\u09cd\u09af\u09be\u0995",
    "category": "bottoms",
    "price": 890,
    "originalPrice": 1150,
    "discountPercentage": 22,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/749330050_2108073290131566_520689803955437091_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/749330050_2108073290131566_520689803955437091_n.jpeg"
    ],
    "description": "Engineered with 280 GSM heavy French Terry and reinforced utility cargo pockets. Elastic waistband with chunky branded drawstrings and deep drop pockets.",
    "descriptionBn": "\u09e8\u09ee\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09b9\u09c7\u09ad\u09bf \u09ab\u09cd\u09b0\u09c7\u099e\u09cd\u099a \u099f\u09c7\u09b0\u09bf \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09be\u09b0\u09cd\u0997\u09cb \u09aa\u0995\u09c7\u099f\u0964 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u0987\u09b2\u09be\u09b8\u09cd\u099f\u09bf\u0995 \u0995\u09cb\u09ae\u09b0\u09ac\u09a8\u09cd\u09a7 \u0993 \u099f\u09c7\u0995\u09b8\u0987 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 12,
      "L": 16,
      "XL": 8,
      "XXL": 3
    },
    "inStock": true,
    "featured": true,
    "isClearance": false,
    "badge": "STREET UTILITY",
    "badgeBn": "\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u0987\u0989\u099f\u09bf\u09b2\u09bf\u099f\u09bf",
    "rating": 4.8,
    "reviewsCount": 31,
    "gsm": "280 GSM Heavy French Terry",
    "fabric": "100% Dense Terry Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09a1\u09c7\u09a8\u09b8 \u099f\u09c7\u09b0\u09bf \u0995\u099f\u09a8",
    "fit": "Relaxed Street Fit",
    "fitBn": "\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-bottom-02",
    "name": "Urban Beast Multi-Pocket Tactical Street Cargo Shorts",
    "nameBn": "\u09ae\u09be\u09b2\u09cd\u099f\u09bf-\u09aa\u0995\u09c7\u099f \u099f\u09cd\u09af\u09be\u0995\u099f\u09bf\u0995\u09cd\u09af\u09be\u09b2 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u09b6\u09b0\u09cd\u099f\u09b8",
    "category": "bottoms",
    "price": 950,
    "originalPrice": 1250,
    "discountPercentage": 24,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/750312575_891961033459258_8625954412547406243_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/750312575_891961033459258_8625954412547406243_n.jpeg"
    ],
    "description": "Engineered with 280 GSM heavy French Terry and reinforced utility cargo pockets. Elastic waistband with chunky branded drawstrings and deep drop pockets.",
    "descriptionBn": "\u09e8\u09ee\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09b9\u09c7\u09ad\u09bf \u09ab\u09cd\u09b0\u09c7\u099e\u09cd\u099a \u099f\u09c7\u09b0\u09bf \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09be\u09b0\u09cd\u0997\u09cb \u09aa\u0995\u09c7\u099f\u0964 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u0987\u09b2\u09be\u09b8\u09cd\u099f\u09bf\u0995 \u0995\u09cb\u09ae\u09b0\u09ac\u09a8\u09cd\u09a7 \u0993 \u099f\u09c7\u0995\u09b8\u0987 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 12,
      "L": 16,
      "XL": 8,
      "XXL": 3
    },
    "inStock": true,
    "featured": true,
    "isClearance": false,
    "badge": "STREET UTILITY",
    "badgeBn": "\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u0987\u0989\u099f\u09bf\u09b2\u09bf\u099f\u09bf",
    "rating": 4.8,
    "reviewsCount": 34,
    "gsm": "280 GSM Heavy French Terry",
    "fabric": "100% Dense Terry Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09a1\u09c7\u09a8\u09b8 \u099f\u09c7\u09b0\u09bf \u0995\u099f\u09a8",
    "fit": "Relaxed Street Fit",
    "fitBn": "\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-bottom-03",
    "name": "Urban Beast Heavy French Terry Relaxed Sweatshorts",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u09ab\u09cd\u09b0\u09c7\u099e\u09cd\u099a \u099f\u09c7\u09b0\u09bf \u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09b6\u09b0\u09cd\u099f\u09b8",
    "category": "bottoms",
    "price": 850,
    "originalPrice": 1100,
    "discountPercentage": 22,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/752653253_27484442677886190_8677244735692270139_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/752653253_27484442677886190_8677244735692270139_n.jpeg"
    ],
    "description": "Engineered with 280 GSM heavy French Terry and reinforced utility cargo pockets. Elastic waistband with chunky branded drawstrings and deep drop pockets.",
    "descriptionBn": "\u09e8\u09ee\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09b9\u09c7\u09ad\u09bf \u09ab\u09cd\u09b0\u09c7\u099e\u09cd\u099a \u099f\u09c7\u09b0\u09bf \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09be\u09b0\u09cd\u0997\u09cb \u09aa\u0995\u09c7\u099f\u0964 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u0987\u09b2\u09be\u09b8\u09cd\u099f\u09bf\u0995 \u0995\u09cb\u09ae\u09b0\u09ac\u09a8\u09cd\u09a7 \u0993 \u099f\u09c7\u0995\u09b8\u0987 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 12,
      "L": 16,
      "XL": 8,
      "XXL": 3
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "STREET UTILITY",
    "badgeBn": "\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u0987\u0989\u099f\u09bf\u09b2\u09bf\u099f\u09bf",
    "rating": 4.8,
    "reviewsCount": 37,
    "gsm": "280 GSM Heavy French Terry",
    "fabric": "100% Dense Terry Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09a1\u09c7\u09a8\u09b8 \u099f\u09c7\u09b0\u09bf \u0995\u099f\u09a8",
    "fit": "Relaxed Street Fit",
    "fitBn": "\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-bottom-04",
    "name": "Urban Beast Cyber Utility Cargo Track Pants",
    "nameBn": "\u09b8\u09be\u0987\u09ac\u09be\u09b0 \u0987\u0989\u099f\u09bf\u09b2\u09bf\u099f\u09bf \u0995\u09be\u09b0\u09cd\u0997\u09cb \u099f\u09cd\u09b0\u09cd\u09af\u09be\u0995 \u09aa\u09cd\u09af\u09be\u09a8\u09cd\u099f",
    "category": "bottoms",
    "price": 1250,
    "originalPrice": 1600,
    "discountPercentage": 21,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/753729797_2232024724301135_1415459598512756199_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/753729797_2232024724301135_1415459598512756199_n.jpeg"
    ],
    "description": "Engineered with 280 GSM heavy French Terry and reinforced utility cargo pockets. Elastic waistband with chunky branded drawstrings and deep drop pockets.",
    "descriptionBn": "\u09e8\u09ee\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09b9\u09c7\u09ad\u09bf \u09ab\u09cd\u09b0\u09c7\u099e\u09cd\u099a \u099f\u09c7\u09b0\u09bf \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09be\u09b0\u09cd\u0997\u09cb \u09aa\u0995\u09c7\u099f\u0964 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u0987\u09b2\u09be\u09b8\u09cd\u099f\u09bf\u0995 \u0995\u09cb\u09ae\u09b0\u09ac\u09a8\u09cd\u09a7 \u0993 \u099f\u09c7\u0995\u09b8\u0987 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 12,
      "L": 16,
      "XL": 8,
      "XXL": 3
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "STREET UTILITY",
    "badgeBn": "\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u0987\u0989\u099f\u09bf\u09b2\u09bf\u099f\u09bf",
    "rating": 4.8,
    "reviewsCount": 40,
    "gsm": "280 GSM Heavy French Terry",
    "fabric": "100% Dense Terry Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09a1\u09c7\u09a8\u09b8 \u099f\u09c7\u09b0\u09bf \u0995\u099f\u09a8",
    "fit": "Relaxed Street Fit",
    "fitBn": "\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-bottom-05",
    "name": "Urban Beast Washed Grey Streetwear Sweatshorts",
    "nameBn": "\u0993\u09df\u09be\u09b6\u09a1 \u0997\u09cd\u09b0\u09c7 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b6\u09b0\u09cd\u099f\u09b8",
    "category": "bottoms",
    "price": 890,
    "originalPrice": 1150,
    "discountPercentage": 22,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/758671212_1057564420051003_3273252131006882705_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/758671212_1057564420051003_3273252131006882705_n.jpeg"
    ],
    "description": "Engineered with 280 GSM heavy French Terry and reinforced utility cargo pockets. Elastic waistband with chunky branded drawstrings and deep drop pockets.",
    "descriptionBn": "\u09e8\u09ee\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09b9\u09c7\u09ad\u09bf \u09ab\u09cd\u09b0\u09c7\u099e\u09cd\u099a \u099f\u09c7\u09b0\u09bf \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09be\u09b0\u09cd\u0997\u09cb \u09aa\u0995\u09c7\u099f\u0964 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u0987\u09b2\u09be\u09b8\u09cd\u099f\u09bf\u0995 \u0995\u09cb\u09ae\u09b0\u09ac\u09a8\u09cd\u09a7 \u0993 \u099f\u09c7\u0995\u09b8\u0987 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 12,
      "L": 16,
      "XL": 8,
      "XXL": 3
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "STREET UTILITY",
    "badgeBn": "\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u0987\u0989\u099f\u09bf\u09b2\u09bf\u099f\u09bf",
    "rating": 4.8,
    "reviewsCount": 43,
    "gsm": "280 GSM Heavy French Terry",
    "fabric": "100% Dense Terry Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09a1\u09c7\u09a8\u09b8 \u099f\u09c7\u09b0\u09bf \u0995\u099f\u09a8",
    "fit": "Relaxed Street Fit",
    "fitBn": "\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-bottom-06",
    "name": "Urban Beast Deep Olive Tactical Cargo Shorts",
    "nameBn": "\u09a1\u09bf\u09aa \u0985\u09b2\u09bf\u09ad \u099f\u09cd\u09af\u09be\u0995\u099f\u09bf\u0995\u09cd\u09af\u09be\u09b2 \u0995\u09be\u09b0\u09cd\u0997\u09cb \u09b6\u09b0\u09cd\u099f\u09b8",
    "category": "bottoms",
    "price": 950,
    "originalPrice": 1250,
    "discountPercentage": 24,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/758778748_1052016284462169_2944180131942231374_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/758778748_1052016284462169_2944180131942231374_n.jpeg"
    ],
    "description": "Engineered with 280 GSM heavy French Terry and reinforced utility cargo pockets. Elastic waistband with chunky branded drawstrings and deep drop pockets.",
    "descriptionBn": "\u09e8\u09ee\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09b9\u09c7\u09ad\u09bf \u09ab\u09cd\u09b0\u09c7\u099e\u09cd\u099a \u099f\u09c7\u09b0\u09bf \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09be\u09b0\u09cd\u0997\u09cb \u09aa\u0995\u09c7\u099f\u0964 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u0987\u09b2\u09be\u09b8\u09cd\u099f\u09bf\u0995 \u0995\u09cb\u09ae\u09b0\u09ac\u09a8\u09cd\u09a7 \u0993 \u099f\u09c7\u0995\u09b8\u0987 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 12,
      "L": 16,
      "XL": 8,
      "XXL": 3
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "STREET UTILITY",
    "badgeBn": "\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u0987\u0989\u099f\u09bf\u09b2\u09bf\u099f\u09bf",
    "rating": 4.8,
    "reviewsCount": 46,
    "gsm": "280 GSM Heavy French Terry",
    "fabric": "100% Dense Terry Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09a1\u09c7\u09a8\u09b8 \u099f\u09c7\u09b0\u09bf \u0995\u099f\u09a8",
    "fit": "Relaxed Street Fit",
    "fitBn": "\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-bottom-07",
    "name": "Urban Beast Heavy Cotton Drawstring Street Shorts",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u0995\u099f\u09a8 \u09a1\u09cd\u09b0-\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u0982 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u09b6\u09b0\u09cd\u099f\u09b8",
    "category": "bottoms",
    "price": 850,
    "originalPrice": 1100,
    "discountPercentage": 22,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/759809897_1052492830612232_4007226869004105870_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/759809897_1052492830612232_4007226869004105870_n.jpeg"
    ],
    "description": "Engineered with 280 GSM heavy French Terry and reinforced utility cargo pockets. Elastic waistband with chunky branded drawstrings and deep drop pockets.",
    "descriptionBn": "\u09e8\u09ee\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09b9\u09c7\u09ad\u09bf \u09ab\u09cd\u09b0\u09c7\u099e\u09cd\u099a \u099f\u09c7\u09b0\u09bf \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09be\u09b0\u09cd\u0997\u09cb \u09aa\u0995\u09c7\u099f\u0964 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u0987\u09b2\u09be\u09b8\u09cd\u099f\u09bf\u0995 \u0995\u09cb\u09ae\u09b0\u09ac\u09a8\u09cd\u09a7 \u0993 \u099f\u09c7\u0995\u09b8\u0987 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 12,
      "L": 16,
      "XL": 8,
      "XXL": 3
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "STREET UTILITY",
    "badgeBn": "\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u0987\u0989\u099f\u09bf\u09b2\u09bf\u099f\u09bf",
    "rating": 4.8,
    "reviewsCount": 49,
    "gsm": "280 GSM Heavy French Terry",
    "fabric": "100% Dense Terry Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09a1\u09c7\u09a8\u09b8 \u099f\u09c7\u09b0\u09bf \u0995\u099f\u09a8",
    "fit": "Relaxed Street Fit",
    "fitBn": "\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-bottom-08",
    "name": "Urban Beast Urban Explorer Cargo Bottoms",
    "nameBn": "\u0986\u09b0\u09ac\u09be\u09a8 \u098f\u0995\u09cd\u09b8\u09aa\u09cd\u09b2\u09cb\u09b0\u09be\u09b0 \u0995\u09be\u09b0\u09cd\u0997\u09cb \u09ac\u099f\u09ae\u09b8",
    "category": "bottoms",
    "price": 1290,
    "originalPrice": 1650,
    "discountPercentage": 21,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/760285915_1343558990761291_8572354179788036903_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/760285915_1343558990761291_8572354179788036903_n.jpeg"
    ],
    "description": "Engineered with 280 GSM heavy French Terry and reinforced utility cargo pockets. Elastic waistband with chunky branded drawstrings and deep drop pockets.",
    "descriptionBn": "\u09e8\u09ee\u09e6 \u099c\u09bf\u098f\u09b8\u098f\u09ae \u09b9\u09c7\u09ad\u09bf \u09ab\u09cd\u09b0\u09c7\u099e\u09cd\u099a \u099f\u09c7\u09b0\u09bf \u098f\u09ac\u0982 \u09ae\u099c\u09ac\u09c1\u09a4 \u0995\u09be\u09b0\u09cd\u0997\u09cb \u09aa\u0995\u09c7\u099f\u0964 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u0987\u09b2\u09be\u09b8\u09cd\u099f\u09bf\u0995 \u0995\u09cb\u09ae\u09b0\u09ac\u09a8\u09cd\u09a7 \u0993 \u099f\u09c7\u0995\u09b8\u0987 \u09b8\u09cd\u099f\u09bf\u099a\u09bf\u0982\u0964",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 12,
      "L": 16,
      "XL": 8,
      "XXL": 3
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "STREET UTILITY",
    "badgeBn": "\u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u0987\u0989\u099f\u09bf\u09b2\u09bf\u099f\u09bf",
    "rating": 4.8,
    "reviewsCount": 52,
    "gsm": "280 GSM Heavy French Terry",
    "fabric": "100% Dense Terry Cotton",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09a1\u09c7\u09a8\u09b8 \u099f\u09c7\u09b0\u09bf \u0995\u099f\u09a8",
    "fit": "Relaxed Street Fit",
    "fitBn": "\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09a1 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-head-01",
    "name": "Urban Beast 3D Embroidered Snapback Cap \u2014 Pitch Black",
    "nameBn": "\u09a5\u09cd\u09b0\u09bf\u09a1\u09bf \u098f\u09ae\u09ac\u09cd\u09b0\u09af\u09bc\u09a1\u09be\u09b0\u09cd\u09a1 \u09b8\u09cd\u09a8\u09cd\u09af\u09be\u09aa\u09ac\u09cd\u09af\u09be\u0995 \u0995\u09cd\u09af\u09be\u09aa \u2014 \u09aa\u09bf\u099a \u09ac\u09cd\u09b2\u09cd\u09af\u09be\u0995",
    "category": "headgear",
    "price": 590,
    "originalPrice": 790,
    "discountPercentage": 25,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/776578647_2256096388305321_3795716868440738241_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/776578647_2256096388305321_3795716868440738241_n.jpeg"
    ],
    "description": "Constructed from 100% heavy cotton twill with high-density 3D puff embroidery. Structured 6-panel crown and adjustable brass buckle strapback closure.",
    "descriptionBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2 \u0993 \u09b9\u09be\u0987-\u09a1\u09c7\u09a8\u09b8\u09bf\u099f\u09bf \u09a5\u09cd\u09b0\u09bf\u09a1\u09bf \u09aa\u09be\u09ab \u098f\u09ae\u09ac\u09cd\u09b0\u09df\u09a1\u09be\u09b0\u09bf\u0964 \u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09b8\u09cd\u099f\u09cd\u09b0\u09cd\u09af\u09be\u09aa\u09ac\u09cd\u09af\u09be\u0995 \u0995\u09cd\u09b2\u09cb\u099c\u09be\u09b0 \u09b8\u09b9 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u09ab\u09bf\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 20,
      "L": 25,
      "XL": 15,
      "XXL": 0
    },
    "inStock": true,
    "featured": true,
    "isClearance": false,
    "badge": "HEADWEAR DROP",
    "badgeBn": "\u09b9\u09c7\u09a1\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09a1\u09cd\u09b0\u09aa",
    "rating": 4.9,
    "reviewsCount": 44,
    "gsm": "Heavy Structured Cotton Twill",
    "fabric": "100% Heavy Structured Cotton Twill",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u09b8\u09cd\u099f\u09cd\u09b0\u09be\u0995\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2",
    "fit": "Adjustable 6-Panel Standard Fit",
    "fitBn": "\u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09ec-\u09aa\u09cd\u09af\u09be\u09a8\u09c7\u09b2 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-head-02",
    "name": "Urban Beast Heavy Twill Street Dad Hat \u2014 Washed Charcoal",
    "nameBn": "\u09b9\u09c7\u09ad\u09bf \u099f\u09c1\u0987\u09b2 \u09a1\u09cd\u09af\u09be\u09a1 \u09b9\u09cd\u09af\u09be\u099f \u2014 \u0993\u09df\u09be\u09b6\u09a1 \u099a\u09be\u09b0\u0995\u09cb\u09b2",
    "category": "headgear",
    "price": 550,
    "originalPrice": 750,
    "discountPercentage": 26,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/777800934_1073759462244689_1027120820096293825_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/777800934_1073759462244689_1027120820096293825_n.jpeg"
    ],
    "description": "Constructed from 100% heavy cotton twill with high-density 3D puff embroidery. Structured 6-panel crown and adjustable brass buckle strapback closure.",
    "descriptionBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2 \u0993 \u09b9\u09be\u0987-\u09a1\u09c7\u09a8\u09b8\u09bf\u099f\u09bf \u09a5\u09cd\u09b0\u09bf\u09a1\u09bf \u09aa\u09be\u09ab \u098f\u09ae\u09ac\u09cd\u09b0\u09df\u09a1\u09be\u09b0\u09bf\u0964 \u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09b8\u09cd\u099f\u09cd\u09b0\u09cd\u09af\u09be\u09aa\u09ac\u09cd\u09af\u09be\u0995 \u0995\u09cd\u09b2\u09cb\u099c\u09be\u09b0 \u09b8\u09b9 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u09ab\u09bf\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 20,
      "L": 25,
      "XL": 15,
      "XXL": 0
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "HEADWEAR DROP",
    "badgeBn": "\u09b9\u09c7\u09a1\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09a1\u09cd\u09b0\u09aa",
    "rating": 4.9,
    "reviewsCount": 48,
    "gsm": "Heavy Structured Cotton Twill",
    "fabric": "100% Heavy Structured Cotton Twill",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u09b8\u09cd\u099f\u09cd\u09b0\u09be\u0995\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2",
    "fit": "Adjustable 6-Panel Standard Fit",
    "fitBn": "\u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09ec-\u09aa\u09cd\u09af\u09be\u09a8\u09c7\u09b2 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-head-03",
    "name": "Urban Beast Cyber Tokyo Embroidered Cap \u2014 Sand",
    "nameBn": "\u09b8\u09be\u0987\u09ac\u09be\u09b0 \u099f\u09cb\u0995\u09bf\u0993 \u098f\u09ae\u09ac\u09cd\u09b0\u09af\u09bc\u09a1\u09be\u09b0\u09cd\u09a1 \u0995\u09cd\u09af\u09be\u09aa \u2014 \u09b8\u09cd\u09af\u09be\u09a8\u09cd\u09a1",
    "category": "headgear",
    "price": 590,
    "originalPrice": 790,
    "discountPercentage": 25,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/777868138_1553820988999272_1727264265616236575_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/777868138_1553820988999272_1727264265616236575_n.jpeg"
    ],
    "description": "Constructed from 100% heavy cotton twill with high-density 3D puff embroidery. Structured 6-panel crown and adjustable brass buckle strapback closure.",
    "descriptionBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2 \u0993 \u09b9\u09be\u0987-\u09a1\u09c7\u09a8\u09b8\u09bf\u099f\u09bf \u09a5\u09cd\u09b0\u09bf\u09a1\u09bf \u09aa\u09be\u09ab \u098f\u09ae\u09ac\u09cd\u09b0\u09df\u09a1\u09be\u09b0\u09bf\u0964 \u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09b8\u09cd\u099f\u09cd\u09b0\u09cd\u09af\u09be\u09aa\u09ac\u09cd\u09af\u09be\u0995 \u0995\u09cd\u09b2\u09cb\u099c\u09be\u09b0 \u09b8\u09b9 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u09ab\u09bf\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 20,
      "L": 25,
      "XL": 15,
      "XXL": 0
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "HEADWEAR DROP",
    "badgeBn": "\u09b9\u09c7\u09a1\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09a1\u09cd\u09b0\u09aa",
    "rating": 4.9,
    "reviewsCount": 52,
    "gsm": "Heavy Structured Cotton Twill",
    "fabric": "100% Heavy Structured Cotton Twill",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u09b8\u09cd\u099f\u09cd\u09b0\u09be\u0995\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2",
    "fit": "Adjustable 6-Panel Standard Fit",
    "fitBn": "\u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09ec-\u09aa\u09cd\u09af\u09be\u09a8\u09c7\u09b2 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-head-04",
    "name": "Urban Beast Underground Beast Snapback \u2014 Midnight",
    "nameBn": "\u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09be\u0989\u09a8\u09cd\u09a1 \u09ac\u09bf\u09b8\u09cd\u099f \u09b8\u09cd\u09a8\u09cd\u09af\u09be\u09aa\u09ac\u09cd\u09af\u09be\u0995 \u2014 \u09ae\u09bf\u09a1\u09a8\u09be\u0987\u099f",
    "category": "headgear",
    "price": 590,
    "originalPrice": 790,
    "discountPercentage": 25,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/778160013_1072965512148838_8849636066557589578_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/778160013_1072965512148838_8849636066557589578_n.jpeg"
    ],
    "description": "Constructed from 100% heavy cotton twill with high-density 3D puff embroidery. Structured 6-panel crown and adjustable brass buckle strapback closure.",
    "descriptionBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2 \u0993 \u09b9\u09be\u0987-\u09a1\u09c7\u09a8\u09b8\u09bf\u099f\u09bf \u09a5\u09cd\u09b0\u09bf\u09a1\u09bf \u09aa\u09be\u09ab \u098f\u09ae\u09ac\u09cd\u09b0\u09df\u09a1\u09be\u09b0\u09bf\u0964 \u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09b8\u09cd\u099f\u09cd\u09b0\u09cd\u09af\u09be\u09aa\u09ac\u09cd\u09af\u09be\u0995 \u0995\u09cd\u09b2\u09cb\u099c\u09be\u09b0 \u09b8\u09b9 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u09ab\u09bf\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 20,
      "L": 25,
      "XL": 15,
      "XXL": 0
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "HEADWEAR DROP",
    "badgeBn": "\u09b9\u09c7\u09a1\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09a1\u09cd\u09b0\u09aa",
    "rating": 4.9,
    "reviewsCount": 56,
    "gsm": "Heavy Structured Cotton Twill",
    "fabric": "100% Heavy Structured Cotton Twill",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u09b8\u09cd\u099f\u09cd\u09b0\u09be\u0995\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2",
    "fit": "Adjustable 6-Panel Standard Fit",
    "fitBn": "\u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09ec-\u09aa\u09cd\u09af\u09be\u09a8\u09c7\u09b2 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-head-05",
    "name": "Urban Beast Minimalist Logo Baseball Cap \u2014 Olive",
    "nameBn": "\u09ae\u09bf\u09a8\u09bf\u09ae\u09be\u09b2\u09bf\u09b8\u09cd\u099f \u09ac\u09c7\u09b8\u09ac\u09b2 \u0995\u09cd\u09af\u09be\u09aa \u2014 \u0985\u09b2\u09bf\u09ad",
    "category": "headgear",
    "price": 550,
    "originalPrice": 750,
    "discountPercentage": 26,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/778729825_1047460991368613_4988234087362646394_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/778729825_1047460991368613_4988234087362646394_n.jpeg"
    ],
    "description": "Constructed from 100% heavy cotton twill with high-density 3D puff embroidery. Structured 6-panel crown and adjustable brass buckle strapback closure.",
    "descriptionBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2 \u0993 \u09b9\u09be\u0987-\u09a1\u09c7\u09a8\u09b8\u09bf\u099f\u09bf \u09a5\u09cd\u09b0\u09bf\u09a1\u09bf \u09aa\u09be\u09ab \u098f\u09ae\u09ac\u09cd\u09b0\u09df\u09a1\u09be\u09b0\u09bf\u0964 \u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09b8\u09cd\u099f\u09cd\u09b0\u09cd\u09af\u09be\u09aa\u09ac\u09cd\u09af\u09be\u0995 \u0995\u09cd\u09b2\u09cb\u099c\u09be\u09b0 \u09b8\u09b9 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u09ab\u09bf\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 20,
      "L": 25,
      "XL": 15,
      "XXL": 0
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "HEADWEAR DROP",
    "badgeBn": "\u09b9\u09c7\u09a1\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09a1\u09cd\u09b0\u09aa",
    "rating": 4.9,
    "reviewsCount": 60,
    "gsm": "Heavy Structured Cotton Twill",
    "fabric": "100% Heavy Structured Cotton Twill",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u09b8\u09cd\u099f\u09cd\u09b0\u09be\u0995\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2",
    "fit": "Adjustable 6-Panel Standard Fit",
    "fitBn": "\u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09ec-\u09aa\u09cd\u09af\u09be\u09a8\u09c7\u09b2 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-head-06",
    "name": "Urban Beast Beast Skull 3D Embroidered Cap",
    "nameBn": "\u09ac\u09bf\u09b8\u09cd\u099f \u09b8\u09cd\u0995\u09be\u09b2 \u09a5\u09cd\u09b0\u09bf\u09a1\u09bf \u098f\u09ae\u09ac\u09cd\u09b0\u09af\u09bc\u09a1\u09be\u09b0\u09cd\u09a1 \u0995\u09cd\u09af\u09be\u09aa",
    "category": "headgear",
    "price": 620,
    "originalPrice": 850,
    "discountPercentage": 27,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/778735969_1606841550785402_4474144104636669098_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/778735969_1606841550785402_4474144104636669098_n.jpeg"
    ],
    "description": "Constructed from 100% heavy cotton twill with high-density 3D puff embroidery. Structured 6-panel crown and adjustable brass buckle strapback closure.",
    "descriptionBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2 \u0993 \u09b9\u09be\u0987-\u09a1\u09c7\u09a8\u09b8\u09bf\u099f\u09bf \u09a5\u09cd\u09b0\u09bf\u09a1\u09bf \u09aa\u09be\u09ab \u098f\u09ae\u09ac\u09cd\u09b0\u09df\u09a1\u09be\u09b0\u09bf\u0964 \u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09b8\u09cd\u099f\u09cd\u09b0\u09cd\u09af\u09be\u09aa\u09ac\u09cd\u09af\u09be\u0995 \u0995\u09cd\u09b2\u09cb\u099c\u09be\u09b0 \u09b8\u09b9 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u09ab\u09bf\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 20,
      "L": 25,
      "XL": 15,
      "XXL": 0
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "HEADWEAR DROP",
    "badgeBn": "\u09b9\u09c7\u09a1\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09a1\u09cd\u09b0\u09aa",
    "rating": 4.9,
    "reviewsCount": 64,
    "gsm": "Heavy Structured Cotton Twill",
    "fabric": "100% Heavy Structured Cotton Twill",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u09b8\u09cd\u099f\u09cd\u09b0\u09be\u0995\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2",
    "fit": "Adjustable 6-Panel Standard Fit",
    "fitBn": "\u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09ec-\u09aa\u09cd\u09af\u09be\u09a8\u09c7\u09b2 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-head-07",
    "name": "Urban Beast Vintage Washed Cotton Strapback",
    "nameBn": "\u09ad\u09bf\u09a8\u09cd\u099f\u09c7\u099c \u0993\u09df\u09be\u09b6\u09a1 \u0995\u099f\u09a8 \u09b8\u09cd\u099f\u09cd\u09b0\u09cd\u09af\u09be\u09aa\u09ac\u09cd\u09af\u09be\u0995",
    "category": "headgear",
    "price": 550,
    "originalPrice": 750,
    "discountPercentage": 26,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/778872064_1428114752583738_320474091970537949_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/778872064_1428114752583738_320474091970537949_n.jpeg"
    ],
    "description": "Constructed from 100% heavy cotton twill with high-density 3D puff embroidery. Structured 6-panel crown and adjustable brass buckle strapback closure.",
    "descriptionBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2 \u0993 \u09b9\u09be\u0987-\u09a1\u09c7\u09a8\u09b8\u09bf\u099f\u09bf \u09a5\u09cd\u09b0\u09bf\u09a1\u09bf \u09aa\u09be\u09ab \u098f\u09ae\u09ac\u09cd\u09b0\u09df\u09a1\u09be\u09b0\u09bf\u0964 \u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09b8\u09cd\u099f\u09cd\u09b0\u09cd\u09af\u09be\u09aa\u09ac\u09cd\u09af\u09be\u0995 \u0995\u09cd\u09b2\u09cb\u099c\u09be\u09b0 \u09b8\u09b9 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u09ab\u09bf\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 20,
      "L": 25,
      "XL": 15,
      "XXL": 0
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "HEADWEAR DROP",
    "badgeBn": "\u09b9\u09c7\u09a1\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09a1\u09cd\u09b0\u09aa",
    "rating": 4.9,
    "reviewsCount": 68,
    "gsm": "Heavy Structured Cotton Twill",
    "fabric": "100% Heavy Structured Cotton Twill",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u09b8\u09cd\u099f\u09cd\u09b0\u09be\u0995\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2",
    "fit": "Adjustable 6-Panel Standard Fit",
    "fitBn": "\u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09ec-\u09aa\u09cd\u09af\u09be\u09a8\u09c7\u09b2 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-head-08",
    "name": "Urban Beast Tactical Utility Street Cap",
    "nameBn": "\u099f\u09cd\u09af\u09be\u0995\u099f\u09bf\u0995\u09cd\u09af\u09be\u09b2 \u0987\u0989\u099f\u09bf\u09b2\u09bf\u099f\u09bf \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u0995\u09cd\u09af\u09be\u09aa",
    "category": "headgear",
    "price": 590,
    "originalPrice": 790,
    "discountPercentage": 25,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/778967018_1735772157502351_4597901636990575027_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/778967018_1735772157502351_4597901636990575027_n.jpeg"
    ],
    "description": "Constructed from 100% heavy cotton twill with high-density 3D puff embroidery. Structured 6-panel crown and adjustable brass buckle strapback closure.",
    "descriptionBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2 \u0993 \u09b9\u09be\u0987-\u09a1\u09c7\u09a8\u09b8\u09bf\u099f\u09bf \u09a5\u09cd\u09b0\u09bf\u09a1\u09bf \u09aa\u09be\u09ab \u098f\u09ae\u09ac\u09cd\u09b0\u09df\u09a1\u09be\u09b0\u09bf\u0964 \u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09b8\u09cd\u099f\u09cd\u09b0\u09cd\u09af\u09be\u09aa\u09ac\u09cd\u09af\u09be\u0995 \u0995\u09cd\u09b2\u09cb\u099c\u09be\u09b0 \u09b8\u09b9 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u09ab\u09bf\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 20,
      "L": 25,
      "XL": 15,
      "XXL": 0
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "HEADWEAR DROP",
    "badgeBn": "\u09b9\u09c7\u09a1\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09a1\u09cd\u09b0\u09aa",
    "rating": 4.9,
    "reviewsCount": 72,
    "gsm": "Heavy Structured Cotton Twill",
    "fabric": "100% Heavy Structured Cotton Twill",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u09b8\u09cd\u099f\u09cd\u09b0\u09be\u0995\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2",
    "fit": "Adjustable 6-Panel Standard Fit",
    "fitBn": "\u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09ec-\u09aa\u09cd\u09af\u09be\u09a8\u09c7\u09b2 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-head-09",
    "name": "Urban Beast Signature Streetwear Trucker Hat",
    "nameBn": "\u09b8\u09bf\u0997\u09a8\u09c7\u099a\u09be\u09b0 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f \u099f\u09cd\u09b0\u09cd\u09af\u09be\u0995\u09be\u09b0 \u09b9\u09cd\u09af\u09be\u099f",
    "category": "headgear",
    "price": 590,
    "originalPrice": 790,
    "discountPercentage": 25,
    "image": "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/778972764_945847108554705_2092661330305873961_n.jpeg",
    "images": [
      "/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/778972764_945847108554705_2092661330305873961_n.jpeg"
    ],
    "description": "Constructed from 100% heavy cotton twill with high-density 3D puff embroidery. Structured 6-panel crown and adjustable brass buckle strapback closure.",
    "descriptionBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2 \u0993 \u09b9\u09be\u0987-\u09a1\u09c7\u09a8\u09b8\u09bf\u099f\u09bf \u09a5\u09cd\u09b0\u09bf\u09a1\u09bf \u09aa\u09be\u09ab \u098f\u09ae\u09ac\u09cd\u09b0\u09df\u09a1\u09be\u09b0\u09bf\u0964 \u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09b8\u09cd\u099f\u09cd\u09b0\u09cd\u09af\u09be\u09aa\u09ac\u09cd\u09af\u09be\u0995 \u0995\u09cd\u09b2\u09cb\u099c\u09be\u09b0 \u09b8\u09b9 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09df\u0995 \u09ab\u09bf\u099f\u0964",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": 0,
      "M": 20,
      "L": 25,
      "XL": 15,
      "XXL": 0
    },
    "inStock": true,
    "featured": false,
    "isClearance": false,
    "badge": "HEADWEAR DROP",
    "badgeBn": "\u09b9\u09c7\u09a1\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09a1\u09cd\u09b0\u09aa",
    "rating": 4.9,
    "reviewsCount": 76,
    "gsm": "Heavy Structured Cotton Twill",
    "fabric": "100% Heavy Structured Cotton Twill",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09b9\u09c7\u09ad\u09bf \u09b8\u09cd\u099f\u09cd\u09b0\u09be\u0995\u099a\u09be\u09b0\u09cd\u09a1 \u0995\u099f\u09a8 \u099f\u09c1\u0987\u09b2",
    "fit": "Adjustable 6-Panel Standard Fit",
    "fitBn": "\u0985\u09cd\u09af\u09be\u09a1\u099c\u09be\u09b8\u09cd\u099f\u09c7\u09ac\u09b2 \u09ec-\u09aa\u09cd\u09af\u09be\u09a8\u09c7\u09b2 \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-rm-jersey-01",
    "name": "Real Madrid Official Style 24/25 Away Player Jersey",
    "nameBn": "\u09b0\u09bf\u09af\u09bc\u09be\u09b2 \u09ae\u09be\u09a6\u09cd\u09b0\u09bf\u09a6 \u0985\u09ab\u09bf\u09b6\u09bf\u09af\u09bc\u09be\u09b2 \u09b8\u09cd\u099f\u09be\u0987\u09b2 \u09e8\u09ea/\u09e8\u09eb \u0985\u09cd\u09af\u09be\u0993\u09af\u09bc\u09c7 \u099c\u09be\u09b0\u09cd\u09b8\u09bf",
    "category": "jerseys",
    "price": 1350,
    "originalPrice": 1750,
    "discountPercentage": 23,
    "image": "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop"
    ],
    "description": "The iconic Real Madrid Fly Emirates aesthetic in a breathable player-grade micro-mesh fabric. Engineered for hot Dhaka summers with anti-sweat ventilation panels and heat-pressed silicon club crest.",
    "descriptionBn": "\u09b0\u09bf\u09af\u09bc\u09be\u09b2 \u09ae\u09be\u09a6\u09cd\u09b0\u09bf\u09a6 \u0995\u09cd\u09b2\u09be\u09ac\u09c7\u09b0 \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u09aa\u09cd\u09b2\u09c7\u09af\u09bc\u09be\u09b0 \u0997\u09cd\u09b0\u09c7\u09a1 \u09ae\u09be\u0987\u0995\u09cd\u09b0\u09cb-\u09ae\u09c7\u09b6 \u09ab\u09cd\u09af\u09be\u09ac\u09cd\u09b0\u09bf\u0995\u0964 \u0997\u09b0\u09ae\u09c7\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7\u0993 \u0986\u09b0\u09be\u09ae\u09a6\u09be\u09af\u09bc\u0995 \u09b8\u09bf\u09b2\u09bf\u0995\u09a8 \u0995\u09cd\u09b2\u09be\u09ac \u0995\u09cd\u09b0\u09c7\u09b8\u09cd\u099f \u09b8\u09b9 \u09a8\u09bf\u0996\u09c1\u0981\u09a4 \u09ab\u09bf\u09a8\u09bf\u09b6\u09bf\u0982\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 12,
      "M": 8,
      "L": 14,
      "XL": 6,
      "XXL": 3
    },
    "inStock": true,
    "featured": true,
    "badge": "HOT DROP \ud83d\udd25",
    "badgeBn": "\u09b9\u099f \u09a1\u09cd\u09b0\u09aa \ud83d\udd25",
    "rating": 4.9,
    "reviewsCount": 38,
    "gsm": "190 GSM Athletic Mesh",
    "fabric": "100% Breathable Recycled Poly-Mesh",
    "fabricBn": "\u09e7\u09e6\u09e6% \u09ac\u09cd\u09b0\u09c7\u09a5\u09c7\u09ac\u09b2 \u09b0\u09bf\u09b8\u09be\u0987\u0995\u09c7\u09b2\u09a1 \u09aa\u09b2\u09bf-\u09ae\u09c7\u09b6",
    "fit": "Athletic Slim Fit",
    "fitBn": "\u0985\u09cd\u09af\u09be\u09a5\u09b2\u09c7\u099f\u09bf\u0995 \u09b8\u09cd\u09b2\u09bf\u09ae \u09ab\u09bf\u099f"
  },
  {
    "id": "ub-barca-jersey-02",
    "name": "FC Barcelona 24/25 Retro Blaugrana Official Edition",
    "nameBn": "\u09ac\u09be\u09b0\u09cd\u09b8\u09c7\u09b2\u09cb\u09a8\u09be \u09e8\u09ea/\u09e8\u09eb \u09b0\u09c7\u099f\u09cd\u09b0\u09cb \u09ac\u09cd\u09b2\u09be\u0989\u0997\u09cd\u09b0\u09be\u09a8\u09be \u0985\u09ab\u09bf\u09b6\u09bf\u09af\u09bc\u09be\u09b2 \u098f\u09a1\u09bf\u09b6\u09a8",
    "category": "jerseys",
    "price": 1350,
    "originalPrice": 1750,
    "discountPercentage": 23,
    "image": "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1000&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1000&auto=format&fit=crop"
    ],
    "description": "Classic Blaugrana colors reimagined for modern streetwear styling. Pair it with our urban shorts or baggy denim for an elevated match-day or weekend fit.",
    "descriptionBn": "\u0995\u09cd\u09b2\u09be\u09b8\u09bf\u0995 \u09ac\u09cd\u09b2\u09be\u0989\u0997\u09cd\u09b0\u09be\u09a8\u09be \u09b8\u09cd\u099f\u09cd\u09b0\u09be\u0987\u09aa \u098f\u09ac\u0982 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u099f\u0993\u09df\u09cd\u09af\u09be\u09b0 \u09b2\u09c1\u0995\u0964 \u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u09b8\u09be\u09ae\u09be\u09b0 \u09b6\u09b0\u09cd\u099f\u09b8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u09ae\u09be\u09a8\u09be\u09a8\u09b8\u0987 \u09ae\u09cd\u09af\u09be\u099a-\u09a1\u09c7 \u0995\u09ae\u09cd\u09ac\u09cb\u0964",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": 9,
      "M": 15,
      "L": 11,
      "XL": 4,
      "XXL": 2
    },
    "inStock": true,
    "featured": true,
    "badge": "BESTSELLER \u2b50",
    "badgeBn": "\u09ac\u09c7\u09b8\u09cd\u099f\u09b8\u09c7\u09b2\u09be\u09b0 \u2b50",
    "rating": 5.0,
    "reviewsCount": 52,
    "gsm": "195 GSM Poly Athletic Mesh",
    "fabric": "100% Quick-Dry Polyester",
    "fabricBn": "\u09e7\u09e6\u09e6% \u0995\u09c1\u0987\u0995 \u09a1\u09cd\u09b0\u09be\u0987 \u09aa\u09b2\u09bf\u09af\u09bc\u09c7\u09b8\u09cd\u099f\u09be\u09b0",
    "fit": "Standard Regular Fit",
    "fitBn": "\u09b8\u09cd\u099f\u09cd\u09af\u09be\u09a8\u09cd\u09a1\u09be\u09b0\u09cd\u09a1 \u09b0\u09c7\u0997\u09c1\u09b2\u09be\u09b0 \u09ab\u09bf\u099f"
  }
];


export const initialReviews: Review[] = [
  {
    id: "rev-1",
    author: "Shakil Mahmud",
    rating: 5,
    date: "Yesterday",
    comment: "Bhaiya, t-shirt er fabric oshadharon! 240 GSM feel ta shottie heavy and structured. Dhaka delivery also arrived the very next day with Steadfast.",
    commentBn: "ভাইয়া, টি-শার্টের ফ্যাব্রিক অসাধারণ! ২৪০ জিএসএম ফিল সত্যি হেভি। পরের দিনই ঢাকার মধ্যে ডেলিভারি পেয়েছি।",
    verified: true,
    verifiedBuyer: true,
    itemPurchased: "Drop Shoulder Vol. IV",
    productName: "Urban Beast Cyber Skull Heavy Boxy Drop Tee",
    location: "Dhanmondi, Dhaka",
    likes: 19,
    fitFeedback: "Oversized boxy",
    image: "/assets/Customer%20Revires/596150329_1378337270744043_7763614323990505780_n.jpg"
  },
  {
    id: "rev-2",
    author: "Rashedul Karim",
    rating: 5,
    date: "2 days ago",
    comment: "Alhamdulilla best purchase! M size fits perfectly. Wash korar por o color ba collar kisu e nosto hoy nai.",
    commentBn: "আলহামদুলিল্লাহ সেরা পারচেজ! M সাইজ একদম নিখুঁত ফিট। ধোয়ার পরেও কালার নষ্ট হয়নি।",
    verified: true,
    verifiedBuyer: true,
    itemPurchased: "Heavy Basic Tee",
    productName: "Urban Beast Heavy Basic Tee — Washed Onyx Black",
    location: "Mirpur DOHS, Dhaka",
    likes: 24,
    fitFeedback: "True to size",
    image: "/assets/Customer%20Revires/601926830_1388922646352172_4135430899577593226_n.jpg"
  },
  {
    id: "rev-3",
    author: "Tanvir Ahmed",
    rating: 5,
    date: "4 days ago",
    comment: "Winter fleece hoodie is next level thick! 340 GSM feels like international streetwear brand.",
    commentBn: "উইন্টার ফ্লিস হুডি অত্যন্ত প্রিমিয়াম! ৩৪০ জিএসএম আন্তর্জাতিক ব্র্যান্ডের সমকক্ষ।",
    verified: true,
    verifiedBuyer: true,
    itemPurchased: "Fleece Hoodie",
    productName: "Urban Beast Heavy Brushed Fleece Hoodie — Jet Black",
    location: "Chittagong",
    likes: 31,
    fitFeedback: "Oversized boxy",
    image: "/assets/Customer%20Revires/603918116_1388922809685489_1597490337399726083_n.jpg"
  },
  {
    id: "rev-4",
    author: "Nafis Imtiaz",
    rating: 5,
    date: "1 week ago",
    comment: "Messenger order experience was so smooth. Highly recommend Urban Beast BD to everyone!",
    commentBn: "ফেসবুক মেসেঞ্জারে অর্ডার করার অভিজ্ঞতা খুব চমৎকার ছিল। সবাইকে রেকমেন্ড করছি!",
    verified: true,
    verifiedBuyer: true,
    itemPurchased: "Tactical Shorts",
    productName: "Urban Beast Heavy Terry Cargo Shorts — Matte Black",
    location: "Uttara, Dhaka",
    likes: 15,
    fitFeedback: "True to size",
    image: "/assets/Customer%20Revires/641645050_1439293127981790_1553523566866860303_n.jpg"
  }
];

export const sampleReviews = initialReviews;

export const sampleInitialOrders: Order[] = [
  {
    id: "ord-ub-1082",
    orderNumber: "UB-88219",
    items: [
      {
        product: initialProducts[0],
        selectedSize: "L",
        quantity: 1
      },
      {
        product: initialProducts[1] || initialProducts[0],
        selectedSize: "XL",
        quantity: 1
      }
    ],
    subtotal: 1940,
    deliveryFee: 70,
    discount: 100,
    couponCode: "BEAST10",
    totalAmount: 1910,
    customerInfo: {
      fullName: "Samiul Haque",
      phoneNumber: "01711223344",
      email: "samiul.hq@gmail.com",
      district: "Dhaka",
      address: "House 14, Road 7, Dhanmondi",
      deliveryZone: "inside_dhaka",
      notes: "Please call before arrival"
    },
    paymentMethod: "bkash",
    paymentDetails: {
      transactionId: "BK99X8102A",
      senderNumber: "01711223344",
      status: "paid",
      paidAt: "2025-02-28 15:30"
    },
    status: "processing",
    courierTracking: {
      provider: "Steadfast Courier",
      consignmentId: "ST-8829104",
      statusText: "Parcel Sorted at Tejgaon Hub — Out for Delivery Today",
      statusTextBn: "পার্সেল তেজগাঁও হাবে বাছাই সম্পন্ন — আজই ডেলিভারি হবে",
      history: [
        {
          time: "Today, 08:30 AM",
          title: "Out for Delivery",
          titleBn: "ডেলিভারির জন্য বের হয়েছে",
          location: "Dhanmondi Delivery Point, Dhaka"
        },
        {
          time: "Yesterday, 07:15 PM",
          title: "Arrived at Hub",
          titleBn: "হাবে পৌঁছেছে",
          location: "Tejgaon Central Sorting Facility"
        },
        {
          time: "Yesterday, 03:00 PM",
          title: "Picked up by Courier",
          titleBn: "কুরিয়ার গ্রহণ করেছে",
          location: "Urban Beast Warehouse, Dhaka"
        }
      ]
    },
    createdAt: "2025-02-28T09:30:00.000Z"
  },
  {
    id: "ord-ub-1081",
    orderNumber: "UB-88190",
    items: [
      {
        product: initialProducts[2] || initialProducts[0],
        selectedSize: "XL",
        quantity: 1
      }
    ],
    subtotal: 1850,
    deliveryFee: 130,
    discount: 0,
    totalAmount: 1980,
    customerInfo: {
      fullName: "Tanvir Ahmed",
      phoneNumber: "01819234567",
      email: "tanvir.ctg@yahoo.com",
      district: "Chittagong",
      address: "GEC Circle, Nasirabad Housing Society",
      deliveryZone: "outside_dhaka"
    },
    paymentMethod: "cod",
    paymentDetails: {
      status: "pending"
    },
    status: "shipped",
    courierTracking: {
      provider: "Steadfast Courier",
      consignmentId: "ST-8821034",
      statusText: "In Transit to Chittagong GEC Hub",
      statusTextBn: "চট্টগ্রাম জিইসি হাবের পথে ট্রানজিটে রয়েছে",
      history: [
        {
          time: "Yesterday, 10:00 PM",
          title: "Dispatched from Dhaka Hub",
          titleBn: "ঢাকা হাব থেকে পাঠানো হয়েছে",
          location: "Dhaka Central Transit"
        }
      ]
    },
    createdAt: "2025-02-27T14:15:00.000Z"
  }
];


