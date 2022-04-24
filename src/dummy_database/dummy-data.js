import BannerModel from "../models/BannerModel";
import ProductItemsModel from "../models/ProductItemsModel";
import ProductModel from '../models/ProductModel'

const IMAGE_TEMP=[
  'https://images.unsplash.com/photo-1609109238958-eb5130c99873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://myfoodbook.com.au/sites/default/files/styles/car_na/public/recipe_photo/Easy_As_Aussie_Seafood_Platter_vert%20copy.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Plateau_van_zeevruchten.jpg/300px-Plateau_van_zeevruchten.jpg',
  'https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
]

const primeImage = 'https://images.unsplash.com/photo-1609109238958-eb5130c99873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

export const BANNER_DUMMY_DATA = [
  new BannerModel(0, "Cá nục", 30, 30000, 'https://c8.alamy.com/comp/RCMM3B/raw-fish-sea-bass-on-slate-blackboard-ingredients-for-cooking-grill-baked-copy-space-banner-top-view-RCMM3B.jpg'),
  new BannerModel(1, "Tôm", 20, 50000, 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.saltys.com/wp-content/uploads/2018/02/kitchen-talk-blog-banner-700x400.jpg'),
  new BannerModel(2, "Cua", 35, 10000000, 'https://png.pngtree.com/background/20210711/original/pngtree-autumn-yangcheng-lake-hairy-crab-banner-poster-picture-image_1123311.jpg'),
]
export const PRODUCT_ITEMS_DUMMY_DATA = [
  new ProductItemsModel(1, 'Cá Bống', 390000, 29, 29, primeImage),
  new ProductItemsModel(2, 'Cá Bống', 390000, 29, 29, primeImage),
  new ProductItemsModel(3, 'Cá Bống', 390000, 29, 29, primeImage),
  new ProductItemsModel(4, 'Cá Bống', 390000, 29, 29, primeImage),
  new ProductItemsModel(5, 'Cá Bống', 390000, 29, 29, primeImage),
  new ProductItemsModel(6, 'Cá Bống', 390000, 29, 29, primeImage),
  new ProductItemsModel(7, 'Cá Bống', 390000, 29, 29, primeImage),
]
export const PRODUCT_DUMMY_DATA = [
  new ProductModel(1, 1, "Tôm Xanh", "Thơm ngon khó cưỡng", 200000, 20, 50, IMAGE_TEMP),
  new ProductModel(2, 1, "Cá hồi tươi", "Thơm ngon khó cưỡng", 200000, 30, 25, IMAGE_TEMP),
  new ProductModel(3, 1, "Tôm đỏ", "Thơm ngon khó cưỡng", 200000, 24, 65, IMAGE_TEMP),
  new ProductModel(4, 1, "Sư tử biển", "Thơm ngon khó cưỡng", 200000, 50, 17, IMAGE_TEMP),
  new ProductModel(5, 1, "hải cẩu", "Thơm ngon khó cưỡng", 200000, 25, 13, IMAGE_TEMP),
  new ProductModel(6, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 12, 18, IMAGE_TEMP),
  new ProductModel(7, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 42, 14, IMAGE_TEMP),
  new ProductModel(8, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 25, 35, IMAGE_TEMP),
  new ProductModel(9, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 52, 65, IMAGE_TEMP),
]

export const ONSALES_DUMMY_DATA = [
  new ProductModel(1, 1, 1, "Tôm Xanh", "Thơm ngon khó cưỡng", 200000, 20, 50),
  new ProductModel(2, 1, 1, "Cá hồi tươi", "Thơm ngon khó cưỡng", 200000, 30, 25),
  new ProductModel(3, 1, 1, "Tôm đỏ", "Thơm ngon khó cưỡng", 200000, 24, 65),
  new ProductModel(4, 1, 1, "Sư tử biển", "Thơm ngon khó cưỡng", 200000, 50, 17),
  new ProductModel(5, 2, 1, "hải cẩu", "Thơm ngon khó cưỡng", 200000, 25, 13),
  new ProductModel(6, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 12, 18),
  new ProductModel(7, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 42, 14),
  new ProductModel(8, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 25, 35),
  new ProductModel(9, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 52, 65),
]

export const BESTSELLER_DUMMY_DATA = [
  new ProductModel(1, 1, 1, "Tôm Xanh", "Thơm ngon khó cưỡng", 200000, 20, 50),
  new ProductModel(2, 1, 1, "Cá hồi tươi", "Thơm ngon khó cưỡng", 200000, 30, 25),
  new ProductModel(3, 1, 1, "Tôm đỏ", "Thơm ngon khó cưỡng", 200000, 24, 65),
  new ProductModel(4, 1, 1, "Sư tử biển", "Thơm ngon khó cưỡng", 200000, 50, 17),
  new ProductModel(5, 2, 1, "hải cẩu", "Thơm ngon khó cưỡng", 200000, 25, 13),
  new ProductModel(6, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 12, 18),
  new ProductModel(7, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 42, 14),
  new ProductModel(8, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 25, 35),
  new ProductModel(9, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 52, 65),
]
export const FORYOU_DUMMY_DATA = [
  new ProductModel(1, 1, 1, "Tôm Xanh", "Thơm ngon khó cưỡng", 200000, 20, 50),
  new ProductModel(2, 1, 1, "Cá hồi tươi", "Thơm ngon khó cưỡng", 200000, 30, 25),
  new ProductModel(3, 1, 1, "Tôm đỏ", "Thơm ngon khó cưỡng", 200000, 24, 65),
  new ProductModel(4, 1, 1, "Sư tử biển", "Thơm ngon khó cưỡng", 200000, 50, 17),
  new ProductModel(5, 2, 1, "hải cẩu", "Thơm ngon khó cưỡng", 200000, 25, 13),
  new ProductModel(6, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 12, 18),
  new ProductModel(7, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 42, 14),
  new ProductModel(8, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 25, 35),
  new ProductModel(9, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 52, 65),
]