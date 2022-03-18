import BannerModel from "../models/BannerModel";
import ProductModel from '../models/ProductModel'

export const BANNER_DUMMY_DATA = [
  new BannerModel(0, "Cá nục", 30, 30000, 'https://c8.alamy.com/comp/RCMM3B/raw-fish-sea-bass-on-slate-blackboard-ingredients-for-cooking-grill-baked-copy-space-banner-top-view-RCMM3B.jpg'),
  new BannerModel(1, "Tôm", 20, 50000, 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.saltys.com/wp-content/uploads/2018/02/kitchen-talk-blog-banner-700x400.jpg'),
  new BannerModel(2, "Cua", 35, 10000000, 'https://png.pngtree.com/background/20210711/original/pngtree-autumn-yangcheng-lake-hairy-crab-banner-poster-picture-image_1123311.jpg'),
]

export const PRODUCT_DUMMY_DATA = [
  new ProductModel(1, 1, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 20, 50),
  new ProductModel(2, 1, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 30, 25),
  new ProductModel(3, 1, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 24, 65),
  new ProductModel(4, 1, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 50, 17),
  new ProductModel(5, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 25, 13),
  new ProductModel(6, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 12, 18),
  new ProductModel(7, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 42, 14),
  new ProductModel(8, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 25, 35),
  new ProductModel(9, 2, 1, "Trứng cá", "Thơm ngon khó cưỡng", 200000, 52, 65),
]