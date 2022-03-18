import BannerModel from "../models/BannerModel";
import ProductModel from '../models/ProductModel'

export const BANNER_DUMMY_DATA = [
  new BannerModel(1, "Cá nục", 30, 30/5/2021, 'https://image-us.24h.com.vn/upload/1-2019/images/2019-02-22/1550810773-63-loai-trung-ca-duoc-vi-nhu-3-1550800928-width640height401.jpg'),
  new BannerModel(2, "Tôm", 20, 30/5/2021, 'https://image-us.24h.com.vn/upload/1-2019/images/2019-02-22/1550810773-63-loai-trung-ca-duoc-vi-nhu-3-1550800928-width640height401.jpg'),
  new BannerModel(3, "Cua", 35, 30/5/2021, 'https://image-us.24h.com.vn/upload/1-2019/images/2019-02-22/1550810773-63-loai-trung-ca-duoc-vi-nhu-3-1550800928-width640height401.jpg'),
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