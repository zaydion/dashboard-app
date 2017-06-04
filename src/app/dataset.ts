import { Field } from './field';

export class DataSet {
  id: string;
  name: string;
  fields: Field;
  measures: string[];
  dimensions: string[];
}
