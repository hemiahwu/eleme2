export type RestaurantType = {
  restaurant: {
    activities: Activities[];
    delivery_mode?: DeliveryMode;
    flavors: Flavors[];
    opening_hours: string[];
    piecewise_agent_fee: PiecewiseAgentFee;
    posters: any[];
    recommend: Recommend;
    recommend_reasons: RecommendReasons[];
    support_tags: SupportTags[];
    supports: Supports[];
    theme: Theme[];
    tags: any[];

    act_tag: number;
    address: string;
    authentic_id: number;
    business_info: string;
    delivery_fee_discount: number;
    description: string;
    distance: number;
    favored: boolean;
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
    order_lead_time: number;
    out_of_range: boolean;
    phone: string;
    platform: number;
    promotion_info: string;
    rating: number;
    rating_count: number;
    recent_order_num: number;
    regular_customer_count: number;
    scheme: string;
    status: number;
    type: number;
  };
};

type Activities = {
  attribute: string;
  description: string;
  icon_color: string;
  icon_name: string;
  id: number;
  is_exclusive_with_food_activity: string;
  name: string;
  tips: string;
  type: string;
};

type Flavors = {
  id: number;
  name: string;
};

type PiecewiseAgentFee = {
  description: string;
  extra_fee: number;
  is_extra: boolean;
  no_subsidy_fee: string;
  rules: PieceRules[];
  tips: string;
};

type PieceRules = {
  fee: number;
  price: number;
};

type Recommend = {
  image_hash: string;
  is_ad: boolean;
  track: string;
};

type RecommendReasons = {
  name: string;
};

type SupportTags = {
  border: string;
  color: string;
  icon: string;
  text: string;
  type: number;
};

type Supports = {
  border: string;
  description: string;
  icon_color: string;
  icon_name: string;
  id: number;
  name: string;
  text_color: string;
  two_characters_icon_name: string;
};

type Theme = {
  default_color: string;
  header_style: number;
  hongbao_style: number;
  price_color: string;
  third_tab_name: string;
  vanish_fields: any[];
};

type DeliveryMode = {
  border: string;
  color: string;
  icon_hash: string;
  id: number;
  is_solid: boolean;
  text: string;
  text_color: string;
  gradient: Gradient;
};

type Gradient = {
  rgb_from: string;
  rgb_to: string;
};
