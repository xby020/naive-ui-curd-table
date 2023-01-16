import type { DataTableColumn, SelectOption, TreeSelectOption } from 'naive-ui';
import type { VNode } from 'vue';

export type CurdTableRawData = Record<string, any>;

/**
 * 字段类型
 *
 * @type {TableFormType}
 */
export type TableFormType =
  | 'text'
  | 'number'
  | 'select'
  | 'multSelect'
  | 'date'
  | 'time'
  | 'custom';

export type CurdTableBaseItem<T> = {
  /**
   * 字段类型
   *
   * @type {TableFormType}
   * @memberof CurdTableBaseItem
   */
  type?: TableFormType;
  /**
   * 字段key,需要与数据源中的key一致
   *
   * @type {string}
   */
  key: string | keyof T;
};

export type CurdTableColumnItem<T> = {
  /**
   * 用于设定字段是否在表格列显示
   *
   * @type {true}
   */
  show: true;
  /**
   * 字段作为表格列时的设置，参考 [Naive UI 官方文档](https://www.naiveui.com/zh-CN/os-theme/components/data-table#DataTableColumn-Properties)
   *
   * @type {DataTableColumn<T>}
   */
  column: DataTableColumn<T>;
} & CurdTableBaseItem<T>;

export type CurdTableQueryItem<T> = {
  /**
   * 用于设定字段是否在查询表单中显示
   *
   * @type {boolean}
   */
  query: boolean;
  /**
   * 字段查询表单中的label
   *
   * @type {string}
   */
  queryLable: string;
  type: TableFormType;
  queryRender?: (model: CurdTableRawData) => VNode;
  queryOptions?: SelectOption[] | TreeSelectOption[];
} & CurdTableBaseItem<T>;

export type CurdTableItem<T> = CurdTableBaseItem<T> &
  (CurdTableColumnItem<T> | { show?: false }) &
  (CurdTableQueryItem<T> | { query?: false });
