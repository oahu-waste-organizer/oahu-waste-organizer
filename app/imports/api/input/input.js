import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Input = new Mongo.Collection('Input');

/** Create a schema to constrain the structure of documents associated with this collection. */
const Item = new SimpleSchema({
  name: String,
  weight: Number,
  volume: Number
}, { tracker: Tracker });

const InputSchema = new SimpleSchema({
  bagTare: Number,
  category: String,
  items: [Item],
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Input.attachSchema(InputSchema);

/** Make the collection and schema available to other code. */
export { Input, InputSchema };
