export type ShopType = {
  act_tag: number;
  activities: {
    attribute: string;
    description: string;
    icon_color: string;
    icon_name: string;
    id: number;
    is_exclusive_with_food_activity?: boolean;
    name: string;
    tips: string;
    type?: number;
  }[];
  address: string;
  albums: {
    count: number;
    cover_image_hash: string;
    name: string;
    photos: {
      id: number;
      image_hash: string;
      type: string;
    }[];
  }[];
  authentic_id: number;
  business_info: string;
  delivery_fee_discount: number;
  delivery_mode: {
    border: string;
    color: string;
    gradient: {
      rgb_from: string;
      rgb_to: string;
    };
    icon_hash: string;
    id: number;
    is_solid: boolean;
    text: string;
    text_color: string;
  };
  description: string;
  distance: number;
  favored: boolean;
  flavors: {
    id: number;
    name: string;
  }[];
  float_delivery_fee: number;
  float_minimum_order_amount: number;
  has_story: boolean;
  id: string;
  image_path: string;
  is_new: boolean;
  is_premium: boolean;
  is_star: boolean;
  is_stock_empty: number;
  is_valid: number;
  latitude: number;
  longitude: number;
  max_applied_quantity_per_order: number;
  name: string;
  next_business_time: string;
  only_use_poi: boolean;
  opening_hours: string[];
  order_lead_time: number;
  out_of_range: boolean;
  phone: string;
  piecewise_agent_fee: {
    description: string;
    extra_fee: number;
    is_extra: boolean;
    no_subsidy_fee: string;
    rules: {
      fee: number;
      price: number;
    }[];
    tips: string;
  };
  platform: number;
  posters: {
    id: number;
    image_hash: string;
    name: string;
    type: number;
    url: string;
  }[];
  promotion_info: string;
  qualification: {
    link: string;
  };
  rating: number;
  rating_count: number;
  recent_order_num: number;
  recommend: {
    color: string;
    image_hash: string;
    is_ad: boolean;
    reason: string;
  };
  recommend_reasons: {
    name: string;
  }[];
  regular_customer_count: number;
  scheme: string;
  shop_sign: {
    brand_story: string;
    image_hash: string;
  };
  status: number;
  support_tags: {
    border: string;
    color: string;
    icon: string;
    text: string;
    type: number;
  }[];
  supports: {
    border: string;
    description: string;
    icon_color: string;
    icon_name: string;
    id: number;
    name: string;
    text_color: string;
    two_characters_icon_name: string;
  }[];
  target_tag_path: string;
  theme: {
    default_color: string;
    header_style: number;
    hongbao_style: number;
    price_color: string;
    third_tab_name: string;
    vanish_fields: any[];
  };
  type: number;
  weight: {
    basic: number;
    maximum: number;
    unit: number;
    unit_fee: number;
  };
};
