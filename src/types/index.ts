export interface Categories {
  image: string;
  name: string;
}

// 类型
export interface Cities {
  [_: string]: Array<City>;
}

export interface City {
  abbr: string;
  area_code: string;
  id: number;
  is_map: boolean;
  latitude: number;
  longitude: number;
  name: string;
  pinyin: string;
  sort: number;
}

export interface TabbarData {
  title: string;
  icon: string;
  path: string;
}

export interface AreaList {
  adcode: string;
  address: Array<string>;
  city: Array<string>;
  district: string;
  id: string;
  location: string;
  name: string;
}

export interface NavTab {
  name: string;
  icon?: string;
  condition?: string;
}

interface Data {
  code: string;
  icon?: any;
  name: string;
  select: boolean;
}

export interface ScreenBy {
  data: Data;
  id: string;
  title: string;
}

export interface SortBy {
  check: boolean;
  code: string;
  name: string;
}
